import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WebDesignWorks() {
  return (
    <section
      id="works"
      className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] text-[#0E1153] border-b-2 border-[#0E1153]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#FFA800] inline-block" />
              <span>WEB DESIGN PORTFOLIO</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153]">
              Our Web Design Work
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-sm leading-relaxed">
            See how we design websites that present services clearly and make it easy for customers to get in touch.
          </p>
        </div>

        {/* Works Grid (Desktop: ~60% Left, ~40% Right | Mobile: Stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Left Card — Featured Website (7 cols ~ 58.3%) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between h-full">
            <div>
              {/* Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#0E1153]/15">
                <span className="px-2.5 py-0.5 rounded bg-[#FFA800] text-[#0E1153] text-[10px] font-mono font-bold uppercase border border-[#0E1153]">
                  FEATURED WEBSITE
                </span>
                <span className="text-xs font-mono font-bold text-[#005F4C]">
                  WEB DESIGN &amp; DEVELOPMENT
                </span>
              </div>

              {/* Featured Website Screenshot */}
              <div className="w-full aspect-[512/279] bg-[#FAF8F5] border-2 border-[#0E1153] rounded-xl overflow-hidden relative mb-6 shadow-[3px_3px_0px_#0E1153] group">
                <Image
                  src="/assets/seo-neo-backlinks-webdesign.jpg"
                  alt="SEO Neo Backlinks website homepage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Description */}
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-3">
                SEO Neo Backlinks
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                A website for a UK backlink service provider, designed to explain its services, highlight delivery and reporting details, and make enquiries easy through WhatsApp.
              </p>
            </div>

            {/* External Link Button */}
            <div>
              <a
                href="https://seoneobacklinks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-xs border border-[#0E1153] shadow-[2px_2px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#FFA800] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E1153] transition-all"
              >
                <span>View Website</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column Stacked Cards (5 cols ~ 41.7%) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 h-full">
            {/* Upper-right Card — Project Highlights */}
            <div className="flex-1 p-6 sm:p-7 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded bg-[#CFE8DC] text-[#005F4C] text-[10px] font-mono font-bold uppercase border border-[#0E1153] mb-3 inline-block">
                  PROJECT HIGHLIGHTS
                </span>
                <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-2">
                  Clear Services. Easy Contact.
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-4">
                  Service information, reporting details, and a direct WhatsApp enquiry option help visitors understand the offer and take the next step.
                </p>
              </div>

              <div className="pt-3 border-t border-[#0E1153]/15 text-xs font-mono font-bold text-[#005F4C] leading-snug">
                Service Information · Reporting Details · WhatsApp Enquiries
              </div>
            </div>

            {/* Lower-right Card — Web Design Enquiry */}
            <div className="flex-1 p-6 sm:p-7 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between">
              <div>
                <span className="px-2 py-0.5 rounded bg-[#E1E3F7] text-[#0E1153] text-[10px] font-mono font-bold uppercase border border-[#0E1153] mb-3 inline-block">
                  START YOUR PROJECT
                </span>
                <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-2">
                  Let’s Design Your Business Website
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                  Tell us about your business and what you want your website to achieve. We’ll help you plan the content, pages, and design.
                </p>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFA800] text-[#0E1153] font-heading font-bold text-xs border border-[#0E1153] shadow-[2px_2px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#0E1153] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E1153] transition-all"
                >
                  <span>Discuss Your Website</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
