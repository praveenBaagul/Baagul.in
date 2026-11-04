import React from "react";
import Link from "next/link";

interface WideServiceCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
}

const wideServices: WideServiceCard[] = [
  {
    id: "01",
    tag: "MODULE 01 // ENTERPRISE",
    title: "Corporate Website Design",
    description: "Multi-page bespoke digital platforms for consultancies, tech startups, and enterprise firms designed for credibility and investor confidence.",
    badge: "BESPOKE ARCHITECTURE",
  },
  {
    id: "02",
    tag: "MODULE 02 // COMMERCE",
    title: "E-Commerce Websites",
    description: "High-converting online retail storefronts with custom 1-click checkout funnels, dynamic inventory sync, and speed optimization.",
    badge: "CONVERSION ENGINES",
  },
  {
    id: "03",
    tag: "MODULE 03 // EDITORIAL",
    title: "Blog & Media Website Design",
    description: "Search-first editorial publishing platforms, clean reading typography, ad layout slots, and instant sub-second caching.",
    badge: "HIGH-SPEED EDITORIAL",
  },
  {
    id: "04",
    tag: "MODULE 04 // ASSETS",
    title: "Graphics & Brand Design",
    description: "Distinct visual design systems, custom iconography, custom vector illustrations, and comprehensive brand guidelines.",
    badge: "BRAND IDENTITY",
  },
];

export default function WebDesignServicesList() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>DIGITAL CAPABILITIES</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153]">
              Our Services
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-sm leading-relaxed">
            From modern marketing sites to complex digital commerce platforms, we engineer websites that convert.
          </p>
        </div>

        {/* 4 Wide Interactive Cards */}
        <div className="flex flex-col gap-6">
          {wideServices.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-transform hover:-translate-y-0.5"
            >
              {/* Left Column (8 cols): Info */}
              <div className="md:col-span-8 flex flex-col items-start">
                <span className="px-2.5 py-1 rounded bg-[#CFE8DC] text-[#005F4C] text-[10px] font-mono font-bold uppercase border border-[#0E1153] mb-3">
                  {service.tag}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-4">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="font-mono text-xs font-bold text-[#005F4C] hover:underline flex items-center gap-1.5"
                >
                  <span>REQUEST SPECIFICATION</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Right Column (4 cols): Wireframe Visual Container */}
              <div className="md:col-span-4 p-4 bg-[#FAF8F5] border-2 border-[#0E1153] rounded-xl flex flex-col gap-2 shadow-[2px_2px_0px_#0E1153]">
                <div className="flex items-center justify-between pb-2 border-b border-[#0E1153]/10">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
                  <span className="text-[9px] font-mono font-bold text-[#3E4945]">
                    {service.badge}
                  </span>
                </div>
                <div className="w-full h-8 bg-[#0E1153]/10 rounded-sm flex items-center px-3">
                  <div className="w-1/2 h-2 bg-[#0E1153] rounded-sm" />
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="h-6 bg-[#CFE8DC] rounded-sm" />
                  <div className="h-6 bg-[#FFA800]/40 rounded-sm" />
                  <div className="h-6 bg-[#0E1153]/10 rounded-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

