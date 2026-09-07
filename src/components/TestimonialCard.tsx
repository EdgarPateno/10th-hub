import type { Testimonial } from "@/lib/content";
import { StarRow } from "./ui";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col p-6">
      <StarRow />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand"
          aria-hidden="true"
        >
          {t.initials}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-ink">{t.name}</span>
          <span className="block text-slate-muted">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
