import React from "react";

export default function GuestPostSpecMatrix() {
  return (
    <section className="w-full py-12 px-4 sm:px-12 bg-[#f2eee2] border-t-2 border-indigo-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-slate-text">
          <div className="flex items-center gap-2 text-indigo-main font-bold">
            <span className="w-2 h-2 rounded-full bg-peacock" />
            <span>GUEST POSTS &amp; PR DESIGN SYSTEM SPECIFICATION MATRIX</span>
          </div>
          <span className="text-[11px] opacity-70">
            TOKENS: FRAUNCES + DM SANS / 2PX INK / #0E1153
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="p-4 bg-canvas-card border-2 border-indigo-main rounded-xl">
            <span className="font-bold text-indigo-main block mb-2">1. EDITORIAL ACCORDION</span>
            <p className="text-slate-text leading-relaxed">
              [DEFAULT / CLOSED]: Flat ground, 2px solid border.<br />
              [HOVER]: Subtle hover elevation, cursor pointer.<br />
              [EXPANDED / OPEN]: 4px hard shadow, mustard highlight.
            </p>
          </div>

          <div className="p-4 bg-canvas-card border-2 border-indigo-main rounded-xl">
            <span className="font-bold text-indigo-main block mb-2">2. PR PLACEMENT CARDS</span>
            <p className="text-slate-text leading-relaxed">
              [DEFAULT]: 6px navy shadow, alternating -1° / 0° / +1° rotation.<br />
              [HOVER]: Lifts -4px with 10px projection.<br />
              [TOP-BAR TINT]: Mint (#CFE8DC), Mustard (#F5A800), and Lavender (#E1E3F7).
            </p>
          </div>

          <div className="p-4 bg-canvas-card border-2 border-indigo-main rounded-xl">
            <span className="font-bold text-indigo-main block mb-2">3. CTA INTERACTION STATES</span>
            <p className="text-slate-text leading-relaxed">
              [DEFAULT]: 4px hard shadow, 2px solid perimeter outline.<br />
              [PRESSED / ACTIVE]: 0px shadow, translated 4px down-right.<br />
              [DESK LINK]: Links directly to contact &amp; media briefing form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
