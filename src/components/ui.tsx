import { Icon } from "./Icons";

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: React.ReactNode;
  tone?: "brand" | "talent" | "muted";
}) {
  const tones = {
    brand: "text-brand",
    talent: "text-talent-700",
    muted: "text-slate-muted",
  };
  return (
    <span className={cn("eyebrow", tones[tone])}>
      <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "brand",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "brand" | "talent" | "muted";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <div className={cn("mb-3", align === "center" && "flex justify-center")}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      )}
      <Tag className="text-balance text-3xl font-extrabold leading-[1.1] sm:text-4xl">
        {title}
      </Tag>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-slate-body">{intro}</p>
      )}
    </div>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "verified" | "brand" | "talent";
  className?: string;
}) {
  // Backgrounds are kept opaque enough to hold AA contrast where they now sit
  // on the drifting blue field rather than on flat white.
  const tones = {
    neutral: "bg-white/75 text-slate-body border-line backdrop-blur-sm",
    verified: "bg-green-50/90 text-verified border-green-100 backdrop-blur-sm",
    brand: "bg-brand-50/90 text-brand border-brand-100 backdrop-blur-sm",
    talent: "bg-talent-50/90 text-talent-700 border-talent-100 backdrop-blur-sm",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[13px] font-semibold",
        tones[tone],
        className
      )}
    >
      {tone === "verified" && <Icon.check className="h-3.5 w-3.5" />}
      {children}
    </span>
  );
}

// A bulleted benefit line with a check.
export function CheckItem({
  children,
  tone = "brand",
}: {
  children: React.ReactNode;
  tone?: "brand" | "talent";
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={cn(
          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white",
          tone === "brand" ? "bg-brand" : "bg-talent"
        )}
      >
        <Icon.check className="h-3.5 w-3.5" />
      </span>
      <span className="text-slate-body">{children}</span>
    </li>
  );
}

export function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon.star key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}
