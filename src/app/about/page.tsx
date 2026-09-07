import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { HubGraphic } from "@/components/HubGraphic";
import { CTASection } from "@/components/CTASection";
import { StatBand } from "@/components/blocks";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About 10th HUB",
  description:
    "10th HUB is a managed VA marketplace for growing businesses. We vet the talent, make the match, and stay involved — so you get reliable support and a match that lasts.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We built the hub we wished existed."
        intro="10th HUB started with a simple frustration: hiring a virtual assistant meant sifting through hundreds of cold applicants and hoping one of them worked out. Businesses deserved better than a search box. So we built a managed marketplace that vets the talent, makes the match, and stays involved long after day one."
      />

      {/* Mission */}
      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title="Make great remote work relationships the default"
              intro="We measure success by matches that last — not sign-ups. We only win when you keep your VA, so we vet carefully, price fairly, and pay the talent well enough that they stay. Your match sticking around is the whole business model."
            />
          </div>
          <div className="glass rounded-3xl p-8">
            <HubGraphic className="mx-auto w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Why us vs generic platforms */}
      <section className="band border-y border-azure-200">
        <div className="container-hub py-16 sm:py-20">
          <SectionHeading
            align="center"
            eyebrow="Why we're different"
            title="Not a freelance marketplace. A managed match."
          />
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-line">
            <div className="grid grid-cols-2 bg-navy text-sm font-semibold text-white">
              <div className="px-5 py-3">Generic freelance platforms</div>
              <div className="bg-brand px-5 py-3">10th HUB</div>
            </div>
            {[
              ["You search hundreds of profiles", "We shortlist one vetted match"],
              ["Anyone can sign up", "Every VA is assessed & interviewed"],
              ["You're on your own after hiring", "A success manager backs every match"],
              ["Rates race to the bottom", "Fair, transparent rates, no recruiting fees"],
            ].map(([a, b], i) => (
              <div key={i} className="grid grid-cols-2 border-t border-line text-sm">
                <div className="bg-canvas px-5 py-4 text-slate-body">{a}</div>
                <div className="bg-brand-50/50 px-5 py-4 font-medium text-ink">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-hub py-16">
        <StatBand />
        <p className="mt-6 text-center text-[13px] text-slate-muted">
          Illustrative figures for this demo.
        </p>
      </section>

      {/* Credibility / founder note */}
      <section className="band border-t border-azure-200">
        <div className="container-hub py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-canvas p-8 sm:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-lg font-bold text-white">
                TH
              </span>
              <div>
                <p className="font-display font-bold text-ink">The 10th HUB team</p>
                <p className="text-sm text-slate-muted">Founders & operators, remote-first since day one</p>
              </div>
            </div>
            <blockquote className="mt-6 text-lg leading-relaxed text-ink">
              “We've hired VAs, been VAs, and built remote teams across time zones. 10th HUB is
              the playbook we learned the hard way — vet well, match carefully, and stay involved
              like the relationship matters. Because it does.”
            </blockquote>
            <p className="mt-4 text-sm text-slate-muted">— Placeholder founder note</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Build your team with us"
        body="Tell us the role you need filled and meet a vetted VA within 72 hours."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </>
  );
}
