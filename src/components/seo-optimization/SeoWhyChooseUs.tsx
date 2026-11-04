import React from "react";

export default function SeoWhyChooseUs() {
  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow and Headline */}
        <div className="text-center max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#005F4C]">
            <span className="w-2.5 h-2.5 bg-[#FFBA45] shadow-[1px_1px_0px_#0E1153]" />
            <span>GROWTH PARTNERSHIP</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-6xl text-[#0E1153] leading-tight mb-4">
            <span>Rank Higher.</span>
            <br />
            <span>Get Found.</span>
          </h2>

          <div className="inline-block mt-2">
            <span className="bg-[#FFBA45] text-[#0E1153] font-heading font-bold text-2xl sm:text-3xl px-6 py-2 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
              Grow Faster
            </span>
          </div>
        </div>

        {/* 2-Column Editorial Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left">
          {/* Left Column with Dropcap */}
          <div className="flex flex-col gap-6 text-[#3E4945] font-sans text-base sm:text-lg leading-relaxed">
            <p>
              <span className="font-heading text-6xl font-bold text-[#0E1153] float-left mr-3 leading-none">
                A
              </span>
              t Baagul, we believe organic search is more than just ranking for keywords — it&apos;s the most durable, compounding revenue engine for your business. As a trusted search engine optimization studio in Bengaluru, we build scientific organic pipelines designed to dominate search engine results pages, protect your brand, and scale with your growth.
            </p>

            <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153] text-xs font-mono font-bold text-[#005F4C]">
              <span>KEY PERFORMANCE PROMISE // ZERO CRAWL BOTTLENECKS // HIGH-COMMERCIAL CONVERSION</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 text-[#3E4945] font-sans text-base sm:text-lg leading-relaxed">
            <p>
              We focus on search intent, content relevance, and technical integrity so your website doesn&apos;t just attract impressions — it drives qualified leads, phone calls, and revenue.
            </p>

            <p>
              Our process is backed by deep analytics, continuous crawl monitoring, and ethical, white-hat strategies that secure lasting organic dominance across Google, Bing, and AI search engines.
            </p>

            {/* Founder / Team attribution tag */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#0E1153]/20">
              <div className="w-10 h-10 rounded-full bg-[#005F4C] text-[#FEF9ED] font-heading font-bold flex items-center justify-center border border-[#0E1153]">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm text-[#0E1153]">
                  Baagul Search Architecture Team
                </span>
                <span className="font-mono text-xs text-[#3E4945]">
                  Engineered in HSR Layout, Bengaluru
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
