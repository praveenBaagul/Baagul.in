import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Permanent (308) redirects for renamed/duplicate URLs so search engines
  // transfer ranking to the new address. Add an entry here whenever a page
  // URL changes — never just delete the old page.
  async redirects() {
    return [
      // Internal renamed routes
      { source: "/careers", destination: "/career", permanent: true },
      { source: "/career/ui-ux-design", destination: "/career/ui-ux-designer", permanent: true },
      { source: "/careers/ui-ux-designer", destination: "/career/ui-ux-designer", permanent: true },
      { source: "/services/digital-marketing", destination: "/services/video-editing", permanent: true },
      { source: "/services/graphic-design", destination: "/services/graphics-design", permanent: true },
      { source: "/services/paid-promotion", destination: "/services/paid-promotions", permanent: true },
      { source: "/services/seo-optimization", destination: "/services/seo-optimizations", permanent: true },

      // Legacy sitemap pages (from page-sitemap.xml)
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/paid-promotion", destination: "/services/paid-promotions", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/case-studies", destination: "/services/seo-optimizations/client-success-stories", permanent: true },
      { source: "/about", destination: "/team", permanent: true },
      { source: "/sale", destination: "/services", permanent: true },

      // Legacy keyword posts (from post-sitemap.xml)
      { source: "/video-editing-production", destination: "/services/video-editing", permanent: true },
      { source: "/video-editor-freelance-remote", destination: "/career", permanent: true },
      { source: "/content-writer-freelance-remote", destination: "/career", permanent: true },
      { source: "/web-designing-development", destination: "/services/web-design", permanent: true },
      { source: "/logo-design-company-in-bangalore", destination: "/services/logo-design", permanent: true },
      { source: "/best-wordpress-website-development-company-in-bangalore", destination: "/services/wordpress-development", permanent: true },
      { source: "/guest-post", destination: "/services/guest-post", permanent: true },
      { source: "/seo-optimization", destination: "/services/seo-optimizations", permanent: true },
      { source: "/digital-marketing-agency-in-india", destination: "/services", permanent: true },
      { source: "/e-commerce-solutions-in-bangalore", destination: "/services/e-commerce-solutions", permanent: true },
      { source: "/graphic-designing", destination: "/services/graphics-design", permanent: true },
      { source: "/content-writting", destination: "/services/guest-post", permanent: true },
      { source: "/backlink-creating", destination: "/services/seo-optimizations", permanent: true },

      // Legacy categories (from category-sitemap.xml)
      { source: "/category/service", destination: "/services", permanent: true },
      { source: "/category/job", destination: "/career", permanent: true },
      { source: "/category/blog", destination: "/", permanent: true },

      // Legacy XML sitemap endpoints redirected to Next.js /sitemap.xml
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/category-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },
};

export default nextConfig;
