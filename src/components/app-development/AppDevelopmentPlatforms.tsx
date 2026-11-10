import React from "react";

interface PlatformTier {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  bgColor: string;
  features: string[];
}

const platforms: PlatformTier[] = [
  {
    id: "ios",
    badge: "APPLE ECOSYSTEM",
    title: "iOS & iPadOS Native",
    subtitle: "Pure Swift & SwiftUI Architecture",
    description:
      "Crafted exclusively for iPhone and iPad with buttery 120Hz ProMotion support, CoreAnimation, FaceID, and strict Apple App Store guidelines adherence.",
    stack: ["Swift", "SwiftUI", "Combine", "CoreData", "WidgetKit"],
    bgColor: "bg-[#CFE8DC]",
    features: [
      "120Hz ProMotion animation support",
      "Dynamic Island & WidgetKit integrations",
      "Keychain & Biometric security protocols",
      "App Store review approval assurance",
    ],
  },
  {
    id: "android",
    badge: "GOOGLE ECOSYSTEM",
    title: "Android Native",
    subtitle: "Modern Kotlin & Jetpack Compose",
    description:
      "Engineered for the vast Android multi-device ecosystem with declarative UI, dynamic theming, background workers, and memory-optimized profiling.",
    stack: ["Kotlin", "Jetpack Compose", "Coroutines", "Room DB", "WorkManager"],
    bgColor: "bg-[#FFBA45]",
    features: [
      "Material You dynamic theming",
      "Adaptive layouts for foldables & tablets",
      "Google Play In-App Billing v6",
      "Fast cold-start optimizations",
    ],
  },
  {
    id: "cross-platform",
    badge: "DUAL RUNTIME",
    title: "Flutter & React Native",
    subtitle: "Single Codebase, Native Execution",
    description:
      "Maximize development velocity and maintain 90%+ code parity between iOS and Android while retaining genuine native rendering and 60 FPS fluidity.",
    stack: ["Flutter", "Dart", "React Native", "TypeScript", "Skia Engine"],
    bgColor: "bg-[#E1E3F7]",
    features: [
      "90%+ shared code between platforms",
      "Skia accelerated custom graphics",
      "Shared business logic & API caching",
      "Halved maintenance & feature parity time",
    ],
  },
  {
    id: "pwa",
    badge: "WEB RUNTIME",
    title: "Progressive Web Apps",
    subtitle: "Installable Web Applications",
    description:
      "Deliver native-like app experiences directly via the browser with zero app-store download friction, background sync, and instant home screen installation.",
    stack: ["Next.js", "Service Workers", "Web Push", "IndexedDB", "Manifest"],
    bgColor: "bg-[#FEF9ED]",
    features: [
      "Zero installation friction via URLs",
      "Full offline operation & caching",
      "Native Web Push notifications",
      "Cross-platform desktop & mobile support",
    ],
  },
];

export default function AppDevelopmentPlatforms() {
  return (
    <section className="relative w-full bg-[#FEF9ED] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEF9ED] border-2 border-[#0E1153] shadow-[2px_2px_0px_#0E1153] rounded-full mb-4">
            <span className="w-2.5 h-2.5 bg-[#0E7A63]" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0E1153]">
              ■ TECHNOLOGY ECOSYSTEMS
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] text-[#0E1153] mb-4">
            Platforms We Architect &amp;
            <br />
            <span className="font-serif italic font-normal text-[#0E7A63]">
              Bring to Life
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#121A4A]/80 leading-relaxed max-w-2xl mx-auto">
            Whether you need pure native muscle for hardware-intensive computing or rapid cross-platform deployment, our technology choices are calibrated for maximum performance and user delight.
          </p>
        </div>

        {/* 4 Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((plat) => (
            <div
              key={plat.id}
              className={`${plat.bgColor} border-2 border-[#0E1153] rounded-2xl p-7 sm:p-8 shadow-[6px_6px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] transition-all flex flex-col justify-between`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#0E1153]/20">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0E1153] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0E1153]" />
                    <span>{plat.badge}</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#0E1153]/60 font-bold uppercase">
                    TIER 1 ARCHITECTURE
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-1">
                  {plat.title}
                </h3>
                <div className="font-mono text-xs font-bold text-[#0E7A63] uppercase tracking-wider mb-4">
                  {plat.subtitle}
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#121A4A]/85 leading-relaxed mb-6">
                  {plat.description}
                </p>

                {/* Key Checklist Features */}
                <ul className="space-y-2 mb-6">
                  {plat.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 font-sans text-xs text-[#0E1153] font-medium"
                    >
                      <span className="w-4 h-4 rounded bg-[#0E1153] text-[#FEF9ED] flex items-center justify-center text-[10px] font-bold shrink-0">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Pills Footer */}
              <div className="pt-4 border-t border-[#0E1153]/20">
                <span className="text-[10px] font-mono font-bold uppercase text-[#0E1153]/60 block mb-2">
                  CORE TECH STACK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {plat.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#FEF9ED] text-[#0E1153] border border-[#0E1153] rounded font-mono text-[10px] font-bold uppercase shadow-[1px_1px_0px_#0E1153]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

