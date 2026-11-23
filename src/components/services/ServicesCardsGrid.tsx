"use client";

import React from "react";
import Link from "next/link";

export default function ServicesCardsGrid() {
  return (
    <section id="service-cards" className="w-full py-16 sm:py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t-2 border-dashed border-indigo-main/20">
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION HEADER
      ───────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-marigold shadow-[1px_1px_0px_#121a4a]" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
              OUR SERVICES
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-indigo-main tracking-tight font-extrabold">
            Our Services
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-text max-w-md leading-relaxed">
          Transform your digital presence with our comprehensive suite of marketing, SEO, front-end engineering, and branding services.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CATEGORY 1: BUILD
      ───────────────────────────────────────────────────────────── */}
      <div className="mb-20">
        {/* Tier Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 mb-6 border-b-2 border-indigo-main/20 gap-2">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-indigo-main">
              Build
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-text mt-0.5">
              High-performing robust web, commerce, and application infrastructure
            </p>
          </div>
          <span className="self-start sm:self-auto border border-indigo-main/30 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-main bg-canvas-card shadow-sm">
            4 ARCHITECTURAL MODULES
          </span>
        </div>

        {/* Row 1: 01 Website Design (Gold Featured) + 06 E-Commerce (White) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Card 01: Website Design & Development (Gold Card) */}
          <Link
            href="/services/web-design"
            className="group lg:col-span-7 bg-[#f5a800] border-2 border-indigo-main rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/20">
                <span className="font-mono text-sm font-extrabold text-indigo-dark">
                  01
                </span>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[10px] font-mono font-bold text-indigo-dark bg-white/70 px-2 py-0.5 rounded border border-indigo-main/30">
                    ⚡ PITCH THIS MODULE
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
                    DEV // WEB
                  </span>
                </div>
              </div>

              {/* Main Content + Diagram Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                <div className="sm:col-span-7">
                  <h4 className="font-heading text-2xl sm:text-[26px] font-extrabold text-indigo-dark leading-tight mb-3 group-hover:text-black transition-colors">
                    Website Design &amp; Development
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-indigo-dark/90 leading-relaxed mb-4">
                    Website development and web design services in Bangalore: modern, fast, responsive sites built to turn visitors into customers.
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {["Responsive", "Fast Loading", "SEO-Ready"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold text-indigo-dark bg-white/90 border border-indigo-main/30 px-2.5 py-1 rounded-md shadow-xs group-hover:border-indigo-main transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Mockup Graphic: Browser Wireframe */}
                <div className="sm:col-span-5 bg-white border-2 border-indigo-main rounded-xl p-3 shadow-[3px_3px_0px_#121a4a] group-hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200 text-[9px] font-mono text-gray-500">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <span>baagul.in/ui</span>
                  </div>
                  <div className="space-y-1.5 py-1">
                    <div className="h-2 w-3/4 bg-indigo-main/20 rounded" />
                    <div className="h-1.5 w-full bg-gray-200 rounded" />
                    <div className="h-1.5 w-5/6 bg-gray-200 rounded" />
                    <div className="pt-2 flex justify-between items-center">
                      <div className="h-4 w-12 bg-marigold border border-indigo-main rounded text-[8px] font-mono font-bold flex items-center justify-center text-indigo-dark">
                        VIEW
                      </div>
                      <span className="text-[9px] font-mono font-bold text-[#0e7a63]">99.4% FCP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-4 border-t border-indigo-main/20 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-indigo-dark tracking-wider">
                SPEC // FULL STACK NEXT.JS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-indigo-main text-xs font-mono font-bold text-indigo-dark shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-indigo-main group-hover:text-canvas transition-all">
                <span>EXPLORE</span>
                <span>→</span>
              </span>
            </div>
          </Link>

          {/* Card 06: E-Commerce Solutions (White Card) */}
          <Link
            href="/services/e-commerce-solutions"
            className="group lg:col-span-5 bg-white border-2 border-indigo-main rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/15">
                <span className="font-mono text-sm font-bold text-[#e05a2b]">
                  06
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
                  COMMERCE // SHOP
                </span>
              </div>

              <h4 className="font-heading text-2xl font-extrabold text-indigo-main leading-tight mb-3 group-hover:text-peacock transition-colors">
                E-Commerce Solutions
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6">
                E-commerce website development for scalable, high-performing online stores on Shopify and WooCommerce, with speed-optimized checkout.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Shopify / Headless", "Cart Optimization", "Payment Gateway"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold text-indigo-main bg-canvas border border-indigo-main/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-slate-text tracking-wider">
                DIMENSION // CRO
              </span>
              <span className="w-8 h-8 rounded-lg border border-indigo-main bg-canvas flex items-center justify-center text-indigo-main shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-marigold transition-all">
                →
              </span>
            </div>
          </Link>

        </div>

        {/* Row 2: 07 WordPress & CMS (White) + 10 App Development (White) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 07: WordPress & CMS Development */}
          <Link
            href="/services/wordpress-development"
            className="group lg:col-span-5 bg-white border-2 border-indigo-main rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/15">
                <span className="font-mono text-sm font-bold text-[#e05a2b]">
                  07
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
                  CMS // ARCHITECTURE
                </span>
              </div>

              <h4 className="font-heading text-2xl font-extrabold text-indigo-main leading-tight mb-3 group-hover:text-peacock transition-colors">
                WordPress &amp; CMS Development
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6">
                WordPress development services and custom CMS development: headless WordPress and Gutenberg block themes built for editorial speed.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Custom Blocks", "Fast Advanced", "ACF Integration"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold text-indigo-main bg-canvas border border-indigo-main/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-slate-text tracking-wider">
                SPEC // PHP &amp; REACT
              </span>
              <span className="w-8 h-8 rounded-lg border border-indigo-main bg-canvas flex items-center justify-center text-indigo-main shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-marigold transition-all">
                →
              </span>
            </div>
          </Link>

          {/* Card 10: App Development */}
          <Link
            href="/services/app-development"
            className="group lg:col-span-7 bg-white border-2 border-indigo-main rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/15">
                <span className="font-mono text-sm font-bold text-[#e05a2b]">
                  10
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
                  MOBILE // BUILD
                </span>
              </div>

              <h4 className="font-heading text-2xl sm:text-[26px] font-extrabold text-indigo-main leading-tight mb-3 group-hover:text-peacock transition-colors">
                App Development
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6 max-w-xl">
                Mobile app development for Android and iOS with React Native and native code. Fluid 60fps animations, background sync, biometric security, and offline resilience.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["iOS & Android", "Offline Sync", "Push Notif.", "High Response"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold text-indigo-main bg-canvas border border-indigo-main/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-slate-text tracking-wider">
                SCALE // REACT NATIVE &amp; FLUTTER
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-canvas border border-indigo-main text-xs font-mono font-bold text-indigo-main shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-marigold transition-all">
                <span>EXPLORE</span>
                <span>→</span>
              </span>
            </div>
          </Link>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CATEGORY 2: GROW
      ───────────────────────────────────────────────────────────── */}
      <div className="mb-20">
        {/* Tier Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 mb-6 border-b-2 border-indigo-main/20 gap-2">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-indigo-main">
              Grow
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-text mt-0.5">
              Driving high-intent audience acquisition and authoritative search dominance
            </p>
          </div>
          <span className="self-start sm:self-auto border border-indigo-main/30 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-main bg-canvas-card shadow-sm">
            3 GROWTH MODULES
          </span>
        </div>

        {/* Row 1: 02 SEO Optimization (Gold) + 04 Guest Posts & PR (White) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Card 02: SEO Optimization (Gold Featured Card) */}
          <Link
            href="/services/seo-optimizations"
            className="group lg:col-span-7 bg-[#f5a800] border-2 border-indigo-main rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/20">
                <span className="font-mono text-sm font-extrabold text-indigo-dark">
                  02
                </span>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[10px] font-mono font-bold text-indigo-dark bg-white/70 px-2 py-0.5 rounded border border-indigo-main/30">
                    ⚡ PITCH THIS MODULE
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
                    SEO // RANK
                  </span>
                </div>
              </div>

              {/* Main Content + Chart Graphic */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                <div className="sm:col-span-7">
                  <h4 className="font-heading text-2xl sm:text-[26px] font-extrabold text-indigo-dark leading-tight mb-3 group-hover:text-black transition-colors">
                    SEO Optimization
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-indigo-dark/90 leading-relaxed mb-4">
                    SEO services in Bangalore that boost your visibility with proven strategies for higher rankings, technical site health, and search intent.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Technical Audits", "Core Web Vitals", "SERP Dominance"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold text-indigo-dark bg-white/90 border border-indigo-main/30 px-2.5 py-1 rounded-md shadow-xs group-hover:border-indigo-main transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Mockup Graphic: Mini SEO Bar Chart */}
                <div className="sm:col-span-5 bg-white border-2 border-indigo-main rounded-xl p-3 shadow-[3px_3px_0px_#121a4a] group-hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200 text-[9px] font-mono text-gray-500">
                    <span>RANK LEVEL // 90D</span>
                    <span className="text-[#0e7a63] font-bold">+312%</span>
                  </div>
                  {/* Vertical bar chart bars */}
                  <div className="h-16 flex items-end justify-between gap-1.5 px-2 pt-2">
                    <div className="w-full bg-[#dadff4] h-[30%] rounded-t border border-indigo-main/20" />
                    <div className="w-full bg-[#b5beea] h-[45%] rounded-t border border-indigo-main/20" />
                    <div className="w-full bg-[#8c9be0] h-[60%] rounded-t border border-indigo-main/20" />
                    <div className="w-full bg-marigold h-[80%] rounded-t border border-indigo-main/30" />
                    <div className="w-full bg-[#0e7a63] h-[98%] rounded-t border border-indigo-main" />
                  </div>
                  <div className="mt-2 text-[8px] font-mono text-center text-gray-500 font-semibold">
                    AVERAGE IMPRESSIONS &amp; RANKINGS
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-4 border-t border-indigo-main/20 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-indigo-dark tracking-wider">
                ENGINE // ALGORITHMIC AUDIT SUITE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-indigo-main text-xs font-mono font-bold text-indigo-dark shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-indigo-main group-hover:text-canvas transition-all">
                <span>EXPLORE</span>
                <span>→</span>
              </span>
            </div>
          </Link>

          {/* Card 04: Guest Posts & PR (White Card) */}
          <Link
            href="/services/guest-post"
            className="group lg:col-span-5 bg-white border-2 border-indigo-main rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/15">
                <span className="font-mono text-sm font-bold text-[#e05a2b]">
                  04
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
                  MEDIA // OUTREACH
                </span>
              </div>

              <h4 className="font-heading text-2xl font-extrabold text-indigo-main leading-tight mb-3 group-hover:text-peacock transition-colors">
                Guest Posts &amp; PR
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6">
                Guest posting and digital PR services that place your brand on top publications to build authority, earn natural backlinks, and capture qualified traffic.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Tier-1 Publications", "Contextual Backlink", "Domain Authority"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold text-indigo-main bg-canvas border border-indigo-main/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-slate-text tracking-wider">
                PR // TOP EDITORIAL
              </span>
              <span className="w-8 h-8 rounded-lg border border-indigo-main bg-canvas flex items-center justify-center text-indigo-main shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-marigold transition-all">
                →
              </span>
            </div>
          </Link>

        </div>

        {/* Row 2: 08 Paid Promotions & Media Buying (Wide Span Card) */}
        <Link
          href="/services/paid-promotions"
          className="group block bg-white border-2 border-indigo-main rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/15">
            <span className="font-mono text-sm font-bold text-[#e05a2b]">
              08
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
              PERF // ACQUISITION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
            <div className="md:col-span-8">
              <h4 className="font-heading text-2xl sm:text-[28px] font-extrabold text-indigo-main leading-tight mb-3 group-hover:text-peacock transition-colors">
                Paid Promotions &amp; Media Buying
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6 max-w-2xl">
                Performance marketing across Google Ads and Meta Ads for predictable ROI, real-time attribution, and lower Customer Acquisition Cost (CAC).
              </p>
              <div className="flex flex-wrap gap-2">
                {["Meta & Google Ads", "Funnel Design", "ROAS Tracking", "Performance Buy"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold text-indigo-main bg-canvas border border-indigo-main/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Metric Widget on the right */}
            <div className="md:col-span-4 bg-canvas-card border-2 border-indigo-main rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_#121a4a] text-center group-hover:scale-105 transition-transform duration-200">
              <div className="text-[9px] font-mono font-bold tracking-widest text-slate-text uppercase mb-1">
                METRIC // RESULT
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-indigo-main leading-none my-1">
                4.2x ROAS
              </div>
              <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-[#c7f0db] border border-[#0e5c43]/30 text-[9px] font-mono font-bold text-[#0e5c43] uppercase tracking-wider">
                ATTRIBUTED REVENUE (90D AVG)
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase text-slate-text tracking-wider">
              DATA // REALTIME ATTRIBUTION
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-canvas border border-indigo-main text-xs font-mono font-bold text-indigo-main shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-marigold transition-all">
              <span>EXPLORE</span>
              <span>→</span>
            </span>
          </div>
        </Link>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          CATEGORY 3: CREATE
      ───────────────────────────────────────────────────────────── */}
      <div>
        {/* Tier Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 mb-6 border-b-2 border-indigo-main/20 gap-2">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-indigo-main">
              Create
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-text mt-0.5">
              Resonant brand identity, visual storytelling, and high-impact digital design
            </p>
          </div>
          <span className="self-start sm:self-auto border border-indigo-main/30 rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-main bg-canvas-card shadow-sm">
            3 CREATIVE MODULES
          </span>
        </div>

        {/* Row 1: 03 Logo Design (Gold) + 05 Graphic Designing (White) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          
          {/* Card 03: Logo Design (Gold Featured Card) */}
          <Link
            href="/services/logo-design"
            className="group lg:col-span-7 bg-[#f5a800] border-2 border-indigo-main rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between cursor-pointer relative overflow-hidden"
          >
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/20">
                <span className="font-mono text-sm font-extrabold text-indigo-dark">
                  03
                </span>
                <div className="flex items-center gap-2">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-[10px] font-mono font-bold text-indigo-dark bg-white/70 px-2 py-0.5 rounded border border-indigo-main/30">
                    ⚡ PITCH THIS MODULE
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
                    IDENTITY // BRAND
                  </span>
                </div>
              </div>

              {/* Main Content + Token Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                {/* Left Brand Mark Token Graphic */}
                <div className="sm:col-span-5 bg-white border-2 border-indigo-main rounded-xl p-4 shadow-[3px_3px_0px_#121a4a] text-center group-hover:scale-105 transition-transform duration-200">
                  <div className="w-14 h-14 mx-auto rounded-full bg-marigold border-2 border-indigo-main shadow-inner flex items-center justify-center font-heading font-extrabold text-xl text-indigo-dark group-hover:rotate-12 transition-transform">
                    B
                  </div>
                  <div className="mt-3 text-[9px] font-mono font-bold text-gray-500 uppercase tracking-wider">
                    VECTOR // LOGO SPEC
                  </div>
                  <div className="text-[8px] font-mono text-gray-400">
                    GEOMETRIC SYSTEM 1:1
                  </div>
                </div>

                <div className="sm:col-span-7">
                  <h4 className="font-heading text-2xl sm:text-[26px] font-extrabold text-indigo-dark leading-tight mb-3 group-hover:text-black transition-colors">
                    Logo Design
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-indigo-dark/90 leading-relaxed mb-4">
                    Professional logo design services in Bangalore: unique, memorable logos that elevate your brand identity across physical and digital touchpoints.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Brand Identity", "Vector Assets", "Design Styleguide"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold text-indigo-dark bg-white/90 border border-indigo-main/30 px-2.5 py-1 rounded-md shadow-xs group-hover:border-indigo-main transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-4 border-t border-indigo-main/20 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-indigo-dark tracking-wider">
                SYSTEM // IDENTITY MATRIX
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-indigo-main text-xs font-mono font-bold text-indigo-dark shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-indigo-main group-hover:text-canvas transition-all">
                <span>EXPLORE</span>
                <span>→</span>
              </span>
            </div>
          </Link>

          {/* Card 05: Graphic Designing (White Card) */}
          <Link
            href="/services/graphics-design"
            className="group lg:col-span-5 bg-white border-2 border-indigo-main rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/15">
                <span className="font-mono text-sm font-bold text-[#e05a2b]">
                  05
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
                  VISUAL // ASSETS
                </span>
              </div>

              <h4 className="font-heading text-2xl font-extrabold text-indigo-main leading-tight mb-3 group-hover:text-peacock transition-colors">
                Graphic Designing
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6">
                Graphic design services for high-impact visuals, from social media graphics and paid banners to collateral and marketing funnels.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Marketing Collateral", "Social Media", "Pitch Decks"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold text-indigo-main bg-canvas border border-indigo-main/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase text-slate-text tracking-wider">
                TYPE // CREATIVE ASSETS
              </span>
              <span className="w-8 h-8 rounded-lg border border-indigo-main bg-canvas flex items-center justify-center text-indigo-main shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-marigold transition-all">
                →
              </span>
            </div>
          </Link>

        </div>

        {/* Row 2: 09 Video Editing (Wide Span Card) */}
        <Link
          href="/services/video-editing"
          className="group block bg-white border-2 border-indigo-main rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1.5 hover:translate-x-0.5 hover:shadow-[10px_10px_0px_#121a4a] transition-all duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/15">
            <span className="font-mono text-sm font-bold text-[#e05a2b]">
              09
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#c7f0db] text-[#0e5c43] border border-[#0e5c43]/30">
              MOTION // VIDEO
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
            <div className="md:col-span-8">
              <h4 className="font-heading text-2xl sm:text-[28px] font-extrabold text-indigo-main leading-tight mb-3 group-hover:text-peacock transition-colors">
                Video Editing
              </h4>
              <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6 max-w-2xl">
                Professional video editing for YouTube, Instagram Reels, and cinematic brand spots, engineered to capture attention within 3 seconds, with motion graphics and sound mastering.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Social Reels", "Motion Graphics", "4K Rendering", "Short Form Focus"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono font-semibold text-indigo-main bg-canvas border border-indigo-main/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Metric Widget on the right */}
            <div className="md:col-span-4 bg-[#7a2e1d] text-white border-2 border-indigo-main rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_#121a4a] text-center group-hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono font-bold tracking-widest uppercase mb-1 text-white/80">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>AUDIENCE ENGAGEMENT</span>
              </div>
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-none my-1">
                12M+ Views
              </div>
              <div className="mt-2 inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[9px] font-mono font-bold text-white uppercase tracking-wider">
                DOCUMENTED IMPRESSIONS
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold uppercase text-slate-text tracking-wider">
              FORMATS // 9:16 VERTICAL &amp; 16:9 4K
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-canvas border border-indigo-main text-xs font-mono font-bold text-indigo-main shadow-[2px_2px_0px_#121a4a] group-hover:translate-x-1 group-hover:bg-marigold transition-all">
              <span>EXPLORE</span>
              <span>→</span>
            </span>
          </div>
        </Link>
      </div>

    </section>
  );
}
