import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

interface FeatureCard {
  number: string;
  tag: string;
  title: string;
  summary: string;
  deliverables: string[];
  bgColor: string;
  badgeBg: string;
  badgeText: string;
}

const features: FeatureCard[] = [
  {
    number: "01",
    tag: "ARCHITECTURE",
    title: "Headless Storefronts & Next.js App Router",
    summary: "Decouple your frontend presentation from back-office commerce logic. Deliver sub-second page transitions, dynamic personalized shelves, and infinite customization without theme bloat.",
    deliverables: [
      "Next.js App Router with Server Component streaming",
      "Shopify Storefront GraphQL API / MedusaJS integration",
      "Instant page transitions with zero layout shift (CLS 0)",
      "Edge caching on global CDN nodes for international shoppers",
    ],
    bgColor: "bg-canvas-card",
    badgeBg: "bg-indigo-mid",
    badgeText: "text-canvas",
  },
  {
    number: "02",
    tag: "CONVERSION (CRO)",
    title: "1-Click Custom Checkouts & Upsell Funnels",
    summary: "Eliminate checkout drop-off with streamlined payment accordions, auto-address completion, localized currency switches, and post-purchase one-click upsell flows.",
    deliverables: [
      "Custom checkout UI extensions with native Apple Pay / UPI",
      "Dynamic in-cart bundles and volume tier pricing tiers",
      "Abandoned checkout recovery triggers with high open rates",
      "A/B tested checkout flow variations with live telemetry",
    ],
    bgColor: "bg-canvas-card",
    badgeBg: "bg-peacock",
    badgeText: "text-canvas",
  },
  {
    number: "03",
    tag: "OPERATIONS & SYNC",
    title: "Enterprise ERP, Inventory & WMS Pipelines",
    summary: "Keep inventory across online channels, physical retail points of sale, and warehouse fulfillment hubs synchronized with zero latency and automated backorder rules.",
    deliverables: [
      "Bi-directional webhook sync with Unicommerce, SAP, and Zoho",
      "Multi-location inventory allocation and split shipping logic",
      "Automated tax, GST invoice generation, and courier tracking",
      "Real-time webhook error catching and retry queues",
    ],
    bgColor: "bg-canvas-card",
    badgeBg: "bg-marigold",
    badgeText: "text-indigo-dark",
  },
  {
    number: "04",
    tag: "GROWTH ACQUISITION",
    title: "High-Intent Product Feeds & Paid Catalogs",
    summary: "Maximize ROAS across Google Shopping, Meta Dynamic Product Ads, and Pinterest by automating rich keyword attributes, high-resolution lifestyle images, and real-time pricing feeds.",
    deliverables: [
      "Automated Google Merchant Center product feed syndication",
      "Meta Advantage+ catalog optimization with custom frames",
      "High-intent commercial SEO landing pages for SKU clusters",
      "Server-side Meta Conversions API (CAPI) and GA4 purchase events",
    ],
    bgColor: "bg-canvas-card",
    badgeBg: "bg-terracotta",
    badgeText: "text-canvas",
  },
];

export default function EcommerceFeatures() {
  return (
    <section className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t border-indigo-main/20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-terracotta" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
              TECHNICAL CAPABILITIES
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main">
            How we engineer commerce
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-text max-w-md">
          A four-tier operational framework designed to eliminate friction between your customer clicking an ad and completing an order.
        </p>
      </div>

      {/* 4 Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((item) => (
          <div
            key={item.number}
            className={`p-8 rounded-2xl border-2 border-indigo-main ${item.bgColor} shadow-[6px_6px_0px_#121a4a] flex flex-col justify-between`}
          >
            <div>
              {/* Card top badge */}
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-indigo-main/15">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded ${item.badgeBg} ${item.badgeText}`}>
                  MODULE {item.number}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-text tracking-wider uppercase">
                  {item.tag}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-indigo-main mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="font-sans text-sm text-slate-text leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* Deliverables checklist */}
              <div className="pt-4 border-t border-indigo-main/15">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-text block mb-3">
                  INCLUDED DELIVERABLES:
                </span>
                <ul className="flex flex-col gap-2 text-xs text-indigo-main font-medium">
                  {item.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <span className="text-peacock font-bold mt-0.5">✓</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom link */}
            <div className="pt-6 mt-6 border-t border-indigo-main/15 flex items-center justify-between">
              <Link
                href="/contact"
                className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-mid hover:text-terracotta flex items-center gap-1.5 transition-colors"
              >
                <span>Request Technical Scope</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[10px] font-mono text-slate-text/70 uppercase">
                SPRINT READY
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

