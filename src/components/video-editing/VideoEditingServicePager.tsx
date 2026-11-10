import React from "react";
import Link from "next/link";

export default function VideoEditingServicePager() {
  return (
    <section className="relative w-full bg-[#FEF9ED] border-b-2 border-[#0E1153] py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Previous Service Card (Mint) */}
          <Link
            href="/services/paid-promotions"
            className="group block bg-[#CFE8DC] border-2 border-[#0E1153] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] transition-all duration-200"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0E1153]/20">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0E7A63] flex items-center gap-1.5">
                <span>←</span>
                <span>PREVIOUS SERVICE</span>
              </span>
              <span className="text-[10px] font-mono text-[#0E1153]/60 font-bold uppercase">
                PERFORMANCE MEDIA
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-2 group-hover:text-[#0E7A63] transition-colors">
              Paid Promotions & Media Buying
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#0E1153]/80">
              Influencer Collabs & Video Sponsorships
            </p>
          </Link>

          {/* Next Service Card (Mustard) */}
          <Link
            href="/services/app-development"
            className="group block bg-[#FFBA45] border-2 border-[#0E1153] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] transition-all duration-200"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0E1153]/20">
              <span className="text-[10px] font-mono text-[#0E1153]/60 font-bold uppercase">
                MOBILE & HYBRID APPS
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0E1153] flex items-center gap-1.5">
                <span>NEXT SERVICE</span>
                <span>→</span>
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-2 group-hover:text-[#0E7A63] transition-colors">
              App Development
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#0E1153]/80">
              iOS, Android, React Native & Flutter Mobile Solutions
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
}

