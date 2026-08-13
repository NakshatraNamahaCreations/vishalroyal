import Link from "next/link";
import CropImage from "@/components/CropImage";
import { Container } from "@/components/ui";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imagePosition = "50% 50%",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Optional background photograph. Falls back to the plain ink panel. */
  image?: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--ink-deep)] pt-36 pb-16 sm:pt-40 sm:pb-20">
      {image ? (
        <div className="absolute inset-0">
          <CropImage src={image} alt="" position={imagePosition} sizes="100vw" priority />
          <span className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/35" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/70" />
        </div>
      ) : (
        <>
          <div className="royal-pattern absolute inset-0 opacity-60" />
          <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-[var(--gold)]/12 blur-3xl" />
        </>
      )}

      <Container size="wide" className="relative">
        <nav className="mb-5 text-xs text-white/55" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[var(--gold-soft)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--gold-soft)]">{eyebrow}</span>
        </nav>
        <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <span className="gold-rule mt-5 block" />
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/75">{subtitle}</p>
        ) : null}
      </Container>
    </section>
  );
}
