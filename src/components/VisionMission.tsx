import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

const pillars = [
  {
    index: "01",
    label: "Our Vision",
    heading: "The first hall Bengaluru families think of",
    body: "To be the venue that comes to mind the moment a date is fixed. Known less for its chandeliers than for the fact that nothing goes wrong on the day it matters.",
  },
  {
    index: "02",
    label: "Our Mission",
    heading: "Run every event like it's our own family's",
    body: "One coordinator from the first call to the farewell, food cooked in our own kitchen, and a written quote with nothing waiting in the fine print.",
  },
] as const;

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink-deep)] py-16 sm:py-20 lg:py-24">
      <div className="royal-pattern absolute inset-0 opacity-40" />

      <Container size="wide" className="relative">
        <Reveal>
          <div className="text-center">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[var(--gold)] uppercase">
              What Drives Us
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[2rem] leading-[1.12] text-white sm:text-[2.4rem]">
              Vision &amp; Mission
            </h2>
            <span className="gold-rule mx-auto mt-5 block" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {pillars.map((p, i) => (
            <Reveal key={p.index} delay={i * 120}>
              <article className="group h-full border border-white/10 bg-white/[0.04] p-8 transition-colors hover:border-[var(--gold)]/40 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-[var(--gold)] uppercase">
                    {p.label}
                  </span>
                  <span className="nums font-[family-name:var(--font-display)] text-[2.6rem] leading-none font-semibold text-white/12 transition-colors group-hover:text-[var(--gold)]/35">
                    {p.index}
                  </span>
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-display)] text-[1.45rem] leading-snug text-white sm:text-[1.6rem]">
                  {p.heading}
                </h3>

                <span className="mt-5 block h-px w-12 bg-[var(--gold)]" />

                <p className="mt-5 text-sm leading-relaxed text-white/60">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
