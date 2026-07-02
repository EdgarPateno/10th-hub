"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { Field, TextInput, TextArea, Select, FormSuccess, isEmail, isFilled } from "./fields";

type Data = { name: string; email: string; topic: string; message: string };
const empty: Data = { name: "", email: "", topic: "", message: "" };

export function ContactForm() {
  const [data, setData] = useState<Data>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Data, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof Data) => (e: { target: { value: string } }) =>
    setData((d) => ({ ...d, [k]: e.target.value }));

  function validate(): boolean {
    const next: Partial<Record<keyof Data, string>> = {};
    if (!isFilled(data.name)) next.name = "Please add your name.";
    if (!isEmail(data.email)) next.email = "Enter a valid email.";
    if (!isFilled(data.message)) next.message = "Let us know how we can help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    // BACKEND INTEGRATION POINT: POST to /api/contact → email inbox / CRM / webhook.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <FormSuccess
        title="Message sent"
        body="Thanks for reaching out — we'll reply within one business day."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="c-name" required error={errors.name}>
          <TextInput id="c-name" name="name" autoComplete="name" value={data.name} onChange={set("name")} invalid={!!errors.name} placeholder="Your name" />
        </Field>
        <Field label="Email" htmlFor="c-email" required error={errors.email}>
          <TextInput id="c-email" name="email" type="email" autoComplete="email" value={data.email} onChange={set("email")} invalid={!!errors.email} placeholder="you@email.com" />
        </Field>
      </div>
      <Field label="What's this about?" htmlFor="c-topic">
        <Select id="c-topic" name="topic" value={data.topic} onChange={set("topic")}>
          <option value="">Select a topic…</option>
          <option>Hiring a VA</option>
          <option>Applying as a VA</option>
          <option>Partnerships</option>
          <option>Something else</option>
        </Select>
      </Field>
      <Field label="Message" htmlFor="c-message" required error={errors.message}>
        <TextArea id="c-message" name="message" value={data.message} onChange={set("message")} invalid={!!errors.message} placeholder="How can we help?" />
      </Field>
      <div className="flex items-center justify-between gap-4">
        <p className="text-[13px] text-slate-muted">We reply within one business day.</p>
        <Button type="submit" variant="brand" disabled={status === "sending"} withArrow>
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
