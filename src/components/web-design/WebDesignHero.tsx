import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WebDesignHero() {
  return (
    <section className="relative w-full bg-[#EAF5EF] text-[#0E1153] pt-6 pb-16 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Top Breadcrumb row */}
        <div className="flex items-center gap-2 mb-8 text-xs font-mono font-medium text-[#0E1153]/70">
          <Link href="/" className="hover:text-[#005F4C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#005F4C] transition-colors">
            Our Services
          </Link>
          <span>/</span>
          <span className="text-[#0E1153] font-bold">Web Design &amp; Development</span>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
          {/* Left Column (5.5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[#0E1153]">
              <span className="w-2.5 h-2.5 bg-[#005F4C]" />
              <span>OUR SERVICE // CODE 01-WEB</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-[76px] tracking-tight text-[#0E1153] leading-none mb-6">
              <span>Web / </span>
              <br />
              <span className="inline-block bg-[#FFBA45] text-[#0E1153] px-6 py-1 rounded-[4px] border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] mt-2 font-heading">
                —Design—
              </span>
            </h1>

            {/* Paragraph with highlighted bold text */}
            <p className="font-sans text-sm sm:text-base text-[#3E4945] max-w-lg leading-relaxed mb-6">
              At <strong className="text-[#0E1153] font-bold">Baagul.in</strong>, we craft visuals that do more than look good — they <strong className="text-[#0E1153] font-bold">communicate</strong>, <strong className="text-[#0E1153] font-bold">convert</strong>, and <strong className="text-[#0E1153] font-bold">connect</strong>. Whether you&apos;re building a brand from scratch or refreshing your identity, our design solutions are tailored to reflect your vision and resonate with your audience.
            </p>

            {/* Client Note Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-[11px] font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153] mb-8">
              <span>🎯 CLIENT NOTE: 100% Bespoke Code · Zero Stock Page-Builders</span>
            </div>

            {/* Enroll our Service Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
            >
              <span>Enroll our Service</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right Column (7 cols) - Web Design Illustration Artwork */}
          <div className="lg:col-span-7 flex justify-center relative">
            <div className="w-full max-w-2xl bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden relative group">
              <div className="relative w-full aspect-[1024/572]">
                <Image
                  src="/assets/web-design-hero-illustration.jpg"
                  alt="Web Design That Works - Beautiful Websites, Better User Experience, More Business Growth"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dashed Separator Line */}
        <div className="w-full border-t-2 border-dashed border-[#0E1153]/30 mt-6" aria-hidden="true" />
      </div>
    </section>
  );
}
