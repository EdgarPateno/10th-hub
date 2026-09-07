import { Eyebrow } from "./ui";
import { Reveal } from "./Motion";

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
    <section className="band border-b border-line">
      <div className="container-hub py-14 sm:py-16">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal className="mb-3">
              <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.06}>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.08] text-ink sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-relaxed text-slate-body">{intro}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.18} className="mt-7">
              {children}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
