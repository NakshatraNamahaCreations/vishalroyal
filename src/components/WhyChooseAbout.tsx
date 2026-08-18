import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    title: "One coordinator, start to finish",
    body: "The person who takes your first call is the person standing in the hall on your event day. No handovers, no repeating yourself.",
  },
  {
    title: "Our own kitchen, not a contractor",
    body: "Food is cooked on site by our chefs, so timings hold and a tasting before you confirm is never a problem.",
  },
  {
    title: "Everyone stays in one place",
    body: "A bridal suite and air conditioned guest rooms upstairs mean nobody is driving between functions in wedding clothes.",
  },
  {
    title: "The quote is the bill",
    body: "Electricity, cleaning, generator and service staff are priced in writing before you pay an advance. Nothing appears later.",
  },
  {
    title: "Parking that actually fits",
    body: "Room for 200 cars and 300 two wheelers with valet help, so your guests are not circling the road at muhurtham time.",
  },
  {
    title: "Backup for the things that fail",
    body: "Full generator cover for the hall, kitchen and air conditioning, plus a spare sound system on standby.",
  },
] as const;

export default function WhyChooseAbout() {
  return (
    <section className="bg-[var(--surface)] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Sticky intro rail */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[11px] font-semibold tracking-[0.28em] text-[var(--muted)] uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] leading-[1.1] text-[var(--ink-deep)] sm:text-[2.4rem]">
              Six reasons
              <span className="block">families come back</span>
            </h2>
            <span className="gold-rule mt-5 block" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Most halls can give you a date and a room. These are the things that decide whether
              the day runs smoothly once the guests arrive.
            </p>
          </Reveal>

          {/* Numbered reasons */}
          <ol className="border-t border-[var(--border)]">
            {reasons.map((reason, i) => (
              <li key={reason.title} className="border-b border-[var(--border)]">
                <Reveal delay={i * 70}>
                  <div className="group flex gap-6 py-7 transition-colors sm:gap-9">
                    <span className="nums shrink-0 pt-1 font-[family-name:var(--font-display)] text-[1.6rem] leading-none font-semibold text-[var(--border)] transition-colors group-hover:text-[var(--gold)] sm:text-[2rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-[var(--ink-deep)] transition-colors group-hover:text-[var(--gold)] sm:text-xl">
                        {reason.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                        {reason.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
