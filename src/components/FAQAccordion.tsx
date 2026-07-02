import type { FaqItem } from "@/lib/content";
import { Icon } from "./Icons";

// Uses native <details>/<summary>: keyboard-accessible and works without JS.
export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
      {items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-display font-semibold text-ink transition-colors hover:bg-canvas focus-visible:bg-canvas [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <Icon.chevron className="h-5 w-5 shrink-0 text-slate-muted transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <div className="px-5 pb-5 pr-12 text-slate-body">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
