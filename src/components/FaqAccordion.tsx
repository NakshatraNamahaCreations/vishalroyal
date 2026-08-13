"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: readonly Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="border-t border-[var(--border)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q} className="border-b border-[var(--border)]">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-start gap-5 py-6 text-left"
              >
                <span className="nums mt-[7px] w-8 shrink-0 text-[12px] font-semibold tracking-[0.08em] text-[var(--gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`flex-1 font-[family-name:var(--font-display)] text-lg leading-snug transition-colors sm:text-xl ${
                    isOpen
                      ? "text-[var(--ink)]"
                      : "text-[var(--ink-deep)] group-hover:text-[var(--ink)]"
                  }`}
                >
                  {item.q}
                </span>

                {/* Hairline plus that rotates into a minus */}
                <span
                  aria-hidden
                  className="relative mt-2 h-4 w-4 shrink-0 text-[var(--ink)]/70 transition-colors group-hover:text-[var(--ink)]"
                >
                  <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                  <span
                    className={`absolute top-0 left-1/2 h-4 w-px -translate-x-1/2 bg-current transition-transform duration-300 ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              className={`grid overflow-hidden pl-[3.25rem] transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 max-w-2xl pr-9 text-sm leading-relaxed text-[var(--muted)]">
                {item.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
