import { stats } from "@/lib/content";
import { Icon } from "./Icons";
import { CountUp } from "./Motion";

// The old `gap-px on a bg-line parent` hairline trick needs opaque cells — on a
// translucent surface the ambient blue field shows through the gaps. So the
// dividers are real borders, resolved per cell index for the 2-col → 4-col flow.
// (4 stats: mobile 2x2, lg 1x4.)
const cellRules = [
  "",
  "border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-l border-t lg:border-t-0",
];

// Trust stat band — reused near CTAs across the site.
export function StatBand({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={
        dark
          ? "mesh-navy grid grid-cols-2 overflow-hidden rounded-2xl lg:grid-cols-4"
          : "glass grid grid-cols-2 overflow-hidden lg:grid-cols-4"
      }
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`px-6 py-7 text-center ${
            dark ? "border-white/10" : "border-line/70"
          } ${cellRules[i] ?? ""}`}
        >
          <CountUp
            value={s.value}
            className={`tnum block text-3xl font-extrabold ${
              dark ? "text-white" : "text-ink"
            }`}
          />
          <div className={`mt-1 text-sm ${dark ? "text-brand-100/80" : "text-slate-muted"}`}>
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
  const badge =
    tone === "brand"
      ? "bg-brand text-white ring-brand-100"
      : "bg-talent text-white ring-talent-100";
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
            className={`tnum z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-sm font-bold ring-4 ${badge}`}
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
