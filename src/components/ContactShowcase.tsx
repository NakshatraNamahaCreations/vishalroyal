"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";

/** Backgrounds the arrows cycle through, mirroring the reference's room switcher. */
const views = [
  { src: "/1J6A0292.jpg", alt: "Banquet hall aisle with lounge seating", label: "Banquet Hall" },
  { src: "/1J6A0169.jpg", alt: "Entrance foyer with crystal chandeliers", label: "Entrance Foyer" },
  { src: "/ban1.jpg", alt: "Hall set for a wedding with floral stage", label: "Wedding Setup" },
  { src: "/1J6A0136.jpg", alt: "Air-conditioned guest room", label: "Guest Room" },
] as const;

const rows = [
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { label: "WhatsApp", value: "Message us", href: `https://wa.me/${site.whatsapp}` },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Address", value: `${site.address.line2}, ${site.address.city}` },
  { label: "Office Hours", value: "9:00 AM – 9:00 PM" },
  { label: "Site Visits", value: "Free, by appointment" },
] as const;

export default function ContactShowcase() {
  const [index, setIndex] = useState(0);
  const go = (step: number) => setIndex((i) => (i + step + views.length) % views.length);

  const active = views[index];
  const thumbs = [views[(index + 1) % views.length], views[(index + 2) % views.length]];

  return (
    <section className="bg-[var(--background)] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="relative">
          {/* ---------- Background view ---------- */}
          <div className="relative h-[300px] overflow-hidden rounded-sm sm:h-[440px] lg:h-[560px]">
            {views.map((v, i) => (
              <Image
                key={v.src}
                src={v.src}
                alt={v.alt}
                fill
                sizes="100vw"
                className={`object-cover transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <span className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent lg:hidden" />
          </div>

          {/* ---------- Detail card ---------- */}
          <div className="relative z-10 -mt-10 mx-auto w-[92%] bg-[var(--cream)] p-7 shadow-[0_24px_60px_-30px_rgba(12,12,12,0.6)] sm:p-9 lg:absolute lg:top-1/2 lg:left-0 lg:mx-0 lg:mt-0 lg:w-[400px] lg:-translate-y-1/2">
            <h2 className="font-[family-name:var(--font-display)] text-[2.1rem] leading-[1.06] font-semibold text-[var(--ink-deep)] sm:text-[2.6rem]">
              Come See
              <span className="block">The Hall</span>
            </h2>

            <p className="mt-4 text-[13px] leading-relaxed text-[var(--muted)]">
              Walk the hall, see the kitchen and meet the team. Site visits are free, take about
              thirty minutes, and come with no booking pressure.
            </p>

            <dl className="mt-7">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4 border-b border-[var(--ink-deep)]/12 py-3 text-[13px] last:border-b-0"
                >
                  <dt className="text-[var(--muted)]">{row.label}</dt>
                  <dd className="text-right font-medium text-[var(--ink-deep)]">
                    {"href" in row && row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="transition-colors hover:text-[var(--ink)] hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex items-center justify-between gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[var(--ink)] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--ink-deep)]"
              >
                Book A Visit
              </Link>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous view"
                  className="text-lg text-[var(--ink-deep)]/55 transition-colors hover:text-[var(--ink)]"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next view"
                  className="text-lg text-[var(--ink-deep)] transition-colors hover:text-[var(--ink)]"
                >
                  →
                </button>
              </div>
            </div>

            <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[var(--gold)]">
              Now viewing · {active.label}
            </p>
          </div>

          {/* ---------- Thumbnails ---------- */}
          <div className="absolute right-4 bottom-4 hidden gap-3 sm:flex lg:right-6 lg:bottom-6">
            {thumbs.map((t) => (
              <button
                key={t.src}
                type="button"
                onClick={() => setIndex(views.indexOf(t))}
                aria-label={`Show ${t.label}`}
                className="relative h-20 w-24 overflow-hidden rounded-sm ring-2 ring-white/70 transition-transform hover:scale-105 lg:h-28 lg:w-36"
              >
                <Image src={t.src} alt="" fill sizes="144px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
