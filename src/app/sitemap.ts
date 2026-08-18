import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/lib/site";

const BASE_URL = "https://vishalroyalconventionhall.com";

// Required for `output: "export"` — tells Next.js to bake this at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((href) => ({
    url: `${BASE_URL}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
