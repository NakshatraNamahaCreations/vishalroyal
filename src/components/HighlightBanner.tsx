import Link from "next/link";
import CropImage from "@/components/CropImage";
import { IconCheck, IconDiamond } from "@/components/Icons";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

const points = [
  "One coordinator, from booking to farewell",
  "In-house kitchen, decor and sound",
  "Bridal suite and guest rooms on site",
  "A written quote with nothing hidden",
] as const;

export default function HighlightBanner() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed photograph */}
      <div className="absolute inset-0">
        <CropImage
          src="/ban1.jpg"
          alt="Banquet hall at Vishal Royal set for a wedding, with a floral stage"
          position="38% 55%"
          sizes="100vw"
        />
        <span className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/75" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/35" />
      </div>

      <Container
        size="wide"
        className="relative flex min-h-[360px] items-center justify-center py-10 sm:min-h-[420px] sm:py-12 lg:justify-end lg:py-14"
      >
        <Reveal className="w-full max-w-[430px]">
          <div className="rounded-[28px] border border-white/15 bg-black/55 p-7 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <h2 className="font-[family-name:var(--font-display)] text-[1.7rem] leading-tight text-white sm:text-[1.9rem]">
                Your celebration,
                <span className="block text-[var(--gold)]">handled end to end</span>
              </h2>
              <IconDiamond className="mt-1 h-5 w-5 shrink-0 text-[var(--gold)]" />
            </div>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[13.5px] text-white/85">
                  <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border border-[var(--gold)]/50">
                    <IconCheck className="h-2.5 w-2.5 text-[var(--gold)]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[12.5px] leading-relaxed text-white/55">
              Send us your date and guest count and we&apos;ll confirm availability the same day,
              then walk you through the hall in person, with no booking pressure at the end of it.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[13px] font-semibold text-[var(--ink-deep)] transition-colors hover:bg-[var(--gold)]"
            >
              Check your date
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
