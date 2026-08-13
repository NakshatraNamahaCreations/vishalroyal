import Link from "next/link";
import { IconExpand } from "@/components/Icons";
import CropImage from "@/components/CropImage";
import { Container } from "@/components/ui";

/**
 * Collage tiles forming one edge-to-edge band across the wordmark.
 *
 * Widths are in `vw` from `sm` up so the row spans the full viewport and bleeds
 * off both sides; below `sm` they fall back to fixed px and the row scrolls
 * sideways. Each tile is a zoomed crop (see CropImage) so the three source
 * photos read as six distinct shots.
 */
const tiles = [
  {
    src: "/1J6A0136.jpg",
    position: "50% 50%",
    zoom: 1,
    width: "w-[140px] sm:w-[20vw]",
    height: "h-[150px] sm:h-[170px] lg:h-[205px]",
    offset: "translate-y-7 lg:translate-y-10",
    z: "z-10",
  },
  {
    src: "/ban1.jpg",
    position: "50% 50%",
    zoom: 1,
    width: "w-[168px] sm:w-[19vw]",
    height: "h-[190px] sm:h-[220px] lg:h-[268px]",
    offset: "translate-y-0",
    z: "z-20",
  },
  {
    src: "/1J6A0169.jpg",
    position: "50% 55%",
    zoom: 1,
    width: "w-[148px] sm:w-[17vw]",
    height: "h-[160px] sm:h-[182px] lg:h-[218px]",
    offset: "translate-y-9 lg:translate-y-14",
    z: "z-30",
  },
  {
    src: "/1J6A0306.jpg",
    position: "50% 50%",
    zoom: 1,
    width: "w-[160px] sm:w-[18vw]",
    height: "h-[180px] sm:h-[205px] lg:h-[248px]",
    offset: "translate-y-3",
    z: "z-20",
  },
  {
    src: "/1J6A0290.jpg",
    position: "50% 45%",
    zoom: 1,
    width: "w-[152px] sm:w-[19vw]",
    height: "h-[155px] sm:h-[176px] lg:h-[210px]",
    offset: "translate-y-8 lg:translate-y-12",
    z: "z-10",
  },
  {
    src: "/1J6A0292.jpg",
    position: "50% 50%",
    zoom: 1,
    width: "w-[142px] sm:w-[20vw]",
    height: "h-[195px] sm:h-[225px] lg:h-[272px]",
    offset: "-translate-y-2",
    z: "z-10",
  },
] as const;

export default function GalleryCollage({
  eyebrow,
  title,
  caption,
  ctaHref,
  ctaLabel,
  /** Adds clearance for the fixed header when this is the first thing on a page. */
  topPadded = false,
}: {
  eyebrow?: string;
  title?: string;
  caption: string;
  ctaHref: string;
  ctaLabel: string;
  topPadded?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-[var(--background)] pb-14 sm:pb-16 ${
        topPadded ? "pt-28 sm:pt-32" : "pt-14 sm:pt-20"
      }`}
    >
      {title ? (
        <Container size="wide" className="mb-8 sm:mb-4">
          <div className="flex flex-col items-center gap-3 text-center">
            {eyebrow ? (
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold)]">
                {eyebrow}
              </span>
            ) : null}
            <h2 className="max-w-2xl text-3xl leading-tight text-[var(--ink-deep)] sm:text-4xl">
              {title}
            </h2>
            <span className="gold-rule" />
          </div>
        </Container>
      ) : null}

      <div className="relative flex min-h-[280px] items-center sm:min-h-[400px] lg:min-h-[500px]">
        {/* Oversized wordmark sitting behind the photographs */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex select-none flex-col items-center justify-center font-[family-name:var(--font-display)] leading-[0.82] font-semibold tracking-[0.03em] text-[#171614]/[0.13]"
        >
          <span className="text-[clamp(3rem,26vw,18rem)]">Visha</span>
          <span className="text-[clamp(3rem,26vw,18rem)]">Royal</span>
        </div>

        {/* Full-bleed photo band, drifting continuously. Two copies of the tile
            list make the -50% loop seamless; hover or keyboard focus pauses it. */}
        <div className="marquee-host relative z-10 w-full overflow-hidden">
          <ul className="animate-marquee flex w-max items-center">
            {[...tiles, ...tiles].map((tile, i) => (
              <li
                key={`${tile.src}-${i}`}
                className={`relative -ml-5 shrink-0 overflow-hidden shadow-[0_16px_34px_-20px_rgba(12,12,12,0.55)] sm:-ml-[2vw] ${tile.width} ${tile.height} ${tile.offset} ${tile.z}`}
              >
                <CropImage
                  src={tile.src}
                  alt=""
                  position={tile.position}
                  zoom={tile.zoom}
                  sizes="(max-width: 640px) 45vw, 22vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Container size="wide">
        {/* Caption */}
        <p className="mx-auto mt-10 max-w-md text-center text-[13px] leading-relaxed text-[var(--muted)] sm:mt-14">
          {caption}
        </p>

        {/* Expand affordance, bottom-right like the reference */}
        <div className="mt-6 flex justify-end sm:-mt-4">
          <Link
            href={ctaHref}
            aria-label={ctaLabel}
            className="grid h-12 w-12 place-items-center rounded-full bg-[var(--ink-deep)] text-[var(--gold)] shadow-lg transition-transform hover:scale-105"
          >
            <IconExpand className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
