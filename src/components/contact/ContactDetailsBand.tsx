import React from "react";

export default function ContactDetailsBand() {
  return (
    <section className="w-full bg-[#0e7a63] text-canvas border-y-2 border-indigo-main py-12 px-4 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-canvas/20">
        
        {/* Column 1: Email Desk */}
        <div className="flex flex-col items-start pt-4 md:pt-0">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-marigold">
            <span>✉ EMAIL US</span>
          </div>
          <a
            href="mailto:support@baagul.in"
            className="font-heading text-2xl sm:text-3xl text-canvas hover:text-marigold transition-colors break-all"
          >
            support@baagul.in
          </a>
          <span className="text-xs text-canvas/75 mt-2">
            Inquiries, briefs &amp; partner correspondence
          </span>
        </div>

        {/* Column 2: Physical Location */}
        <div className="flex flex-col items-start md:px-8 pt-6 md:pt-0">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-marigold">
            <span>📍 VISIT US</span>
          </div>
          <p className="font-heading text-xl sm:text-2xl text-canvas leading-snug">
            2nd Floor Hustlehub Tech Park,
            <br />
            HSR Layout, Bengaluru, KA 560102
          </p>
          <span className="text-xs text-canvas/75 mt-2">
            Studio visits by prior appointment
          </span>
        </div>

        {/* Column 3: Corporate Web Portal */}
        <div className="flex flex-col items-start md:px-8 pt-6 md:pt-0">
          <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-marigold">
            <span>🌐 WEBSITE</span>
          </div>
          <a
            href="https://www.baagul.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-2xl sm:text-3xl text-canvas hover:text-marigold transition-colors"
          >
            www.baagul.in
          </a>
          <span className="text-xs text-canvas/75 mt-2">
            Engineering, Growth Engine &amp; Creative Agency
          </span>
        </div>

      </div>
    </section>
  );
}

