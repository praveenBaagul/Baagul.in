import React from "react";
import Link from "next/link";

export default function DigitalMarketingWhyChooseUs() {
  return (
    <section className="relative w-full bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-[#FFBA45] border border-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E1153]">
            ■ DIGITAL MARKETING SERVICES
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] text-[#0E1153] max-w-4xl mb-12">
          <span>Grow Faster with </span>
          <span className="bg-[#FFBA45] text-[#0E1153] px-3 py-0.5 rounded border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] inline-block font-normal">
            Data-Driven
          </span>
          <span> Digital Marketing</span>
        </h2>

        {/* Editorial Layout: Long Copy with Drop-Cap */}
        <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl p-8 sm:p-12 shadow-[8px_8px_0px_#0E1153] mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Long Copy with Drop-Cap 'A' */}
            <div className="lg:col-span-8">
              <p className="font-sans text-base sm:text-lg text-[#121A4A]/85 leading-relaxed text-justify">
                <span className="float-left text-6xl sm:text-7xl font-heading font-bold text-[#0E7A63] leading-none pr-3 pt-1">
                  A
                </span>
                t Baagul, we help businesses build a strong online presence and generate measurable growth through strategic digital marketing solutions. In today&apos;s competitive digital landscape, simply having a website is not enough — you need visibility, engagement, and consistent lead generation. Our digital marketing services are designed to increase brand awareness, drive targeted traffic, and convert visitors into loyal customers.
              </p>

              <p className="font-sans text-base sm:text-lg text-[#121A4A]/85 leading-relaxed mt-6 text-justify">
                From search engine optimization (SEO) and social media marketing to paid advertising and content strategy, we create result-oriented campaigns tailored to your business goals. We focus on performance, analytics, and continuous optimization to ensure maximum return on investment. Every strategy we implement is backed by research, competitor analysis, and audience insights to deliver real, trackable results. Whether you are a startup looking to build your brand or an established company aiming to scale, we provide customized digital marketing solutions that help you grow sustainably and stay ahead of the competition.
              </p>
            </div>

            {/* Right Side: Bangalore Certification Stamp Card */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              <div className="bg-[#CFE8DC] border-2 border-[#0E1153] rounded-xl p-5 shadow-[4px_4px_0px_#0E1153]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#0E1153] tracking-wider">
                    VERIFIED PROTOCOL
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#0E7A63]" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-1">
                  Audited Bangalore Growth Engine
                </h4>
                <p className="text-xs text-[#0E1153]/70 font-sans mb-3">
                  Strictly engineered marketing workflows delivering 3-5x ROAS for Indian & global brands.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#0E1153]/20 font-mono text-[10px] text-[#0E1153] font-bold">
                  <span>ISO 9001:2015</span>
                  <span>HSR LAYOUT SPEC</span>
                </div>
              </div>

              <div className="bg-[#FFBA45] border-2 border-[#0E1153] rounded-xl p-5 shadow-[4px_4px_0px_#0E1153]">
                <span className="text-[10px] font-mono uppercase font-bold text-[#0E1153] tracking-wider block mb-1">
                  TRANSPARENCY GUARANTEE
                </span>
                <p className="font-sans text-xs text-[#0E1153] font-semibold">
                  Zero hidden markups. 100% ad account ownership. Live Looker Studio reporting accessible 24/7.
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Card Footer Action */}
          <div className="mt-8 pt-6 border-t border-[#0E1153]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase text-[#0E7A63]">
                ✦ NO CONTRACT LOCK-IN
              </span>
              <span className="text-[#0E1153]/40">·</span>
              <span className="font-mono text-xs text-[#0E1153]/70">
                MONTH-TO-MONTH PERFORMANCE AGREEMENTS
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E1153] text-[#FEF9ED] font-mono text-xs uppercase font-bold border-2 border-[#0E1153] shadow-[3px_3px_0px_#FFBA45] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Schedule Strategy Call</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

