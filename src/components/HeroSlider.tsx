"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { IconChevron, IconPhone, IconPin } from "@/components/Icons";
import { Container } from "@/components/ui";
import FeatureStrip from "@/components/FeatureStrip";

const SLIDE_MS = 6500;

const slides = [
  {
    src: "/ban1.jpg",
    alt: "Grand banquet hall at Vishal Royal set for a wedding, with a floral stage and seating for hundreds of guests",
    eyebrow: `${site.address.city} · ${site.address.state}`,
    title: "Every celebration,",
    accent: "hosted like it's royal.",
    body: "A 20,000 sq. ft. pillar-free banquet hall with a grand stage, designer lighting and seating for up to 1200 guests.",
    cta: { label: "Schedule a free visit", href: "/contact" },
  },
  {
    src: "/ban2.jpg",
    alt: "Air-conditioned bridal suite at Vishal Royal with a king bed, lounge seating and warm lighting",
    eyebrow: "On-site stay · Bridal suite",
    title: "Your family stays close,",
    accent: "through every ritual.",
    body: "A dedicated bridal suite plus air-conditioned guest rooms on site, so nobody is commuting between functions.",
    cta: { label: "View room options", href: "/services#weddings" },
  },
  {
    src: "/ban3.jpg",
    alt: "Spacious guest room at Vishal Royal with lounge chairs, work desk and a television",
    eyebrow: "On-site stay · Guest rooms",
    title: "Room to rest,",
    accent: "between the ceremonies.",
    body: "Roomy, well-lit rooms with lounge seating and work desks, comfortable for elders and out-of-town guests alike.",
    cta: { label: "Book a site visit", href: "/contact" },
  },
] as const;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Respect the OS "reduce motion" setting — no autoplay, no Ken Burns drift.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setTimeout(() => go(index + 1), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduced, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const active = slides[index];

  return (
    <section
      aria-label="Venue highlights"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const start = touchStartX.current;
        if (start === null) return;
        const delta = e.changedTouches[0].clientX - start;
        if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
        touchStartX.current = null;
      }}
    >
      {/* ---- Background images (crossfade + slow zoom) ---- */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${
                i === index && !reduced ? "animate-ken-burns" : ""
              }`}
            />
          </div>
        ))}

        {/* Neutral black scrims, heaviest on the left where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/88 from-10% via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />
      </div>

      {/* ---- Copy ---- */}
      <Container
        size="wide"
        className="relative z-10 flex min-h-[68vh] flex-col justify-center pt-32 pb-10 sm:min-h-[72vh] sm:pt-36"
      >
        <div key={index} className="max-w-2xl animate-fade-up" aria-live="polite" aria-atomic>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
            <IconPin className="h-3.5 w-3.5" />
            {active.eyebrow}
          </span>

          <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.6rem] font-semibold leading-[1.05] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-[3.4rem] lg:text-[4.1rem]">
            {active.title}
            <span className="block">{active.accent}</span>
          </h1>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/70">{active.body}</p>

          <div className="mt-9">
            <Link
              href={active.cta.href}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-semibold text-[#0c0c0c] shadow-lg shadow-black/25 transition-all hover:bg-[var(--gold-soft)] hover:shadow-xl"
            >
              {active.cta.label}
              <IconPhone className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>

      {/* ---- Controls ---- */}
      <div className="relative z-20">
        <Container size="wide" className="pb-7">
          <div className="flex items-end justify-between gap-6">
            {/* Dots + progress */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
                    aria-current={i === index}
                    className="group py-2"
                  >
                    <span
                      className={`block h-[3px] overflow-hidden rounded-full transition-all duration-500 ${
                        i === index ? "w-12 bg-white/25" : "w-6 bg-white/35 group-hover:bg-white/70"
                      }`}
                    >
                      {i === index ? (
                        <span
                          key={`${index}-${paused}`}
                          className={`block h-full w-full bg-[var(--gold)] ${
                            reduced || paused ? "" : "animate-slide-progress"
                          }`}
                          style={
                            reduced || paused
                              ? undefined
                              : { animationDuration: `${SLIDE_MS}ms` }
                          }
                        />
                      ) : null}
                    </span>
                  </button>
                ))}
              </div>
              <span className="nums font-[family-name:var(--font-display)] text-sm text-white/60">
                <span className="text-[var(--gold)]">0{index + 1}</span> / 0{slides.length}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition-colors hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink-deep)]"
              >
                <IconChevron className="h-5 w-5 rotate-90" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition-colors hover:border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink-deep)]"
              >
                <IconChevron className="h-5 w-5 -rotate-90" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* ---- Feature strip (closes the banner, edge to edge) ---- */}
      <div className="relative z-20">
        <FeatureStrip />
      </div>
    </section>
  );
}
