import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/ui";
import { ButtonLink } from "@/components/Button";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case studies & success stories",
  description:
    "See how businesses grew with vetted VAs from 10th HUB — measurable outcomes in customer service, Amazon, bookkeeping, and executive support.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Success stories"
        title="Real roles, measurable outcomes."
        intro="A look at how businesses put 10th HUB VAs to work — and what changed as a result. Figures are illustrative placeholders for this demo."
      />

      <section className="container-hub space-y-8 py-16 sm:py-20">
        {caseStudies.map((cs, i) => (
          <article
            key={cs.slug}
            className="overflow-hidden rounded-3xl border border-line bg-white shadow-card"
          >
            <div className="grid lg:grid-cols-[1.3fr_1fr]">
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="brand">{cs.service}</Badge>
                  <Badge>{cs.industry}</Badge>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">{cs.headline}</h2>
                <div className="mt-6 space-y-4 text-slate-body">
                  <p>
                    <span className="font-semibold text-ink">Challenge. </span>
                    {cs.challenge}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">Approach. </span>
                    {cs.approach}
                  </p>
                </div>
                <blockquote className="mt-6 border-l-2 border-brand pl-4 text-ink">
                  “{cs.quote}”
                  <footer className="mt-2 text-sm text-slate-muted">— {cs.person}, {cs.client}</footer>
                </blockquote>
              </div>

              <div className="flex flex-col justify-center gap-4 border-t border-line bg-navy p-8 sm:p-10 lg:border-l lg:border-t-0">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="tnum text-4xl font-extrabold text-white">{m.value}</div>
                    <div className="mt-1 text-sm text-brand-100/80">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <CTASection
        title="Write your own success story"
        body="Tell us the role you need and we'll match you with a vetted VA to make it happen."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "See services", href: "/services" }}
      />
    </>
  );
}
