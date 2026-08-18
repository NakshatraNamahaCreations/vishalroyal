import type { Metadata } from "next";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { highlights, stats } from "@/lib/site";
import { iconMap } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import AboutIntro from "@/components/AboutIntro";
import VisionMission from "@/components/VisionMission";
import WhyChooseAbout from "@/components/WhyChooseAbout";
import { Button, Card, Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Family-run convention hall in Uttarahalli, Bengaluru, hosting weddings, receptions and corporate events since 2012. Meet the team behind the hall.",
  path: "/about",
  keywords: ["about Vishal Royal Convention Hall", "family run convention hall Bengaluru", "wedding venue Uttarahalli history"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("About", "/about")} />

      <PageHero
        eyebrow="About"
        title="A venue built by a family, for families"
        subtitle="We're not a chain and we don't run on scripts. Every booking at Vishal Royal is handled by someone whose name you'll know before your event day."
        image="/1J6A0169.jpg"
        imagePosition="50% 50%"
      />

      <AboutIntro />

      <VisionMission />

      {/* Stats */}
      <section className="bg-[var(--ink-deep)] py-14">
        <Container>
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dd className="nums font-[family-name:var(--font-display)] text-4xl text-[var(--gold)]">
                  {s.value}
                </dd>
                <dt className="mt-2 text-[11px] uppercase tracking-[0.18em] text-white/60">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <WhyChooseAbout />

      {/* Facilities */}
      <section className="bg-[var(--cream)] py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Facilities"
            title="What comes with the hall"
            subtitle="Standard across every package, not add-ons you discover on the invoice."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => {
              const Icon = iconMap[h.icon];
              return (
                <Card key={h.title}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--cream)] text-[var(--ink)]">
                    <Icon />
                  </span>
                  <h3 className="mt-5 text-xl text-[var(--ink-deep)]">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{h.body}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact">Schedule a Venue Visit</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
