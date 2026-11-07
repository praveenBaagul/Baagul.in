"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ShowcaseItem {
  id: string;
  clientName: string;
  keyword: string;
  url: string;
  displayUrl: string;
  title: string;
  snippet: string;
  category: string;
  imageSrc?: string;
  sitelinks?: string[];
  keyStrengths: string[];
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: "gsc-growth",
    clientName: "SEO Telemetry & Ranking Curve",
    keyword: "Google Search Console Verified Clicks & Impressions",
    url: "https://search.google.com/search-console",
    displayUrl: "search.google.com/search-console",
    title: "Google Search Console Performance Dashboard",
    snippet:
      "Active performance monitoring telemetry showing upward velocity across high-intent keywords, verified organic clicks, and compounding impressions curves.",
    category: "GSC PERFORMANCE TELEMETRY",
    imageSrc: "/assets/google-search-console-performance.jpg",
    keyStrengths: ["Verified Real GSC Data", "100% Organic Clicks", "Zero Penalty History"],
  },
  {
    id: "camera-rentals",
    clientName: "Bangalore Camera Rentals",
    keyword: "camera rental bangalore",
    url: "https://bangalorecamerarentals.com/",
    displayUrl: "https://bangalorecamerarentals.com",
    title: "Bangalore Camera Rentals - Hire Cameras, Lenses & Audio Equipment",
    snippet:
      "Looking for high-end video gear in Bangalore? Rent Sony FX3, A7S III, cine primes, wireless mics, and gimbals with zero hassle and fast turnaround.",
    category: "LOCAL BENGALURU SERP",
    sitelinks: ["Sony FX3 Hire", "Cinema Lenses", "Sound & Lighting", "Studio Booking"],
    keyStrengths: ["Targeted Geo-Intent", "Schema Markup Added", "High-Volume Buyer Traffic"],
  },
  {
    id: "khevana-dagli-serp",
    clientName: "Advocate Khevana Dagli",
    keyword: "divorce lawyer in mumbai",
    url: "https://khevanadagli.com/",
    displayUrl: "https://khevanadagli.com",
    title: "Divorce, Criminal & Civil Lawyer in Mumbai | Advocate Khevana Dagli",
    snippet:
      "Need help with divorce, child custody or urgent bail? Advocate Khevana Dagli provides honest, result-driven legal counsel for contested & mutual cases.",
    category: "LEGAL SEARCH AUTHORITY",
    imageSrc: "/assets/khevana-dagli-showcase.jpg",
    sitelinks: ["Practice Areas", "Book Consultation", "Mutual Consent", "Case Enquiries"],
    keyStrengths: ["High-Trust Legal Entity", "Local Mumbai Map Pack", "Direct WhatsApp Intake"],
  },
  {
    id: "manually-reviewed-serp",
    clientName: "Manually Reviewed",
    keyword: "software reviews & saas benchmarks",
    url: "https://manuallyreviewed.com/",
    displayUrl: "https://manuallyreviewed.com",
    title: "Manually Reviewed - Transparent Tech & Software Buying Guides",
    snippet:
      "Tested by real engineers. Deep teardowns of modern marketing software, hosting providers, and dev tools with performance benchmarks.",
    category: "EDITORIAL PRODUCT REVIEWS",
    sitelinks: ["Best Tools 2026", "Hosting Reviews", "AI Software Tests", "Editorial Standards"],
    keyStrengths: ["E-E-A-T Content Depth", "Fast Core Web Vitals", "Editorial Link Magnets"],
  },
  {
    id: "criminal-lawyer-serp",
    clientName: "Best Criminal Lawyer in Mumbai",
    keyword: "best criminal lawyer in mumbai",
    url: "https://bestcriminallawyerinmumbai.com/",
    displayUrl: "https://bestcriminallawyerinmumbai.com",
    title: "Best Criminal Lawyer in Mumbai - 24/7 Urgent Bail & Trial Defense",
    snippet:
      "Top-tier criminal defense attorneys specializing in anticipatory bail, CBI/ED trials, 498A defense, and appellate litigation in Bombay High Court.",
    category: "HIGH-INTENT LITIGATION",
    sitelinks: ["24/7 Urgent Bail", "White Collar Crimes", "High Court Chambers", "Call Immediately"],
    keyStrengths: ["24/7 Emergency Search Intent", "Structured Lawyer Schema", "Urgent Call Funnels"],
  },
  {
    id: "invitecodes-serp",
    clientName: "InviteCodes.org",
    keyword: "verified referral codes & bonuses",
    url: "https://invitecodes.org/",
    displayUrl: "https://invitecodes.org",
    title: "InviteCodes.org - Exclusive Referral Codes, Bonuses & Promo Perks",
    snippet:
      "Browse thousands of verified invitation codes for top fintech apps, exchange bonuses, and productivity platforms updated daily.",
    category: "FINTECH DIRECTORY",
    sitelinks: ["Top Deals Today", "Fintech Rewards", "Crypto Invites", "Submit a Code"],
    keyStrengths: ["Programmatic SEO Architecture", "High Indexation Rate", "Fast Mobile Pages"],
  },
];

