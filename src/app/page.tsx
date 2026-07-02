import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { HubGraphic } from "@/components/HubGraphic";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { StatBand, TrustRow, StepList } from "@/components/blocks";
import { SectionHeading, Badge } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { services, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ---------------- Dual-path hero (signature) ---------------- */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="container-hub grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="animate-fade-up">
            <Badge tone="verified">Trusted by 2,400+ businesses & VAs</Badge>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
              One hub. <span className="text-brand">Two</span> ways to{" "}
              <span className="text-talent">win.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-body">
              10th HUB connects growing businesses with vetted virtual assistants —
              and connects skilled VAs with legitimate, well-paid remote work. Pick
              your path.
            </p>

            {/* Two clearly separated, audience-colored paths */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5">
                <div className="flex items-center gap-2 text-brand">
                  <Icon.users className="h-5 w-5" />
                  <span className="font-display text-sm font-bold uppercase tracking-wider">
                    I'm hiring
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-body">
                  Get matched with a vetted VA in 72 hours.
                </p>
                <ButtonLink href="/hire" variant="brand" className="mt-4 w-full" withArrow>
                  Hire Talent
                </ButtonLink>
              </div>

              <div className="rounded-2xl border border-talent-100 bg-talent-50/60 p-5">
                <div className="flex items-center gap-2 text-talent-700">
                  <Icon.spark className="h-5 w-5" />
                  <span className="font-display text-sm font-bold uppercase tracking-wider">
                    I want work
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-body">
                  Join and get matched to steady, remote clients.
                </p>
                <ButtonLink href="/apply" variant="talent" className="mt-4 w-full" withArrow>
                  Find Work
                </ButtonLink>
              </div>
            </div>

            <div className="mt-7">
              <TrustRow />
            </div>
          </div>

          {/* Signature hub graphic */}
          <div className="relative animate-fade-up">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(37,87,230,0.10),transparent_65%)]" />
            <HubGraphic className="mx-auto w-full max-w-lg" />
            <div className="mx-auto mt-2 flex max-w-lg items-center justify-between px-4 text-xs font-semibold uppercase tracking-wider">
              <span className="text-brand">Businesses</span>
              <span className="text-slate-muted">matched through</span>
              <span className="text-talent-700">Virtual assistants</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Value prop ---------------- */}
      <section className="container-hub py-16 sm:py-20">
        <SectionHeading
          align="center"
          eyebrow="Why 10th HUB"
          title="Not a job board. A managed match."
          intro="Generic freelance platforms hand you a search box and wish you luck. We vet the talent, make the match, and stay in the loop — so both sides can just get to work."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Icon.shield,
              title: "Vetted, not crowdsourced",
              body: "Every VA passes a skills assessment, live interview, and reference check before they reach you.",
            },
            {
              icon: Icon.clock,
              title: "Matched in 72 hours",
              body: "Skip the endless scrolling. Tell us the role and get one shortlisted candidate, fast.",
            },
            {
              icon: Icon.users,
              title: "Supported both ways",
              body: "A dedicated success manager backs every placement — for the business and the VA.",
            },
          ].map((f) => (
            <div key={f.title} className="card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-slate-body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- Services grid ---------------- */}
      <section className="border-y border-line bg-white">
        <div className="container-hub py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Roles we fill"
              title="Specialists for the work that slows you down"
              intro="From frontline support to your books, match with a VA who already knows the tools."
            />
            <ButtonLink href="/services" variant="outline" size="sm" withArrow>
              All services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- How it works snapshot ---------------- */}
      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="For employers"
              title="Hiring, without the hiring"
              tone="brand"
            />
            <div className="mt-8">
              <StepList
                tone="brand"
                steps={[
                  { title: "Tell us the role", body: "Share the tasks and hours in a 2-minute request." },
                  { title: "Meet your match", body: "We shortlist one vetted VA and you interview them." },
                  { title: "Start in days", body: "They plug into your tools. We handle billing and support." },
                ]}
              />
            </div>
            <ButtonLink href="/for-employers" variant="brand" className="mt-8" withArrow>
              For employers
            </ButtonLink>
          </div>

          <div>
            <SectionHeading eyebrow="For VAs" title="Find work worth keeping" tone="talent" />
            <div className="mt-8">
              <StepList
                tone="talent"
                steps={[
                  { title: "Apply & get vetted", body: "Build a profile and pass a skills assessment — free, always." },
                  { title: "Get matched", body: "We connect you with businesses that fit your skills and hours." },
                  { title: "Grow with support", body: "Steady clients, on-time pay, and a team that has your back." },
                ]}
              />
            </div>
            <ButtonLink href="/for-vas" variant="talent" className="mt-8" withArrow>
              For VAs
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ---------------- Trust / stats ---------------- */}
      <section className="border-y border-line bg-white">
        <div className="container-hub py-16">
          <StatBand />
        </div>
      </section>

      {/* ---------------- Testimonials (both audiences) ---------------- */}
      <section className="container-hub py-16 sm:py-20">
        <SectionHeading
          align="center"
          eyebrow="Proof, both sides"
          title="Businesses and VAs, both better off"
          intro="Placeholder testimonials for this demo — real, attributed quotes would live here."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <CTASection
        title="Ready to make your match?"
        body="Whether you're hiring or looking for work, your next step takes two minutes."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Find Work", href: "/apply" }}
        microcopy={
          site.onboardingSlotsLeft != null
            ? `Only ${site.onboardingSlotsLeft} onboarding slots left this month · No card required`
            : "No card required"
        }
      />
    </>
  );
}
