import Link from "next/link";
import CropImage from "@/components/CropImage";
import { Container } from "@/components/ui";

/** Arch panels — tall capsules, staggered like the reference. */
const arches = [
  {
    src: "/1J6A0169.jpg",
    alt: "Entrance foyer with crystal chandeliers",
    position: "52% 42%",
    size: "h-[150px] w-[72px] sm:h-[250px] sm:w-[122px] lg:h-[300px] lg:w-[150px]",
    offset: "mt-6 lg:mt-9",
  },
  {
    src: "/ban1.jpg",
    alt: "Banquet hall set for a wedding",
    position: "50% 50%",
    size: "h-[176px] w-[82px] sm:h-[292px] sm:w-[138px] lg:h-[352px] lg:w-[170px]",
    offset: "mt-0",
  },
  {
    src: "/1J6A0136.jpg",
    alt: "Air-conditioned guest room",
    position: "60% 40%",
    zoom: 1.5,
    size: "h-[160px] w-[76px] sm:h-[266px] sm:w-[128px] lg:h-[320px] lg:w-[158px]",
    offset: "mt-9 lg:mt-14",
  },
  {
    src: "/1J6A0306.jpg",
    alt: "Guest seating facing the stage",
    position: "42% 52%",
    size: "h-[166px] w-[78px] sm:h-[276px] sm:w-[130px] lg:h-[334px] lg:w-[162px]",
    offset: "mt-3",
  },
] as const;

const features = [
  "Family-Run Since 2012",
  "500+ Events Hosted",
  "In-House Kitchen & Decor",
  "A Coordinator You Can Name",
] as const;

export default function AboutShowcase() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.25fr_0.6fr] lg:gap-8">
          {/* ---------- Left: copy ---------- */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
              About Us
            </span>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] leading-[1.12] font-semibold text-[var(--ink-deep)] sm:text-[2.5rem]">
              A Family Venue,
              <span className="block">Built For Celebrations</span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)] sm:max-w-sm">
              Vishal Royal opened in 2012 as a 600-seat hall on family land. Fourteen years and more
              than 500 events later it spans 20,000 sq. ft., with its own kitchen, a bridal suite
              and guest rooms on site.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:max-w-sm">
              It&apos;s still run by the same family, which is why every booking gets a coordinator
              you can call by name, and a written quote with nothing hidden in the fine print.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--ink-deep)]"
            >
              More About Us
              <span aria-hidden>→</span>
            </Link>

          </div>

          {/* ---------- Centre: arch panels ---------- */}
          <ul className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-5">
            {arches.map((arch, i) => (
              <li
                key={arch.src}
                style={{ animationDelay: `${i * 700}ms` }}
                className={`animate-float relative shrink-0 overflow-hidden rounded-full shadow-[0_20px_44px_-24px_rgba(12,12,12,0.55)] ${arch.size} ${arch.offset}`}
              >
                <CropImage
                  src={arch.src}
                  alt={arch.alt}
                  position={arch.position}
                  zoom={"zoom" in arch ? arch.zoom : 1}
                  sizes="(max-width: 640px) 26vw, 170px"
                />
              </li>
            ))}
          </ul>

          {/* ---------- Right: feature list + actions ---------- */}
          <div className="flex flex-col items-start lg:items-end">
            <ul className="space-y-2.5 lg:text-right">
              {features.map((f) => (
                <li
                  key={f}
                  className="text-[13.5px] font-semibold tracking-tight text-[var(--ink-deep)]"
                >
                  {f}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </Container>
    </section>
  );
}
