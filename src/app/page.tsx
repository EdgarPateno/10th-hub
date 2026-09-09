import { ButtonLink } from "@/components/Button";
import { NodeField } from "@/components/NodeField";
import { HubGraphic } from "@/components/HubGraphic";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTASection } from "@/components/CTASection";
import { StatBand, TrustRow, StepList } from "@/components/blocks";
import { SectionHeading, Badge } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { Icon } from "@/components/Icons";
import { services, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/*
        Interactive particle network across the whole homepage. Fixed,
        aria-hidden, `pointer-events: none`, and painted in the same
        z-index:-1 plane as the ambient field — so it sits behind every
        section below without affecting layout or hit-testing.
      */}
      <NodeField />

      {/* ---------------- Hero (signature) ----------------
          No opaque background: the hero sits directly on the ambient blue
          field. One orchestrated entrance, cascading down the left column. */}
      <section className="relative overflow-hidden border-b border-white/[0.07]">
        <div className="container-hub grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <Reveal>
              <Badge tone="verified">2,400+ vetted VAs placed with businesses</Badge>
            </Reveal>
            <Reveal delay={0.07}>
              <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-[3.4rem]">
                Hire a vetted VA in{" "}
                <span className="text-brand">72 hours.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-body">
                10th HUB is a managed marketplace for growing businesses. Tell us the
                role, meet one pre-vetted virtual assistant, and have them working in
                your tools the same week — no job posts, no résumé piles.
              </p>
            </Reveal>

            {/* One primary conversion, one low-commitment path. */}
            <Reveal delay={0.21}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/hire" variant="brand" size="lg" withArrow>
                  Hire Talent
                </ButtonLink>
                <ButtonLink href="/how-it-works" variant="outline" size="lg">
                  See how it works
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-4 text-sm text-slate-muted">
                {site.onboardingSlotsLeft != null
                  ? `Only ${site.onboardingSlotsLeft} onboarding slots left this month · Free to submit, no card required`
                  : "Free to submit, no card required"}
              </p>
            </Reveal>

            <Reveal delay={0.35} className="mt-7">
              <TrustRow />
            </Reveal>
          </div>

          {/* Signature hub graphic */}
          <Reveal delay={0.16} className="relative">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(125,176,255,0.14),transparent_65%)]" />
            <HubGraphic className="mx-auto w-full max-w-lg" />
            <div className="mx-auto mt-2 flex max-w-lg items-center justify-between px-4 text-xs font-semibold uppercase tracking-wider">
              <span className="text-brand">Businesses</span>
              <span className="text-slate-muted">matched through</span>
              <span className="text-talent-700">Virtual assistants</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Value prop ---------------- */}
      <section className="container-hub py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why 10th HUB"
            title="Not a job board. A managed match."
            intro="Generic freelance platforms hand you a search box and wish you luck. We vet the talent, make the match, and stay in the loop — so you can just get to work."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
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
              title: "Supported after the match",
              body: "A dedicated success manager backs every placement — check-ins, free replacements, and help when your needs change.",
            },
          ].map((f) => (
            <StaggerItem key={f.title}>
              <div className="glass h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-action text-white">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-slate-body">{f.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------------- Services grid ---------------- */}
      <section className="band border-y border-line">
        <div className="container-hub py-16 sm:py-20">
          <Reveal as="div" className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Roles we fill"
              title="Specialists for the work that slows you down"
              intro="From frontline support to your books, match with a VA who already knows the tools."
            />
            <ButtonLink href="/services" variant="outline" size="sm" withArrow>
              All services
            </ButtonLink>
          </Reveal>
          {/* 9 services: 3x3 at lg. `lg:grid-cols-4` would strand one card alone
              on a third row now that Executive Assistant is in the set. */}
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- How it works snapshot ----------------
          Heading + actions on the left, the numbered flow on the right, so the
          single client journey fills the row deliberately. */}
      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Hiring, without the hiring"
              intro="Four steps from “we need help” to someone doing the work. We source, vet, and handle the paperwork; you interview one candidate and say yes."
              tone="brand"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/hire" variant="brand" withArrow>
                Hire Talent
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="outline">
                See the full process
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <StepList
              tone="brand"
              steps={[
                { title: "Tell us the role", body: "Share the tasks, weekly hours, and tools in a 2-minute request." },
                { title: "We source & vet", body: "We shortlist one vetted VA from our talent pool — or recruit for niche roles." },
                { title: "Meet your match", body: "Interview your candidate within 72 hours. No résumé pile to sort." },
                { title: "Start in days", body: "They plug into your tools. We handle contracts, billing, and support." },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Trust / stats ---------------- */}
      <section className="band border-y border-line">
        <div className="container-hub py-16">
          <Reveal>
            <StatBand />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="container-hub py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Proof"
            title="Businesses that stopped doing it all themselves"
            intro="Placeholder testimonials for this demo — real, attributed quotes would live here."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard t={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ---------------- Final CTA ---------------- */}
      <CTASection
        title="Ready to make your match?"
        body="Tell us what you need help with. Submitting a hiring request takes about two minutes."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
        microcopy={
          site.onboardingSlotsLeft != null
            ? `Only ${site.onboardingSlotsLeft} onboarding slots left this month · No card required`
            : "No card required"
        }
      />
    </>
  );
}
