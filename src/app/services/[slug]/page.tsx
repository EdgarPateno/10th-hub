import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { ServiceIcon, Icon } from "@/components/Icons";
import { ServiceCard } from "@/components/ServiceCard";
import { CheckItem, Eyebrow, Badge } from "@/components/ui";
import { services, getService } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.name} VAs`,
    description: service.pitch,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="container-hub py-14 sm:py-16">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-muted" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <Icon.chevron className="h-4 w-4 -rotate-90" />
            <span className="text-ink">{service.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </span>
                <Badge tone="brand">from {service.startingRate}</Badge>
              </div>
              <h1 className="text-balance text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                {service.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-body">
                {service.pitch}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/hire" variant="brand" size="lg" withArrow>
                  Hire a {service.name} VA
                </ButtonLink>
                <ButtonLink href="/pricing" variant="outline" size="lg">
                  See pricing
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-canvas p-7">
              <Eyebrow tone="brand">What you get</Eyebrow>
              <ul className="mt-4 space-y-3">
                {service.outcomes.map((o) => (
                  <CheckItem key={o}>{o}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tasks */}
      <section className="container-hub py-16 sm:py-20">
        <h2 className="text-2xl font-bold text-ink">What a {service.name} VA can take off your plate</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.tasks.map((task) => (
            <div key={task} className="flex items-start gap-3 rounded-xl border border-line bg-white p-5">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand">
                <Icon.check className="h-4 w-4" />
              </span>
              <span className="font-medium text-ink">{task}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-line bg-white">
        <div className="container-hub py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-ink">Other services</h2>
            <ButtonLink href="/services" variant="outline" size="sm" withArrow>
              View all
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for a ${service.name} VA?`}
        body="Submit a quick request and meet a vetted candidate within 72 hours."
        primary={{ label: "Hire Talent", href: "/hire" }}
        secondary={{ label: "How it works", href: "/how-it-works" }}
        microcopy="Free to submit · 2-week risk-free trial"
      />
    </>
  );
}
