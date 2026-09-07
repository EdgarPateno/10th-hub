import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Stagger, StaggerItem } from "@/components/Motion";
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

      {/* 9 services → an exact 3x3 at lg, 2-up at sm. No orphan row. */}
      <section className="container-hub py-16 sm:py-20">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>
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
