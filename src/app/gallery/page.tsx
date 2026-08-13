import type { Metadata } from "next";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { Button, Container, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photos of Vishal Royal Convention Hall, Uttarahalli. See the banquet hall, entrance foyer, ceiling work, stage setups and air-conditioned guest rooms.",
  path: "/gallery",
  keywords: ["convention hall photos Bengaluru", "banquet hall gallery Uttarahalli", "wedding hall pictures Bengaluru"],
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("Gallery", "/gallery")} />

      <PageHero
        eyebrow="Gallery"
        title="Inside Vishal Royal Convention Hall"
        subtitle="The banquet hall, the entrance foyer, the ceiling work and the guest rooms. Click any photo to open it full size."
        image="/1J6A0292.jpg"
        imagePosition="50% 55%"
      />

      <Section id="gallery-grid" className="pt-4 sm:pt-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Photos of Vishal Royal Convention Hall"
          subtitle="The hall, the foyer, the ceiling work and the rooms. Filter by what you'd like to see, then click any photo to open it full size."
        />
        <div className="mt-12">
          <GalleryGrid />
        </div>
      </Section>

      <section className="bg-[var(--cream)] py-14">
        <Container className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-xl text-2xl text-[var(--ink-deep)] sm:text-3xl">
            Photos only tell half the story
          </h2>
          <p className="max-w-lg text-sm text-[var(--muted)]">
            Visit the hall in person. We&apos;ll walk you through the space and talk through how it
            would work for your event.
          </p>
          <Button href="/contact">Book a Site Visit</Button>
        </Container>
      </section>
    </>
  );
}
