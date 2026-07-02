import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Tabs } from "@/components/Tabs";
import { StepList } from "@/components/blocks";
import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { CheckItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How 10th HUB works for both sides — how employers hire a vetted VA in 72 hours, and how VAs apply, get vetted, and get matched with steady remote work.",
};

function EmployerFlow() {
  return (
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
        <h3 className="text-lg font-bold text-ink">What's included</h3>
        <ul className="mt-4 space-y-3">
          <CheckItem>Vetting, skills tests, and reference checks</CheckItem>
          <CheckItem>72-hour average time to first match</CheckItem>
          <CheckItem>Contracts, billing, and payments handled</CheckItem>
          <CheckItem>2-week risk-free trial & free replacements</CheckItem>
        </ul>
        <ButtonLink href="/hire" variant="brand" className="mt-6 w-full" withArrow>
          Hire Talent
        </ButtonLink>
      </div>
    </div>
  );
}

function VAFlow() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <StepList
        tone="talent"
        steps={[
          { title: "Apply for free", body: "Create your profile and choose your main skill category. Applying never costs anything." },
          { title: "Complete vetting", body: "Take a short skills assessment for your category and a live interview with our team." },
          { title: "Get approved", body: "Once you pass, you join our vetted talent pool and set your availability." },
          { title: "Get matched", body: "We connect you with businesses whose needs fit your skills and hours." },
          { title: "Work with support", body: "Start with steady clients, on-time pay, a success manager, and a VA community behind you." },
        ]}
      />
      <div className="rounded-2xl border border-talent-100 bg-talent-50/40 p-7">
        <h3 className="text-lg font-bold text-ink">What you get</h3>
        <ul className="mt-4 space-y-3">
          <CheckItem tone="talent">Free application and vetting</CheckItem>
          <CheckItem tone="talent">Steady, long-term clients — not one-off gigs</CheckItem>
          <CheckItem tone="talent">Transparent pay, no fees taken from you</CheckItem>
          <CheckItem tone="talent">A success manager and community support</CheckItem>
        </ul>
        <ButtonLink href="/apply" variant="talent" className="mt-6 w-full" withArrow>
          Apply as a VA
        </ButtonLink>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="Two journeys, one hub."
        intro="10th HUB works differently depending on which side you're on. Choose your path to see exactly what happens, step by step."
      />

      <section className="container-hub py-16 sm:py-20">
        <Tabs
          tabs={[
            { id: "employers", label: "I'm hiring", tone: "brand", content: <EmployerFlow /> },
            { id: "vas", label: "I want work", tone: "talent", content: <VAFlow /> },
          ]}
        />
      </section>

      <CTASection
        title="Pick your path and get started"
        body="Hiring or looking for work — the first step takes about two minutes."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Find Work", href: "/apply" }}
      />
    </>
  );
}
