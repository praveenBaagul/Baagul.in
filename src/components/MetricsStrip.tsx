import React from "react";

export default function MetricsStrip() {
  return (
    <section className="w-full bg-[#005145] text-canvas relative overflow-hidden py-14 px-4 sm:px-12 border-y-2 border-indigo-main">
      {/* Kasuti geometric motif border line */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-terracotta via-marigold to-peacock opacity-80" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-canvas/20">
        
        {/* Metric 1 */}
        <div className="flex flex-col items-center md:items-start md:px-6 pt-4 md:pt-0">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-heading text-6xl sm:text-7xl font-normal text-marigold tracking-tight">
              150+
            </span>
          </div>
          <span className="font-sans font-semibold text-base sm:text-lg text-canvas">
            Campaigns Engineered
          </span>
          <span className="font-sans text-xs text-canvas/70 mt-1 max-w-xs text-center md:text-left">
            Across B2B SaaS, D2C retail, and local retail powerhouses.
          </span>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col items-center md:items-start md:px-8 pt-8 md:pt-0">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-heading text-6xl sm:text-7xl font-normal text-marigold tracking-tight">
              98%
            </span>
          </div>
          <span className="font-sans font-semibold text-base sm:text-lg text-canvas">
            Client Retention Rate
          </span>
          <span className="font-sans text-xs text-canvas/70 mt-1 max-w-xs text-center md:text-left">
            Built on transparent dashboards and zero vanity reporting.
          </span>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col items-center md:items-start md:px-8 pt-8 md:pt-0">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-heading text-6xl sm:text-7xl font-normal text-marigold tracking-tight">
              5X
            </span>
          </div>
          <span className="font-sans font-semibold text-base sm:text-lg text-canvas">
            Average ROAS Delivered
          </span>
          <span className="font-sans text-xs text-canvas/70 mt-1 max-w-xs text-center md:text-left">
            Through rigorously calibrated search and paid social funnels.
          </span>
        </div>

      </div>

      {/* Subtle bottom Kannada motto strip */}
      <div className="max-w-7xl mx-auto mt-10 pt-4 border-t border-canvas/15 flex items-center justify-between text-xs text-canvas/60">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-marigold rounded-full" />
          <span className="font-kannada">ಕಾರ್ಯವೇ ಕಾಯಕ · Work is worship</span>
        </div>
        <span className="hidden sm:inline">Crafted with pride in Namma Bengaluru</span>
      </div>
    </section>
  );
}

