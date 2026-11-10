import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Permanent (308) redirects for renamed/duplicate URLs so search engines
  // transfer ranking to the new address. Add an entry here whenever a page
  // URL changes — never just delete the old page.
  async redirects() {
    return [
      { source: "/careers", destination: "/career", permanent: true },
      { source: "/career/ui-ux-design", destination: "/career/ui-ux-designer", permanent: true },
      { source: "/careers/ui-ux-designer", destination: "/career/ui-ux-designer", permanent: true },
      { source: "/services/digital-marketing", destination: "/services/video-editing", permanent: true },
      { source: "/services/graphic-design", destination: "/services/graphics-design", permanent: true },
      { source: "/services/paid-promotion", destination: "/services/paid-promotions", permanent: true },
      { source: "/services/seo-optimization", destination: "/services/seo-optimizations", permanent: true },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
