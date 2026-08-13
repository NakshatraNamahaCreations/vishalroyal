import type { Metadata } from "next";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { services, site } from "@/lib/site";
import { IconCheck, IconPhone } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import { Button, Container, Section, SectionHeading } from "@/components/ui";
import CropImage from "@/components/CropImage";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Weddings, receptions, engagements, corporate events and birthdays in Uttarahalli, Bengaluru, with in-house catering, decor and event management.",
  path: "/services",
  keywords: ["wedding hall services Bengaluru", "reception venue Uttarahalli", "corporate event hall Bengaluru", "engagement hall with catering"],
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Services", "/services")} />

      <PageHero
        eyebrow="Services"
        title="Occasions we host, end to end"
        subtitle="Pick the hall alone or hand us the whole event, with catering, decor, sound, photography and coordination included."
      />

      <Section>
        <div className="space-y-20">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <CropImage
                    src={s.image}
                    alt={s.title}
                    position={s.imagePosition}
                    sizes="(max-width: 1024px) 92vw, 46vw"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <SectionHeading align="left" eyebrow={`0${i + 1}`} title={s.title} />
                <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">{s.body}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-[var(--foreground)]/85">
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button href="/contact" variant="primary">
                    Enquire About This
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-[var(--ink)] py-16">
        <div className="royal-pattern absolute inset-0 opacity-60" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl">
            Not sure which setup fits your event?
          </h2>
          <p className="max-w-xl text-sm text-white/75">
            Tell us your guest count and the date, and we&apos;ll recommend the right hall
            configuration and menu, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="gold">
              Send an Enquiry
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
