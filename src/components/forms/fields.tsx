"use client";

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

const inputBase =
  "w-full min-h-[48px] rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-muted/70 transition-colors focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30";

export function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-0.5 text-talent" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-[13px] text-slate-muted">{hint}</p>}
      {error && (
        <p className="mt-1.5 text-[13px] font-medium text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput({
  invalid,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }) {
  return (
    <input
      className={cn(inputBase, invalid ? "border-red-400" : "border-line")}
      {...props}
    />
  );
}

export function TextArea({
  invalid,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }) {
  return (
    <textarea
      className={cn(inputBase, "min-h-[120px] resize-y", invalid ? "border-red-400" : "border-line")}
      {...props}
    />
  );
}

export function Select({
  invalid,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }) {
  return (
    <select
      className={cn(inputBase, "cursor-pointer appearance-none pr-10", invalid ? "border-red-400" : "border-line")}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%235A6B84' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 12px center",
      }}
      {...props}
    >
      {children}
    </select>
  );
}

// Selectable cards (used for skill category / role type). Radio semantics.
export function RadioCards({
  name,
  value,
  onChange,
  options,
  tone = "brand",
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string; desc?: string }[];
  tone?: "brand" | "talent";
}) {
  const active =
    tone === "brand"
      ? "border-brand bg-brand-50 ring-1 ring-brand"
      : "border-talent bg-talent-50 ring-1 ring-talent";
  return (
    <div role="radiogroup" className="grid gap-3 sm:grid-cols-2">
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <label
            key={opt.value}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-xl border bg-white p-4 transition-all hover:border-slate-muted",
              checked ? active : "border-line"
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={checked}
              onChange={() => onChange(opt.value)}
              className="mt-0.5 h-4 w-4 accent-brand"
            />
            <span>
              <span className="block text-sm font-semibold text-ink">{opt.label}</span>
              {opt.desc && <span className="mt-0.5 block text-[13px] text-slate-muted">{opt.desc}</span>}
            </span>
          </label>
        );
      })}
    </div>
  );
}

// Step progress indicator for multi-step forms.
export function StepProgress({
  step,
  total,
  labels,
  tone = "brand",
}: {
  step: number;
  total: number;
  labels: string[];
  tone?: "brand" | "talent";
}) {
  const fill = tone === "brand" ? "bg-brand" : "bg-talent";
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-ink">{labels[step]}</span>
        <span className="tnum text-slate-muted">
          Step {step + 1} of {total}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
        <div
          className={cn("h-full rounded-full transition-all duration-300", fill)}
          style={{ width: `${((step + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

// Shared success panel shown after a mocked submit.
export function FormSuccess({
  title,
  body,
  tone = "brand",
}: {
  title: string;
  body: string;
  tone?: "brand" | "talent";
}) {
  const ring = tone === "brand" ? "bg-brand text-white" : "bg-talent text-white";
  return (
    <div className="card p-8 text-center" role="status">
      <div className={cn("mx-auto grid h-14 w-14 place-items-center rounded-full", ring)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
          <path d="m5 12.5 4.5 4.5L19 7" />
        </svg>
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-slate-body">{body}</p>
    </div>
  );
}

// Simple shared validators.
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
export const isFilled = (v: string) => v.trim().length > 0;
