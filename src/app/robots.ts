import type { MetadataRoute } from "next";

// Required for `output: "export"` — tells Next.js to bake this at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://vishalroyalconventionhall.com/sitemap.xml",
  };
}
