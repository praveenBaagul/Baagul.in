import { SITE_URL } from "@/lib/site";
import { SERVICE_DETAILS } from "./generated";
import type { ServiceDetails } from "./types";

/**
 * The service catalogue. Summaries and deliverables are written here; process
 * steps and FAQs come from the service pages through ./generated.ts.
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
    description: "Guest posting services, blogger outreach and digital PR that place your brand on relevant publications with genuine audiences, for referral traffic and brand visibility.",
    deliverables: ["Editorial Placements on Relevant Publications", "Guest Post Content Writing", "Blogger Outreach & Digital PR", "Live Placement Reports"],
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
    description: "E-commerce website development in Bangalore: Shopify and WooCommerce stores, custom and headless Next.js storefronts, checkout optimization and payment integration.",
    deliverables: ["Shopify & WooCommerce Store Development", "Headless Next.js Commerce", "Checkout & Payment Gateway Integration", "Inventory Sync & Post-Purchase Automation"],
  },
  {
    slug: "wordpress-development",
    name: "WordPress & CMS Development",
    url: `${SITE_URL}/services/wordpress-development`,
    description: "WordPress development company in Bangalore: custom WordPress websites, redesigns, Gutenberg block themes, migration, speed optimization and maintenance.",
    deliverables: ["Custom WordPress Themes & Gutenberg Blocks", "WordPress Redesign & Migration", "Speed, Security & Performance Optimization", "Monthly WordPress Maintenance"],
  },
  {
    slug: "paid-promotions",
    name: "Paid Promotions & Media Buying",
    url: `${SITE_URL}/services/paid-promotions`,
    description: "Performance marketing agency in Bangalore: Google Ads and PPC management, Meta Ads, LinkedIn Ads, lead generation and sales campaigns, measured on leads, sales and ROAS.",
    deliverables: ["Full-Funnel Campaign Strategy", "High-Converting Ad Creatives & Copy", "Server-Side Tracking (GTM/CAPI)", "Cohort Retention & ROAS Reporting"],
  },
  {
    slug: "video-editing",
    name: "Video Editing & Motion Graphics",
    url: `${SITE_URL}/services/video-editing`,
    description: "Video editing services in Bangalore: YouTube video editing, Instagram Reels and Shorts, promotional video ads, corporate and product videos, and motion graphics.",
    deliverables: ["Short-Form Reels / Shorts Edits", "Kinetic Typography & Motion Graphics", "Audio Mastering & Sound Design", "Multi-Platform Export Formats"],
  },
  {
    slug: "app-development",
    name: "App Development",
    url: `${SITE_URL}/services/app-development`,
    description: "Mobile app development company in Bangalore: Android and iOS apps, React Native and Flutter cross-platform apps, UI/UX prototyping, backend APIs and startup MVPs.",
    deliverables: ["Cross-Platform React Native App", "Offline-First Data Architecture", "Biometric Auth & Push Notifications", "App Store & Play Store Submissions"],
  },
];

export const SERVICE_SLUGS = SERVICES.map((service) => service.slug);

export type DetailedService = Service & ServiceDetails;

export function getService(slug: unknown): DetailedService | undefined {
  const service = SERVICES.find((candidate) => candidate.slug === slug);
  if (!service) return undefined;
  return { ...service, ...(SERVICE_DETAILS[service.slug] ?? { process: [], faqs: [] }) };
}

/** Looks up several slugs. Returns the ones that are not services in `unknown`. */
export function getServices(slugs: string[]) {
  const found: DetailedService[] = [];
  const unknown: string[] = [];
  for (const slug of slugs) {
    const service = getService(slug);
    if (service) found.push(service);
    else unknown.push(slug);
  }
  return { found, unknown };
}
