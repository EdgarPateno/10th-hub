import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { StepList } from "@/components/blocks";
import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { CheckItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How 10th HUB works: submit a hiring request, meet one pre-vetted virtual assistant within 72 hours, and start the same week. We handle vetting, contracts, billing, and support.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From request to first day of work."
        intro="Five steps, about two minutes of effort from you. Here is exactly what happens after you tell us the role."
      />

      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <StepList
            tone="brand"
            steps={[
              { title: "Submit a hiring request", body: "Tell us the role, weekly hours, and the tools you use. Takes about two minutes." },
              { title: "We source & vet", body: "We tap our vetted talent pool (or recruit for niche roles) and shortlist the best fit." },
              { title: "Meet your match", body: "Within 72 hours you interview one pre-vetted candidate — no résumé pile to sort." },
              { title: "Onboard & start", body: "They join your tools and workflows. We handle the contract, billing, and payments." },
              { title: "Grow with support", body: "A success manager checks in, arranges free replacements, and helps you scale hours or add roles." },
            ]}
          />
          <div className="rounded-2xl border border-brand-100 bg-brand-50/40 p-7">
            <h3 className="text-lg font-bold text-ink">What&apos;s included</h3>
            <ul className="mt-4 space-y-3">
              <CheckItem>Vetting, skills tests, and reference checks</CheckItem>
              <CheckItem>72-hour average time to first match</CheckItem>
              <CheckItem>Contracts, billing, and payments handled</CheckItem>
              <CheckItem>2-week risk-free trial &amp; free replacements</CheckItem>
            </ul>
            <ButtonLink href="/hire" variant="brand" className="mt-6 w-full" withArrow>
              Hire Talent
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start step one?"
        body="Submitting a hiring request takes about two minutes — and it's free."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </>
  );
}
