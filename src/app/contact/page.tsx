import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Get in touch with 10th HUB. Questions about hiring a virtual assistant, pricing, or partnerships — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        intro="Ready to hire or just weighing it up — send a message and we'll reply within one business day."
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
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand">
                <Icon.spark className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-bold text-ink">Still weighing it up?</h2>
              <p className="mt-1 text-sm text-slate-body">
                See the roles we fill and what they cost before you talk to anyone.
              </p>
              <ButtonLink href="/pricing" variant="outline" size="sm" className="mt-4" withArrow>
                View pricing
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
