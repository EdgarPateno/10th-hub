import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { CTASection } from "@/components/CTASection";
import { Badge } from "@/components/ui";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resources & guides",
  description:
    "Guides and playbooks on hiring virtual assistants and building a remote VA career — from 10th HUB.",
};

// Placeholder resource index for SEO / thought leadership.
const posts = [
  {
    audience: "For employers",
    tone: "brand" as const,
    title: "The 5-task test: what to hand off to a VA first",
    excerpt: "A simple framework for deciding which work to delegate before you hire.",
    read: "6 min read",
  },
  {
    audience: "For employers",
    tone: "brand" as const,
    title: "How to onboard a virtual assistant in the first week",
    excerpt: "A day-by-day checklist to get a new VA productive fast.",
    read: "8 min read",
  },
  {
    audience: "For VAs",
    tone: "talent" as const,
    title: "Building a VA portfolio that lands long-term clients",
    excerpt: "What businesses actually look for — and how to show it.",
    read: "7 min read",
  },
  {
    audience: "For VAs",
    tone: "talent" as const,
    title: "Setting rates as a virtual assistant, without underselling",
    excerpt: "A practical guide to pricing your skills with confidence.",
    read: "5 min read",
  },
  {
    audience: "For employers",
    tone: "brand" as const,
    title: "In-house vs. VA: a cost breakdown for growing teams",
    excerpt: "The real numbers behind hiring locally versus remotely.",
    read: "9 min read",
  },
  {
    audience: "For VAs",
    tone: "talent" as const,
    title: "Time-zone strategies for remote VAs and their clients",
    excerpt: "How to make overlap work without burning out.",
    read: "6 min read",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Guides for both sides of the hub."
        intro="Playbooks on hiring and managing VAs, and on building a thriving remote VA career. Placeholder articles for this demo."
      />

      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.title}
              href="/resources"
              className="group card flex flex-col p-6 transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
            >
              <Badge tone={p.tone}>{p.audience}</Badge>
              <h2 className="mt-4 text-lg font-bold leading-snug text-ink">{p.title}</h2>
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
        body="Put it into practice — hire a vetted VA or apply to find work."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Find Work", href: "/apply" }}
      />
    </>
  );
}
