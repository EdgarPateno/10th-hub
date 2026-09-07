import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with 10th HUB. Questions about hiring a VA, applying as a VA, or partnerships — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        intro="Hiring, applying, or just exploring — send a message and we'll reply within one business day."
      />

      <section className="container-hub py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <div className="glass p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand">
                <Icon.users className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-bold text-ink">Ready to hire?</h2>
              <p className="mt-1 text-sm text-slate-body">
                Skip the form — start a hiring request and get a match in 72 hours.
              </p>
              <ButtonLink href="/hire" variant="brand" size="sm" className="mt-4" withArrow>
                Hire Talent
              </ButtonLink>
            </div>

            <div className="glass p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-talent-50 text-talent-700">
                <Icon.spark className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-bold text-ink">Want to work with us?</h2>
              <p className="mt-1 text-sm text-slate-body">
                Apply as a VA — it's free and takes just a few minutes.
              </p>
              <ButtonLink href="/apply" variant="talent" size="sm" className="mt-4" withArrow>
                Apply as a VA
              </ButtonLink>
            </div>

            <div className="rounded-2xl bg-navy p-6 text-white">
              <p className="text-sm text-brand-100/80">Prefer email?</p>
              <a href={`mailto:${site.email}`} className="mt-1 block font-semibold text-white hover:underline">
                {site.email}
              </a>
              <p className="mt-3 text-sm text-brand-100/80">Phone</p>
              <p className="font-semibold text-white">{site.phone}</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
