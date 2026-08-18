"use client";

import { useEffect, useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/site";
import { IconExpand } from "@/components/Icons";
import CropImage from "@/components/CropImage";

type Item = (typeof galleryItems)[number];

export default function GalleryGrid() {
  const [active, setActive] = useState<string>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);

  const visible =
    active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  // Escape closes the lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === c
                ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--ink)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {visible.map((g, i) => (
          <button
            key={`${g.title}-${i}`}
            type="button"
            onClick={() => setLightbox(g)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl text-left"
          >
            <span className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
              <CropImage
                src={g.src}
                alt={g.title}
                position={g.position}
                zoom={g.zoom}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 30vw"
              />
            </span>
            <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-4">
              <span className="block font-[family-name:var(--font-display)] text-base text-white">
                {g.title}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-[var(--gold)]">
                {g.category}
              </span>
            </span>
            <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <IconExpand className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-sm text-[var(--muted)]">
          No photos in this category yet.
        </p>
      ) : null}

      {/* Lightbox */}
      {lightbox ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-black"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-5 w-5">
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[3/2] w-full">
              <CropImage
                src={lightbox.src}
                alt={lightbox.title}
                position={lightbox.position}
                zoom={lightbox.zoom}
                sizes="90vw"
              />
            </div>
            <figcaption className="bg-black/70 px-5 py-4">
              <p className="font-[family-name:var(--font-display)] text-lg text-white">
                {lightbox.title}
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--gold)]">
                {lightbox.category}
              </p>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
