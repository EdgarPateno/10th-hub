import { ButtonLink } from "./Button";
import { HubGraphic } from "./HubGraphic";

// Final CTA band. Single primary action, honest microcopy underneath.
export function CTASection({
  eyebrow = "Ready when you are",
  title,
  body,
  primary,
  secondary,
  microcopy,
  tone = "brand",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  microcopy?: string;
  tone?: "brand" | "talent";
}) {
  return (
    <section className="container-hub py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -right-16 -top-10 hidden w-[380px] opacity-30 lg:block"
          aria-hidden="true"
        >
          <HubGraphic className="w-full" />
        </div>
        <div className="relative mx-auto max-w-2xl">
          <span className="eyebrow justify-center text-brand-100">{eyebrow}</span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100/80">{body}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={primary.href} variant={tone} size="lg" withArrow>
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink
                href={secondary.href}
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                {secondary.label}
              </ButtonLink>
            )}
          </div>
          {microcopy && (
            <p className="mt-4 text-sm text-brand-100/70">{microcopy}</p>
          )}
        </div>
      </div>
    </section>
  );
}
