import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Preloader from "@/components/Preloader";
import { ContactModalProvider } from "@/components/ContactModal";
import { site } from "@/lib/site";
import { OG_IMAGE, SITE_URL, venueSchema, websiteSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

/** Montserrat carries the headings, Poppins the body copy. */
const display = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  // Real italics — a few headings are set in italic and would otherwise be
  // faked by the browser slanting the upright.
  style: ["normal", "italic"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "convention hall in Bengaluru",
    "wedding hall Uttarahalli",
    "banquet hall Poornapragna Layout",
    "marriage hall Bengaluru",
    "reception venue Bengaluru",
    "engagement hall Uttarahalli",
    "corporate event venue Bengaluru",
    "AC convention hall with parking",
    site.name,
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [{ url: OG_IMAGE, width: 1800, height: 1200, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "Event Venue",
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <JsonLd data={[venueSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Preloader />
        <ContactModalProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
        </ContactModalProvider>
      </body>
    </html>
  );
}
