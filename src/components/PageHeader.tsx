import { Eyebrow } from "./ui";

// Consistent inner-page header. Keeps H1 + intro above the fold on every page.
export function PageHeader({
  eyebrow,
  title,
  intro,
  tone = "brand",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "brand" | "talent" | "muted";
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-hub py-14 sm:py-16">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="mb-3">
              <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-5 text-lg leading-relaxed text-slate-body">{intro}</p>}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
