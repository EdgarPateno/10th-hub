import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";
import { employerFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "Answers about hiring through 10th HUB — how vetting works, how fast you can hire, what happens if the fit isn't right, pricing, and who manages your VA day to day.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions? We've got answers."
        intro="The questions businesses actually ask before they hire. Still stuck? Contact us — a real person will reply."
      />

      <section className="container-hub py-16 sm:py-20">
        <FAQAccordion items={employerFaqs} />
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
