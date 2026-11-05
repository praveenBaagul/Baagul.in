import React from "react";
import Link from "next/link";

export default function VideoEditingWhyChooseUs() {
  return (
    <section className="relative w-full bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-[#FFBA45] border border-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E1153]">
            ■ VIDEO EDITING SERVICES
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] text-[#0E1153] max-w-4xl mb-12">
          <span>Tell Better Stories with </span>
          <span className="bg-[#FFBA45] text-[#0E1153] px-3 py-0.5 rounded border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] inline-block font-normal">
            Professional
          </span>
          <span> Video Editing</span>
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
                t Baagul, we help brands, creators, and businesses turn raw footage into videos that people actually watch. In today&apos;s fast-scrolling digital world, you have only a few seconds to capture attention — and great editing makes the difference. Our video editing services are designed to keep viewers engaged, communicate your message clearly, and make your brand look its best on every platform.
              </p>

              <p className="font-sans text-base sm:text-lg text-[#121A4A]/85 leading-relaxed mt-6 text-justify">
                From short-form reels and YouTube videos to corporate films and video ads, we handle every part of post-production — cutting, pacing, motion graphics, color grading, sound design, and subtitles. Every edit is tailored to your audience, platform, and brand style, with clear communication and revision rounds until you are happy with the result. Whether you are a creator publishing weekly content or a company launching a new campaign, we deliver consistent, high-quality videos on time so you can focus on growing your business.
              </p>
            </div>

            {/* Right Side: Bangalore Certification Stamp Card */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              <div className="bg-[#CFE8DC] border-2 border-[#0E1153] rounded-xl p-5 shadow-[4px_4px_0px_#0E1153]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#0E1153] tracking-wider">
                    EDIT STANDARDS
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#0E7A63]" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-1">
                  Platform-Ready Exports
                </h4>
                <p className="text-xs text-[#0E1153]/70 font-sans mb-3">
                  Every video delivered in the right resolution, aspect ratio, and format for Instagram, YouTube, and ads.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#0E1153]/20 font-mono text-[10px] text-[#0E1153] font-bold">
                  <span>4K READY</span>
                  <span>9:16 · 16:9 · 1:1</span>
                </div>
              </div>

              <div className="bg-[#FFBA45] border-2 border-[#0E1153] rounded-xl p-5 shadow-[4px_4px_0px_#0E1153]">
                <span className="text-[10px] font-mono uppercase font-bold text-[#0E1153] tracking-wider block mb-1">
                  REVISION GUARANTEE
                </span>
                <p className="font-sans text-xs text-[#0E1153] font-semibold">
                  Clear pricing, revision rounds included, and full ownership of your final video files.
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
                PER-PROJECT OR MONTHLY EDITING PLANS
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E1153] text-[#FEF9ED] font-mono text-xs uppercase font-bold border-2 border-[#0E1153] shadow-[3px_3px_0px_#FFBA45] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Discuss Your Project</span>
              <span>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

