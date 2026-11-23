import React from "react";
import Link from "next/link";

export default function AppDevelopmentWhyChooseUs() {
  return (
    <section className="relative w-full bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-[#FFBA45] border border-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
          <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E1153]">
            ■ WHY CHOOSE BAAGUL
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] leading-[1.12] text-[#0E1153] max-w-4xl mb-12">
          <span>Why Choose BAAGUL for </span>
          <span className="bg-[#FFBA45] text-[#0E1153] px-3 py-0.5 rounded border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] inline-block font-normal">
            App Development
          </span>
          <span>?</span>
        </h2>

        {/* Editorial Layout: Long Copy with Drop-Cap */}
        <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl p-8 sm:p-12 shadow-[8px_8px_0px_#0E1153] mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Long Copy with Drop-Cap 'A' */}
            <div className="lg:col-span-8">
              <p className="font-sans text-base sm:text-lg text-[#121A4A]/85 leading-relaxed text-justify">
                <span className="float-left text-6xl sm:text-7xl font-heading font-bold text-[#0E7A63] leading-none pr-3 pt-1">
                  A
                </span>
                t BAAGUL, we believe great mobile apps come from careful engineering and close attention to UI detail. With millions of apps competing for attention, slow screens or crashes quickly lead to uninstalls. We build with clear architecture, smooth transitions, responsive offline behaviour and touch interactions that feel natural in your users&apos; hands.
              </p>

              <p className="font-sans text-base sm:text-lg text-[#121A4A]/85 leading-relaxed mt-6 text-justify">
                Whether creating an enterprise field application, a high-frequency consumer marketplace, or an innovative IoT controller, we handle the complete technological journey. From state management and SQLite data sync to biometric security, push notifications and cloud backends, we deliver production-ready code. Every release is reviewed against Apple and Google developer policies before submission. Selling online? Our{" "}
                <Link href="/services/e-commerce-solutions" className="font-bold text-[#005F4C] underline underline-offset-2 hover:text-[#0E1153]">
                  e-commerce team
                </Link>{" "}
                builds the store your app connects to, and our{" "}
                <Link href="/services/graphics-design" className="font-bold text-[#005F4C] underline underline-offset-2 hover:text-[#0E1153]">
                  graphic designers
                </Link>{" "}
                create app store screenshots and launch creatives.
              </p>
            </div>

            {/* Right Side: Certification Stamp Cards */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              
              <div className="bg-[#CFE8DC] border-2 border-[#0E1153] rounded-xl p-5 shadow-[4px_4px_0px_#0E1153]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#0E1153] tracking-wider">
                    APP QUALITY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#0E7A63]" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-1">
                  Smooth UI &amp; Offline Sync
                </h4>
                <p className="text-xs text-[#0E1153]/70 font-sans mb-3">
                  Responsive interfaces tested on low- and high-end devices, with background synchronization.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#0E1153]/20 font-mono text-[10px] text-[#0E1153] font-bold">
                  <span>SWIFTUI / COMPOSE</span>
                  <span>DEVICE TESTED</span>
                </div>
              </div>

              <div className="bg-[#FFBA45] border-2 border-[#0E1153] rounded-xl p-5 shadow-[4px_4px_0px_#0E1153]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#0E1153] tracking-wider">
                    STORE SUBMISSION
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#0E1153]" />
                </div>
                <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-1">
                  Store Guideline Reviews
                </h4>
                <p className="text-xs text-[#0E1153]/70 font-sans mb-3">
                  Every release is checked against App Store &amp; Google Play policies before submission, to reduce the risk of rejection.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-[#0E1153]/20 font-mono text-[10px] text-[#0E1153] font-bold">
                  <span>FASTLANE CI/CD</span>
                  <span>PRE-SUBMISSION CHECKS</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Callout Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-[#0E1153] text-[#FEF9ED] rounded-2xl border-2 border-[#0E1153] shadow-[6px_6px_0px_#000000]">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#FFBA45] font-bold mb-1">
              READY TO BUILD YOUR NEXT MOBILE PRODUCT?
            </div>
            <div className="font-heading text-2xl font-bold">
              Let&apos;s architect your iOS and Android roadmap together.
            </div>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-full bg-[#FFBA45] text-[#0E1153] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#0E1153] shadow-[3px_3px_0px_#FEF9ED] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            Start App Project →
          </Link>
        </div>

      </div>
    </section>
  );
}

