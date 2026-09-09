"use client";

import { useEffect, useRef } from "react";

/**
 * NodeField — the interactive particle network behind the homepage.
 *
 * A field of nodes drifts slowly across the viewport; any two within
 * `LINK_DIST` are joined by a hairline whose opacity falls off with distance,
 * so the mesh continuously forms and dissolves. The pointer pushes nodes away
 * inside `INFLUENCE`, and they ease back to their drift once it leaves.
 *
 * Rendered on a 2D canvas rather than WebGL: at the node counts that actually
 * look good behind body copy (60-140) the pair loop is a few thousand cheap
 * iterations a frame, and 2D avoids shipping a shader pipeline plus a context-
 * loss recovery path for a decorative background.
 *
 * Placement: `.node-field` (globals.css) is `position: fixed; z-index: -1;
 * pointer-events: none`, i.e. the same plane as the ambient field and
 * immediately above it in DOM order. It therefore paints behind every piece
 * of page content and can never intercept a click. The pointer is tracked via
 * window listeners for exactly that reason — the canvas itself is inert.
 *
 * Cost control:
 *   - node count scales with viewport area and is capped hard on small screens
 *   - devicePixelRatio is clamped to 2 (a 3x phone would trile the fill cost
 *     for no visible gain)
 *   - the rAF loop stops entirely when the tab is hidden
 *   - `prefers-reduced-motion` paints ONE static frame and never starts a loop
 */

/** Max distance between two nodes for a line to be drawn, in CSS px. */
const LINK_DIST = 148;
/** Radius around the pointer that pushes nodes, in CSS px. */
const INFLUENCE = 170;
/** How hard the pointer pushes. */
const REPEL = 0.9;
/** How fast a displaced node eases back onto its drift. Higher = snappier. */
const RETURN = 0.035;
/** One node per this many px^2 of viewport. */
const AREA_PER_NODE = 15000;

type Node = {
  x: number;
  y: number;
  /** current velocity, px per 16.67ms */
  vx: number;
  vy: number;
  /** the node's permanent slow drift; velocity always eases back to this */
  bvx: number;
  bvy: number;
  r: number;
};

export function NodeField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let nodes: Node[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let resizeTimer: number | undefined;

    // Pointer lives outside the viewport until it actually moves, so nothing
    // is pushed around before the visitor has touched the page.
    const pointer = { x: -9999, y: -9999, active: false };

    function build() {
      const canvasEl = canvasRef.current;
      if (!canvasEl || !ctx) return;

      w = window.innerWidth;
      h = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasEl.width = Math.round(w * dpr);
      canvasEl.height = Math.round(h * dpr);
      // Draw in CSS pixels; the transform handles the density.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round((w * h) / AREA_PER_NODE);
      // Phones get a hard ceiling: the pair loop is O(n^2) and a 390px-wide
      // screen shows the mesh at a size where more nodes just read as noise.
      const max = w < 640 ? 46 : w < 1024 ? 80 : 140;
      const count = Math.max(24, Math.min(target, max));

      nodes = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.09 + Math.random() * 0.16;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          bvx: Math.cos(angle) * speed,
          bvy: Math.sin(angle) * speed,
          r: 0.9 + Math.random() * 1.5,
        };
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Lines first so the node dots sit on top of their own connections.
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK_DIST * LINK_DIST) continue; // squared compare: no sqrt
          const d = Math.sqrt(d2);
          // Fade the line out as the pair separates, so the mesh dissolves
          // rather than popping when a link crosses the threshold.
          const alpha = (1 - d / LINK_DIST) * 0.38;
          ctx.strokeStyle = `rgba(178, 212, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = "rgba(219, 234, 255, 0.9)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function step() {
      for (const n of nodes) {
        if (pointer.active) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < INFLUENCE * INFLUENCE && d2 > 0.01) {
            const d = Math.sqrt(d2);
            // Linear falloff, strongest at the cursor. Normalising by `d`
            // turns the offset into a direction before scaling by force.
            const force = (1 - d / INFLUENCE) * REPEL;
            n.vx += (dx / d) * force;
            n.vy += (dy / d) * force;
          }
        }

        // Ease back onto the permanent drift. This is what makes the field
        // settle after the pointer leaves instead of accelerating forever.
        n.vx += (n.bvx - n.vx) * RETURN;
        n.vy += (n.bvy - n.vy) * RETURN;

        n.x += n.vx;
        n.y += n.vy;

        // Wrap with a margin so a node fades in from off-screen rather than
        // appearing at the very edge mid-link.
        const m = LINK_DIST;
        if (n.x < -m) n.x = w + m;
        else if (n.x > w + m) n.x = -m;
        if (n.y < -m) n.y = h + m;
        else if (n.y > h + m) n.y = -m;
      }
      draw();
      raf = window.requestAnimationFrame(step);
    }

    function start() {
      if (raf || reduced) return;
      raf = window.requestAnimationFrame(step);
    }
    function stop() {
      if (!raf) return;
      window.cancelAnimationFrame(raf);
      raf = 0;
    }

    function onPointerMove(e: PointerEvent) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    }
    function onPointerLeave() {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0];
      if (!t) return;
      pointer.x = t.clientX;
      pointer.y = t.clientY;
      pointer.active = true;
    }
    function onResize() {
      window.clearTimeout(resizeTimer);
      // Rebuilding allocates a new node array and resizes the backing store,
      // so it is debounced — a drag-resize would otherwise do it every frame.
      resizeTimer = window.setTimeout(() => {
        build();
        draw();
      }, 180);
    }
    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    build();
    draw();
    canvas.dataset.ready = "true";

    if (reduced) {
      // One composed still frame. No loop, no listeners that would move it.
      window.addEventListener("resize", onResize, { passive: true });
      return () => {
        window.clearTimeout(resizeTimer);
        window.removeEventListener("resize", onResize);
      };
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onPointerLeave, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onPointerLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="node-field" aria-hidden="true" />;
}

export default NodeField;
