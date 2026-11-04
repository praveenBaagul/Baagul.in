import React from "react";

export default function CraftsmanStandardsBand() {
  return (
    <section className="w-full py-12 px-4 sm:px-12 max-w-7xl mx-auto border-t border-indigo-main/20">
      <div className="flex items-center justify-between mb-6 text-xs font-mono text-slate-text">
        <div className="flex items-center gap-2 text-indigo-main font-bold">
          <span className="w-2 h-2 rounded bg-peacock" />
          <span>Craftsman Component Sheet &amp; Interaction Standards</span>
        </div>
        <span className="text-[11px] opacity-70">SPEC 02.4 // HSR CORE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* State Card 1 */}
        <div className="p-4 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[3px_3px_0px_#121a4a] flex flex-col justify-between">
          <span className="text-[9px] font-mono text-slate-text uppercase block mb-3">
            SERVICE CARD STATES MATRIX
          </span>
          <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
            <div className="p-2 border border-indigo-main/30 rounded bg-canvas">
              01. DEFAULT
              <br />
              <span className="text-slate-text">4px Offset Shadow</span>
            </div>
            <div className="p-2 border border-peacock rounded bg-peacock-light text-peacock-dark font-bold">
              02. HOVER
              <br />
              <span>-2px Lift / 7px Shadow</span>
            </div>
            <div className="p-2 border border-indigo-main/30 rounded bg-canvas">
              03. ACTIVE
              <br />
              <span className="text-slate-text">Muted Accent Tag</span>
            </div>
          </div>
        </div>

        {/* State Card 2 */}
        <div className="p-4 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[3px_3px_0px_#121a4a] flex flex-col justify-between">
          <span className="text-[9px] font-mono text-slate-text uppercase block mb-3">
            PRIMARY CTA ACTION STATES
          </span>
          <div className="grid grid-cols-2 gap-3 text-[10px] font-mono text-center">
            <div className="p-2.5 rounded-lg bg-indigo-main text-canvas font-bold border border-indigo-main shadow-[2px_2px_0px_#c8553d]">
              DEFAULT / ACTIVE
            </div>
            <div className="p-2.5 rounded-lg bg-canvas text-indigo-main font-bold border border-indigo-main">
              SECONDARY HOVER
            </div>
          </div>
          <div className="mt-2 p-1.5 rounded bg-peacock text-canvas text-[9px] font-mono text-center font-bold">
            ✓ 24H SPRINT ENGAGEMENT
          </div>
        </div>

      </div>
    </section>
  );
}

