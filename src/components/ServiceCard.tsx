import Link from "next/link";
import type { Service } from "@/lib/content";
import { ServiceIcon, Icon } from "./Icons";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card flex flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cardHover focus-visible:-translate-y-0.5"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <ServiceIcon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-body">
        {service.short}
      </p>
      <span className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm">
        <span className="text-slate-muted">
          from <span className="tnum font-semibold text-ink">{service.startingRate}</span>
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-brand">
          Details
          <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </span>
    </Link>
  );
}