export default function SeoSearchShowcase() {
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  return (
    <section id="search-showcase" className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#0E1153]/30 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
            <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
            <span>SEARCH ENGINE RESULTS PAGE (SERP)</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] tracking-tight leading-tight mb-4">
            See Our Clients on Google.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#3E4945] leading-relaxed">
            Explore real Google Search visibility examples from businesses we've worked with. Click any card to inspect the full search result profile in detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="p-6 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[5px_5px_0px_#0E1153] flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] group text-left"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedItem(item);
                }
              }}
              aria-label={`Inspect search showcase for ${item.clientName}`}
            >
              <div>
                {/* Search Badge & Keyword Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#0E1153]/15">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#005F4C] bg-[#CFE8DC] px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#3E4945] group-hover:text-[#FFA800] transition-colors flex items-center gap-1 font-bold">
                    <span>Enlarge</span>
                    <span>🔍</span>
                  </span>
                </div>

                {/* Target Query Bar */}
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F4F4F4] border border-[#0E1153]/20 mb-4 text-xs font-mono">
                  <span className="text-[#4285F4] font-bold">G</span>
                  <span className="text-[#202124] font-semibold truncate">
                    &ldquo;{item.keyword}&rdquo;
                  </span>
                </div>

                {/* Screenshot Preview if available */}
                {item.imageSrc && (
                  <div className="relative w-full aspect-[16/9] rounded-lg border border-[#0E1153]/25 overflow-hidden mb-4 shadow-inner">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                )}

                {/* Simulated Google Snippet Card */}
                <div className="p-3.5 rounded-lg bg-[#FAFAFA] border border-[#0E1153]/15 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-4 rounded-full bg-[#0E1153] text-[#FEF9ED] flex items-center justify-center font-bold text-[9px]">
                      ✦
                    </span>
                    <span className="text-[11px] font-mono text-[#4D5156] truncate">
                      {item.displayUrl}
                    </span>
                  </div>
                  <h4 className="font-sans text-sm font-semibold text-[#1A0DAB] group-hover:underline leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="font-sans text-xs text-[#4D5156] line-clamp-2 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>

                {/* Key Strengths tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {item.keyStrengths.map((str, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#EDE8DC] text-[#0E1153]"
                    >
                      ✓ {str}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-[#0E1153]">{item.clientName}</span>
                <span className="text-[#005F4C] group-hover:translate-x-1 transition-transform">
                  View SERP →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-[#0E1153]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-[#FFFFFF] border-3 border-[#0E1153] rounded-2xl shadow-[10px_10px_0px_#FFA800] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-left relative animate-in fade-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#0E1153]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#005F4C]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#005F4C]">
                    {selectedItem.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-full bg-[#EDE8DC] border border-[#0E1153] text-[#0E1153] font-mono font-bold flex items-center justify-center hover:bg-[#FFA800] transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Client & Query Details */}
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-2 leading-tight">
                {selectedItem.clientName}
              </h3>

              {/* Target Search Query */}
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F4F4F4] border-2 border-[#0E1153] mb-6">
                <span className="text-[#4285F4] font-bold text-sm">G</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#202124]">
                  Search Query: &ldquo;{selectedItem.keyword}&rdquo;
                </span>
              </div>

              {/* Full Image if available */}
              {selectedItem.imageSrc && (
                <div className="relative w-full aspect-[16/9] rounded-xl border-2 border-[#0E1153] overflow-hidden mb-6 shadow-md">
                  <Image
                    src={selectedItem.imageSrc}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                </div>
              )}

              {/* Expanded Google SERP Snippet Box */}
              <div className="p-5 rounded-xl bg-[#FAFAFA] border-2 border-[#0E1153] mb-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#005F4C] text-[#FEF9ED] flex items-center justify-center font-bold text-[10px]">
                    ✦
                  </span>
                  <span className="text-xs font-mono text-[#4D5156]">
                    {selectedItem.displayUrl}
                  </span>
                </div>
                <h4 className="font-sans text-lg font-bold text-[#1A0DAB] leading-snug mb-2">
                  {selectedItem.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#4D5156] leading-relaxed mb-4">
                  {selectedItem.snippet}
                </p>

                {selectedItem.sitelinks && selectedItem.sitelinks.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#0E1153]/15">
                    {selectedItem.sitelinks.map((link, lIdx) => (
                      <div key={lIdx} className="text-xs font-sans text-[#1A0DAB] flex items-center gap-1.5 font-medium">
                        <span className="text-[10px] text-[#70757A]">↳</span>
                        <span>{link}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technical Attributes Checklist */}
              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3E4945] block mb-2">
                  Search Architecture Attributes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.keyStrengths.map((str, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#CFE8DC] text-[#005F4C] border border-[#005F4C]"
                    >
                      ✓ {str}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-4 border-t-2 border-[#0E1153] flex flex-wrap items-center justify-between gap-4">
                <a
                  href={selectedItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFA800] text-[#0E1153] font-heading font-bold text-xs sm:text-sm border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                >
                  <span>Visit Client Website</span>
                  <span>↗</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 rounded-lg bg-[#EDE8DC] text-[#0E1153] font-mono text-xs font-bold border border-[#0E1153] hover:bg-[#E1E4FC] transition-colors"
                >
                  Close Preview
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

