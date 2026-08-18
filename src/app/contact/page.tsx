import type { Metadata } from "next";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { fullAddress, site } from "@/lib/site";
import { IconClock, IconMail, IconPhone, IconPin, IconWhatsApp } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import EnquiryForm from "@/components/EnquiryForm";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Booking",
  description:
    "Check date availability at #1A Appaji Arcade, Poornapragna Layout, Uttarahalli, Bengaluru 560061. Call +91 80504 01728 for a free site visit.",
  path: "/contact",
  keywords: ["convention hall contact Bengaluru", "book wedding hall Uttarahalli", "Vishal Royal Convention Hall address"],
});

const contactCards = [
  {
    icon: IconPhone,
    title: "Call Us",
    lines: [site.phone, site.phoneAlt, site.landline],
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: IconMail,
    title: "Email",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: IconPin,
    title: "Visit",
    lines: [fullAddress],
  },
  {
    icon: IconClock,
    title: "Office Hours",
    lines: [site.hours],
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Contact", "/contact")} />

      <PageHero
        eyebrow="Contact"
        title="Let's check if your date is free"
        subtitle="Call us, message us on WhatsApp, or fill in the form, whichever is easiest. Someone from our team will get back to you the same day."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          {/* Details */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const inner = (
                  <div className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--gold)]">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--cream)] text-[var(--ink)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[var(--ink-deep)]">{c.title}</p>
                      {c.lines.map((l) => (
                        <p key={l} className="mt-0.5 text-sm leading-relaxed text-[var(--muted)]">
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.title} href={c.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={c.title}>{inner}</div>
                );
              })}
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                `Hi ${site.shortName}, I'd like to check availability for my event.`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <IconWhatsApp className="h-5 w-5" />
              Message us on WhatsApp
            </a>
          </div>

          <EnquiryForm />
        </div>
      </Section>

      {/* Map */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)]">
            <iframe
              title={`Map to ${site.name}`}
              src={site.mapEmbed}
              className="h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 text-center text-xs text-[var(--muted)]">
            Replace <code>mapEmbed</code> in <code>src/lib/site.ts</code> with your venue&apos;s
            Google Maps embed URL to show the exact location.
          </p>
        </Container>
      </section>
    </>
  );
}
