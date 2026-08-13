import Image from "next/image";

/**
 * Fills its (relative, overflow-hidden) parent with a zoomed crop of `src`.
 *
 * `object-position` alone can't isolate a region of a wide photo inside a
 * narrower box — cover already crops one axis to zero. Scaling from a chosen
 * transform-origin does, so a single photo can yield genuinely different shots
 * (the stage, the ceiling, the seating) instead of six near-identical tiles.
 */
export default function CropImage({
  src,
  alt,
  position = "50% 50%",
  zoom = 1,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  position?: string;
  zoom?: number;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <span className="absolute inset-0 overflow-hidden">
      <span
        className="absolute inset-0"
        style={{ transform: `scale(${zoom})`, transformOrigin: position }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" priority={priority} />
      </span>
    </span>
  );
}
