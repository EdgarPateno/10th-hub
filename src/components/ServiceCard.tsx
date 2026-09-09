import Link from "next/link";
import type { Service } from "@/lib/content";
import { ServiceIcon, Icon } from "./Icons";

// Hover is deliberately 100% CSS: this grid renders 9 cards, and a JS
// motion wrapper per card would cost more than the effect is worth.
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group glass relative flex h-full cursor-pointer flex-col overflow-hidden p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-brand/25 hover:shadow-cardHover focus-visible:-translate-y-1"
    >
      {/* Brand sheen washes down from the top edge on hover. Opacity-only. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-brand/[0.09] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-action group-hover:text-white">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="relative mt-4 text-lg font-bold text-ink">{service.name}</h3>
      <p className="relative mt-2 flex-1 text-[15px] leading-relaxed text-slate-body">
        {service.short}
      </p>
      <span className="relative mt-4 flex items-center justify-between border-t border-line pt-4 text-sm">
        <span className="text-slate-muted">
          from <span className="tnum font-semibold text-ink">{service.startingRate}</span>
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-brand">
          Details
          <Icon.arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}
