"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AccordionItem {
  id: string;
  title: string;
  desc: string;
}

const items: AccordionItem[] = [
  {
    id: "01",
    title: "Responsive & Mobile-First",
    desc: "Engineered to deliver flawless performance across smartphones, tablets, laptops, and ultra-wide screens with fluid typography and dynamic viewport scaling.",
  },
  {
    id: "02",
    title: "Custom UX/UI Design",
    desc: "Bespoke design tokens, distinctive Figma-to-WordPress translations, intuitive page hierarchies, and frictionless navigation pathways that retain users.",
  },
  {
    id: "03",
    title: "Clean Typography & Layouts",
    desc: "Thoughtful type scale, proper font subsets with zero render-blocking requests, and accessible WCAG contrast standards built right into theme styles.",
  },
  {
    id: "04",
    title: "Secure Architecture",
    desc: "Hardened wp-config configurations, automated vulnerability monitoring, XML-RPC disablement, enterprise Cloudflare WAF routing, and role-based access.",
  },
  {
    id: "05",
    title: "Performance Optimization",
    desc: "Native asset minification, Redis object caching, AVIF image formats, and custom block stylesheets that pass Google Core Web Vitals with 99+ PageSpeed scores.",
  },
  {
    id: "06",
    title: "WooCommerce Integration",
    desc: "Tailored product grids, frictionless multi-step checkouts, customized payment gateways, and rapid cart transactions built for high-volume order flow.",
  },
];

export default function WordPressDeliverables() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#0E1153] border border-[#FEF9ED]/20 text-xs font-mono font-bold uppercase tracking-widest text-[#FFA800]">
            <span>SERVICE OVERVIEW</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#FEF9ED] leading-tight mb-6">
            Unique Web Designs, online solutions, and brand guidelines that define your business.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/80 leading-relaxed mb-8">
            We move away from bloated page builders. Our WordPress architectures are custom-coded from the ground up to ensure instantaneous load times, seamless editor autonomy, and scalable digital foundations.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFA800] text-[#0E1153] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all mb-8"
          >
            <span>Contact our experts</span>
            <span>→</span>
          </Link>

          {/* Metric Box */}
          <div className="w-full p-4 bg-[#0E1153] border-2 border-[#FEF9ED]/20 rounded-xl flex items-center justify-between text-xs font-mono font-bold text-[#FEF9ED]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A86B]" />
              <span>GUTENBERG &amp; HEADLESS READY</span>
            </div>
            <span className="text-[#FFA800]">100% CLEAN CODE</span>
          </div>
        </div>

        {/* Right Column (7 cols) - Interactive Accordion */}
        <div className="lg:col-span-7 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#FFA800] overflow-hidden">
          {/* Top Banner */}
          <div className="px-6 py-4 bg-[#FFA800] border-b-2 border-[#0E1153] flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-[#0E1153]">
              Overview &amp; Deliverables
            </h3>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0E1153]/80">
              CMS SPECIFICATION
            </span>
          </div>

          {/* Rows */}
          <div className="divide-y-2 divide-[#0E1153]">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={item.id}>
                  <button
                    onClick={() => toggle(idx)}
                    className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                      isOpen ? "bg-[#EDE8DC]" : "hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded bg-[#0E1153] text-[#FEF9ED] text-xs font-mono font-bold flex items-center justify-center">
                        {item.id}
                      </span>
                      <span className="font-heading text-base sm:text-lg font-bold text-[#0E1153]">
                        {item.title}
                      </span>
                    </div>

                    <span className="w-6 h-6 rounded-full border border-[#0E1153] flex items-center justify-center font-bold text-xs">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 bg-[#EDE8DC] font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed border-t border-[#0E1153]/10">
                      {item.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

