import type { MetadataRoute } from "next";
import { indexableRoutes } from "@/lib/site";

const BASE_URL = "https://vishalroyalconventionhall.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((href) => ({
    url: `${BASE_URL}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : 0.8,
  }));
}
