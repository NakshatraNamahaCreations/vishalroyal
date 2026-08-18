import Link from "next/link";
import CropImage from "@/components/CropImage";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "500+", label: "Events Hosted" },
  { value: "1200", label: "Guest Capacity" },
] as const;

export default function AboutIntro() {
  return (
    <section className="bg-[var(--background)] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1fr_0.5fr] lg:gap-12">
          {/* ---------- Left: photo with the stats card over it ---------- */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <CropImage
                src="/1J6A0169.jpg"
                alt="Entrance foyer at Vishal Royal with crystal chandeliers"
                position="52% 45%"
                sizes="(max-width: 1024px) 92vw, 32vw"
                priority
              />
            </div>

            <dl className="right-0 -mt-16 ml-auto w-[62%] bg-[var(--surface)] px-6 py-6 shadow-[0_20px_50px_-28px_rgba(12,12,12,0.5)] sm:w-[52%] lg:absolute lg:right-[-14%] lg:bottom-10 lg:mt-0 lg:w-[64%]">
              {stats.map((s, i) => (
                <div key={s.label} className={i === 0 ? "" : "mt-5 border-t border-[var(--border)] pt-5"}>
                  <dd className="nums font-[family-name:var(--font-display)] text-[2rem] leading-none font-semibold text-[var(--ink-deep)]">
                    {s.value}
                  </dd>
                  <dt className="mt-1.5 text-[11.5px] text-[var(--muted)]">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* ---------- Centre: copy ---------- */}
          <Reveal className="lg:px-4" delay={120}>
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[var(--muted)] uppercase">
              About Us
            </span>

            <h2 className="mt-5 font-[family-name:var(--font-display)] text-[2.1rem] leading-[1.1] text-[var(--ink-deep)] sm:text-[2.6rem]">
              A Venue Built
              <span className="block">For Celebrations</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Our aim is simple. A hall that looks the part and a team that behaves like family, so
              your guests remember the day and you remember it without the stress.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-[var(--ink-deep)] px-7 py-4 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-colors hover:bg-[var(--gold)] hover:text-[var(--ink-deep)]"
            >
              Schedule A Visit
              <span aria-hidden>→</span>
            </Link>
          </Reveal>

          {/* ---------- Right: tall detail shot ---------- */}
          <Reveal className="hidden lg:block" delay={240}>
            <div className="relative aspect-[9/16] overflow-hidden">
              <CropImage
                src="/1J6A0141.jpg"
                alt="Fitted wooden wardrobe and storage in a guest room"
                position="50% 50%"
                sizes="18vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
