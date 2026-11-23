import { SITE_URL } from "@/lib/site";

/**
 * What the MCP server tells AI clients about Baagul. This is the single source
 * for the tools in ./server.ts. Keep it in step with the service pages.
 */

export interface Service {
  slug: string;
  name: string;
  url: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "web-design",
    name: "Website Design & Development",
    url: `${SITE_URL}/services/web-design`,
    description: "Pixel-perfect Next.js, React, and TypeScript web applications engineered with fluid micro-interactions and sub-second loading speeds.",
    deliverables: ["Figma UI/UX Prototypes", "Next.js App Router Architecture", "Core Web Vitals Optimization", "Accessibility (WCAG AA)", "CI/CD Deployment Pipelines"],
  },
  {
    slug: "seo-optimizations",
    name: "SEO Optimization",
    url: `${SITE_URL}/services/seo-optimizations`,
    description: "All-in-one organic search architecture that converts impressions into high-margin clients. Technical site health and Core Web Vitals.",
    deliverables: ["Technical SEO Audit & Remediation", "Semantic On-Page & Schema.org JSON-LD", "High-Intent Keyword Clustering", "Crawl Budget & Indexing Tuning"],
  },
  {
    slug: "logo-design",
    name: "Logo Design & Visual Identity",
    url: `${SITE_URL}/services/logo-design`,
    description: "Distinctive visual identities and scalable logo design engineered to command market authority across digital and physical touchpoints.",
    deliverables: ["Vector Logo Package (SVG/AI/PNG)", "Brand Identity Guidelines", "Typographic Scale & Color Systems", "Social & Collateral Kit"],
  },
  {
    slug: "guest-post",
    name: "Guest Posts & PR",
    url: `${SITE_URL}/services/guest-post`,
    description: "High-authority editorial placements and digital PR strategies that build verified domain authority and sustainable referral traffic.",
    deliverables: ["DA 50+ Editorial Placements", "Ghostwritten Technical Content", "Permanent Contextual Links", "Live Link Verification Reports"],
  },
  {
    slug: "graphics-design",
    name: "Graphic Designing",
    url: `${SITE_URL}/services/graphics-design`,
    description: "High-impact visual communication that drives engagement across paid media, brand collateral, and digital marketing channels.",
    deliverables: ["Paid Ad Creative Sets", "Marketing Collateral & One-Pagers", "Pitch Decks & Presentations", "Brand Identity Guidelines"],
  },
  {
    slug: "e-commerce-solutions",
    name: "E-Commerce Solutions",
    url: `${SITE_URL}/services/e-commerce-solutions`,
    description: "Headless commerce engineering and frictionless checkout workflows that maximize average order value and customer retention.",
    deliverables: ["Headless Next.js Commerce / Shopify", "One-Page Checkout Optimization", "ERP & Inventory Sync", "Post-Purchase Automation"],
  },
  {
    slug: "wordpress-development",
    name: "WordPress & CMS Development",
    url: `${SITE_URL}/services/wordpress-development`,
    description: "Clean, performant WordPress engineering built on custom Gutenberg blocks and lean architectures without plugin bloat.",
    deliverables: ["Custom Gutenberg Blocks", "ACF Pro Architecture", "Security & Database Hardening", "Speed & Object Caching Setup"],
  },
  {
    slug: "paid-promotions",
    name: "Paid Promotions & Media Buying",
    url: `${SITE_URL}/services/paid-promotions`,
    description: "Data-driven media buying across Google Ads, Meta, and LinkedIn focused on lower acquisition costs and maximum return on ad spend.",
    deliverables: ["Full-Funnel Campaign Strategy", "High-Converting Ad Creatives & Copy", "Server-Side Tracking (GTM/CAPI)", "Cohort Retention & ROAS Reporting"],
  },
  {
    slug: "video-editing",
    name: "Video Editing & Motion Graphics",
    url: `${SITE_URL}/services/video-editing`,
    description: "Cinematic promotional edits, kinetic typography, and short-form video content engineered to capture attention and elevate brand recall.",
    deliverables: ["Short-Form Reels / Shorts Edits", "Kinetic Typography & Motion Graphics", "Audio Mastering & Sound Design", "Multi-Platform Export Formats"],
  },
  {
    slug: "app-development",
    name: "App Development",
    url: `${SITE_URL}/services/app-development`,
    description: "Scalable iOS and Android mobile applications built with React Native and modern native APIs for seamless performance.",
    deliverables: ["Cross-Platform React Native App", "Offline-First Data Architecture", "Biometric Auth & Push Notifications", "App Store & Play Store Submissions"],
  },
];

export const CASE_STUDIES = [
  {
    client: "PropFirm Coupons",
    url: "https://propfirm.coupons",
    description: "Real-time proprietary trading challenge discounts and comparison platform. Engineered with Next.js, sub-second TTFB, and technical SEO structure that captured top Google rankings for commercial prop firm query variants.",
  },
  {
    client: "Advocate Khevana Dagli",
    url: `${SITE_URL}/services/seo-optimizations/client-success-stories`,
    description: "Legal practice brand authority and high-intent SEO architecture covering criminal, divorce, and civil litigation in Mumbai, driving top-tier organic inquiry growth.",
  },
  {
    client: "SEO Neo Backlinks Campaign",
    url: `${SITE_URL}/services/guest-post`,
    description: "Contextual high-DA editorial outreach and verified backlink portfolio engineering, elevating domain authority and competitive rankings.",
  },
];

export const STUDIO_INFO = {
  name: "Baagul LLP",
  tagline: "Architectural Digital Marketing & Web Engineering Studio",
  headquarters: "2nd Floor Hustlehub Tech Park, HSR Layout, Bengaluru, Karnataka 560102, India",
  email: "support@baagul.in",
  phone: "+91 62056 97634",
  website: SITE_URL,
  contact_page: `${SITE_URL}/contact`,
  operating_hours: "Monday - Friday, 09:30 AM - 06:30 PM IST",
};
