import React from "react";

export default function CareerSpecMatrix() {
  return (
    <section className="w-full py-16 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 text-xs font-mono text-[#3E4945]">
          <div className="flex items-center gap-2 text-[#0E1153] font-bold">
            <span className="w-2.5 h-2.5 bg-[#0E1153]" />
            <span>DESIGN SYSTEM SPECIMEN // COMPONENT STATE MATRIX</span>
          </div>
          <span className="text-[11px] opacity-70">
            RIGID BROADSHEET-MEETS-DIGITAL AUDIT VERIFYING PHYSICAL TACTILE STATES
          </span>
        </div>

        {/* 3 Column State Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs font-mono">
          {/* Card 1 */}
          <div className="p-5 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[4px_4px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-3">
              01. JOB CARD STATES (DEFAULT VS HOVER VS FOCUS)
            </span>
            <div className="p-4 bg-[#FAF8F5] border border-[#0E1153] rounded-lg mb-3">
              <span className="text-[10px] text-[#3E4945] block mb-1">STATE: DEFAULT</span>
              <span className="font-heading font-bold text-base text-[#0E1153] block">
                Video Editor
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#CFE8DC] text-[9px] font-bold text-[#005F4C] inline-block mt-2">
                FREELANCE
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[6px_6px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-3">
              STATE: HOVER (-4PX)
            </span>
            <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-lg shadow-[4px_4px_0px_#0E1153] mb-3">
              <span className="text-[10px] text-[#005F4C] font-bold block mb-1">
                Translated Up + Deep Shadow
              </span>
              <span className="font-heading font-bold text-base text-[#0E1153] block">
                Video Editor
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#CFE8DC] text-[9px] font-bold text-[#005F4C] inline-block mt-2">
                FREELANCE
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[4px_4px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-3">
              STATE: KEYBOARD FOCUS
            </span>
            <div className="p-4 bg-[#FFA800]/20 border-2 border-dashed border-[#0E1153] rounded-lg mb-3">
              <span className="text-[10px] text-[#0E1153] font-bold block mb-1">
                Focused Outline Ring
              </span>
              <span className="font-heading font-bold text-base text-[#0E1153] block">
                Video Editor
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#CFE8DC] text-[9px] font-bold text-[#005F4C] inline-block mt-2">
                FREELANCE
              </span>
            </div>
          </div>
        </div>

        {/* Bottom 2 Spec Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
          {/* Tag Chips */}
          <div className="p-5 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[4px_4px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-3">
              02. TAG CHIP VARIATIONS
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#CFE8DC] border border-[#0E1153] text-[10px] font-bold text-[#005F4C]">
                FREELANCE
              </span>
              <span className="px-3 py-1 rounded-full bg-[#E1E3F7] border border-[#0E1153] text-[10px] font-bold text-[#0E1153]">
                REMOTE
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFA800] border border-[#0E1153] text-[10px] font-bold text-[#0E1153]">
                HSR LAYOUT
              </span>
              <span className="px-3 py-1 rounded bg-[#0E1153] text-[#FEF9ED] text-[10px] font-bold">
                INDEXED 100%
              </span>
            </div>
          </div>

          {/* Scalability Topology */}
          <div className="p-5 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[4px_4px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-3">
              03. OPENINGS SCALABILITY TOPOLOGY
            </span>
            <div className="flex flex-col gap-1.5 text-[11px] text-[#3E4945]">
              <div className="flex justify-between">
                <span>Current State (Q2):</span>
                <span className="font-bold text-[#0E1153]">2 Roles (Staggered 6-Col)</span>
              </div>
              <div className="flex justify-between">
                <span>Expansion State (Q3):</span>
                <span className="font-bold text-[#0E1153]">3–6 Roles (Auto-Fill 3-Col)</span>
              </div>
              <div className="flex justify-between">
                <span>Department Filtering:</span>
                <span className="font-bold text-[#005F4C]">Ready (Content, Media, Tech)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

