"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export type VideoFormatId = "reels" | "youtube" | "ads" | "motion";

interface FormatTab {
  id: VideoFormatId;
  label: string;
  shortLabel: string;
  ratio: string;
  icon: string;
  badgeBg: string;
  description: string;
}

const formats: FormatTab[] = [
  {
    id: "reels",
    label: "Short-Form Reels & Shorts",
    shortLabel: "9:16 Reels & Shorts",
    ratio: "9:16 Vertical",
    icon: "📱",
    badgeBg: "bg-[#0E7A63] text-[#FEF9ED]",
    description: "Vertical cuts engineered for 3-second hook retention on Instagram Reels, YouTube Shorts, and TikTok.",
  },
  {
    id: "youtube",
    label: "YouTube & Long-Form Editing",
    shortLabel: "16:9 YouTube Desktop",
    ratio: "16:9 Widescreen",
    icon: "📺",
    badgeBg: "bg-[#FFBA45] text-[#0E1153]",
    description: "Paced for maximum watch-time with chapters, B-roll overlays, retention edits, and high-impact sound design.",
  },
  {
    id: "ads",
    label: "Ad Creatives & Promo Videos",
    shortLabel: "Feed Ads & Promos",
    ratio: "16:9 Feed Ad",
    icon: "🎯",
    badgeBg: "bg-[#CFE8DC] text-[#0E1153]",
    description: "High-converting performance video ads for Meta, TikTok, and YouTube designed to drive direct clicks and purchases.",
  },
  {
    id: "motion",
    label: "Motion Graphics & Titles",
    shortLabel: "NLE Suite & Motion",
    ratio: "Multi-Track Timeline",
    icon: "🎬",
    badgeBg: "bg-[#E1E3F7] text-[#0E1153]",
    description: "Custom lower thirds, kinetic typography, audio waveform design, and multi-track post-production mastering.",
  },
];

