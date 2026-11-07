"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SampleQuery {
  id: string;
  query: string;
  title: string;
  url: string;
  displayUrl: string;
  description: string;
  sitelinks: string[];
}

const sampleQueries: SampleQuery[] = [
  {
    id: "camera",
    query: "camera rental bangalore",
    title: "Bangalore Camera Rentals | Professional Camera & Lens Hire",
    url: "https://bangalorecamerarentals.com/",
    displayUrl: "https://bangalorecamerarentals.com",
    description:
      "Bangalore's trusted film equipment rental studio. Rent Sony FX3, Canon cine lenses, wireless audio, stabilizers, and lighting kits with doorstep delivery.",
    sitelinks: ["Cinema Cameras", "Lens Packages", "Lighting & Sound", "Rental Rates"],
  },
  {
    id: "lawyer",
    query: "divorce lawyer in mumbai",
    title: "Advocate Khevana Dagli | Divorce & Family Law Specialist Mumbai",
    url: "https://khevanadagli.com/",
    displayUrl: "https://khevanadagli.com",
    description:
      "Advocate Khevana Dagli provides honest, result-oriented legal counsel for mutual consent divorce, child custody, domestic violence, and financial settlement matters in Mumbai.",
    sitelinks: ["Consultation Booking", "Child Custody", "Mutual Divorce", "Client Reviews"],
  },
  {
    id: "criminal",
    query: "best criminal lawyer in mumbai",
    title: "Best Criminal Lawyer in Mumbai | Urgent Bail & Defence Counsel",
    url: "https://bestcriminallawyerinmumbai.com/",
    displayUrl: "https://bestcriminallawyerinmumbai.com",
    description:
      "24/7 urgent bail applications, anticipatory bail, economic offense defense, and high court litigation across Greater Mumbai courts with dedicated defense advocates.",
    sitelinks: ["Urgent Bail 24/7", "Anticipatory Bail", "Trial Representation", "Contact Chambers"],
  },
  {
    id: "software",
    query: "manually reviewed software",
    title: "Manually Reviewed | Authentic Tech & SaaS Product Benchmarks",
    url: "https://manuallyreviewed.com/",
    displayUrl: "https://manuallyreviewed.com",
    description:
      "Independent editorial analysis and benchmark testing of marketing stacks, AI dev tools, and enterprise cloud applications with unbiased scoring.",
    sitelinks: ["SaaS Tools 2026", "Security Reviews", "AI Software", "Comparison Matrix"],
  },
];

export default function SeoSuccessHero() {
  const [activeQueryIdx, setActiveQueryIdx] = useState(0);
  const activeQuery = sampleQueries[activeQueryIdx];

  return (
    <section className="relative w-full bg-[#FEF9ED] text-[#0E1153] pt-10 pb-20 px-4 sm:px-8 lg:px-12 border-b-2 border-[#0E1153] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-[#3E4945]">
            <li>
              <Link href="/" className="hover:text-[#FFA800] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-[#FFA800] transition-colors">
                Services
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services/seo-optimizations" className="hover:text-[#FFA800] transition-colors">
                SEO Optimization
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#005F4C] font-bold" aria-current="page">
              Client Success Stories
            </li>
          </ol>
        </nav>

        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (6.5 cols): Copy & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] mb-6 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FFA800]" />
              <span>OUR CLIENT SUCCESS STORIES</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0E1153] leading-[1.08] mb-6">
              <span>Real Businesses.</span>
              <br />
              <span className="inline-block bg-[#FFA800] text-[#0E1153] px-3.5 py-0.5 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] mt-2">
                Real Google Success.
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-base sm:text-lg text-[#3E4945] leading-relaxed mb-8 max-w-xl">
              Helping businesses get discovered on Google, attract organic visitors, and turn search visibility into durable growth opportunities through scientific search architecture.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#005F4C] text-[#FEF9ED] font-heading font-bold text-sm sm:text-base border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all cursor-pointer"
              >
                <span>Talk With Our SEO Experts</span>
                <span>→</span>
              </Link>

              <a
                href="#clients"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#0E1153] font-heading font-bold text-sm sm:text-base border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all cursor-pointer"
              >
                <span>Explore Client Results</span>
                <span>↓</span>
              </a>
            </div>

            {/* Micro Trust Stats */}
            <div className="flex items-center gap-6 pt-6 border-t border-[#0E1153]/20 w-full text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
                <span className="font-bold text-[#0E1153]">5 Featured Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
                <span className="font-bold text-[#0E1153]">100% White-Hat Only</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0E1153]" />
                <span className="font-bold text-[#0E1153]">Live Verified Data</span>
              </div>
            </div>
          </div>

          {/* Right Column (5.5 cols): Realistic Google Search UI Card */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] p-5 sm:p-6 text-left relative overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#0E1153]/15">
                <div className="flex items-center gap-2">
                  {/* Google 4-Color Dots */}
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                  </div>
                  <span className="font-sans font-bold text-xs tracking-tight text-[#3C4043] ml-1">
                    Google Search Simulation
                  </span>
                </div>

                <span className="px-2.5 py-0.5 rounded bg-[#CFE8DC] border border-[#005F4C] text-[10px] font-mono font-bold text-[#005F4C]">
                  ORGANIC SERP
                </span>
              </div>

              {/* Sample Query Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] font-mono font-bold text-[#3E4945]">Try Search:</span>
                {sampleQueries.map((q, idx) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setActiveQueryIdx(idx)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all border ${
                      activeQueryIdx === idx
                        ? "bg-[#0E1153] text-[#FEF9ED] border-[#0E1153] shadow-[2px_2px_0px_#FFA800]"
                        : "bg-[#FAFAFA] text-[#0E1153] border-[#0E1153]/30 hover:bg-[#EDE8DC]"
                    }`}
                  >
                    {q.query}
                  </button>
                ))}
              </div>

              {/* Simulated Google Search Box */}
              <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] mb-6">
                <svg className="w-4 h-4 text-[#70757A] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span className="font-sans text-xs sm:text-sm text-[#202124] font-medium flex-1 truncate">
                  {activeQuery.query}
                </span>
                <span className="text-[#4285F4] text-xs font-mono font-bold">🔍</span>
              </div>

              {/* Simulated Organic Google Search Result Snippet */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAFAFA] border border-[#0E1153]/25">
                {/* Result Top Line: Favicon & Domain */}
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#005F4C] text-[#FEF9ED] flex items-center justify-center font-bold text-[10px]">
                    ✦
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-sans text-[#202124] font-medium">
                      {activeQuery.title.split("|")[0].trim()}
                    </span>
                    <span className="text-[11px] font-mono text-[#4D5156] truncate">
                      {activeQuery.displayUrl}
                    </span>
                  </div>
                </div>

                {/* Main Link Title */}
                <a
                  href={activeQuery.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base sm:text-lg font-semibold text-[#1A0DAB] hover:underline block leading-snug mb-2"
                >
                  {activeQuery.title}
                </a>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#4D5156] leading-relaxed mb-3">
                  {activeQuery.description}
                </p>

                {/* Sitelinks Grid */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#0E1153]/15">
                  {activeQuery.sitelinks.map((link, lIdx) => (
                    <div key={lIdx} className="text-xs font-sans text-[#1A0DAB] flex items-center gap-1.5">
                      <span className="text-[9px] text-[#70757A]">↳</span>
                      <span className="hover:underline">{link}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-[#3E4945]">
                <span>Status: Top Organic Google Visibility</span>
                <span className="text-[#005F4C] font-bold">✓ Verified Indexing</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

