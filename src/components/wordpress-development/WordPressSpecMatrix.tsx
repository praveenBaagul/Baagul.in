import React from "react";

export default function WordPressSpecMatrix() {
  return (
    <section className="w-full py-12 px-6 sm:px-12 bg-[#F2EEE2] border-t-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-[#3E4945]">
          <div className="flex items-center gap-2 text-[#0E1153] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
            <span>WORDPRESS CMS TOKENS &amp; COMPONENT STATE MATRIX</span>
          </div>
          <span className="text-[11px] opacity-70">
            FRAUNCES + DM SANS / 2PX INK / #0E1153
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">1. GUTENBERG BLOCK TOKENS</span>
            <p className="text-[#3E4945] leading-relaxed">
              [THEME.JSON]: Fluid spacing, modular typography scale.<br />
              [SERVER RENDER]: 0kb unused CSS overhead.<br />
              [CLIENT INTERACTION]: Micro-hydration on viewport entry.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">2. CORE WEB VITALS</span>
            <p className="text-[#3E4945] leading-relaxed">
              [LCP]: Sub-second Largest Contentful Paint (&lt; 0.9s).<br />
              [CLS]: Zero cumulative layout shifts (&lt; 0.01).<br />
              [INP]: Immediate response interactivity (&lt; 80ms).
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">3. SECURITY PROFILES</span>
            <p className="text-[#3E4945] leading-relaxed">
              [WAF]: Cloudflare managed ruleset &amp; rate-limiting.<br />
              [REST API]: Token authentication &amp; endpoint lockdown.<br />
              [BACKUPS]: Daily immutable off-site S3 snapshotting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

