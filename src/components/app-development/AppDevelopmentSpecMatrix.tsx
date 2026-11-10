import React from "react";

export default function AppDevelopmentSpecMatrix() {
  return (
    <section className="relative w-full bg-[#CFE8DC] border-b-2 border-[#0E1153] py-16 px-4 sm:px-8 lg:px-12 text-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#0E1153]/20 pb-6 mb-10 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E7A63] block mb-1">
              SYSTEM ARCHITECTURE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153]">
              MOBILE RUNTIME &amp; ENGINEERING SPECIFICATION MATRIX
            </h3>
          </div>
          <span className="px-3 py-1 bg-white border border-[#0E1153] rounded font-mono text-xs font-bold shadow-[2px_2px_0px_#0E1153]">
            SPEC: BG-SYS-2026-APP
          </span>
        </div>

        {/* 3 Spec Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Runtime & Memory */}
          <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl p-5 shadow-[4px_4px_0px_#0E1153]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#0E7A63] tracking-wider block mb-2">
              01 // RUNTIME BOUNDS
            </span>
            <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-3">
              Performance Budgets
            </h4>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>FRAME RATE:</span>
                <span className="font-bold">60–120 FPS PROMOTION</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>COLD BOOT:</span>
                <span className="font-bold">&lt; 1.2s TIME-TO-INTERACTIVE</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>MEMORY HEAP:</span>
                <span className="font-bold">&lt; 150MB PEAK FOOTPRINT</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>CRASH THRESHOLD:</span>
                <span className="font-bold">&lt; 0.1% PRODUCTION USERS</span>
              </div>
            </div>
          </div>

          {/* Card 2: Operating System Target Support */}
          <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl p-5 shadow-[4px_4px_0px_#0E1153]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#0E7A63] tracking-wider block mb-2">
              02 // OS SUPPORT MATRICES
            </span>
            <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-3">
              Platform Targets
            </h4>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>APPLE IOS:</span>
                <span className="font-bold">iOS 16+ &amp; iPadOS 16+</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>GOOGLE ANDROID:</span>
                <span className="font-bold">API LEVEL 26+ (ANDROID 8.0+)</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>APPLE PRIVACY:</span>
                <span className="font-bold">NSPrivacyCollectedDataTypes</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>GOOGLE SAFETY:</span>
                <span className="font-bold">DATA SAFETY FORM READY</span>
              </div>
            </div>
          </div>

          {/* Card 3: Storage & Network Protocols */}
          <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl p-5 shadow-[4px_4px_0px_#0E1153]">
            <span className="font-mono text-[10px] uppercase font-bold text-[#0E7A63] tracking-wider block mb-2">
              03 // PERSISTENCE &amp; SYNC
            </span>
            <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-3">
              Data Layer Architecture
            </h4>
            <div className="space-y-2 font-mono text-[11px]">
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>OFFLINE STORAGE:</span>
                <span className="font-bold">SQLite / WatermelonDB</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>SYNC PROTOCOL:</span>
                <span className="font-bold">DELTA TIMESTAMP SYNC</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>COMMUNICATION:</span>
                <span className="font-bold">HTTPS / TLS 1.3 / WSS</span>
              </div>
              <div className="p-2 rounded bg-white border border-[#0E1153]/20 flex justify-between">
                <span>CRASH TELEMETRY:</span>
                <span className="font-bold">SENTRY / FIREBASE CRASH</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

