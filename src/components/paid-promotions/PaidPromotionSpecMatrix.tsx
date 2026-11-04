import React from "react";

export default function PaidPromotionSpecMatrix() {
  return (
    <section className="w-full py-12 px-6 sm:px-12 bg-[#F2EEE2] border-t-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-[#3E4945]">
          <div className="flex items-center gap-2 text-[#0E1153] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
            <span>PAID PROMOTION SPECIFICATION MATRIX</span>
          </div>
          <span className="text-[11px] opacity-70">
            FRAUNCES + DM SANS / 2PX INK / #0E1153
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">1. CREATOR TIERING</span>
            <p className="text-[#3E4945] leading-relaxed">
              [NANO]: 10k–50k authentic micro-focus.<br />
              [MID]: 50k–250k balanced commercial reach.<br />
              [MACRO]: 250k+ massive brand volume.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">2. ATTRIBUTION PROTOCOLS</span>
            <p className="text-[#3E4945] leading-relaxed">
              [UTM]: Multi-tier dynamic parameter tags.<br />
              [PIXEL]: Server-side Conversions API.<br />
              [REPORT]: Real-time ROAS dashboard.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">3. COMPLIANCE STANDARDS</span>
            <p className="text-[#3E4945] leading-relaxed">
              [FTC / ASCI]: Clear sponsorship tags.<br />
              [RIGHTS]: Perpetual commercial usage.<br />
              [ESCROW]: Milestone-released budgets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

