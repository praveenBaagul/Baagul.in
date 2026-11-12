"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function PaidPromotionHero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure initial muted state complies with browser autoplay policies
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay fallback if blocked by user browser settings
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => { });
      }
    }
  };
  return (
    <section className="relative w-full bg-[#FEF9ED] text-[#0E1153] pt-12 pb-20 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow & Breadcrumb strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#0E1153]/70">
            <Link href="/" className="hover:text-[#005F4C] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#005F4C] transition-colors">
              OUR SERVICES
            </Link>
            <span>/</span>
            <span className="text-[#0E1153] font-black">PAID PROMOTIONS</span>
          </div>

          {/* Quad Color Motif */}
          <div className="grid grid-cols-2 gap-1 w-5 h-5">
            <span className="w-2 h-2 rounded-sm bg-[#005F4C]" />
            <span className="w-2 h-2 rounded-sm bg-[#FFA800]" />
            <span className="w-2 h-2 rounded-sm bg-[#0E1153]" />
            <span className="w-2 h-2 rounded-sm bg-[#E1E3F7]" />
          </div>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>PAID PROMOTION SERVICES</span>
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl lg:text-[78px] tracking-tight text-[#0E1153] leading-none mb-4">
              <span>Paid / </span>
              <span className="inline-block bg-[#FFA800] text-[#0E1153] px-5 py-1 rounded-[4px] border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] mt-2">
                Promotion
              </span>
            </h1>

            <p className="font-heading text-xl sm:text-2xl italic text-[#005F4C] font-semibold mb-6">
              Elevate Your Brand&apos;s Visibility and Impact
            </p>

            {/* Two Pill Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#005F4C] shadow-[2px_2px_0px_#0E1153]">
                ✓ HIGH-ROI PROMOTION
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
                ✓ CAMPAIGN TRANSPARENCY
              </span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#3E4945] max-w-xl leading-relaxed mb-8">
              At Baagul, we craft data-backed paid promotion strategies that drive real business results. From high-converting influencer campaigns and sponsor placements to targeted video promotions, we position your brand directly in front of buyers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
              >
                <span>Enroll our Service</span>
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFFFFF] text-[#0E1153] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:bg-[#FAF8F5] transition-all"
              >
                <span>Schedule a discovery call</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols) - Golden Video Player Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center relative">

            {/* Video Player Card */}
            <div className="w-full max-w-lg bg-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#FFA800] overflow-hidden relative group">
              <div
                onClick={toggleMute}
                className="relative w-full aspect-video bg-[#0E1153] overflow-hidden cursor-pointer select-none"
                title={isMuted ? "Click to unmute" : "Click to mute"}
              >
                <video
                  ref={videoRef}
                  src="/assets/video/baagul-video-editing-promo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />

                {/* Studio Live Badge */}
                <div className="absolute top-3 left-3 z-20 pointer-events-none flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0E1153]/85 backdrop-blur-xs border border-white/20 text-[#FEF9ED] font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-wider shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800] animate-pulse" />
                  <span>SPONSORED SPOTLIGHT</span>
                </div>

                {/* Prominent High-Visibility Mute / Unmute Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:bg-[#FFA800] hover:shadow-[2px_2px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer font-mono font-bold tracking-wider uppercase select-none text-xs"
                >
                  {isMuted ? (
                    <>
                      {/* Muted Speaker SVG */}
                      <svg
                        className="w-4 h-4 text-[#C8553D] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.414 0-.75-.336-.75-.75V10.5c0-.414.336-.75.75-.75h4.74z"
                        />
                      </svg>
                      <span>MUTED</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#0E1153]/10 text-[#0E1153] font-semibold">
                        UNMUTE
                      </span>
                    </>
                  ) : (
                    <>
                      {/* Sound Playing SVG */}
                      <svg
                        className="w-4 h-4 text-[#005F4C] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.414 0-.75-.336-.75-.75V10.5c0-.414.336-.75.75-.75h4.74z"
                        />
                      </svg>
                      <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                      <span>SOUND ON</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Tags Strip at Base */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-6 border-t border-dashed border-[#0E1153]/20">
          <span className="text-xs font-mono font-bold text-[#3E4945] uppercase mr-2">
            PROMOTION CHANNELS:
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            YOUTUBE
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            INSTAGRAM
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            TIKTOK
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            LINKEDIN
          </span>
        </div>
      </div>
    </section>
  );
}

