import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "VA services & specialists",
  description:
    "Explore the roles 10th HUB fills: customer service, virtual assistance, web & Shopify, ecommerce and Amazon management, bookkeeping, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Specialists for every part of your business."
        intro="Match with a virtual assistant who already knows the role and the tools. Explore a category to see what's included and what it costs."
      />

      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CTASection
        title="Don't see your exact role?"
        body="Tell us what you need. If it's a VA-able task, we'll source and vet someone for it."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "Talk to us", href: "/contact" }}
        microcopy="We regularly place niche roles beyond this list."
      />
    </>
  );
}
