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
  experience: string;
  availability: string;
  portfolio: string;
  about: string;
  resumeName: string;
};

const empty: Data = {
  name: "",
  email: "",
  category: "",
  experience: "",
  availability: "",
  portfolio: "",
  about: "",
  resumeName: "",
};

const labels = ["About you", "Skills & availability", "Review & apply"];

export function ApplyForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof Data) => (e: { target: { value: string } }) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  function validateStep(s: number): boolean {
    const next: Partial<Record<keyof Data, string>> = {};
    if (s === 0) {
      if (!isFilled(data.name)) next.name = "Please add your name.";
      if (!isEmail(data.email)) next.email = "Enter a valid email.";
      if (!isFilled(data.category)) next.category = "Choose your main skill.";
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
    // -----------------------------------------------------------------
    // BACKEND INTEGRATION POINT
    // Replace with a real POST (e.g. /api/apply) that stores the applicant
    // and uploads the resume file to storage (S3 / Supabase / Drive), then
    // pushes the record into your ATS or Airtable base.
    // -----------------------------------------------------------------
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <FormSuccess
        tone="talent"
        title="Application received!"
        body="Thanks for applying. If your skills match an open role, our team will reach out to schedule your assessment and interview. Keep an eye on your email."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8" noValidate>
      <StepProgress step={step} total={labels.length} labels={labels} tone="talent" />

      {step === 0 && (
        <div className="space-y-5 animate-fade-up">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" htmlFor="a-name" required error={errors.name}>
              <TextInput id="a-name" name="name" autoComplete="name" value={data.name} onChange={set("name")} invalid={!!errors.name} placeholder="Your name" />
            </Field>
            <Field label="Email" htmlFor="a-email" required error={errors.email}>
              <TextInput id="a-email" name="email" type="email" autoComplete="email" value={data.email} onChange={set("email")} invalid={!!errors.email} placeholder="you@email.com" />
            </Field>
          </div>
          <Field label="Your main skill" htmlFor="a-category" required error={errors.category} hint="You can add more later — pick your strongest.">
            <Select id="a-category" name="category" value={data.category} onChange={set("category")} invalid={!!errors.category}>
              <option value="">Select a category…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </Select>
          </Field>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5 animate-fade-up">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Years of experience" htmlFor="a-exp">
              <Select id="a-exp" name="experience" value={data.experience} onChange={set("experience")}>
                <option value="">Select…</option>
                <option>Less than 1 year</option>
                <option>1–3 years</option>
                <option>3–5 years</option>
                <option>5+ years</option>
              </Select>
            </Field>
            <Field label="Availability" htmlFor="a-avail">
              <Select id="a-avail" name="availability" value={data.availability} onChange={set("availability")}>
                <option value="">Select…</option>
                <option>Part-time (up to 20 hrs)</option>
                <option>Full-time (40 hrs)</option>
                <option>Flexible</option>
              </Select>
            </Field>
          </div>
          <Field label="Portfolio or LinkedIn" htmlFor="a-portfolio" hint="A link helps us match you faster.">
            <TextInput id="a-portfolio" name="url" type="url" inputMode="url" value={data.portfolio} onChange={set("portfolio")} placeholder="https://…" />
          </Field>
          <Field label="Resume / CV" htmlFor="a-resume" hint="PDF or DOC. Upload is a placeholder in this demo — no file is stored.">
            <input
              id="a-resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setData((d) => ({ ...d, resumeName: e.target.files?.[0]?.name ?? "" }))}
              className="block w-full cursor-pointer rounded-xl border border-line bg-white text-sm text-slate-body file:mr-4 file:cursor-pointer file:border-0 file:bg-talent-50 file:px-4 file:py-3 file:font-semibold file:text-talent-700 hover:file:bg-talent-100"
            />
          </Field>
          <Field label="Tell us about yourself" htmlFor="a-about" hint="A few sentences on what you do best.">
            <TextArea id="a-about" name="about" value={data.about} onChange={set("about")} placeholder="I'm a customer-service VA with 4 years supporting DTC brands…" />
          </Field>
        </div>
      )}

      {step === 2 && (
        <div className="animate-fade-up">
          <h3 className="text-lg font-bold text-ink">Review your application</h3>
          <p className="mt-1 text-sm text-slate-muted">Confirm your details before applying.</p>
          <dl className="mt-5 divide-y divide-line rounded-xl border border-line">
            {[
              ["Name", data.name],
              ["Email", data.email],
              ["Skill", data.category],
              ["Experience", data.experience || "—"],
              ["Availability", data.availability || "—"],
              ["Portfolio", data.portfolio || "—"],
              ["Resume", data.resumeName || "Not attached"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4 px-4 py-3 text-sm">
                <dt className="w-28 shrink-0 font-semibold text-slate-muted">{k}</dt>
                <dd className="break-words text-ink">{v}</dd>
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
          <ButtonLink href="/for-vas" variant="ghost" size="sm">
            Learn what we offer VAs first
          </ButtonLink>
        )}

        {step < labels.length - 1 ? (
          <Button type="button" variant="talent" onClick={next} withArrow>
            Continue
          </Button>
        ) : (
          <Button type="submit" variant="talent" disabled={status === "sending"} withArrow>
            {status === "sending" ? "Submitting…" : "Submit application"}
          </Button>
        )}
      </div>
      {step === 0 && (
        <p className="mt-4 text-center text-[13px] text-slate-muted">
          Always free for VAs. We're paid by the businesses that hire — never by you.
        </p>
      )}
    </form>
  );
}
