import type { Metadata } from "next";
import { faqs } from "@/lib/site";
import { faqSchema, pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import LocalSeo from "@/components/LocalSeo";
import HighlightBanner from "@/components/HighlightBanner";
import FaqShowcase from "@/components/FaqShowcase";
import HeroSlider from "@/components/HeroSlider";
import ExperienceStrip from "@/components/ExperienceStrip";
import GalleryCollage from "@/components/GalleryCollage";
import AboutShowcase from "@/components/AboutShowcase";
import ContactShowcase from "@/components/ContactShowcase";
import Testimonials from "@/components/Testimonials";
import ServicesCarousel from "@/components/ServicesCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = pageMetadata({
  title: "Convention Hall in Uttarahalli, Bengaluru | Vishal Royal",
  description:
    "AC convention hall in Uttarahalli, Bengaluru for weddings, receptions and corporate events. Seats 1200, in-house catering, guest rooms and 200+ car parking.",
  path: "/",
  keywords: [
    "convention hall Uttarahalli",
    "wedding hall Bengaluru",
    "banquet hall Poornapragna Layout",
    "reception venue South Bengaluru",
    "AC marriage hall with parking Bengaluru",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ---------------- Hero slider ---------------- */}
      <HeroSlider />

      {/* ---------------- Experience / capabilities strip ---------------- */}
      <ExperienceStrip />

      {/* ---------------- About ---------------- */}
      <AboutShowcase />

      {/* ---------------- Why choose us ---------------- */}
      <WhyChooseUs />

      {/* ---------------- Services ---------------- */}
      <ServicesCarousel />

      {/* ---------------- Gallery preview ---------------- */}
      <GalleryCollage
        eyebrow="Gallery"
        title="A look inside the hall"
        caption="Real moments from weddings, receptions and family functions hosted with us."
        ctaHref="/gallery"
        ctaLabel="View the full gallery"
      />


      {/* ---------------- Testimonials ---------------- */}
      <Testimonials />

      {/* ---------------- Highlights ---------------- */}
      <HighlightBanner />

      {/* ---------------- FAQ ---------------- */}
      <FaqShowcase />

      {/* ---------------- Contact ---------------- */}
      <ContactShowcase />

      {/* ---------------- Local SEO / locality ---------------- */}
      <LocalSeo />
    </>
  );
}
