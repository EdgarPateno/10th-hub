import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { StepList, TrustRow } from "@/components/blocks";
import { SectionHeading, CheckItem } from "@/components/ui";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Icon } from "@/components/Icons";
import { services, testimonials, employerFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hire a vetted virtual assistant",
  description:
    "Skip the hiring headache. Tell 10th HUB the role and get one shortlisted, vetted VA in 72 hours — with a 2-week risk-free trial and no recruiting fees.",
};

export default function ForEmployersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why 10th HUB"
        tone="brand"
        title="Hire a vetted VA in days, not months."
        intro="Tell us the role once. We shortlist one pre-vetted candidate, you interview them, and they start inside your tools — while we handle contracts, billing, and support."
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href="/hire" variant="brand" size="lg" withArrow>
            Hire Talent
          </ButtonLink>
          <ButtonLink href="/how-it-works" variant="outline" size="lg">
            See how it works
          </ButtonLink>
        </div>
        <div className="mt-6">
          <TrustRow />
        </div>
      </PageHeader>

      {/* Pain -> solution */}
      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="glass p-8">
            <h2 className="text-xl font-bold text-ink">The old way drains you</h2>
            <ul className="mt-5 space-y-3">
              {[
                "Job posts that pull 200 unqualified applicants",
                "Weeks of screening, tests, and no-shows",
                "Freelance platforms that are a race to the bottom",
                "Great hires who ghost after two weeks",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-body">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-red-400/15 text-red-300">
                    <Icon.close className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-brand bg-brand-50/40 p-8">
            <h2 className="text-xl font-bold text-ink">The 10th HUB way</h2>
            <ul className="mt-5 space-y-3">
              <CheckItem>One vetted, pre-matched candidate — not a pile of résumés</CheckItem>
              <CheckItem>Interview and start within the same week</CheckItem>
              <CheckItem>Long-term talent who stays, backed by a success manager</CheckItem>
              <CheckItem>2-week risk-free trial and free replacements</CheckItem>
            </ul>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="band border-y border-azure-200">
        <div className="container-hub py-16 sm:py-20">
          <SectionHeading
            eyebrow="Roles we fill"
            title="Pick the role you need filled"
            intro="Every category is staffed by VAs who already know the tools and workflows."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* How hiring works */}
      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="How hiring works"
            title="Four steps from request to results"
            intro="You stay in control of the hire. We remove the busywork around it."
          />
          <StepList
            tone="brand"
            steps={[
              { title: "Submit a hiring request", body: "Two minutes: the role, hours, and tools you use." },
              { title: "Review your match", body: "Within 72 hours you get one shortlisted, vetted candidate to interview." },
              { title: "Onboard together", body: "They join your tools and workflows; we handle contracts and billing." },
              { title: "Scale when ready", body: "Add hours or roles anytime, with a success manager keeping things on track." },
            ]}
          />
        </div>
      </section>

      {/* Testimonials near CTA */}
      <section className="band border-t border-azure-200">
        <div className="container-hub py-16 sm:py-20">
          <SectionHeading align="center" title="What employers say" eyebrow="Social proof" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / objections */}
      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Objections, handled"
            title="The questions employers actually ask"
            intro="Still unsure? Reach out — a real person will answer."
          />
          <FAQAccordion items={employerFaqs} />
        </div>
      </section>

      <CTASection
        title="Tell us the role. We'll bring the match."
        body="Submit a hiring request and meet a vetted candidate within 72 hours."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Compare pricing", href: "/pricing" }}
        microcopy="Free to submit · No recruiting fees · 2-week risk-free trial"
      />
    </>
  );
}
