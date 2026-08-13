import Link from "next/link";
import { faqs, site } from "@/lib/site";
import { IconPhone } from "@/components/Icons";
import { Container } from "@/components/ui";
import FaqAccordion from "@/components/FaqAccordion";

export default function FaqShowcase() {
  return (
    <section className="bg-[var(--background)] py-16 sm:py-20 lg:py-24">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
          {/* ---------- Intro rail (sticks while the list scrolls) ---------- */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-semibold tracking-[0.28em] text-[var(--gold)] uppercase">
              FAQ
            </span>

            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[2rem] leading-[1.1] text-[var(--ink-deep)] sm:text-[2.4rem]">
              Frequently asked
              <span className="block">questions</span>
            </h2>

            <span className="gold-rule mt-5 block" />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              Dates, advance, capacity and catering. The things families ask before they book. If
              yours isn&apos;t answered here, call us and we&apos;ll tell you straight.
            </p>

            {/* Understated contact card */}
            <div className="mt-9 max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-sm font-semibold text-[var(--ink-deep)]">
                Still have a question?
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                We answer the phone ourselves. No call centre, no ticket number.
              </p>

              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-5 flex items-center gap-2.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:text-[var(--ink-deep)]"
              >
                <IconPhone className="h-4 w-4 text-[var(--gold)]" />
                {site.phone}
              </a>

              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 border-t border-[var(--border)] pt-4 text-sm font-semibold text-[var(--ink-deep)] transition-colors hover:text-[var(--ink)]"
              >
                Book a site visit
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* ---------- The list ---------- */}
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
