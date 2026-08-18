import { IconCatering, IconDecor, IconGuests, IconPlan } from "@/components/Icons";
import { Container } from "@/components/ui";

const capabilities = [
  {
    icon: IconPlan,
    title: "Event Planning",
    body: "We plan the day end to end with a named coordinator, so your family can focus on the celebration.",
  },
  {
    icon: IconCatering,
    title: "In-House Catering",
    body: "Multi-cuisine veg and non-veg menus cooked in our own kitchen, with tastings before you confirm.",
  },
  {
    icon: IconDecor,
    title: "Decor & Staging",
    body: "Floral, theme and traditional mandap setups designed and installed by our in-house team.",
  },
  {
    icon: IconGuests,
    title: "Guest Hospitality",
    body: "Bridal suite, guest rooms, valet parking and round-the-clock security for every visitor.",
  },
] as const;

export default function ExperienceStrip() {
  return (
    <section className="bg-[var(--background)] py-12 sm:py-16">
      <Container size="wide">
        <div className="grid divide-y divide-[var(--border)] border border-[var(--border)] sm:grid-cols-2 sm:divide-x lg:grid-cols-[0.62fr_1fr_1fr_1fr_1fr_1fr] lg:divide-y-0">
          {/* Years of experience */}
          <div className="flex flex-col justify-center px-6 py-7 sm:px-7">
            <span className="nums font-[family-name:var(--font-display)] text-5xl leading-none font-semibold text-[var(--ink-deep)]">
              14
            </span>
            <span className="mt-4 block h-px w-10 bg-[var(--gold)]" />
            <span className="mt-4 text-[10px] leading-relaxed font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
              Years of
              <span className="block">Experience</span>
            </span>
            <span
              aria-hidden
              className="mt-4 font-[family-name:var(--font-display)] text-xl italic text-[var(--ink)]/55"
            >
              Vishal Royal
            </span>
          </div>

          {/* Positioning line */}
          <div className="flex items-center px-6 py-7 sm:px-7">
            <p className="text-[15px] leading-relaxed text-[var(--ink-deep)]">
              We host celebrations that combine grand scale with the attention of a family-run
              venue.
            </p>
          </div>

          {/* Capabilities */}
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="px-6 py-7 sm:px-7">
                <Icon className="h-7 w-7 text-[var(--ink-deep)]" />
                <h3 className="mt-5 text-[11px] font-bold tracking-[0.16em] text-[var(--ink-deep)] uppercase">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-[var(--muted)]">{c.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
