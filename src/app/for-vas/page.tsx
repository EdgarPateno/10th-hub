import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ButtonLink } from "@/components/Button";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { StepList } from "@/components/blocks";
import { SectionHeading, CheckItem } from "@/components/ui";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ServiceIcon } from "@/components/Icons";
import { services, testimonialsFor, vaFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Find legitimate remote work as a VA",
  description:
    "Join 10th HUB and get matched with vetted businesses for steady, well-paid remote work. Free to apply, real support, and clients who value your work.",
};

export default function ForVAsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For virtual assistants"
        tone="talent"
        title="Find remote work worth keeping."
        intro="Stop chasing one-off gigs and race-to-the-bottom rates. Get vetted once, then matched with businesses that value your skills — with steady hours, on-time pay, and real support behind you."
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink href="/apply" variant="talent" size="lg" withArrow>
            Apply as a VA
          </ButtonLink>
          <ButtonLink href="/how-it-works" variant="outline" size="lg">
            How applying works
          </ButtonLink>
        </div>
        <p className="mt-5 text-sm font-medium text-talent-700">
          Always free for VAs — we're paid by the businesses that hire.
        </p>
      </PageHeader>

      {/* Value prop */}
      <section className="container-hub py-16 sm:py-20">
        <SectionHeading
          align="center"
          tone="talent"
          eyebrow="Why apply here"
          title="Built for VAs, not just clients"
          intro="A platform that treats you like talent worth keeping — because our business depends on it."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { title: "Steady, long-term clients", body: "We match you to ongoing roles, not disposable tasks. Build a real working relationship." },
            { title: "Fair, transparent pay", body: "You know the rate range before you interview. No surprise fees taken from your earnings." },
            { title: "Real vetting = real respect", body: "Because you're vetted, clients trust you from day one. Less proving, more doing." },
            { title: "Support that stays", body: "A success manager, a VA community, and help resolving anything with a client." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-talent-100 bg-talent-50/40 p-7">
              <h3 className="text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-slate-body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How applying works */}
      <section className="band border-y border-azure-200">
        <div className="container-hub py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              tone="talent"
              eyebrow="How applying works"
              title="From application to your first client"
              intro="No fees, no gimmicks — just a clear path to steady work."
            />
            <StepList
              tone="talent"
              steps={[
                { title: "Apply in minutes", body: "Create a profile and pick your main skill category. It's free." },
                { title: "Get vetted", body: "Complete a short skills assessment and a live interview." },
                { title: "Get matched", body: "We connect you with businesses that fit your skills and availability." },
                { title: "Start earning", body: "Begin working with support, on-time pay, and room to grow." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Categories of roles */}
      <section className="container-hub py-16 sm:py-20">
        <SectionHeading
          tone="talent"
          eyebrow="Roles we place"
          title="Where your skills fit"
          intro="These are the categories businesses hire for most. Have something else? Choose 'Other' when you apply."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="card flex items-center gap-3 p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-talent-50 text-talent-700">
                <ServiceIcon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-ink">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials from VAs */}
      <section className="band border-t border-azure-200">
        <div className="container-hub py-16 sm:py-20">
          <SectionHeading align="center" tone="talent" eyebrow="From our VAs" title="Real work, real support" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonialsFor("va").map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading tone="talent" eyebrow="Your questions" title="What VAs want to know" />
          <FAQAccordion items={vaFaqs} />
        </div>
      </section>

      <CTASection
        tone="talent"
        eyebrow="For VAs"
        title="Your next client is looking for you."
        body="Apply once, get vetted, and start matching with businesses that value your work."
        primary={{ label: "Apply as a VA", href: "/apply" }}
        secondary={{ label: "Read the FAQ", href: "/faq" }}
        microcopy="Free to apply · No fees ever · Real support after you're placed"
      />
    </>
  );
}
