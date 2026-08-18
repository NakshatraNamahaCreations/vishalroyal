import path from "node:path";
import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a static site for Hostinger shared hosting.
// Without it, `next build` produces a server build for Vercel (which
// serves /api/enquiry). Route handlers named `*.api.ts` are only picked
// up as routes in the server build, so the static export ignores them.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {
        pageExtensions: ["tsx", "ts", "jsx", "js", "api.ts"],
      }),
  // Pin the workspace root so Turbopack doesn't pick up a stray
  // package-lock.json from a parent directory.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