export default function VideoEditingFormatShowcase() {
  const [activeFormat, setActiveFormat] = useState<VideoFormatId>("reels");
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [likes, setLikes] = useState(48240);
  const [hasLiked, setHasLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Listen for format switch events emitted by features/services cards
  useEffect(() => {
    const handleFormatEvent = (e: Event) => {
      const customEvent = e as CustomEvent<VideoFormatId>;
      if (customEvent.detail && ["reels", "youtube", "ads", "motion"].includes(customEvent.detail)) {
        setActiveFormat(customEvent.detail);
        setIsPlaying(false);
        const element = document.getElementById("format-showcase");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    window.addEventListener("select-video-format", handleFormatEvent);
    return () => window.removeEventListener("select-video-format", handleFormatEvent);
  }, []);

  // Sync video audio and playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      if (isPlaying) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isMuted, isPlaying, activeFormat]);

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => { });
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => { });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const currentTab = formats.find((f) => f.id === activeFormat) || formats[0];

  return (
    <section
      id="format-showcase"
      className="relative w-full bg-[#FEF9ED] border-b-2 border-[#0E1153] py-12 sm:py-20 px-3 sm:px-8 lg:px-12 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b-2 border-dashed border-[#0E1153]/20 pb-6 sm:pb-8 mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2.5 h-2.5 bg-[#FFBA45] border border-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E1153]">
                ■ INTERACTIVE EDITING SUITE
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-[54px] text-[#0E1153] tracking-tight leading-tight">
              Format <span className="font-serif italic font-normal text-[#0E7A63]">Mockup</span> Showcase
            </h2>
          </div>
        </div>

        {/* Format Selector Pills Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          {formats.map((tab) => {
            const isActive = tab.id === activeFormat;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveFormat(tab.id);
                  setIsPlaying(false);
                }}
                className={`relative flex items-center justify-between p-3 sm:p-4 rounded-xl border-2 border-[#0E1153] text-left transition-all duration-200 cursor-pointer ${isActive
                  ? "bg-[#0E1153] text-[#FEF9ED] shadow-[4px_4px_0px_#FFBA45] translate-x-0.5 translate-y-0.5"
                  : "bg-white text-[#0E1153] shadow-[3px_3px_0px_#0E1153] hover:shadow-[4px_4px_0px_#FFBA45] hover:-translate-y-0.5"
                  }`}
              >
                <div className="flex flex-col gap-0.5 sm:gap-1 min-w-0 pr-1.5 sm:pr-2">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-sm sm:text-lg">{tab.icon}</span>
                    <span className="font-mono text-[9px] sm:text-xs font-bold uppercase tracking-wider truncate">
                      {tab.ratio}
                    </span>
                  </div>
                  <span className="font-heading text-[11px] sm:text-sm font-bold truncate">
                    {tab.label}
                  </span>
                </div>
                {isActive && (
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBA45] shrink-0 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Area */}
        <div className="bg-[#1B1F5E] border-2 border-[#0E1153] rounded-2xl sm:rounded-3xl p-3 sm:p-6 lg:p-10 shadow-[6px_6px_0px_#0E7A63] sm:shadow-[10px_10px_0px_#0E7A63] relative overflow-hidden">
          {/* Subtle Grid Backdrop Pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#FEF9ED 1px, transparent 1px), radial-gradient(#FEF9ED 1px, #1B1F5E 1px)",
              backgroundSize: "24px 24px",
              backgroundPosition: "0 0, 12px 12px",
            }}
          />

          {/* Top Bar of the Showcase Container */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 mb-6 sm:mb-8 border-b border-white/15">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded font-mono text-[9px] sm:text-xs font-bold uppercase tracking-wider border border-white/20 shrink-0 ${currentTab.badgeBg}`}>
                {currentTab.ratio}
              </span>
              <span className="font-heading text-base sm:text-xl font-bold text-[#FEF9ED] truncate">
                {currentTab.label}
              </span>
            </div>

            {/* Master Sound Button in Top Header */}
            <button
              type="button"
              onClick={toggleMute}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_#FFBA45] hover:bg-[#FFBA45] transition-all cursor-pointer shrink-0 self-start sm:self-auto"
            >
              {isMuted ? (
                <>
                  <svg className="w-3.5 h-3.5 text-[#C8553D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.414 0-.75-.336-.75-.75V10.5c0-.414.336-.75.75-.75h4.74z" />
                  </svg>
                  <span>MUTED · TAP FOR SOUND</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 text-[#0E7A63]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.414 0-.75-.336-.75-.75V10.5c0-.414.336-.75.75-.75h4.74z" />
                  </svg>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>SOUND ACTIVE</span>
                </>
              )}
            </button>
          </div>

          {/* MOCKUP 1: 9:16 PHONE MOCKUP (Short-Form Reels & Shorts) */}
          {activeFormat === "reels" && (
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-14 py-2 sm:py-4">
              {/* Phone Device Shell */}
              <div className="w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[330px] bg-[#0E1153] border-4 border-[#0E1153] rounded-[36px] sm:rounded-[44px] shadow-[8px_8px_0px_#0E7A63] sm:shadow-[12px_12px_0px_#0E7A63] p-2.5 sm:p-3 relative shrink-0">
                {/* Outer Glass Bezel Screen Frame */}
                <div className="relative w-full aspect-[9/16] bg-black rounded-[28px] sm:rounded-[36px] overflow-hidden border-2 border-white/20 group select-none">

                  {/* Dynamic Island / Top Speaker Notch */}
                  <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 z-30 w-20 sm:w-24 h-4 sm:h-5 bg-black rounded-full flex items-center justify-center gap-1.5 sm:gap-2 border border-white/10 px-2 pointer-events-none">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#1A1F5E]" />
                  </div>

                  {/* Reel Video Element */}
                  <video
                    ref={videoRef}
                    src="/assets/video/Shorts.mp4"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover object-center cursor-pointer"
                    onClick={togglePlay}
                  />

                  {/* Top Bar Overlay */}
                  <div className="absolute top-7 sm:top-9 left-3 sm:left-4 right-3 sm:right-4 z-20 flex items-center justify-between text-white drop-shadow-md pointer-events-none">
                    <span className="font-heading text-base sm:text-lg font-bold tracking-wide">
                      Reels
                    </span>
                    <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] font-bold">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500 animate-ping" />
                      <span>TRENDING</span>
                    </div>
                  </div>

                  {/* Right-Side Engagement Action Bar */}
                  <div className="absolute right-2 sm:right-3 bottom-16 sm:bottom-20 z-20 flex flex-col items-center gap-3 sm:gap-4 text-white drop-shadow-md">
                    {/* Like button */}
                    <button
                      type="button"
                      onClick={handleLike}
                      className="flex flex-col items-center gap-0.5 sm:gap-1 group/btn cursor-pointer"
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-transform group-hover/btn:scale-110 ${hasLiked ? "bg-rose-500 text-white" : "bg-black/40 text-white border border-white/20"}`}>
                        <span className="text-sm sm:text-lg">{hasLiked ? "❤️" : "🤍"}</span>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold">
                        {(likes / 1000).toFixed(1)}K
                      </span>
                    </button>

                    {/* Comments button */}
                    <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center backdrop-blur-md text-white text-xs sm:text-base">
                        💬
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold">1.4K</span>
                    </div>

                    {/* Share button */}
                    <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center backdrop-blur-md text-white text-xs sm:text-base">
                        ↗️
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold">8.9K</span>
                    </div>

                    {/* Sound Toggle Button directly on phone */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 cursor-pointer shadow-md transition-transform hover:scale-110 text-xs sm:text-base ${isMuted ? "bg-rose-600 text-white" : "bg-emerald-600 text-white"}`}
                      title={isMuted ? "Tap to unmute" : "Tap to mute"}
                    >
                      {isMuted ? "🔇" : "🔊"}
                    </button>

                    {/* Rotating Vinyl Audio Disc */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-black via-zinc-800 to-black border-2 border-white/30 animate-spin flex items-center justify-center">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFBA45]" />
                    </div>
                  </div>

                  {/* Bottom Creator Info & Captions Overlay */}
                  <div className="absolute left-3 sm:left-4 right-14 sm:right-16 bottom-3 sm:bottom-4 z-20 text-white drop-shadow-lg text-left pointer-events-none">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#FFBA45] text-[#0E1153] font-bold text-[9px] sm:text-[10px] flex items-center justify-center border border-white">
                        B
                      </span>
                      <span className="font-mono text-[11px] sm:text-xs font-bold truncate">@baagul.in</span>
                      <span className="px-1.5 py-0.5 rounded bg-white/20 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider backdrop-blur-xs">
                        Follow
                      </span>
                    </div>
                    <p className="font-sans text-[11px] sm:text-xs line-clamp-2 text-white/95 leading-snug mb-1">
                      Vertical hooks in the first 3s. Scroll-stopping reels edited for real engagement 🔥
                    </p>
                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-white/70">
                      <span>♫</span>
                      <span className="truncate">Baagul Studio · Original Sound</span>
                    </div>
                  </div>

                  {/* Play/Pause Center Indicator when paused */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 z-30 bg-black/40 flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 text-[#0E1153] flex items-center justify-center text-xl sm:text-2xl font-bold pl-1 shadow-lg transition-transform hover:scale-110">
                        ▶
                      </div>
                    </div>
                  )}

                  {/* Floating Visible Mute Pill Overlay at Top Left */}
                  <div className="absolute top-14 sm:top-16 left-3 sm:left-4 z-20">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white border border-white/30 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider cursor-pointer hover:bg-black"
                    >
                      <span>{isMuted ? "🔇 UNMUTE" : "🔊 AUDIO ON"}</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Informational Column Alongside Phone */}
              <div className="flex flex-col items-start max-w-md text-[#FEF9ED]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E7A63] border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
                  <span>9:16 VERTICAL SUITE</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  High-Retention Reels & Shorts
                </h3>
                <p className="font-sans text-xs sm:text-base text-[#FEF9ED]/80 leading-relaxed mb-4 sm:mb-6">
                  Over 85% of social content is consumed on mobile. Our short-form editors craft fast-paced transitions, sound hits, kinetic captions, and 3-second hook loops tailored to Instagram, TikTok, and YouTube Shorts algorithms.
                </p>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full mb-4 sm:mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-[#FFBA45] block mb-0.5 sm:mb-1">
                      +85%
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-[#FEF9ED]/70 uppercase">
                      Average Hook Retention
                    </span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-3.5">
                    <span className="font-heading text-xl sm:text-2xl font-bold text-[#CFE8DC] block mb-0.5 sm:mb-1">
                      24-48h
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-[#FEF9ED]/70 uppercase">
                      Sprint Turnaround
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FFBA45] text-[#0E1153] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#0E1153] shadow-[3px_3px_0px_#FFFFFF] sm:shadow-[4px_4px_0px_#FFFFFF] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <span>Request Short-Form Package</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}

          {/* MOCKUP 2: 16:9 YOUTUBE DESKTOP PLAYER (YouTube & Long-Form) */}
          {activeFormat === "youtube" && (
            <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto py-1 sm:py-2">
              {/* YouTube Player Frame */}
              <div className="w-full bg-[#0E1153] border-2 sm:border-4 border-[#0E1153] rounded-xl sm:rounded-3xl shadow-[6px_6px_0px_#C8553D] sm:shadow-[12px_12px_0px_#C8553D] overflow-hidden">

                {/* Browser Tab Window Bar */}
                <div className="bg-[#121A4A] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 pr-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#C8553D] shrink-0" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBA45] shrink-0" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#0E7A63] shrink-0" />
                    <span className="font-mono text-[10px] sm:text-[11px] text-white/60 ml-1 sm:ml-2 truncate">
                      youtube.com/watch?v=baagul-studio-retention-edit
                    </span>
                  </div>
                  <span className="hidden sm:inline font-mono text-[10px] text-[#FFBA45] font-bold shrink-0">
                    4K UHD · 60 FPS
                  </span>
                </div>

                {/* 16:9 Video Canvas */}
                <div
                  className="relative w-full aspect-video bg-black overflow-hidden cursor-pointer group"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src="/assets/video/YouTube & Long-Form Editing.mp4"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Top Bar with Title */}
                  <div className="absolute top-0 inset-x-0 p-2 sm:p-4 bg-gradient-to-b from-black/85 via-black/50 to-transparent flex items-center justify-between text-white pointer-events-none z-10">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0">
                        ▶
                      </span>
                      <span className="font-heading text-xs sm:text-base font-bold drop-shadow truncate">
                        Baagul Studio — YouTube Retention Edit
                      </span>
                    </div>
                    <span className="px-1.5 sm:px-2 py-0.5 rounded bg-black/60 border border-white/20 font-mono text-[9px] sm:text-[10px] text-white shrink-0">
                      1080p60 HD
                    </span>
                  </div>

                  {/* Centered Play Pause Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-lg sm:text-2xl lg:text-3xl font-bold pl-1 sm:pl-1.5 shadow-2xl transition-transform hover:scale-105">
                        ▶
                      </div>
                    </div>
                  )}

                  {/* YouTube Player Bottom Control Bar */}
                  <div
                    className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-6 sm:pt-8 pb-2 sm:pb-3 px-2 sm:px-4 text-white z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Red Scrubber Bar */}
                    <div className="relative w-full h-1 sm:h-1.5 bg-white/30 rounded-full mb-2 sm:mb-3 cursor-pointer group/bar">
                      <div className="h-full bg-red-600 rounded-full w-[42%] relative">
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-red-600 rounded-full border-2 border-white shadow scale-100 group-hover/bar:scale-125 transition-transform" />
                      </div>
                    </div>

                    {/* Bottom Controls Row */}
                    <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono gap-1.5 sm:gap-2">
                      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                        <button
                          type="button"
                          onClick={togglePlay}
                          className="hover:text-red-500 transition-colors cursor-pointer text-xs sm:text-base shrink-0"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? "⏸" : "▶"}
                        </button>

                        {/* Mute Button in YouTube player */}
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-white/15 hover:bg-white/25 border border-white/25 font-mono text-[10px] sm:text-xs font-bold uppercase transition-colors cursor-pointer shrink-0"
                        >
                          <span className="sm:hidden">{isMuted ? "🔇" : "🔊"}</span>
                          <span className="hidden sm:inline">{isMuted ? "🔇 UNMUTE" : "🔊 SOUND ON"}</span>
                        </button>

                        <span className="text-white/80 shrink-0 text-[10px] sm:text-xs">
                          04:18 <span className="hidden xs:inline text-white/40">/ 14:20</span>
                        </span>

                        <span className="hidden md:inline text-white/50 border-l border-white/20 pl-3 truncate max-w-[200px] lg:max-w-none">
                          Chapter 3: Pacing & Cutaway B-Roll
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 text-[10px] sm:text-xs">
                        <span className="px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded bg-white/20 text-[9px] sm:text-[10px] font-bold">
                          CC
                        </span>
                        <span className="cursor-pointer">⚙️</span>
                        <span className="cursor-pointer">⛶</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Video Info Strip Under Player */}
                <div className="bg-[#FEF9ED] text-[#0E1153] p-3 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 border-t-2 border-[#0E1153]">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 w-full sm:w-auto">
                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm sm:text-lg flex items-center justify-center border-2 border-[#0E1153] shadow-[2px_2px_0px_#FFBA45] shrink-0">
                      B
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading text-sm sm:text-base font-bold text-[#0E1153] truncate">
                          Baagul Studio
                        </span>
                        <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-600 text-white text-[9px] sm:text-[10px] flex items-center justify-center font-bold shrink-0">
                          ✓
                        </span>
                      </div>
                      <span className="font-mono text-[10px] sm:text-xs text-[#0E1153]/70 truncate block">
                        128K subscribers · Retention-Engineered Edits
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3 w-full sm:w-auto shrink-0">
                    <button
                      type="button"
                      className="px-3 sm:px-4 py-2 bg-red-600 text-white rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#0E1153] shadow-[2px_2px_0px_#0E1153] hover:bg-red-700 transition-colors text-center truncate"
                    >
                      Subscribe
                    </button>
                    <Link
                      href="/contact"
                      className="px-3 sm:px-4 py-2 bg-[#0E1153] text-[#FEF9ED] rounded-full font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#0E1153] shadow-[2px_2px_0px_#FFBA45] hover:bg-[#FFBA45] hover:text-[#0E1153] transition-colors text-center truncate"
                    >
                      Book Edits →
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* MOCKUP 3: SPONSORED FEED AD (Ad Creatives & Promos) */}
          {activeFormat === "ads" && (
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-14 py-2 sm:py-4">
              {/* Feed Card Shell */}
              <div className="w-full max-w-[360px] xs:max-w-[420px] sm:max-w-[480px] bg-white border-2 sm:border-4 border-[#0E1153] rounded-2xl sm:rounded-3xl shadow-[6px_6px_0px_#FFA800] sm:shadow-[12px_12px_0px_#FFA800] overflow-hidden select-none">
                {/* Post Header */}
                <div className="p-2.5 sm:p-3.5 flex items-center justify-between border-b border-[#0E1153]/15">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#0E1153] text-[#FEF9ED] font-bold text-xs flex items-center justify-center border border-[#0E1153] shrink-0">
                      B
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="font-mono text-xs font-bold text-[#0E1153] truncate">baagul.in</span>
                        <span className="text-blue-600 text-xs font-bold shrink-0">●</span>
                      </div>
                      <span className="font-mono text-[9px] sm:text-[10px] text-[#0E1153]/60 font-semibold block truncate">
                        Sponsored · Paid Promotion
                      </span>
                    </div>
                  </div>
                  <span className="text-[#0E1153] font-bold text-xs sm:text-base">•••</span>
                </div>

                {/* Video Creative (16:9 Native Video Fit) */}
                <div
                  className="relative w-full aspect-video bg-black overflow-hidden cursor-pointer group"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src="/assets/video/Ad Creatives & Promo Videos.mp4"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Center Play Pause Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 z-10 bg-black/25 flex items-center justify-center backdrop-blur-[1px] transition-all">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#0E1153] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] sm:shadow-[4px_4px_0px_#0E1153] flex items-center justify-center text-lg sm:text-xl font-bold pl-1 group-hover:scale-110 group-hover:bg-[#FFBA45] transition-all">
                        ▶
                      </div>
                    </div>
                  )}

                  {/* Sound Toggle Button */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                    className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-20 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] shadow-[2px_2px_0px_#0E1153] hover:bg-[#FFBA45] hover:shadow-[1px_1px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer font-mono font-bold tracking-wider uppercase select-none text-[9px] sm:text-xs"
                  >
                    {isMuted ? (
                      <>
                        <svg
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C8553D] shrink-0"
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
                        <span className="hidden xs:inline text-[9px] px-1 py-0.2 rounded bg-[#0E1153]/10 text-[#0E1153] font-semibold">
                          TAP FOR SOUND
                        </span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#005F4C] shrink-0"
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

                {/* Sponsored CTA Bar */}
                <div className="bg-[#0E1153] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between text-[#FEF9ED] gap-2">
                  <div className="min-w-0">
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold text-[#FFBA45] block truncate">
                      SCALE YOUR BRAND
                    </span>
                    <span className="font-heading text-xs sm:text-sm font-bold truncate block">
                      Enroll Video Editing Suite
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#FFBA45] text-[#0E1153] font-mono text-[10px] sm:text-xs font-bold border border-[#0E1153] shadow-[2px_2px_0px_#FFFFFF] hover:translate-x-0.5 transition-transform shrink-0"
                  >
                    Learn More →
                  </Link>
                </div>

              </div>

              {/* Explanatory Details */}
              <div className="flex flex-col items-start max-w-md text-[#FEF9ED]">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFA800] text-[#0E1153] font-mono text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
                  <span>PERFORMANCE AD SUITE</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  High-Converting Paid Video Ads
                </h3>
                <p className="font-sans text-xs sm:text-base text-[#FEF9ED]/80 leading-relaxed mb-4 sm:mb-6">
                  Ad creatives demand immediate pattern disruption. We test direct response hooks, clear product showcases, animated proof points, and distinct calls-to-action formatted for both 4:5 mobile feed and 16:9 pre-roll slots.
                </p>

                <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-3.5 sm:p-4 mb-4 sm:mb-6">
                  <div className="font-mono text-[10px] sm:text-xs font-bold text-[#FFBA45] mb-2 uppercase tracking-wider">
                    SPEC HIGHLIGHTS:
                  </div>
                  <ul className="space-y-1.5 font-sans text-xs text-[#FEF9ED]/80">
                    <li className="flex items-center gap-2">
                      <span className="text-[#CFE8DC]">✦</span> Multi-Ratio Delivery (9:16, 1:1, 16:9, 4:5)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#CFE8DC]">✦</span> Dynamic Subtitle & Caption Overlays
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#CFE8DC]">✦</span> 3 Hook Variations per Creative for A/B Testing
                    </li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FFBA45] text-[#0E1153] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#0E1153] shadow-[3px_3px_0px_#FFFFFF] sm:shadow-[4px_4px_0px_#FFFFFF] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <span>Build Ad Campaign Edits</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          )}

          {/* MOCKUP 4: NLE MULTI-TRACK TIMELINE (Motion Graphics & Post) */}
          {activeFormat === "motion" && (
            <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl mx-auto py-1 sm:py-2">
              <div className="w-full bg-[#0E1153] border-2 sm:border-4 border-[#0E1153] rounded-xl sm:rounded-3xl shadow-[6px_6px_0px_#E1E3F7] sm:shadow-[12px_12px_0px_#E1E3F7] overflow-hidden">

                {/* NLE Window Header */}
                <div className="bg-[#121A4A] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 flex items-center justify-between text-[10px] sm:text-xs font-mono">
                  <div className="flex items-center gap-2 text-white truncate min-w-0 pr-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-indigo-500 shrink-0" />
                    <span className="font-bold truncate">Baagul Post Suite // Premiere & After Effects</span>
                  </div>
                  <div className="hidden xs:flex items-center gap-2 sm:gap-3 text-white/70 shrink-0">
                    <span>FPS: 60.00</span>
                    <span className="text-[#FFBA45]">REC.709</span>
                  </div>
                </div>

                {/* Video Monitor Top Half */}
                <div
                  className="relative w-full aspect-video bg-black overflow-hidden cursor-pointer"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src="/assets/video/Motion Graphics & Titles.mp4"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />

                  {/* Center Play Pause Overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 z-10 bg-black/30 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-[#0E1153] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] sm:shadow-[4px_4px_0px_#0E1153] flex items-center justify-center text-lg sm:text-2xl font-bold pl-1 hover:scale-110 hover:bg-[#FFBA45] transition-all">
                        ▶
                      </div>
                    </div>
                  )}

                  {/* NLE Safe Margins Guide Overlay */}
                  <div className="absolute inset-4 sm:inset-8 border border-white/20 pointer-events-none flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-white/40 absolute top-0 left-0" />
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-white/40 absolute top-0 right-0" />
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-white/40 absolute bottom-0 left-0" />
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-white/40 absolute bottom-0 right-0" />
                    <span className="text-white/30 font-mono text-[8px] sm:text-[9px]">ACTION SAFE 90%</span>
                  </div>

                  {/* Sound Button */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-20 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] font-mono text-[10px] sm:text-xs font-bold shadow-[2px_2px_0px_#FFBA45] sm:shadow-[3px_3px_0px_#FFBA45] hover:bg-[#FFBA45] transition-all cursor-pointer"
                  >
                    {isMuted ? "🔇 UNMUTE" : "🔊 SOUND ON"}
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
