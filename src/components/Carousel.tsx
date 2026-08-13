"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Scroll-snap carousel plumbing shared by the services and testimonials rows.
 * Paging is measured off the real card width, so the same hook works with any
 * responsive card sizing without knowing the breakpoints.
 */
export function useCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const page = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return { trackRef, atStart, atEnd, page };
}

export function CarouselArrows({
  atStart,
  atEnd,
  page,
  label,
  tone = "light",
}: {
  atStart: boolean;
  atEnd: boolean;
  page: (direction: 1 | -1) => void;
  /** Used in the aria-labels, e.g. "testimonials". */
  label: string;
  /** "light" = dark arrows on a pale section, "dark" = pale arrows on ink. */
  tone?: "light" | "dark";
}) {
  const cls = (disabled: boolean) => {
    if (disabled) {
      return `grid h-11 w-11 place-items-center rounded-full border transition-colors cursor-not-allowed ${
        tone === "light"
          ? "border-[var(--border)] text-[var(--muted)]/40"
          : "border-white/15 text-white/25"
      }`;
    }
    return `grid h-11 w-11 place-items-center rounded-full border transition-colors ${
      tone === "light"
        ? "border-[var(--ink-deep)]/25 text-[var(--ink-deep)] hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white"
        : "border-white/30 text-white hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink-deep)]"
    }`;
  };

  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => page(-1)}
        disabled={atStart}
        aria-label={`Previous ${label}`}
        className={cls(atStart)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
          <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => page(1)}
        disabled={atEnd}
        aria-label={`Next ${label}`}
        className={cls(atEnd)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
