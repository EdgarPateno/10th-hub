import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PricingTable } from "@/components/PricingTable";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { employerFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing & packages",
  description:
    "Simple monthly pricing for hiring a virtual assistant through 10th HUB. No recruiting fees, no long lock-ins, and a 2-week risk-free trial on every plan.",
};

const pricingFaqs = employerFaqs.filter((f) =>
  /pricing|work out|payroll/i.test(f.q)
);

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing. No recruiting fees."
        intro="Pay a flat monthly rate based on the role and hours — that's it. No placement fees, no long lock-in contracts, and a 2-week risk-free trial so you can start with confidence."
      />

      <section className="container-hub py-16 sm:py-20">
        <PricingTable />
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-muted">
          {[
            "No recruiting or placement fees",
            "Cancel anytime after trial",
            "One simple monthly invoice",
          ].map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <Icon.check className="h-4 w-4 text-verified" />
              {t}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] text-slate-muted">
          Illustrative pricing for this demo. Final rates depend on role, skill level, and hours.
        </p>
      </section>

      <section className="band border-t border-azure-200">
        <div className="container-hub py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Pricing questions"
              title="Clear answers before you commit"
            />
            <FAQAccordion items={pricingFaqs.length ? pricingFaqs : employerFaqs.slice(0, 3)} />
          </div>
        </div>
      </section>

      <CTASection
        title="Find the right plan for your team"
        body="Start with a single VA or staff a whole function. Not sure? We'll recommend a fit."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Get a custom quote", href: "/contact" }}
        microcopy="2-week risk-free trial on every plan"
      />
    </>
  );
}
