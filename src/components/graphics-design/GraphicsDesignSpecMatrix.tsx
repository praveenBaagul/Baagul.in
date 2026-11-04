import React from "react";

export default function GraphicsDesignSpecMatrix() {
  return (
    <section className="w-full py-12 px-6 sm:px-12 bg-[#F2EEE2] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-[#3E4945]">
          <div className="flex items-center gap-2 text-[#0E1153] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
            <span>COMPONENT STATE SPECIMEN MATRIX</span>
          </div>
          <span className="text-[11px] opacity-70">
            FRAUNCES + DM SANS / 2PX INK / #0E1153
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">1. FORM FIELD STATES</span>
            <p className="text-[#3E4945] leading-relaxed">
              [DEFAULT]: 2px outline, #FAF8F5 fill.<br />
              [FOCUS]: #FFFFFF ground, 2px ring.<br />
              [ERROR]: Red alert indicator label.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">2. INTERACTIVE BOARD STATES</span>
            <p className="text-[#3E4945] leading-relaxed">
              [DEFAULT]: 5px hard shadow projection.<br />
              [HOVER]: -2px vertical lift, 1° tilt.<br />
              [ACTIVE]: Border highlight accent.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">3. BADGES &amp; ACCENT PINS</span>
            <p className="text-[#3E4945] leading-relaxed">
              [PILL]: 10px uppercase font-mono.<br />
              [TINT]: Gold, Mint, Lavender, Navy.<br />
              [PRODUCTION]: Print &amp; Web ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

