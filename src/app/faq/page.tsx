import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Tabs } from "@/components/Tabs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { employerFaqs, vaFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers for both sides of 10th HUB — how hiring a VA works for employers, and how applying, vetting, pay, and support work for virtual assistants.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions? We've got answers."
        intro="Pick your side to see the questions people actually ask. Still stuck? Contact us — a real person will reply."
      />

      <section className="container-hub py-16 sm:py-20">
        <Tabs
          tabs={[
            {
              id: "employers",
              label: "For employers",
              tone: "brand",
              content: <FAQAccordion items={employerFaqs} />,
            },
            {
              id: "vas",
              label: "For VAs",
              tone: "talent",
              content: <FAQAccordion items={vaFaqs} />,
            },
          ]}
        />
      </section>

      <CTASection
        title="Didn't find your answer?"
        body="Send us a message and we'll get back to you within one business day."
        primary={{ label: "Contact us", href: "/contact" }}
        secondary={{ label: "How it works", href: "/how-it-works" }}
      />
    </>
  );
}
