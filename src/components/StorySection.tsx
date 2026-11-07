import React from "react";
import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto border-b border-indigo-main/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Photo with Cross-stitch border */}
        <div className="lg:col-span-6 relative">
          <div className="relative p-3 bg-canvas-card border-2 border-indigo-main rounded shadow-[8px_8px_0px_#121a4a]">
            {/* Running stitch accent inner */}
            <div className="absolute top-1 left-1 right-1 bottom-1 border border-dashed border-terracotta/60 pointer-events-none rounded" />
            
            <div className="relative h-72 sm:h-96 w-full rounded overflow-hidden">
              <Image
                src="/assets/22109.png"
                alt="Baagul founders and team reviewing strategy papers"
                fill
                className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            {/* Stamp label */}
            <div className="absolute -bottom-4 -left-4 bg-terracotta text-canvas px-4 py-1.5 border border-indigo-main shadow-[3px_3px_0px_#121a4a] text-xs font-bold uppercase tracking-wider font-sans">
              FOUNDED 2020 · BANGALORE
            </div>
          </div>
        </div>

        {/* Right Column: Narrative + Swatches */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-marigold border border-indigo-main" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-terracotta">
              OUR PHILOSOPHY & ROOTS
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main leading-tight mb-6">
            Creative ideas,
            <br />
            Measured results.
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-text leading-relaxed mb-6">
            We don&apos;t build disposable hype. Rooted in Bengaluru&apos;s dual heritage of deep 
            scientific engineering and rich traditional craftsmanship, Baagul approaches 
            modern digital marketing as an exact technical discipline.
          </p>

          <p className="font-sans text-base sm:text-lg text-slate-text leading-relaxed mb-8">
            Every keyword strategy, design token, conversion funnel, and campaign expenditure is 
            tied directly to your P&amp;L. No fluff, no jargon, and absolute transparency from 
            first sprint to milestone scale.
          </p>

          {/* Engagement Swatches */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="p-4 bg-peacock-light/50 border border-peacock rounded flex flex-col">
              <span className="font-heading text-xl text-peacock-dark font-medium mb-1">
                Engineering-First
              </span>
              <span className="text-xs text-indigo-main/80">
                Data modeling, semantic SEO architecture, and high-speed web code built for crawl bots and real humans.
              </span>
            </div>

            <div className="p-4 bg-canvas-card border border-indigo-main/30 rounded flex flex-col">
              <span className="font-heading text-xl text-indigo-mid font-medium mb-1">
                Direct Dialogue
              </span>
              <span className="text-xs text-indigo-main/80">
                You work directly with senior strategists and developers. No account executive telephone games.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

