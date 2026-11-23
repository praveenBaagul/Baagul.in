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
    title: "Android & iOS App Development",
    description: "Native apps in Kotlin with Jetpack Compose for Android and Swift with SwiftUI for iPhone and iPad, following Material Design and Apple's guidelines.",
    badgeBg: "bg-[#0E7A63] text-[#FEF9ED]",
  },
  {
    number: "02",
    title: "Mobile App UI/UX Design & Prototyping",
    description: "User journeys, wireframes and high-fidelity Figma prototypes you can click through and test before development starts.",
    badgeBg: "bg-[#FFBA45] text-[#0E1153]",
  },
  {
    number: "03",
    title: "React Native & Flutter Cross-Platform Development",
    description: "One codebase for Android and iOS, with native UI performance and access to device features such as the camera, location and biometrics.",
    badgeBg: "bg-[#CFE8DC] text-[#0E1153]",
  },
  {
    number: "04",
    title: "Backend, API Integration & Offline Sync",
    description: "Backend APIs, third-party integrations and offline-first data that keeps the app usable in low connectivity and syncs when back online.",
    badgeBg: "bg-[#E1E3F7] text-[#0E1153]",
  },
  {
    number: "05",
    title: "Payments, Biometrics & Push Notifications",
    description: "Apple Pay, Google Pay and Razorpay, Face ID and fingerprint login, OAuth sign-in and push notifications, built to protect user data.",
    badgeBg: "bg-[#C8553D] text-[#FEF9ED]",
  },
  {
    number: "06",
    title: "App Store Launch & App Maintenance",
    description: "Automated builds, TestFlight testing and App Store and Google Play submission, then updates, bug fixes and monitoring after launch.",
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
              Custom Mobile App
              <br />
              <span className="font-serif italic font-normal text-[#FFBA45]">
                Development Services
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/80 leading-relaxed mb-8">
              From startup MVPs to business apps, every app we build combines solid architecture, smooth interactions and deep operating system integration. Need a web application alongside your app? See our{" "}
              <Link href="/services/web-design" className="font-bold text-[#FFBA45] underline underline-offset-2 hover:text-[#FEF9ED]">
                web design and development services
              </Link>
              .
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
                      {`// ${feat.number}`}
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

