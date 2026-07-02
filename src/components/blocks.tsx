import { stats } from "@/lib/content";
import { Icon } from "./Icons";

// Trust stat band — reused near CTAs across the site.
export function StatBand({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={
        dark
          ? "grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy-700 lg:grid-cols-4"
          : "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4"
      }
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className={dark ? "bg-navy px-6 py-7 text-center" : "bg-white px-6 py-7 text-center"}
        >
          <div
            className={`tnum text-3xl font-extrabold ${dark ? "text-white" : "text-ink"}`}
          >
            {s.value}
          </div>
          <div
            className={`mt-1 text-sm ${dark ? "text-brand-100/80" : "text-slate-muted"}`}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// Compact trust signals row (badges).
export function TrustRow() {
  const items = [
    { icon: Icon.shield, text: "Vetted & reference-checked" },
    { icon: Icon.clock, text: "72-hour average match" },
    { icon: Icon.check, text: "2-week risk-free trial" },
  ];
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-body">
      {items.map((it, i) => (
        <li key={i} className="inline-flex items-center gap-2">
          <it.icon className="h-4 w-4 text-verified" />
          {it.text}
        </li>
      ))}
    </ul>
  );
}

// Numbered process steps — order is meaningful here (a real sequence).
export function StepList({
  steps,
  tone = "brand",
}: {
  steps: { title: string; body: string }[];
  tone?: "brand" | "talent";
}) {
  const badge = tone === "brand" ? "bg-brand text-white" : "bg-talent text-white";
  const rail = tone === "brand" ? "bg-brand-100" : "bg-talent-100";
  return (
    <ol className="relative space-y-8">
      <span
        className={`absolute left-[19px] top-2 bottom-2 hidden w-px sm:block ${rail}`}
        aria-hidden="true"
      />
      {steps.map((s, i) => (
        <li key={i} className="relative flex gap-5">
          <span
            className={`tnum z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-sm font-bold ${badge}`}
          >
            {i + 1}
          </span>
          <div className="pt-1">
            <h3 className="text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-1.5 text-slate-body">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
