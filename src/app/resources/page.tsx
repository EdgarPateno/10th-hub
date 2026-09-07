import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resources & guides",
  description:
    "Guides and playbooks on hiring, onboarding, and managing virtual assistants — from 10th HUB.",
};

// Placeholder resource index for SEO / thought leadership.
const posts = [
  {
    title: "The 5-task test: what to hand off to a VA first",
    excerpt: "A simple framework for deciding which work to delegate before you hire.",
    read: "6 min read",
  },
  {
    title: "How to onboard a virtual assistant in the first week",
    excerpt: "A day-by-day checklist to get a new VA productive fast.",
    read: "8 min read",
  },
  {
    title: "In-house vs. VA: a cost breakdown for growing teams",
    excerpt: "The real numbers behind hiring locally versus remotely.",
    read: "9 min read",
  },
  {
    title: "Writing a role brief that gets you the right match",
    excerpt: "The four details that make or break a hiring request.",
    read: "5 min read",
  },
  {
    title: "Managing a remote VA across time zones",
    excerpt: "How to set overlap hours and handoffs that actually hold.",
    read: "6 min read",
  },
  {
    title: "The first 90 days: turning a new VA into a real teammate",
    excerpt: "Check-ins, scope creep, and knowing when to add hours.",
    read: "7 min read",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Guides for hiring and managing VAs."
        intro="Playbooks on what to delegate, how to onboard, and how to get real leverage from a virtual assistant. Placeholder articles for this demo."
      />

      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.title}
              href="/resources"
              className="group card flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
            >
              <h2 className="text-lg font-bold leading-snug text-ink">{p.title}</h2>
              <p className="mt-2 flex-1 text-[15px] text-slate-body">{p.excerpt}</p>
              <span className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm text-slate-muted">
                {p.read}
                <Icon.arrow className="h-4 w-4 text-brand transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to go beyond the reading?"
        body="Put it into practice — tell us the role and meet a vetted VA within 72 hours."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
      />
    </>
  );
}
