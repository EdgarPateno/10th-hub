"use client";

/**
 * Motion primitives for 10th HUB, built on `motion/react` (v13).
 *
 * SSR / static-export contract
 * ---------------------------
 * Every primitive server-renders its real children. Motion writes the
 * `initial` state as an inline style during SSR, so as a no-JS safety net
 * each animated wrapper carries `data-reveal`; layout.tsx ships a <noscript>
 * rule that forces `opacity:1; transform:none` on `[data-reveal]`. Content is
 * therefore readable even if the bundle never executes.
 *
 * `CountUp` goes further: the true, unmodified `value` is always present in
 * the exported HTML (in a visually-hidden span that is also what screen
 * readers announce), and the visible span starts at the real value too — it
 * only drops to zero once the client has confirmed the user has NOT asked for
 * reduced motion.
 */

import * as React from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  MotionConfig,
  animate,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react";

/* Layout effects must not run (or warn) during static export. */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

const TAGS = {
  div: m.div,
  section: m.section,
  li: m.li,
  span: m.span,
  ul: m.ul,
} as const;

type AnyMotion = typeof m.div;

const EASE_OUT = { duration: 0.5, ease: "easeOut" } as const;
const SPRING = { type: "spring", stiffness: 300, damping: 30 } as const;

/* ------------------------------------------------------------------ */
/* MotionProvider                                                      */
/* ------------------------------------------------------------------ */

/**
 * Wraps the app in `<MotionConfig reducedMotion="user">`.
 * Lives here because `motion/react` (framer-motion) carries no "use client"
 * directive of its own, so it cannot be imported straight into the server
 * layout. Children are passed through untouched and still render on the
 * server — this adds a client boundary, not a client tree.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {/*
       * `domAnimation` = animations + exit + inView + hover + tap + focus,
       * which is everything this site uses. It deliberately excludes `drag`
       * and `layout`, the two heaviest features, which we never use. Paired
       * with `m` (instead of `motion`) this keeps the full feature bundle out
       * of the shared chunk. `strict` makes any stray `motion.*` throw rather
       * than silently pulling the whole bundle back in.
       */}
      <LazyMotion features={domAnimation} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal                                                              */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduced = useReducedMotion();
  const C = TAGS[as] as AnyMotion;

  return (
    <C
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ...EASE_OUT, delay }}
    >
      {children}
    </C>
  );
}

/* ------------------------------------------------------------------ */
/* Stagger / StaggerItem                                               */
/* ------------------------------------------------------------------ */

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: EASE_OUT },
};

export function Stagger({
  children,
  className,
  delay = 0.1,
  each = 0.08,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  each?: number;
  as?: "div" | "ul" | "section";
}) {
  const C = TAGS[as] as AnyMotion;

  const container: Variants = {
    hidden: {},
    show: {
      transition: { delayChildren: delay, staggerChildren: each },
    },
  };

  return (
    <C
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </C>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const C = TAGS[as] as AnyMotion;

  return (
    <C data-reveal="" className={className} variants={itemVariants}>
      {children}
    </C>
  );
}

/* ------------------------------------------------------------------ */
/* HoverLift                                                           */
/* ------------------------------------------------------------------ */

export function HoverLift({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <m.div
      className={className}
      whileHover={reduced ? undefined : { y: -4, scale: 1.012 }}
      whileTap={reduced ? undefined : { scale: 0.994 }}
      transition={SPRING}
    >
      {children}
    </m.div>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp                                                             */
/* ------------------------------------------------------------------ */

type Parsed = {
  prefix: string;
  numStr: string;
  suffix: string;
  target: number;
  decimals: number;
  grouped: boolean;
};

/**
 * Splits "2,400+" -> { prefix: "", numStr: "2,400", suffix: "+" },
 *        "72 hrs" -> { prefix: "", numStr: "72",    suffix: " hrs" },
 *        "$1,200/mo" -> { prefix: "$", numStr: "1,200", suffix: "/mo" }.
 * Spaces are deliberately excluded from the number so the separator survives.
 * Returns null for values with no leading-ish number ("Same day") — those are
 * rendered verbatim and never animated.
 */
function parseValue(value: string): Parsed | null {
  const m = /^(\D*?)(\d[\d,]*(?:\.\d+)?)([\s\S]*)$/.exec(value);
  if (!m) return null;

  const [, prefix, numStr, suffix] = m;
  const target = Number(numStr.replace(/,/g, ""));
  if (!Number.isFinite(target)) return null;

  const dot = numStr.indexOf(".");
  return {
    prefix,
    numStr,
    suffix,
    target,
    decimals: dot === -1 ? 0 : numStr.length - dot - 1,
    grouped: numStr.includes(","),
  };
}

export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const parsed = React.useMemo(() => parseValue(value), [value]);
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();

  // Seeded with the REAL value, so the static export contains it.
  const [display, setDisplay] = React.useState(() => parsed?.numStr ?? value);

  const format = React.useCallback(
    (n: number) => {
      if (!parsed) return value;
      return n.toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
        useGrouping: parsed.grouped,
      });
    },
    [parsed, value],
  );

  // Drop to zero before the first paint — but only once the client has
  // positively confirmed motion is allowed (`reduced === false`, never the
  // transient `null`). This is what keeps reduced-motion users from ever
  // seeing a stuck "0".
  const zeroed = React.useRef(false);
  useIsoLayoutEffect(() => {
    if (!parsed || reduced !== false || zeroed.current) return;
    zeroed.current = true;
    setDisplay(format(0));
  }, [parsed, reduced, format]);

  // Belt and braces: if reduced motion resolves late (or is toggled on),
  // snap straight back to the final value.
  React.useEffect(() => {
    if (reduced && parsed) setDisplay(parsed.numStr);
  }, [reduced, parsed]);

  React.useEffect(() => {
    if (!parsed || reduced !== false || !inView) return;
    const controls = animate(0, parsed.target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(format(v)),
      // Restore the source string verbatim so formatting is byte-identical.
      onComplete: () => setDisplay(parsed.numStr),
    });
    return () => controls.stop();
  }, [inView, parsed, reduced, format]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">
        {parsed.prefix}
        {display}
        {parsed.suffix}
      </span>
      {/* Always the true value: for screen readers and for no-JS readers. */}
      <span className="sr-only">{value}</span>
    </span>
  );
}
