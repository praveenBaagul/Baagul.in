"use client";

import React from "react";
import Link from "next/link";
import type { VideoFormatId } from "./VideoEditingFormatShowcase";

interface FeatureItem {
  number: string;
  title: string;
  description: string;
  badgeBg: string;
  formatId: VideoFormatId;
  formatLabel: string;
}

const features: FeatureItem[] = [
  {
    number: "01",
    title: "Short-Form Reels & Shorts",
    description: "Vertical edits for Instagram Reels, YouTube Shorts, and TikTok with hooks in the first 3 seconds.",
    badgeBg: "bg-[#0E7A63] text-[#FEF9ED]",
    formatId: "reels",
    formatLabel: "9:16 Phone Mockup",
  },
  {
    number: "02",
    title: "YouTube & Long-Form Editing",
    description: "Pacing, jump cuts, chapters, and retention-focused storytelling for long-form content.",
    badgeBg: "bg-[#FFBA45] text-[#0E1153]",
    formatId: "youtube",
    formatLabel: "16:9 YouTube Mockup",
  },
  {
    number: "03",
    title: "Ad Creatives & Promo Videos",
    description: "Performance-ready video ads for Meta, YouTube, and Google in every aspect ratio.",
    badgeBg: "bg-[#CFE8DC] text-[#0E1153]",
    formatId: "ads",
    formatLabel: "Feed Ad Mockup",
  },
  {
    number: "04",
    title: "Motion Graphics & Titles",
    description: "Animated text, lower thirds, logo reveals, and branded transitions.",
    badgeBg: "bg-[#E1E3F7] text-[#0E1153]",
    formatId: "motion",
    formatLabel: "NLE Suite Mockup",
  }
];

export default function VideoEditingFeatures() {
  const handleSelectFormat = (formatId: VideoFormatId) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-video-format", { detail: formatId })
      );
      const element = document.getElementById("format-showcase");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section className="relative w-full bg-[#1B1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">

            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0E1153] border border-[#FFBA45]/40 shadow-[2px_2px_0px_#FFBA45] rounded mb-5">
              <span className="w-2 h-2 bg-[#FFBA45] rounded-full" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFBA45]">
                ■ MAIN FEATURES
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] font-bold text-[#FEF9ED] mb-6">
              Story-driven
              <br />
              <span className="font-serif italic font-normal text-[#FFBA45]">
                edits
              </span>
            </h2>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/80 leading-relaxed mb-8 max-w-md">
              Professionally edited videos for social media, YouTube, and ads that capture attention, boost engagement, and keep viewers watching. Click any capability to preview its live device mockup below.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFBA45] text-[#0E1153] font-mono text-xs uppercase tracking-wider font-bold border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFFFFF] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFFFFF] transition-all"
              >
                <span>Enroll our Service</span>
                <span className="text-sm">→</span>
              </Link>

              <a
                href="#format-showcase"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-bold border border-white/20 transition-all"
              >
                <span>Live Mockups ↓</span>
              </a>
            </div>

            {/* Corner Graphic Accent */}
            <div className="mt-12 hidden lg:flex items-center gap-2 text-[10px] font-mono text-[#FEF9ED]/50">
              <span className="w-1.5 h-1.5 bg-[#FFBA45]" />
              <span>EDIT SUITE // 04 INTERACTIVE FORMATS</span>
            </div>

          </div>

          {/* Right Column: 2x2 Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((item) => (
              <div
                key={item.number}
                onClick={() => handleSelectFormat(item.formatId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelectFormat(item.formatId);
                  }
                }}
                className="group bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl p-5 shadow-[5px_5px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#FFBA45] transition-all duration-200 flex flex-col justify-between cursor-pointer text-left"
              >
                <div>
                  {/* Top Bar with Number Badge */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#0E1153]/15">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#0E1153]/30 ${item.badgeBg}`}>
                      {item.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#0E7A63] uppercase tracking-wider bg-[#CFE8DC] px-2 py-0.5 rounded border border-[#0E7A63]/30">
                      {item.formatLabel}
                    </span>
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-heading text-xl font-bold text-[#0E1153] mb-2 leading-snug group-hover:text-[#0E7A63] transition-colors">
                    {item.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="font-sans text-xs text-[#0E1153]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Interactive Preview Bar */}
                <div className="pt-3 mt-4 border-t border-[#0E1153]/10 flex items-center justify-between text-[11px] font-mono font-bold text-[#0E1153]">
                  <span className="flex items-center gap-1.5 text-[#0E7A63] group-hover:text-[#0E1153] transition-colors">
                    <span>VIEW LIVE MOCKUP</span>
                    <span className="text-[9px]">▶</span>
                  </span>
                  <span className="w-5 h-5 rounded-full bg-[#0E1153] text-[#FEF9ED] flex items-center justify-center text-[10px] group-hover:bg-[#FFBA45] group-hover:text-[#0E1153] transition-colors">
                    ↓
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

