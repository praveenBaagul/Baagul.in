import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

interface CaseStudy {
  id: string;
  tag: string;
  client: string;
  headline: string;
  summary: string;
  statNumber: string;
  statLabel: string;
  imgSrc: string;
  imgAlt: string;
  layout: "image-left" | "image-right";
  badgeBg: string;
  badgeText: string;
}

const studies: CaseStudy[] = [
  {
    id: "neo-financial",
    tag: "FINTECH · SCALING ARCHITECTURE",
    client: "Neo Financial Cloud",
    headline: "Engineered organic pipeline yielding 4.2x qualified demo requests in 90 days.",
    summary: "Re-architected the entire technical SEO taxonomy, authored 45 authoritative fintech research pages, and unified paid search bidding around high LTV accounts.",
    statNumber: "+340%",
    statLabel: "Inbound Pipeline Growth",
    imgSrc: "/assets/3d387.png",
    imgAlt: "Neo Financial Cloud web dashboard and metrics preview",
    layout: "image-left",
    badgeBg: "bg-peacock-light",
    badgeText: "text-peacock-dark",
  },
  {
    id: "mysore-silk",
    tag: "HERITAGE COMMERCE · D2C",
    client: "Mysore Silk Co.",
    headline: "Taking 85 years of artisanal weave craftsmanship to global buyers with headless Shopify.",
    summary: "Designed an editorial shopping journey preserving the tactile dignity of authentic mulberry silk, coupled with high-converting catalog ads across USA and GCC expat audiences.",
    statNumber: "₹4.8 Cr",
    statLabel: "International GMV Delivered",
    imgSrc: "/assets/e49c5.png",
    imgAlt: "Mysore Silk Co editorial e-commerce website showcase",
    layout: "image-right",
    badgeBg: "bg-marigold/20",
    badgeText: "text-terracotta",
  },
  {
    id: "astra-logistics",
    tag: "ENTERPRISE B2B · APPLICATION OS",
    client: "Astra Logistics OS",
    headline: "Transforming regional freight tracking into an enterprise-grade booking SaaS.",
    summary: "Redesigned the entire web UI/UX in Next.js, eliminated latency on dispatch boards, and launched target account account-based marketing (ABM) for supply chain decision makers.",
    statNumber: "62%",
    statLabel: "Lower Customer Acquisition Cost",
    imgSrc: "/assets/31eaa.png",
    imgAlt: "Astra Logistics OS portal running on tablet and desktop monitors",
    layout: "image-left",
    badgeBg: "bg-indigo-mid/10",
    badgeText: "text-indigo-mid",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t border-indigo-main/20">
      {/* Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-peacock" />
          <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
            SELECTED PROOFS & ENGAGEMENTS
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main">
          Work we&apos;re proud of
        </h2>
      </div>

      {/* Spreads list */}
      <div className="flex flex-col gap-16">
        {studies.map((item, idx) => (
          <div key={item.id} className="flex flex-col">
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${item.layout === "image-right" ? "lg:grid-flow-dense" : ""
                }`}
            >
              {/* Image Box */}
              <div
                className={`lg:col-span-7 ${item.layout === "image-right" ? "lg:col-start-6" : ""
                  }`}
              >
                <div className="relative p-3 sm:p-4 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[6px_6px_0px_#121a4a] overflow-hidden group">
                  <div className="relative h-64 sm:h-96 w-full rounded-lg overflow-hidden border border-indigo-main/30">
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Metric hanging badge */}
                  <div className="absolute bottom-6 right-6 bg-marigold border border-indigo-main px-4 py-2 rounded shadow-[3px_3px_0px_#121a4a]">
                    <span className="font-heading text-xl font-bold text-indigo-main block">
                      {item.statNumber}
                    </span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-indigo-main/80">
                      {item.statLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Narrative Box */}
              <div
                className={`lg:col-span-5 flex flex-col items-start ${item.layout === "image-right" ? "lg:col-start-1" : ""
                  }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded ${item.badgeBg} ${item.badgeText}`}>
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl text-indigo-main font-semibold mb-3">
                  {item.client}
                </h3>

                <p className="font-sans font-medium text-base sm:text-lg text-indigo-main/90 mb-4 leading-snug">
                  {item.headline}
                </p>

                <p className="font-sans text-sm sm:text-base text-slate-text leading-relaxed mb-6">
                  {item.summary}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-mid hover:text-terracotta transition-colors group"
                >
                  <span>View case debrief</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Running Stitch Divider between spreads */}
            {idx < studies.length - 1 && (
              <div className="w-full my-12 border-t-2 border-dashed border-indigo-main/20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

