"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const SEEN_KEY = "vrch-intro-seen";
const COUNT_MS = 4600; // 000 → 100, counted at a steady readable pace
const HOLD_MS = 450; // beat at 100 before the reveal
const LIFT_MS = 1150; // must match .animate-loader-reveal

const RING_RADIUS = 47;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

type Phase = "counting" | "lifting" | "done";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("counting");

  useEffect(() => {
    const timers: number[] = [];
    let raf = 0;

    const finish = () => {
      // Marked only once the intro has actually played through. Writing this up
      // front meant React's dev-mode double-mount saw the flag on its second
      // pass, took the skip branch, and left the counter frozen at 000.
      sessionStorage.setItem(SEEN_KEY, "1");
      setPhase("lifting");
      timers.push(window.setTimeout(() => setPhase("done"), LIFT_MS));
    };

    // Already seen this session, or the visitor prefers less motion, skip it.
    const skip =
      sessionStorage.getItem(SEEN_KEY) === "1" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (skip) {
      raf = requestAnimationFrame(() => setPhase("done"));
      return () => cancelAnimationFrame(raf);
    }

    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_MS, 1);
      // Linear: an eased curve raced to 90-odd in the first second, which read
      // as the number jumping rather than counting.
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timers.push(window.setTimeout(finish, HOLD_MS));
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);

  // Hold the page still underneath while the overlay is up.
  useEffect(() => {
    if (phase === "done") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  if (phase === "done") return null;

  const exiting = phase === "lifting";

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-[var(--ink-deep)] ${
        exiting ? "animate-loader-reveal" : "animate-loader-failsafe"
      }`}
      aria-hidden={exiting}
    >
      {/* Faint gold motif for texture, plus a pool of light behind the emblem */}
      <div className="royal-pattern absolute inset-0 opacity-25" />
      <div className="absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]/[0.07] blur-3xl" />

      <div
        className={`relative flex h-full w-full flex-col items-center justify-center ${
          exiting ? "animate-loader-content-out" : ""
        }`}
      >
        <span className="sr-only" role="status">
          Loading {site.name}
        </span>

        {/* Emblem inside a gold progress ring */}
        <div className="relative h-[132px] w-[132px] sm:h-[150px] sm:w-[150px]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 -rotate-90" aria-hidden>
            <circle
              cx="50"
              cy="50"
              r={RING_RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            <circle
              cx="50"
              cy="50"
              r={RING_RADIUS}
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray={RING_LENGTH}
              strokeDashoffset={RING_LENGTH * (1 - count / 100)}
              style={{ transition: "stroke-dashoffset 120ms linear" }}
            />
          </svg>

          <Image
            src="/logo.png"
            alt=""
            width={96}
            height={96}
            priority
            className="absolute top-1/2 left-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 sm:h-[74px] sm:w-[74px]"
          />
        </div>

        {/* Wordmark */}
        <div className="mt-9 text-center">
          <span className="block text-sm font-medium tracking-[0.42em] text-white uppercase sm:text-base">
            Vishal Royal
          </span>
          <span className="mt-2.5 block text-[9px] font-semibold tracking-[0.34em] text-[var(--gold)]/75 uppercase">
            Convention Hall
          </span>
        </div>
      </div>

      {/* Counter and progress rule pinned to the base */}
      <div
        className={`absolute inset-x-0 bottom-0 px-6 pb-8 sm:px-10 sm:pb-10 ${
          exiting ? "animate-loader-content-out" : ""
        }`}
      >
        <div className="flex items-end justify-between gap-6">
          <span className="text-[9.5px] font-semibold tracking-[0.28em] text-white/40 uppercase">
            Uttarahalli · {site.address.city}
          </span>
          <span
            aria-hidden
            className="nums text-[2.75rem] leading-none font-semibold text-white sm:text-[3.5rem]"
          >
            {String(count).padStart(3, "0")}
          </span>
        </div>

        <span aria-hidden className="mt-4 block h-px w-full overflow-hidden bg-white/15">
          <span
            className="block h-full bg-[var(--gold)] transition-[width] duration-100 ease-linear"
            style={{ width: `${count}%` }}
          />
        </span>
      </div>
    </div>
  );
}
