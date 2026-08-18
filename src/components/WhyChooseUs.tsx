import { highlights } from "@/lib/site";
import { iconMap } from "@/components/Icons";
import { Container } from "@/components/ui";

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--surface)] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_repeat(6,1fr)]">
          {/* ---------- Heading cell ---------- */}
          <div className="pb-8 sm:col-span-2 lg:col-span-1 lg:pr-10 lg:pb-0">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[var(--muted)] uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[1.9rem] leading-[1.12] text-[var(--ink-deep)] sm:text-[2.2rem]">
              Everything Your Event
              <span className="block">Needs, Under One Roof</span>
            </h2>
            <span className="mt-5 block h-px w-14 bg-[var(--gold)]" />
          </div>

          {/* ---------- Feature columns ---------- */}
          {highlights.map((h) => {
            const Icon = iconMap[h.icon];
            return (
              <div
                key={h.title}
                className="border-t border-[var(--border)] px-5 py-8 text-center sm:even:border-l lg:border-t-0 lg:border-l lg:px-4"
              >
                <Icon className="mx-auto h-7 w-7 text-[var(--gold)]" />
                <h3 className="mt-5 text-[12.5px] leading-snug font-bold text-[var(--ink-deep)]">
                  {h.title}
                </h3>
                <p className="mt-2.5 text-[11.5px] leading-relaxed text-[var(--muted)]">{h.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
