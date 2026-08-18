import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[var(--ink-deep)] pt-44 pb-28">
      <div className="royal-pattern absolute inset-0 opacity-60" />
      <Container className="relative flex flex-col items-center gap-5 text-center">
        <p className="nums font-[family-name:var(--font-display)] text-7xl text-[var(--gold)]">404</p>
        <h1 className="text-3xl text-white sm:text-4xl">This page doesn&apos;t exist</h1>
        <p className="max-w-md text-sm text-white/70">
          The link may be old or mistyped. Head back home, or get in touch and we&apos;ll point you
          in the right direction.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/" variant="gold">
            Back to Home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
