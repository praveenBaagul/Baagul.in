import React from "react";
import Link from "next/link";

export default function ServicesCTABand() {
  return (
    <section className="w-full py-16 px-4 sm:px-12 bg-[#0e7a63] text-canvas border-y-2 border-indigo-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Top 3x2 Matrix Brand Badge in Top Right */}
        <div className="hidden sm:flex absolute -top-4 right-0 z-10 p-2.5 bg-[#1b1f5e] border-2 border-canvas rounded-xl shadow-[3px_3px_0px_#f5a800]">
          <div className="grid grid-cols-3 grid-rows-2 gap-1 w-6 shrink-0" aria-hidden="true">
            <span className="w-2 h-2 bg-[#0e7a63]" />
            <span className="w-2 h-2 bg-[#f5a800]" />
            <span className="w-2 h-2 bg-[#cfe8dc]" />
            <span className="w-2 h-2 bg-[#cfe8dc]" />
            <span className="w-2 h-2 bg-[#0e7a63]" />
            <span className="w-2 h-2 bg-[#f5a800]" />
          </div>
        </div>

        {/* Top coordinate bar */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-dashed border-canvas/25 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-marigold" />
            <span className="font-bold tracking-wider">// ENGAGEMENT PHASE 2025</span>
          </div>
          <span className="text-[11px] text-canvas/75 hidden sm:inline">HSR LAYOUT • BENGALURU</span>
          <span className="text-[11px] text-marigold font-bold sm:mr-16">STATUS: OPEN</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Heading & description */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-marigold" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-marigold">
                LET&apos;S TALK
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl text-canvas tracking-tight mb-4">
              Ready to grow?
              <br />
              <span>Let&apos;s </span>
              <span className="relative inline-block mt-1">
                <span className="bg-marigold text-indigo-dark px-3 py-0.5 rounded-[2px] border-2 border-indigo-main shadow-[4px_4px_0px_#121a4a] inline-block font-extrabold">
                  talk.
                </span>
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-canvas/80 max-w-lg leading-relaxed">
              Whether you need a top-tier e-commerce rebuild, SEO authority architecture, or growth performance campaigns—our Bangalore team is ready.
            </p>
          </div>

          {/* Right: Connect action card */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-canvas text-indigo-main font-heading font-bold text-base border-2 border-indigo-main shadow-[4px_4px_0px_#f5a800] hover:bg-canvas-card hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Connect Us</span>
              <span className="text-sm font-bold">→</span>
            </Link>

            <div className="w-full sm:w-[320px] p-5 bg-[#1b1f5e] border border-canvas/20 rounded-xl text-xs font-mono text-canvas/90 flex flex-col gap-2.5 shadow-[5px_5px_0px_#f5a800]">
              {/* Email with SVG */}
              <div className="flex items-center gap-2.5 text-canvas">
                <svg className="w-[15px] h-[12px] shrink-0" viewBox="0 0 15 12" fill="none" aria-hidden="true">
                  <path d="M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H1.5V12M7.5 6.75L1.5 3V10.5V10.5V10.5H13.5V10.5V10.5V3L7.5 6.75V6.75M7.5 5.25L13.5 1.5H1.5L7.5 5.25V5.25M1.5 3V1.5V1.5V3V10.5V10.5V10.5V10.5V10.5V10.5V3V3" fill="#F5A800"/>
                </svg>
                <a href="mailto:support@baagul.in" className="hover:text-marigold transition-colors">
                  support@baagul.in
                </a>
              </div>

              {/* Phone with SVG */}
              <div className="flex items-center gap-2.5 text-canvas">
                <svg className="w-[13.5px] h-[13.5px] shrink-0" viewBox="0 0 13.5 13.5" fill="none" aria-hidden="true">
                  <path d="M12.7125 13.5C11.15 13.5 9.60625 13.1594 8.08125 12.4781C6.55625 11.7969 5.16875 10.8313 3.91875 9.58125C2.66875 8.33125 1.70312 6.94375 1.02188 5.41875C0.340625 3.89375 0 2.35 0 0.7875C0 0.5625 0.075 0.375 0.225 0.225C0.375 0.075 0.5625 0 0.7875 0H3.825C4 0 4.15625 0.059375 4.29375 0.178125C4.43125 0.296875 4.5125 0.4375 4.5375 0.6L5.025 3.225C5.05 3.425 5.04375 3.59375 5.00625 3.73125C4.96875 3.86875 4.9 3.9875 4.8 4.0875L2.98125 5.925C3.23125 6.3875 3.52813 6.83437 3.87188 7.26562C4.21562 7.69688 4.59375 8.1125 5.00625 8.5125C5.39375 8.9 5.8 9.25937 6.225 9.59062C6.65 9.92188 7.1 10.225 7.575 10.5L9.3375 8.7375C9.45 8.625 9.59688 8.54062 9.77812 8.48438C9.95937 8.42813 10.1375 8.4125 10.3125 8.4375L12.9 8.9625C13.075 9.0125 13.2188 9.10312 13.3313 9.23438C13.4438 9.36563 13.5 9.5125 13.5 9.675V12.7125C13.5 12.9375 13.425 13.125 13.275 13.275C13.125 13.425 12.9375 13.5 12.7125 13.5V13.5M2.26875 4.5L3.50625 3.2625V3.2625V3.2625L3.1875 1.5V1.5V1.5H1.51875V1.5V1.5C1.58125 2.0125 1.66875 2.51875 1.78125 3.01875C1.89375 3.51875 2.05625 4.0125 2.26875 4.5V4.5M8.98125 11.2125C9.46875 11.425 9.96562 11.5938 10.4719 11.7188C10.9781 11.8438 11.4875 11.925 12 11.9625V11.9625V11.9625V10.3125V10.3125V10.3125L10.2375 9.95625V9.95625V9.95625L8.98125 11.2125V11.2125M2.26875 4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5M8.98125 11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125" fill="#F5A800"/>
                </svg>
                <a href="tel:+917483737014" className="hover:text-marigold transition-colors">
                  +91 7483737014
                </a>
              </div>

              {/* Location Pin with SVG */}
              <div className="flex items-center gap-2.5 text-[11px] text-canvas/75 pt-2 border-t border-canvas/15">
                <svg className="w-3.5 h-3.5 shrink-0 text-[#f5a800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Hustlehub Tech Park, HSR Layout, Bengaluru</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

