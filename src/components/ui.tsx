import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  /** "wide" hugs the viewport edges — used by the hero banner. */
  size?: "default" | "wide";
}) {
  const width =
    size === "wide" ? "max-w-[1600px] px-5 sm:px-8 lg:px-12" : "max-w-6xl px-5 sm:px-8";
  return <div className={`mx-auto w-full ${width} ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  /** Use "h1" on pages whose main heading lives in this component. */
  as?: "h1" | "h2";
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading
        className={`max-w-2xl text-3xl leading-tight sm:text-4xl ${
          light ? "text-white" : "text-[var(--ink-deep)]"
        }`}
      >
        {title}
      </Heading>
      <span className="gold-rule" />
      {subtitle ? (
        <p className={`max-w-2xl text-[15px] leading-relaxed ${light ? "text-white/75" : "text-[var(--muted)]"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "gold";
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--ink)] text-white hover:bg-[var(--ink-deep)] shadow-sm shadow-[var(--ink)]/25",
  gold: "bg-[var(--gold)] text-[var(--ink-deep)] hover:bg-[var(--gold-soft)]",
  outline:
    "border border-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold)] hover:text-[var(--ink-deep)]",
  ghost: "border border-white/35 text-white hover:bg-white hover:text-[var(--ink-deep)]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_1px_2px_rgba(12,12,12,0.04)] transition-shadow hover:shadow-[0_10px_30px_rgba(12,12,12,0.09)] ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Stand-in for a real photograph. Replace with next/image once you add
 * photos to /public/gallery — the aspect ratio and rounding are already set.
 */
export function Placeholder({
  label,
  caption,
  className = "",
}: {
  label: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`placeholder-sheen relative flex items-end overflow-hidden rounded-2xl ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="royal-pattern absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <svg
        viewBox="0 0 100 100"
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 text-[var(--gold)]/45"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        aria-hidden
      >
        <path d="M50 14 62 38l26 4-19 18 5 26-24-13-24 13 5-26-19-18 26-4z" strokeLinejoin="round" />
      </svg>
      <div className="relative z-10 w-full p-4">
        <p className="font-[family-name:var(--font-display)] text-base text-white">{label}</p>
        {caption ? <p className="text-xs text-white/70">{caption}</p> : null}
      </div>
    </div>
  );
}
