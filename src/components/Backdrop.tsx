/**
 * Backdrop — the ambient blue field behind every page.
 *
 * Server component on purpose: this is 100% CSS (see `.hub-field*` in
 * globals.css), ships zero JavaScript, and therefore cannot block or delay
 * hydration. It is `position: fixed; inset: 0; z-index: -1`, `pointer-events:
 * none` and `aria-hidden`, so it never intercepts a click and never appears in
 * the accessibility tree.
 *
 * Motion is limited to `transform` and `opacity` on four oversized radial
 * blooms, on 44–71s loops, so the whole layer stays GPU-composited and costs
 * nothing during scroll. The parent clips overflow, so a drifting bloom can
 * never widen the document or produce a horizontal scrollbar.
 *
 * With `prefers-reduced-motion: reduce`, the global rule in globals.css
 * collapses the animations and every layer falls back to the resting
 * transform/opacity declared in its base rule — a still, composed gradient.
 */
export function Backdrop() {
  return (
    <div className="hub-field" aria-hidden="true" role="presentation">
      <div className="hub-field__bloom hub-field__bloom--a" />
      <div className="hub-field__bloom hub-field__bloom--b" />
      <div className="hub-field__bloom hub-field__bloom--c" />
      <div className="hub-field__bloom hub-field__bloom--coral" />
      <div className="hub-field__grid" />
      <div className="hub-field__grain" />
      <div className="hub-field__wash" />
    </div>
  );
}

export default Backdrop;
