"use client";

import { useState } from "react";
import { services } from "@/lib/content";
import { Button, ButtonLink } from "@/components/Button";
import {
  Field,
  TextInput,
  TextArea,
  Select,
  StepProgress,
  FormSuccess,
  isEmail,
  isFilled,
} from "./fields";

type Data = {
  name: string;
  email: string;
  category: string;
  company: string;
  hours: string;
  startWhen: string;
  details: string;
};

const empty: Data = {
  name: "",
  email: "",
  category: "",
  company: "",
  hours: "",
  startWhen: "",
  details: "",
};

const labels = ["What you need", "A few details", "Review & send"];

export function HireForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof Data) => (e: { target: { value: string } }) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  // Only the first step is required — progressive disclosure keeps friction low.
  function validateStep(s: number): boolean {
    const next: Partial<Record<keyof Data, string>> = {};
    if (s === 0) {
      if (!isFilled(data.name)) next.name = "Please add your name.";
      if (!isEmail(data.email)) next.email = "Enter a valid work email.";
      if (!isFilled(data.category)) next.category = "Pick the role you need.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, labels.length - 1));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(0)) {
      setStep(0);
      return;
    }
    setStatus("sending");

    // ---------------------------------------------------------------------
    // BACKEND INTEGRATION POINT
    // Replace this mock with a real submission, e.g.:
    //   await fetch("/api/hire", { method: "POST", body: JSON.stringify(data) })
    // The /api/hire route (or a serverless function) would then forward to your
    // CRM / lead store — HubSpot Forms API, Airtable, or a Zapier/Make webhook.
    // ---------------------------------------------------------------------
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <FormSuccess
        tone="brand"
        title="Request received — we're on it."
        body="A matching specialist will email you within one business day with a shortlisted candidate. Check your inbox (and spam, just in case)."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
      <StepProgress step={step} total={labels.length} labels={labels} tone="brand" />

      {step === 0 && (
        <div className="space-y-5 animate-fade-up">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" htmlFor="name" required error={errors.name}>
              <TextInput
                id="name"
                name="name"
                autoComplete="name"
                value={data.name}
                onChange={set("name")}
                invalid={!!errors.name}
                placeholder="Alex Morgan"
              />
            </Field>
            <Field label="Work email" htmlFor="email" required error={errors.email}>
              <TextInput
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={set("email")}
                invalid={!!errors.email}
                placeholder="alex@company.com"
              />
            </Field>
          </div>
          <Field
            label="What role do you need?"
            htmlFor="category"
            required
            error={errors.category}
            hint="Not sure? Choose the closest — we'll refine it together."
          >
            <Select id="category" name="category" value={data.category} onChange={set("category")} invalid={!!errors.category}>
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5 animate-fade-up">
          <Field label="Company" htmlFor="company">
            <TextInput id="company" name="organization" autoComplete="organization" value={data.company} onChange={set("company")} placeholder="Company name (optional)" />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Hours per week" htmlFor="hours">
              <Select id="hours" name="hours" value={data.hours} onChange={set("hours")}>
                <option value="">Select…</option>
                <option>Under 20 hrs</option>
                <option>20 hrs (part-time)</option>
                <option>40 hrs (full-time)</option>
                <option>Multiple roles</option>
              </Select>
            </Field>
            <Field label="When do you want to start?" htmlFor="startWhen">
              <Select id="startWhen" name="startWhen" value={data.startWhen} onChange={set("startWhen")}>
                <option value="">Select…</option>
                <option>As soon as possible</option>
                <option>Within 2 weeks</option>
                <option>This month</option>
                <option>Just exploring</option>
              </Select>
            </Field>
          </div>
          <Field label="Anything else we should know?" htmlFor="details" hint="Tools you use, must-have skills, time zone — all helpful.">
            <TextArea id="details" name="details" value={data.details} onChange={set("details")} placeholder="We use Gorgias and need weekend coverage…" />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-up">
          <h3 className="text-lg font-bold text-ink">Quick review</h3>
          <p className="mt-1 text-sm text-slate-muted">Make sure this looks right before you send.</p>
          <dl className="mt-5 divide-y divide-line rounded-xl border border-line">
            {[
              ["Name", data.name],
              ["Email", data.email],
              ["Role", data.category],
              ["Company", data.company || "—"],
              ["Hours", data.hours || "—"],
              ["Start", data.startWhen || "—"],
              ["Notes", data.details || "—"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4 px-4 py-3 text-sm">
                <dt className="w-24 shrink-0 font-semibold text-slate-muted">{k}</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <Button type="button" variant="ghost" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        ) : (
          <ButtonLink href="/how-it-works" variant="ghost" size="sm">
            Not ready? See how it works
          </ButtonLink>
        )}

        {step < labels.length - 1 ? (
          <Button type="button" variant="brand" onClick={next} withArrow>
            Continue
          </Button>
        ) : (
          <Button type="submit" variant="brand" disabled={status === "sending"} withArrow>
            {status === "sending" ? "Sending…" : "Send hiring request"}
          </Button>
        )}
      </div>
      {step === 0 && (
        <p className="mt-4 text-center text-[13px] text-slate-muted">
          Free to submit. No card required. You'll get a shortlisted match, not spam.
        </p>
      )}
    </form>
  );
}
