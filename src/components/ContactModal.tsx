"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { site } from "@/lib/site";

type Ctx = { open: () => void; close: () => void };
const ContactModalContext = createContext<Ctx | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used inside <ContactModalProvider>");
  return ctx;
}

type Status = { state: "idle" | "sending" | "ok" | "error"; message?: string };

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Escape closes; body scroll locks while it's up.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "popup" }),
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
        message: "Couldn't send that. Please try again or call us directly.",
      });
    }
  }

  const fieldClass =
    "w-full border-0 border-b border-white/30 bg-transparent px-0 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-white/55 focus:border-[var(--gold)]";

  return (
    <ContactModalContext.Provider value={{ open, close }}>
      {children}

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a free visit"
          onClick={close}
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-4xl bg-[var(--ink-deep)]"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 text-white/70 transition-colors hover:text-[var(--gold)]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-6 w-6">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="grid gap-0 lg:grid-cols-2">
              {/* ---------- Left: white card ---------- */}
              <div className="relative lg:pb-24">
                <div className="bg-[var(--surface)] p-8 sm:p-10 lg:-mt-6 lg:ml-8">
                  <h2 className="text-[2rem] leading-[1.08] font-bold text-[var(--ink-deep)] sm:text-[2.4rem]">
                    Get in touch with us!
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                    Tell us your date, your guest count and the kind of function you&apos;re
                    planning. We&apos;ll come back with real availability and a written quote, never
                    a template.
                  </p>
                </div>

                <div className="px-8 pt-8 pb-8 sm:px-10 lg:absolute lg:bottom-6 lg:pt-0 lg:pb-0">
                  <p className="text-sm font-semibold text-white">Or just want to say hi?</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block border-b border-[var(--gold)] pb-0.5 text-sm text-[var(--gold)] transition-colors hover:text-[var(--gold-soft)]"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              {/* ---------- Right: form ---------- */}
              <form onSubmit={handleSubmit} className="relative px-8 pt-16 pb-8 sm:px-10 lg:pt-14">
                <label htmlFor="m-name" className="sr-only">
                  Your name
                </label>
                <input id="m-name" name="name" required placeholder="Your name" className={fieldClass} />

                <label htmlFor="m-phone" className="sr-only">
                  Your phone number
                </label>
                <input
                  id="m-phone"
                  name="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  placeholder="Your phone number"
                  className={`${fieldClass} mt-7`}
                />

                <label htmlFor="m-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="m-email"
                  name="email"
                  type="email"
                  placeholder="Your email (optional)"
                  className={`${fieldClass} mt-7`}
                />

                <label htmlFor="m-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="m-message"
                  name="message"
                  rows={3}
                  placeholder="Your date, guest count and type of function"
                  className={`${fieldClass} mt-7 resize-none`}
                />

                {status.message ? (
                  <p
                    role="status"
                    className={`mt-6 text-sm ${
                      status.state === "ok" ? "text-[var(--gold)]" : "text-red-300"
                    }`}
                  >
                    {status.message}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status.state === "sending"}
                  className="mt-10 flex w-full items-center justify-between gap-6 bg-[var(--surface)] px-7 py-6 text-left text-[1.35rem] leading-tight font-bold text-[var(--ink-deep)] transition-colors hover:bg-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-70 lg:w-[115%] lg:-translate-x-[15%]"
                >
                  {status.state === "sending" ? "Sending…" : "Send message"}
                  <span aria-hidden className="text-2xl">
                    ↗
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </ContactModalContext.Provider>
  );
}
