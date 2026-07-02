import type { Metadata } from "next";
import { ApplyForm } from "@/components/forms/ApplyForm";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Eyebrow, CheckItem } from "@/components/ui";
import { testimonialsFor } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply as a VA",
  description:
    "Apply to join 10th HUB and get matched with vetted businesses for steady, well-paid remote work. Free to apply — we're paid by the businesses that hire.",
};

export default function ApplyPage() {
  const proof = testimonialsFor("va")[0];
  return (
    <section className="container-hub py-14 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="lg:pt-4">
          <Eyebrow tone="talent">Find work</Eyebrow>
          <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
            Apply once. Get matched with real clients.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-body">
            Build your profile, get vetted, and start matching with businesses that value your
            skills — with steady hours and on-time pay.
          </p>

          <ul className="mt-8 space-y-3">
            <CheckItem tone="talent">Free to apply — no fees, ever</CheckItem>
            <CheckItem tone="talent">Steady, long-term clients</CheckItem>
            <CheckItem tone="talent">Transparent pay, on time</CheckItem>
            <CheckItem tone="talent">A success manager &amp; VA community</CheckItem>
          </ul>

          <p className="mt-8 inline-flex rounded-full bg-talent-50 px-4 py-2 text-sm font-semibold text-talent-700">
            We're paid by the businesses that hire — never by you.
          </p>

          {proof && (
            <div className="mt-8 hidden max-w-sm lg:block">
              <TestimonialCard t={proof} />
            </div>
          )}
        </div>

        <div className="lg:pt-2">
          <ApplyForm />
        </div>
      </div>
    </section>
  );
}
