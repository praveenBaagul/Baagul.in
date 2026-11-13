"use client";

import React, { useState, useRef } from "react";

function OfferVideoPlayer({
  src,
  badgeLabel,
  badgeColor = "bg-[#FFA800]",
}: {
  src: string;
  badgeLabel: string;
  badgeColor?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div className="w-full bg-[#0E1153] border-2 border-[#0E1153] rounded-xl overflow-hidden shadow-[4px_4px_0px_#0E1153] relative group select-none">
      <div
        onClick={togglePlay}
        className="relative w-full aspect-video bg-[#0E1153] overflow-hidden cursor-pointer"
        title={isPlaying ? "Click to pause" : "Click to play"}
      >
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Center Play Overlay when Paused */}
        {!isPlaying && (
          <div className="absolute inset-0 z-10 bg-black/25 flex items-center justify-center backdrop-blur-[1px] transition-all">
            <div className="w-14 h-14 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] flex items-center justify-center text-[#0E1153] pl-1 text-xl font-bold group-hover:scale-110 group-hover:bg-[#FFA800] transition-all">
              ▶
            </div>
          </div>
        )}

        {/* Top Studio Indicator Badge */}
        <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0E1153]/85 backdrop-blur-xs border border-white/20 text-[#FEF9ED] font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider shadow-xs">
          <span className={`w-2 h-2 rounded-full ${badgeColor} ${isPlaying ? "animate-pulse" : ""}`} />
          <span>{badgeLabel}</span>
        </div>

        {/* Prominent High-Visibility Mute / Unmute Button */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
          className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] shadow-[2px_2px_0px_#0E1153] hover:bg-[#FFA800] hover:shadow-[1px_1px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 transition-all cursor-pointer font-mono font-bold tracking-wider uppercase select-none text-[10px] sm:text-xs"
        >
          {isMuted ? (
            <>
              <svg
                className="w-3.5 h-3.5 text-[#C8553D] shrink-0"
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
              <span className="text-[9px] px-1 py-0.2 rounded bg-[#0E1153]/10 text-[#0E1153] font-semibold">
                UNMUTE
              </span>
            </>
          ) : (
            <>
              <svg
                className="w-3.5 h-3.5 text-[#005F4C] shrink-0"
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
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <span>SOUND ON</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function PaidPromotionOffer() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
            <span className="w-2.5 h-2.5 bg-[#FFA800]" />
            <span>WHAT WE OFFER</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153]">
            What We Offer
          </h2>
        </div>

        {/* 3 Large Wide Feature Modules */}
        <div className="flex flex-col gap-8">
          {/* Module 01: Video Content Creation */}
          <div className="bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden">
            {/* Module Top Bar */}
            <div className="px-6 sm:px-8 py-4 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                Video Content Creation for Brand Awareness
              </h3>
              <span className="px-3 py-1 rounded bg-[#CFE8DC] border border-[#0E1153] text-xs font-mono font-bold text-[#005F4C]">
                BRAND SPONSORSHIP
              </span>
            </div>

            {/* Module Content Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Video Player Left (4 cols) */}
              <div className="lg:col-span-4">
                <OfferVideoPlayer
                  src="/assets/video/baagul-brand-video-content-promo.mp4"
                  badgeLabel="BRAND AWARENESS"
                  badgeColor="bg-[#FFA800]"
                />
              </div>


              {/* Text Column 1 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
                  <span>Build Trust and Loyalty</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Video content helps establish emotional connection with your audience. We engineer engaging brand films, customer testimonials, and creative product unboxings that turn passive viewers into recurring clients.
                </p>
              </div>

              {/* Text Column 2 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
                  <span>Platform-Specific Strategy</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Tailored video ratios and hooks formatted natively for YouTube horizontal sponsorships, Instagram Reels, and TikTok viral loops ensuring sub-second hook retention and algorithm reach.
                </p>
              </div>
            </div>
          </div>

          {/* Module 02: Premium PR Distribution & Media Exposure */}
          <div className="bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden">
            {/* Module Top Bar */}
            <div className="px-6 sm:px-8 py-4 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                Premium PR Distribution & Media Exposure
              </h3>
              <span className="px-3 py-1 rounded bg-[#FFA800] border border-[#0E1153] text-xs font-mono font-bold text-[#0E1153]">
                PR PACKAGES
              </span>
            </div>

            {/* Module Content Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text Column 1 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
                  <span>Maximum Media Exposure</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Expand your brand&apos;s reach through press release distribution across major news networks, including APNews, BarChart, StreetInsider, and ABC, CBS, FOX, and NBC affiliate stations. Gain exposure through 350+ downstream websites and strengthen your online presence.
                </p>
              </div>

              {/* Text Column 2 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
                  <span>Strategic Brand Visibility</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Promote your business announcements, product launches, and brand stories through an extensive media distribution network. Increase brand awareness, build online credibility, and explore additional exposure opportunities with our optional USA Today add-on.
                </p>
              </div>

              {/* Video Player Right (4 cols) */}
              <div className="lg:col-span-4">
                <OfferVideoPlayer
                  src="/assets/video/baagul-paid-promotion-promo.mp4"
                  badgeLabel="PR SPOTLIGHT"
                  badgeColor="bg-[#005F4C]"
                />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

