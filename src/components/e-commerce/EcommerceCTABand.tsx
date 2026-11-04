import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function EcommerceCTABand() {
  return (
    <section className="w-full py-16 px-4 sm:px-12 bg-[#0e7a63] text-canvas border-y-2 border-indigo-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top coordinate bar */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-canvas/20 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-marigold" />
            <span className="font-bold tracking-wider">// COMMERCE SPRINT DISPATCH</span>
          </div>
          <span className="text-[11px] text-canvas/75 hidden sm:inline">HUSTLEHUB TECH PARK // HSR</span>
          <span className="text-[11px] text-marigold font-bold">STATUS: SPRINT OPEN</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Heading & description */}
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-marigold" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-marigold">
                LAUNCH YOUR REBUILD
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl text-canvas tracking-tight mb-4">
              Ready to modernize
              <br />
              <span>your store? </span>
              <span className="relative inline-block mt-1">
                <span className="bg-marigold text-indigo-dark px-3 py-0.5 rounded-[2px] border border-indigo-main shadow-[3px_3px_0px_#121a4a] inline-block">
                  Let&apos;s build.
                </span>
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-canvas/80 max-w-lg leading-relaxed">
              From headless Shopify Plus architecture and 1-click checkouts to high-ROAS product feeds, our Bengaluru engineering desk delivers measurable revenue growth.
            </p>
          </div>

          {/* Right: Connect action card */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-canvas text-indigo-main font-bold text-sm shadow-[3px_3px_0px_#121a4a] hover:bg-canvas-card hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Schedule Architecture Call</span>
              <span className="text-xs">↗</span>
            </Link>

            <div className="w-full sm:w-auto p-4 bg-indigo-navy border border-canvas/20 rounded-xl text-xs font-mono text-canvas/80 flex flex-col gap-1.5 shadow-[4px_4px_0px_#021064]">
              <div className="flex items-center gap-2 text-canvas">
                <span>✉</span>
                <a href="mailto:support@baagul.in" className="hover:text-marigold transition-colors">
                  support@baagul.in
                </a>
              </div>
              <div className="flex items-center gap-2 text-canvas">
                <span>📞</span>
                <a href="tel:+917483737014" className="hover:text-marigold transition-colors">
                  +91 7483737014
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-canvas/60 pt-1 border-t border-canvas/15">
                <span>📍</span>
                <span>Hustlehub Tech Park, HSR Layout, Bengaluru</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

