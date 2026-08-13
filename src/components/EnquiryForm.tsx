"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/site";

type Status = { state: "idle" | "sending" | "ok" | "error"; message?: string };

const inputClass =
  "w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--muted)]/70 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/25";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus({ state: "error", message: json.error ?? "Something went wrong. Please call us." });
        return;
      }

      setStatus({ state: "ok", message: json.message });
      form.reset();
    } catch {
      setStatus({
        state: "error",
        message: "Couldn't send your enquiry. Please try again or call us directly.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
    >
      <h2 className="text-2xl text-[var(--ink-deep)]">Check your date</h2>
      <p className="mt-1.5 text-sm text-[var(--muted)]">
        Fill this in and we&apos;ll confirm availability with a quote, usually within a few hours.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name *
          </label>
          <input id="name" name="name" required placeholder="Full name" className={inputClass} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            inputMode="tel"
            placeholder="98765 43210"
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="eventType" className={labelClass}>
            Event Type *
          </label>
          <select id="eventType" name="eventType" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select an occasion
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="eventDate" className={labelClass}>
            Event Date *
          </label>
          <input id="eventDate" name="eventDate" required type="date" className={inputClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="guests" className={labelClass}>
            Expected Guests *
          </label>
          <select id="guests" name="guests" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Approximate guest count
            </option>
            <option>Up to 300</option>
            <option>300 – 600</option>
            <option>600 – 900</option>
            <option>900 – 1200</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Anything else we should know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Menu preferences, decor ideas, number of rooms needed…"
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status.state === "sending"}
        className="mt-7 w-full rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ink-deep)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.state === "sending" ? "Sending…" : "Send Enquiry"}
      </button>

      {status.message ? (
        <p
          role="status"
          className={`mt-4 rounded-lg px-4 py-3 text-sm ${
            status.state === "ok"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <p className="mt-4 text-xs text-[var(--muted)]">
        We only use your details to respond to this enquiry. No marketing calls.
      </p>
    </form>
  );
}
