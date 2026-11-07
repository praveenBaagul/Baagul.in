import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

interface CaseStudy {
  id: string;
  tag: string;
  client: string;
  headline: string;
  summary: string;
  features?: string[];
  statNumber: string;
  statLabel: string;
  imgSrc: string;
  imgAlt: string;
  layout: "image-left" | "image-right";
  badgeBg: string;
  badgeText: string;
  href?: string;
  linkText?: string;
}

const studies: CaseStudy[] = [
  {
    id: "propfirm-coupons",
    tag: "FINTECH · SCALING ARCHITECTURE",
    client: "propfirm.coupons",
    headline: "Built for traders who compare before they commit — zero overpaying on funded challenges.",
    summary: "We verify prop firm coupon terms, track rule changes, and calculate real costs so traders never overpay. Features side-by-side fee and profit-split comparisons, instant browser-side challenge filtering, and live verified discount codes.",
    features: [
      "Coupon terms in one place — eligibility & expiry tracking",
      "Side-by-side comparison of fees, profit splits & drawdown",
      "Instant client-side filtering by account size & platform",
      "Always free — no sign-up or paywall for traders",
    ],
    statNumber: "86+",
    statLabel: "Active Deals & Discounts",
    imgSrc: "/assets/propfirm-coupons-showcase.jpg",
    imgAlt: "propfirm.coupons platform - compare prop firms, find active discounts and trade smarter",
    layout: "image-left",
    badgeBg: "bg-peacock-light",
    badgeText: "text-peacock-dark",
    href: "https://propfirm.coupons",
    linkText: "Visit propfirm.coupons",
  },
  {
    id: "khevana-dagli",
    tag: "LEGAL PRACTICE · DIGITAL AUTHORITY",
    client: "Advocate Khevana Dagli",
    headline: "Divorce, criminal defence & civil litigation practice in Mumbai — result-driven counsel and high-converting search visibility.",
    summary: "Built the digital practice foundation and high-intent local search dominance for Mumbai advocate Khevana Dagli, establishing authority across contested divorce, child custody, domestic violence, urgent bail, and property disputes.",
    features: [
      "Contested & mutual divorce and child custody counsel",
      "Urgent bail, anticipatory bail & 498A defence litigation",
      "Domestic violence & property dispute advisory",
      "High-intent Mumbai legal search visibility & consultation bookings",
    ],
    statNumber: "+280%",
    statLabel: "Qualified Consultation Growth",
    imgSrc: "/assets/khevana-dagli-showcase.jpg",
    imgAlt: "Advocate Khevana Dagli - Divorce, Criminal & Civil Lawyer in Mumbai",
    layout: "image-right",
    badgeBg: "bg-marigold/20",
    badgeText: "text-terracotta",
    href: "https://khevanadagli.com/",
    linkText: "Visit khevanadagli.com",
  },
  {
    id: "seo-neo-backlinks",
    tag: "BACKLINK SERVICES · LONDON, UK",
    client: "SEO Neo Backlinks",
    headline: "Backlinks that support your SEO, delivered with a transparent report.",
    summary: "Built supporting link architecture for agencies, freelancers, and site owners across the UK. Every placement is verified and documented with live URLs in an exportable delivery spreadsheet.",
    features: [
      "No retainers — flexible on-demand backlink packages",
      "Full live URLs and target anchor text provided",
      "60-day replacement guarantee on all placements",
      "100% matched verified live URL reporting",
    ],
    statNumber: "100%",
    statLabel: "Live Placements Verified",
    imgSrc: "/assets/seo-neo-backlinks-webdesign.jpg",
    imgAlt: "SEO Neo Backlinks - Backlink services delivered with full verification report",
    layout: "image-left",
    badgeBg: "bg-indigo-mid/10",
    badgeText: "text-indigo-mid",
    href: "https://seoneobacklinks.com/",
    linkText: "Visit seoneobacklinks.com",
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
                <div className="relative bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[6px_6px_0px_#121a4a] overflow-hidden group">
                  <div className="relative w-full aspect-[512/279] overflow-hidden">
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Metric hanging badge */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-marigold border border-indigo-main px-3 py-1.5 sm:px-4 sm:py-2 rounded shadow-[3px_3px_0px_#121a4a] z-10">
                    <span className="font-heading text-lg sm:text-xl font-bold text-indigo-main block">
                      {item.statNumber}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-wider text-indigo-main/80">
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

                <p className="font-sans text-sm sm:text-base text-slate-text leading-relaxed mb-4">
                  {item.summary}
                </p>

                {item.features && item.features.length > 0 && (
                  <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs font-sans text-indigo-main/80 font-medium">
                        <span className="text-terracotta font-bold shrink-0">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={item.href || "#contact"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-mid hover:text-terracotta transition-colors group"
                >
                  <span>{item.linkText || "View case debrief"}</span>
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

