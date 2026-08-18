"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { IconPhone, IconWhatsApp } from "@/components/Icons";

/** Sticky back-to-top, WhatsApp and call buttons. */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-center gap-3">
      {/* Back to top: appears once there's something to scroll back from */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`grid h-12 w-12 place-items-center rounded-full border border-[var(--gold)]/50 bg-[var(--ink-deep)] text-[var(--gold)] shadow-lg transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--ink-deep)] ${
          showTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          `Hi ${site.shortName}, I'd like to check availability for my event.`,
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <IconWhatsApp className="h-6 w-6" />
      </a>

      <a
        href={`tel:${site.phone.replace(/\s/g, "")}`}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full bg-[var(--ink)] text-white shadow-lg transition-transform hover:scale-105 sm:hidden"
      >
        <IconPhone className="h-5 w-5" />
      </a>
    </div>
  );
}
