import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { faqs, packages, site } from "@/lib/site";
import { IconCheck, IconPhone } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { Button, Container, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Pricing & Packages",
  description:
    "Transparent booking packages in Uttarahalli, Bengaluru. Rates for hall only, hall with catering, and all-inclusive wedding bookings.",
  path: "/pricing",
  keywords: ["convention hall booking price Bengaluru", "wedding hall rates Uttarahalli", "banquet hall package cost Bengaluru"],
});

const addOns = [
  { name: "Additional guest room (per night)", price: "₹2,500" },
  { name: "Live counter (dosa / chaat / grill)", price: "₹15,000" },
  { name: "Premium floral stage decor", price: "₹35,000 onwards" },
  { name: "Photography & videography (full day)", price: "₹45,000 onwards" },
  { name: "DJ with lighting", price: "₹25,000" },
  { name: "Valet parking service", price: "₹8,000" },
  { name: "LED wall (per day)", price: "₹18,000" },
  { name: "Extra hour beyond package", price: "₹6,000 / hour" },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema("Pricing", "/pricing"), faqSchema(faqs)]} />

      <PageHero
        eyebrow="Pricing"
        title="Transparent packages, no surprise charges"
        subtitle="Indicative rates for a full-day booking. Peak-season and weekend dates may vary, so call us for an exact, written quote."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                p.highlight
                  ? "border-[var(--gold)] bg-[var(--ink-deep)] text-white shadow-xl"
                  : "border-[var(--border)] bg-[var(--surface)]"
              }`}
            >
              {p.highlight ? (
                <span className="absolute -top-3 left-7 rounded-full bg-[var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-deep)]">
                  Most Booked
                </span>
              ) : null}
              <h2 className={`text-2xl ${p.highlight ? "text-white" : "text-[var(--ink-deep)]"}`}>
                {p.name}
              </h2>
              <p className={`mt-1 text-sm ${p.highlight ? "text-white/70" : "text-[var(--muted)]"}`}>
                {p.blurb}
              </p>
              <p className="nums mt-6 font-[family-name:var(--font-display)] text-4xl text-[var(--gold)]">
                {p.price}
              </p>
              <p className={`text-xs ${p.highlight ? "text-white/60" : "text-[var(--muted)]"}`}>
                {p.unit}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={`flex gap-3 text-sm ${
                      p.highlight ? "text-white/85" : "text-[var(--foreground)]/85"
                    }`}
                  >
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant={p.highlight ? "gold" : "outline"} className="w-full">
                  Enquire About {p.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--muted)]">
          All rates exclude GST. A 30% advance confirms your date. Prices shown are indicative and
          subject to date, guest count and menu selection.
        </p>
      </Section>

      {/* Add-ons */}
      <section className="bg-[var(--cream)] py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Add-ons"
            title="Optional extras"
            subtitle="Add any of these to your package. They are billed at the rates below and listed on your quote before you confirm."
          />
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-[var(--border)]">
                {addOns.map((a) => (
                  <tr key={a.name}>
                    <td className="px-6 py-4 text-[var(--foreground)]/85">{a.name}</td>
                    <td className="px-6 py-4 text-right font-semibold whitespace-nowrap text-[var(--ink)]">
                      {a.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Booking questions, answered"
          subtitle="Advance, cancellation, capacity and catering. The things worth knowing before you commit."
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <section className="relative overflow-hidden bg-[var(--ink)] py-16">
        <div className="royal-pattern absolute inset-0 opacity-60" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl">
            Want an exact quote for your date?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="gold">
              Request a Quote
            </Button>
            <Button href={`tel:${site.phone.replace(/\s/g, "")}`} variant="ghost">
              <IconPhone className="h-4 w-4" />
              {site.phone}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
