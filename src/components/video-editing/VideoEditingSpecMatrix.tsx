import React from "react";

export default function VideoEditingSpecMatrix() {
  return (
    <section className="relative w-full bg-[#CFE8DC] border-b-2 border-[#0E1153] py-16 px-4 sm:px-8 lg:px-12 text-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#0E1153]/20 pb-6 mb-10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E7A63] block mb-1">
              SYSTEM FOUNDATIONS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153]">
              DESIGN SYSTEM TOKEN & STATE SPECIFICATION MATRIX
            </h3>
          </div>
          <span className="px-3 py-1 bg-white border border-[#0E1153] rounded font-mono text-xs font-bold shadow-[2px_2px_0px_#0E1153]">
            SPEC: BG-SYS-2026-VE
          </span>
        </div>

        {/* 3 Spec Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Accordion States */}
          <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl p-5 shadow-[4px_4px_0px_#0E1153]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#0E7A63] tracking-wider block mb-2">
              01 // INTERACTION STATES
            </span>
            <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-3">
              Accordion Item Matrix
            </h4>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>DEFAULT:</span>
                <span className="font-bold">BG #FEF9ED // + ICON</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>HOVER:</span>
                <span className="font-bold">SHADOW 5px // ACCENT</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>ACTIVE:</span>
                <span className="font-bold">BG #FFFFFF // − ICON</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>FOCUS:</span>
                <span className="font-bold">OUTLINE 2px #0E1153</span>
              </div>
            </div>
          </div>

          {/* Card 2: Campaign Metric Tokens */}
          <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl p-5 shadow-[4px_4px_0px_#0E1153]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#0E7A63] tracking-wider block mb-2">
              02 // EXPORT TOKENS
            </span>
            <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-3">
              Delivery Parameters
            </h4>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>RESOLUTION:</span>
                <span className="font-bold text-[#0E7A63]">UP TO 4K</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>TURNAROUND:</span>
                <span className="font-bold text-[#C8553D]">24–48 HRS</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>ASPECT RATIOS:</span>
                <span className="font-bold">9:16 · 16:9 · 1:1</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>FORMATS:</span>
                <span className="font-bold">MP4 · MOV</span>
              </div>
            </div>
          </div>

          {/* Card 3: Color Tokens */}
          <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl p-5 shadow-[4px_4px_0px_#0E1153]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#0E7A63] tracking-wider block mb-2">
              03 // COLOR SPECS
            </span>
            <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-3">
              Brand Palettes
            </h4>
            <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
              <div className="p-2 rounded bg-[#0E7A63] text-[#FEF9ED] font-bold border border-[#0E1153]">
                EMERALD #0E7A63
              </div>
              <div className="p-2 rounded bg-[#0E1153] text-[#FEF9ED] font-bold border border-[#0E1153]">
                NAVY #0E1153
              </div>
              <div className="p-2 rounded bg-[#FFBA45] text-[#0E1153] font-bold border border-[#0E1153]">
                MUSTARD #FFBA45
              </div>
              <div className="p-2 rounded bg-[#E1E3F7] text-[#0E1153] font-bold border border-[#0E1153]">
                LAVENDER #E1E3F7
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

