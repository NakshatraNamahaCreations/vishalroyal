"use client";

import Link from "next/link";
import { services } from "@/lib/site";
import CropImage from "@/components/CropImage";
import { Container } from "@/components/ui";
import { CarouselArrows, useCarousel } from "@/components/Carousel";

export default function ServicesCarousel() {
  const { trackRef, atStart, atEnd, page } = useCarousel();

  return (
    <section className="bg-[var(--background)] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        {/* ---------- Header ---------- */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[var(--muted)] uppercase">
              Our Services
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] leading-[1.1] text-[var(--ink-deep)] sm:text-[2.5rem]">
              Occasions We Host
              <span className="block">Under One Roof</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] text-[var(--ink-deep)] uppercase transition-colors hover:text-[var(--gold)]"
            >
              View All Services
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <CarouselArrows atStart={atStart} atEnd={atEnd} page={page} label="services" />
          </div>
        </div>

        {/* ---------- Cards ---------- */}
        <ul
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {services.map((s) => (
            <li
              key={s.slug}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-3.75rem)/4)]"
            >
              <Link href={`/services#${s.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <span className="absolute inset-0 transition-transform duration-[600ms] ease-out group-hover:scale-105">
                    <CropImage
                      src={s.image}
                      alt={s.title}
                      position={s.imagePosition}
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 24vw"
                    />
                  </span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg leading-snug text-[var(--ink-deep)] transition-colors group-hover:text-[var(--gold)]">
                  {s.title}
                </h3>

                <div className="mt-2.5 flex items-center justify-between gap-4">
                  <span className="text-[12px] text-[var(--muted)]">{s.category}</span>
                  <span
                    aria-hidden
                    className="text-[var(--ink-deep)]/45 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--gold)]"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
