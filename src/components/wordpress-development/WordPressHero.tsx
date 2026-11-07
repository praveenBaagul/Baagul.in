import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function WordPressHero() {
  return (
    <section className="relative w-full bg-[#E1E3F7] text-[#0E1153] pt-12 pb-20 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
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
            <span className="text-[#0E1153] font-black">WORDPRESS DEVELOPMENT</span>
          </div>


        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#FFFFFF] border border-[#0E1153]/20 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
              <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
              <span>BESPOKE CMS ENGINEERING</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-7xl lg:text-[76px] tracking-tight text-[#0E1153] leading-none mb-6">
              <span>WordPress / </span>
              <br />
              <span className="inline-block bg-[#FFA800] text-[#0E1153] px-4 py-1 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] mt-2">
                Development
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#3E4945] max-w-xl leading-relaxed mb-8">
              Custom, high-speed WordPress architectures and bespoke block themes that pass Core Web Vitals with 99+ PageSpeed scores, zero bloat, and enterprise-grade security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
              >
                <span>Get Started</span>
                <span>→</span>
              </Link>

              <a
                href="#works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFFFFF] text-[#0E1153] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:bg-[#FAF8F5] transition-all"
              >
                <span>View Case Studies</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Right Column (6 cols) - WordPress Architecture Illustration Artwork */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="w-full max-w-xl lg:max-w-2xl relative transition-transform duration-300 hover:scale-[1.01]">
              <div className="relative w-full aspect-square">
                <Image
                  src="/assets/wordpress-hero-clean.jpg"
                  alt="WordPress Development - Bespoke Themes, Plugins, Data Migration, and CMS Architecture"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 650px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

