"use client";

import { useState } from "react";

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

type Tab = { id: string; label: string; tone?: "brand" | "talent"; content: React.ReactNode };

export function Tabs({ tabs, initial = 0 }: { tabs: Tab[]; initial?: number }) {
  const [active, setActive] = useState(initial);
  const tone = tabs[active].tone ?? "brand";

  return (
    <div>
      <div
        role="tablist"
        aria-label="Choose audience"
        className="glass inline-flex gap-1 rounded-full p-1"
      >
        {tabs.map((t, i) => {
          const on = i === active;
          const activeCls =
            (t.tone ?? "brand") === "brand"
              ? "bg-brand text-white"
              : "bg-talent text-white";
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={on}
              aria-controls={`panel-${t.id}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold font-display transition-colors",
                on ? activeCls : "text-slate-body hover:text-ink"
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`panel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={i !== active}
          className="mt-8"
        >
          {i === active && <div className="animate-fade-up">{t.content}</div>}
        </div>
      ))}
    </div>
  );
}
