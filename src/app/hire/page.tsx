import type { Metadata } from "next";
import { HireForm } from "@/components/forms/HireForm";
import { TrustRow } from "@/components/blocks";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Eyebrow, CheckItem } from "@/components/ui";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hire a VA",
  description:
    "Submit a hiring request and meet a vetted virtual assistant within 72 hours. Free to submit, no card required, 2-week risk-free trial.",
};

export default function HirePage() {
  const proof = testimonials[0];
  return (
    <section className="container-hub py-14 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Left: reassurance + proof */}
        <div className="lg:pt-4">
          <Eyebrow tone="brand">Hire talent</Eyebrow>
          <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
            Meet your match in 72 hours.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-body">
            Tell us the role in two minutes. We'll shortlist one vetted candidate for you to
            interview — no job posts, no résumé piles.
          </p>

          <ul className="mt-8 space-y-3">
            <CheckItem>One pre-vetted, pre-matched candidate</CheckItem>
            <CheckItem>Interview and start within the week</CheckItem>
            <CheckItem>2-week risk-free trial &amp; free replacements</CheckItem>
            <CheckItem>We handle contracts, billing &amp; support</CheckItem>
          </ul>

          <div className="mt-8">
            <TrustRow />
          </div>

          {site.onboardingSlotsLeft != null && (
            <p className="mt-6 inline-flex rounded-full bg-talent-50 px-4 py-2 text-sm font-semibold text-talent-700">
              Only {site.onboardingSlotsLeft} onboarding slots left this month
            </p>
          )}

          {proof && (
            <div className="mt-8 hidden max-w-sm lg:block">
              <TestimonialCard t={proof} />
            </div>
          )}
        </div>

        {/* Right: the form */}
        <div className="lg:pt-2">
          <HireForm />
        </div>
      </div>
    </section>
  );
}
