"use client";

import { testimonials } from "@/lib/site";
import { Container } from "@/components/ui";
import { CarouselArrows, useCarousel } from "@/components/Carousel";

export default function Testimonials() {
  const { trackRef, atStart, atEnd, page } = useCarousel();

  return (
    <section className="bg-[var(--cream)] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        {/* ---------- Header ---------- */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <h2 className="font-[family-name:var(--font-display)] text-[2rem] leading-[1.12] text-[var(--ink-deep)] sm:text-[2.5rem]">
            What Our Families Say
            <span className="block italic">About Us</span>
          </h2>

          <div className="lg:max-w-sm">
            <p className="text-[13px] leading-relaxed text-[var(--muted)]">
              Honest words from families and companies who have celebrated with us. Their feedback
              is what keeps us improving, year after year.
            </p>
            <div className="mt-6">
              <CarouselArrows atStart={atStart} atEnd={atEnd} page={page} label="testimonials" />
            </div>
          </div>
        </div>

        {/* ---------- Cards ---------- */}
        <ul
          ref={trackRef}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex w-[86%] shrink-0 snap-start flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 sm:w-[46%] lg:w-[calc((100%-2.5rem)/3)]"
            >
              {/* Name chip */}
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[var(--border)] py-1.5 pr-4 pl-1.5">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--ink)] text-[10px] font-semibold text-[var(--gold-soft)]">
                  {t.name.charAt(0)}
                </span>
                <span className="text-[12px] font-medium text-[var(--ink-deep)]">{t.name}</span>
              </span>

              <blockquote className="mt-6 flex-1 font-[family-name:var(--font-display)] text-[15.5px] leading-relaxed text-[var(--foreground)]/85">
                “{t.quote}”
              </blockquote>

              <footer className="mt-7 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4 text-[11px] tracking-wide text-[var(--muted)]">
                <span>{t.event}</span>
                <span className="nums text-right">{t.meta}</span>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
