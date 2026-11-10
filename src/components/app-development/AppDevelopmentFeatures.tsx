import React from "react";
import Link from "next/link";

interface FeatureItem {
  number: string;
  title: string;
  description: string;
  badgeBg: string;
}

const features: FeatureItem[] = [
  {
    number: "01",
    title: "Native iOS Engineering",
    description: "Swift and SwiftUI craftsmanship engineered for the Apple ecosystem with high responsiveness, CoreData, and Apple HIG adherence.",
    badgeBg: "bg-[#0E7A63] text-[#FEF9ED]",
  },
  {
    number: "02",
    title: "Native Android Engineering",
    description: "Kotlin and Jetpack Compose architecture supporting modern Material You design, multi-device fragmentation, and background workers.",
    badgeBg: "bg-[#FFBA45] text-[#0E1153]",
  },
  {
    number: "03",
    title: "Cross-Platform with Flutter & React Native",
    description: "Single codebases delivering dual-platform efficiency without sacrificing native tactile feel, GPU acceleration, or hardware APIs.",
    badgeBg: "bg-[#CFE8DC] text-[#0E1153]",
  },
  {
    number: "04",
    title: "Offline-First Data & Background Sync",
    description: "Reliable mobile experiences that function seamlessly underground or in low-connectivity areas with local cache resolution.",
    badgeBg: "bg-[#E1E3F7] text-[#0E1153]",
  },
  {
    number: "05",
    title: "Secure Payments, Biometrics & Auth",
    description: "Apple Pay, Google Pay, Razorpay, FaceID, TouchID, and OAuth 2.0 integration designed to protect transactions and user privacy.",
    badgeBg: "bg-[#C8553D] text-[#FEF9ED]",
  },
  {
    number: "06",
    title: "App Store & Play Store Launch CI/CD",
    description: "Automated Fastlane build pipelines, TestFlight distribution, Google Play console compliance, and zero-rejection store audits.",
    badgeBg: "bg-[#0E1153] text-[#FEF9ED]",
  },
];

export default function AppDevelopmentFeatures() {
  return (
    <section className="relative w-full bg-[#1B1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0E1153] border border-[#FFBA45]/40 shadow-[2px_2px_0px_#FFBA45] rounded mb-5">
              <span className="w-2 h-2 bg-[#FFBA45] rounded-full" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FFBA45]">
                ■ MAIN FEATURES
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] font-bold text-[#FEF9ED] mb-6">
              Engineered for
              <br />
              <span className="font-serif italic font-normal text-[#FFBA45]">
                Velocity &amp; Scale
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/80 leading-relaxed mb-8">
              Every mobile product we ship combines robust architectural patterns, frictionless gestures, and deep operating system integration. We build apps that users love to open and founders trust to scale.
            </p>

            {/* Callout Card */}
            <div className="w-full bg-[#0E1153] border-2 border-[#FFBA45] rounded-2xl p-6 shadow-[6px_6px_0px_#000000] mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase font-bold text-[#FFBA45]">
                  FULL LIFECYCLE COMMITMENT
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <p className="font-sans text-xs text-[#FEF9ED]/80 leading-relaxed mb-4">
                From initial wireframing to production deployment and version 2.0 roadmap execution, our Bengaluru engineering studio covers your complete stack.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FFBA45] hover:text-[#FEF9ED] transition-colors"
              >
                <span>Discuss Your App Idea</span>
                <span>→</span>
              </Link>
            </div>

          </div>

          {/* Right Column (7 Cols): 6 Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((feat) => (
              <div
                key={feat.number}
                className="bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#0E1153]/15">
                    <span className="font-mono text-sm font-bold text-[#0E1153]/50">
                      // {feat.number}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider border border-[#0E1153] ${feat.badgeBg}`}
                    >
                      SPECIFIED
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153] mb-3 group-hover:text-[#0E7A63] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#121A4A]/80 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0E1153]/10 flex items-center justify-between text-[11px] font-mono font-bold text-[#0E1153]/60">
                  <span>PRODUCTION READY</span>
                  <span className="text-[#0E7A63] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

