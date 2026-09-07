import { pricingTiers } from "@/lib/content";
import { ButtonLink } from "./Button";
import { Icon } from "./Icons";
import { Badge } from "./ui";

export function PricingTable() {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier) => (
        <div
          key={tier.name}
          className={
            tier.featured
              ? "glass relative rounded-3xl border-2 border-brand p-7 shadow-cardHover lg:-mt-3 lg:mb-3"
              : "glass relative rounded-3xl p-7"
          }
        >
          {tier.featured && (
            <div className="absolute -top-3 left-7">
              <Badge tone="brand">Most popular</Badge>
            </div>
          )}
          <h3 className="font-display text-xl font-bold text-ink">{tier.name}</h3>
          <p className="mt-1 text-sm text-slate-muted">{tier.tagline}</p>
          <div className="mt-5 flex items-baseline gap-1.5">
            <span className="tnum text-4xl font-extrabold text-ink">{tier.price}</span>
            <span className="text-sm text-slate-muted">{tier.unit}</span>
          </div>
          <p className="mt-3 text-sm text-slate-body">
            <span className="font-semibold text-ink">Best for:</span> {tier.bestFor}
          </p>
          <div className="my-6 h-px bg-line" />
          <ul className="space-y-3 text-sm">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <Icon.check className="mt-0.5 h-4 w-4 shrink-0 text-verified" />
                <span className="text-slate-body">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <ButtonLink
              href={tier.name === "Team" ? "/contact" : "/hire"}
              variant={tier.featured ? "brand" : "outline"}
              className="w-full"
              withArrow
            >
              {tier.cta}
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
}
