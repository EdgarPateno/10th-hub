import { ButtonLink } from "@/components/Button";
import { HubMark } from "@/components/HubGraphic";

export default function NotFound() {
  return (
    <section className="container-hub flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <HubMark className="h-12 w-12" />
      <p className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-brand">
        404
      </p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
        This page went off the grid.
      </h1>
      <p className="mt-4 max-w-md text-slate-body">
        The link may be broken or the page may have moved. Let's get you back to the hub.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" variant="brand" withArrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/services" variant="outline">
          Browse services
        </ButtonLink>
      </div>
    </section>
  );
}
