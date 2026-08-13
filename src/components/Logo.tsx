import Image from "next/image";
import Link from "next/link";

/**
 * The gold "V" emblem from /public/logo.png plus the wordmark.
 * Built for dark backgrounds (overlay header + footer).
 */
export default function Logo({
  size = 44,
  className = "",
  tone = "light",
}: {
  size?: number;
  className?: string;
  /** "light" = white text for dark backgrounds, "dark" = for light backgrounds. */
  tone?: "light" | "dark";
}) {
  const nameColor = tone === "light" ? "text-white" : "text-[var(--ink-deep)]";
  const subColor = tone === "light" ? "text-[var(--gold)]" : "text-[var(--ink)]/55";
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="Vishal Royal Convention Hall, home">
      <Image
        src="/logo.png"
        alt=""
        width={size}
        height={size}
        priority
        className="h-auto w-[var(--logo-size)] shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]"
        style={{ "--logo-size": `${size}px` } as React.CSSProperties}
      />
      <span className="leading-tight">
        <span
          className={`block font-[family-name:var(--font-display)] text-[19px] tracking-wide ${nameColor}`}
        >
          Vishal Royal
        </span>
        <span
          className={`block text-[9px] font-semibold uppercase tracking-[0.3em] ${subColor}`}
        >
          Convention Hall
        </span>
      </span>
    </Link>
  );
}
