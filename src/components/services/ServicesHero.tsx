import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

const quickServices = [
  { name: "Website Design & Development", href: "/services/web-design" },
  { name: "SEO Optimization", href: "/services/seo-optimizations" },
  { name: "Logo Design", href: "/services/logo-design" },
  { name: "Guest Posts & PR", href: "/services/guest-post" },
  { name: "Graphic Designing", href: "/services/graphics-design" },
  { name: "E-Commerce Solutions", href: "/services/e-commerce-solutions" },
  { name: "WordPress & CMS Development", href: "/services/wordpress-development" },
  { name: "Paid Promotions & Media Buying", href: "/services/paid-promotions" },
  { name: "Video Editing", href: "/services/video-editing" },
  { name: "App Development", href: "/services/app-development" },
];

export default function ServicesHero() {
  return (
    <section className="relative w-full pt-10 pb-16 px-4 sm:px-12 max-w-7xl mx-auto">
      {/* Top Running Stitch Strip */}
      <div className="w-full border-t-2 border-dashed border-terracotta/40 mb-10" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography & Badges */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-marigold shadow-[1px_1px_0px_#121a4a]" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
              OUR SERVICES
            </span>
          </div>

          {/* Heading 1 */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-indigo-main mb-6">
            <span>Empowering Your</span>
            <br />
            <span>Brand&apos;s</span>
            <br />
            <span className="relative inline-block my-1">
              <span className="bg-marigold text-indigo-dark px-3 py-0.5 rounded-[2px] border border-indigo-main drop-shadow-[4px_4px_0px_#121a4a] inline-block">
                Digital Success
              </span>
            </span>
            <br />
            <span className="font-serif italic font-normal text-peacock tracking-normal">
              Traffic and Conversions
            </span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="font-sans text-base sm:text-lg text-slate-text max-w-xl leading-relaxed mb-8">
            We architect conversion engines, full-funnel digital campaigns, search dominant organic infrastructures, and memorable brand identities designed to out-compete and out-convert.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-main text-canvas font-semibold text-sm shadow-[4px_4px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#121a4a] transition-all"
            >
              <span>Audit your brand</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <a
              href="#service-cards"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-canvas-card border-2 border-indigo-main text-indigo-main font-semibold text-sm shadow-[4px_4px_0px_#121a4a] hover:bg-canvas transition-colors"
            >
              <span>Explore full menu</span>
              <span className="text-xs">↓</span>
            </a>
          </div>

          {/* Live Studio Metric Pill */}
          <div className="flex items-center gap-3 text-xs font-mono font-medium text-indigo-main/80 bg-canvas-card border border-indigo-main/20 px-3.5 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-peacock animate-pulse" />
            <span>ACCEPTING NEW CLIENT ACQUISITIONS FOR 2026</span>
          </div>

        </div>

        {/* Right Column: Interactive Quick-Finder Sheet */}
        <div className="lg:col-span-5 flex justify-center">
          
          <div className="w-full max-w-md bg-canvas-card border-2 border-indigo-main rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#121a4a] relative">
            
            {/* Header row with status */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-indigo-main/15">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-marigold border border-indigo-main" />
                <span className="font-mono text-xs font-bold text-indigo-main uppercase">
                  DIRECT SERVICE DESK
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-text">
                9 PRIMARY MODULES
              </span>
            </div>

            {/* Service quick links list */}
            <div className="flex flex-col divide-y divide-indigo-main/10">
              {quickServices.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="py-3 flex items-center justify-between group hover:text-peacock transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-terracotta font-bold">
                      0{idx + 1}.
                    </span>
                    <span className="text-xs font-semibold text-indigo-main group-hover:text-peacock">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs text-slate-text group-hover:translate-x-1 group-hover:text-peacock transition-transform">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Card Footer */}
            <div className="pt-4 mt-3 border-t border-indigo-main/15 flex items-center justify-between text-[10px] font-mono text-slate-text">
              <span>DISPATCH: IMMEDIATE INTAKE</span>
              <span className="font-bold text-peacock">1:1 // SPEC 2026</span>
            </div>

            {/* Floating Top-Right Teal Circle */}
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-peacock border-2 border-indigo-main shadow-[3px_3px_0px_#121a4a] flex items-center justify-center text-canvas text-lg font-bold">
              ✦
            </div>

          </div>

        </div>

      </div>

      {/* Bottom section transition label */}
      <div className="mt-8 flex items-center justify-between text-[11px] font-mono text-slate-text opacity-70">
        <span>// 01 / 06 GRID INDEX</span>
        <span>BANGALORE DIGITAL COHORT</span>
        <span>SEC END // 01</span>
      </div>
    </section>
  );
}
