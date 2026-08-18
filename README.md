# Visha Royal Convention Hall — Next.js Website

A complete marketing + booking site for the convention hall, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

## Run it

```bash
npm install     # already done
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Pages

| Route       | What's on it                                                                 |
| ----------- | ---------------------------------------------------------------------------- |
| `/`         | Hero, stats, facilities, about strip, services, gallery preview, packages, testimonials, FAQ, CTA |
| `/about`    | Story, stats band, milestone timeline, facilities grid                       |
| `/services` | Six alternating service sections, deep-linkable via `#weddings`, `#corporate`, … |
| `/gallery`  | Filterable gallery grid (client-side category filter)                        |
| `/pricing`  | Silver / Gold / Platinum packages, add-on rate table, booking FAQ            |
| `/contact`  | Contact cards, WhatsApp button, booking enquiry form, map embed              |

Plus `/sitemap.xml`, `/robots.txt`, a custom 404, JSON-LD `EventVenue` structured data, and Open Graph / Twitter metadata.

## Editing content

**Almost all text lives in one file: [`src/lib/site.ts`](src/lib/site.ts).**

Change the phone number, address, WhatsApp number, packages, services, FAQs, testimonials and gallery captions there and every page updates. Nothing is hard-coded in the components.

Start with these — they're placeholders right now:

- `site.phone`, `site.phoneAlt`, `site.whatsapp` (digits only, with country code)
- `site.email`, `site.address`
- `site.mapEmbed` — paste your venue's Google Maps embed URL (Maps → Share → Embed a map)
- `site.social` links
- `packages` prices, and the `addOns` table in [`src/app/pricing/page.tsx`](src/app/pricing/page.tsx)
- `milestones` in [`src/app/about/page.tsx`](src/app/about/page.tsx)
- The domain in `metadataBase` ([`src/app/layout.tsx`](src/app/layout.tsx)), `sitemap.ts` and `robots.ts`

## Adding real photos

Every image is currently a styled `<Placeholder />` (gradient + gold motif + caption), so the site looks finished with zero assets. To swap in real photos:

1. Drop images into `public/gallery/` (e.g. `hall-01.jpg`).
2. Replace `<Placeholder label="…" className="aspect-[4/3]" />` with:

```tsx
import Image from "next/image";

<Image
  src="/gallery/hall-01.jpg"
  alt="Grand banquet hall"
  width={1200}
  height={900}
  className="aspect-[4/3] w-full rounded-2xl object-cover"
/>
```

The `Placeholder` component is in [`src/components/ui.tsx`](src/components/ui.tsx) — aspect ratios and rounding already match, so it's a drop-in swap.

## The enquiry form

`POST /api/enquiry` ([`src/app/api/enquiry/route.ts`](src/app/api/enquiry/route.ts)) validates the submission server-side and currently **logs it to the server console**. It works out of the box; to actually receive enquiries, replace the `console.log` with one of:

- **Email** — `resend` or `nodemailer`
- **Google Sheet** — Apps Script webhook
- **CRM / WhatsApp Business API** — your existing pipeline

## Design system

Colours are CSS variables in [`src/app/globals.css`](src/app/globals.css) — deep maroon `--maroon`, antique gold `--gold`, warm ivory `--background`. Change them there and the whole site re-themes. Fonts: Cormorant Garamond (headings) + Inter (body), self-hosted via `next/font`.

## Deploy

Push to GitHub and import on [Vercel](https://vercel.com) — zero config. Or `npm run build && npm run start` behind any Node host.
