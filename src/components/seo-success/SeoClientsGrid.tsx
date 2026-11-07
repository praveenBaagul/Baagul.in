"use client";

import React from "react";
import Image from "next/image";

interface ClientData {
  id: string;
  name: string;
  category: string;
  url: string;
  displayUrl: string;
  description: string;
  targetKeywords: string[];
  imageSrc?: string;
  imageAlt?: string;
  accentColor: string;
  accentBg: string;
}

const clients: ClientData[] = [
  {
    id: "bangalore-camera-rentals",
    name: "Bangalore Camera Rentals",
    category: "MEDIA & CINEMA PRODUCTION",
    url: "https://bangalorecamerarentals.com/",
    displayUrl: "bangalorecamerarentals.com",
    description:
      "Premier camera, cine lens, lighting, and sound equipment rental studio catering to indie filmmakers, production houses, and commercial shoots across Bengaluru.",
    targetKeywords: ["camera rental bangalore", "sony fx3 hire", "cine lenses bangalore", "film gear rental"],
    accentColor: "text-[#005F4C]",
    accentBg: "bg-[#CFE8DC]",
  },
  {
    id: "khevana-dagli",
    name: "Advocate Khevana Dagli",
    category: "LEGAL COUNSEL & LITIGATION",
    url: "https://khevanadagli.com/",
    displayUrl: "khevanadagli.com",
    description:
      "Specialized legal practice in Mumbai providing result-oriented counsel in contested & mutual divorce, child custody, 498A defence, and urgent bail hearings.",
    targetKeywords: ["divorce lawyer in mumbai", "advocate khevana dagli", "child custody lawyer mumbai", "urgent bail mumbai"],
    imageSrc: "/assets/khevana-dagli-showcase.jpg",
    imageAlt: "Advocate Khevana Dagli website preview and consultation portal",
    accentColor: "text-[#FFA800]",
    accentBg: "bg-[#1A1F5E]",
  },
  {
    id: "manually-reviewed",
    name: "Manually Reviewed",
    category: "SAAS & TECH EDITORIAL",
    url: "https://manuallyreviewed.com/",
    displayUrl: "manuallyreviewed.com",
    description:
      "Independent software benchmarking platform and tech publication providing transparent reviews, feature tear-downs, and buyer guides for modern digital tools.",
    targetKeywords: ["software reviews", "tech buying guides", "honest product benchmarks", "saas tool teardowns"],
    accentColor: "text-[#005F4C]",
    accentBg: "bg-[#CFE8DC]",
  },
  {
    id: "invitecodes",
    name: "InviteCodes.org",
    category: "FINTECH & WEB3 PLATFORM",
    url: "https://invitecodes.org/",
    displayUrl: "invitecodes.org",
    description:
      "High-traffic directory curating verified referral codes, exclusive sign-up bonuses, and reward perks across global fintech apps and creator tools.",
    targetKeywords: ["referral codes", "signup bonuses", "fintech invites", "app promo codes"],
    accentColor: "text-[#0E1153]",
    accentBg: "bg-[#E1E4FC]",
  },
  {
    id: "best-criminal-lawyer",
    name: "Best Criminal Lawyer in Mumbai",
    category: "CRIMINAL DEFENCE & BAIL",
    url: "https://bestcriminallawyerinmumbai.com/",
    displayUrl: "bestcriminallawyerinmumbai.com",
    description:
      "High-authority legal portal for Mumbai high court criminal defense attorneys, providing 24/7 emergency bail petitions, FIR quashing, and white-collar defense.",
    targetKeywords: ["best criminal lawyer in mumbai", "urgent bail advocate mumbai", "498a legal defense", "mumbai high court lawyer"],
    accentColor: "text-[#FFA800]",
    accentBg: "bg-[#1A1F5E]",
  },
];

export default function SeoClientsGrid() {
  return (
    <section id="clients" className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-[#FFFFFF] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE8DC] border border-[#0E1153]/30 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
            <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
            <span>PORTFOLIO DIRECTORY</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] tracking-tight leading-tight mb-4">
            Our Clients. Their Google Search Journey.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#3E4945] leading-relaxed">
            Explore the businesses we've worked with and discover how strategic SEO can help websites improve their online presence.
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {clients.map((client, idx) => {
            const isLarge = idx === 0 || idx === 1;

            return (
              <div
                key={client.id}
                className={`bg-[#FAFAFA] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[9px_9px_0px_#0E1153] ${
                  isLarge && idx === 0 ? "lg:col-span-2" : idx === 1 ? "lg:col-span-1" : "lg:col-span-1"
                }`}
              >
                {/* Visual Header / Mockup Preview */}
                <div className="relative w-full bg-[#EDE8DC] border-b-2 border-[#0E1153] p-4 flex flex-col justify-between overflow-hidden">
                  {/* Top Bar inside preview */}
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-[#0E1153] text-[#FEF9ED] font-bold text-[10px] tracking-wider uppercase">
                      {client.category}
                    </span>
                    <span className="text-[#005F4C] font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005F4C]" />
                      <span>Live Site</span>
                    </span>
                  </div>

                  {/* Preview Graphic / Image */}
                  {client.imageSrc ? (
                    <div className="relative w-full aspect-[16/9] rounded-lg border border-[#0E1153]/30 overflow-hidden shadow-sm">
                      <Image
                        src={client.imageSrc}
                        alt={client.imageAlt || client.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] rounded-lg border border-[#0E1153]/30 bg-[#FFFFFF] p-4 flex flex-col justify-between shadow-sm relative overflow-hidden">
                      {/* Browser mockup header */}
                      <div className="flex items-center gap-1.5 pb-2 border-b border-[#0E1153]/15">
                        <span className="w-2 h-2 rounded-full bg-[#E57373]" />
                        <span className="w-2 h-2 rounded-full bg-[#FFBA45]" />
                        <span className="w-2 h-2 rounded-full bg-[#81C784]" />
                        <span className="ml-2 text-[10px] font-mono text-[#4D5156] truncate">
                          https://{client.displayUrl}
                        </span>
                      </div>

                      {/* Content illustration inside placeholder */}
                      <div className="flex flex-col items-center justify-center my-auto text-center py-2">
                        <div className="w-10 h-10 rounded-xl bg-[#005F4C]/10 text-[#005F4C] flex items-center justify-center font-heading font-black text-lg mb-2 border border-[#005F4C]/30">
                          {client.name.charAt(0)}
                        </div>
                        <span className="font-heading text-sm font-bold text-[#0E1153]">
                          {client.name}
                        </span>
                        <span className="text-[11px] font-mono text-[#3E4945]">
                          Verified Organic Search Target
                        </span>
                      </div>

                      <div className="text-[9px] font-mono text-[#3E4945]/70 pt-1 border-t border-[#0E1153]/10 flex items-center justify-between">
                        <span>Clean Semantic Architecture</span>
                        <span className="text-[#005F4C] font-bold">Indexed ✓</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Client Name */}
                    <h3 className="font-heading text-2xl font-bold text-[#0E1153] mb-2 leading-tight">
                      {client.name}
                    </h3>

                    {/* URL */}
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-[#005F4C] hover:underline mb-3 inline-block"
                    >
                      {client.displayUrl} ↗
                    </a>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                      {client.description}
                    </p>

                    {/* Target Keywords Section */}
                    <div className="mb-6">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3E4945] block mb-2">
                        Target SEO Keywords:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {client.targetKeywords.map((kw, kIdx) => (
                          <span
                            key={kIdx}
                            className="px-2.5 py-1 rounded-md bg-[#FFFFFF] border border-[#0E1153]/25 text-[11px] font-mono text-[#0E1153]"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-4 border-t border-[#0E1153]/15 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FFA800] text-[#0E1153] font-heading font-bold text-xs border border-[#0E1153] shadow-[2px_2px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
                    >
                      <span>View Website</span>
                      <span>→</span>
                    </a>

                    <a
                      href="#search-showcase"
                      className="text-xs font-mono font-bold text-[#005F4C] hover:underline flex items-center gap-1"
                    >
                      <span>View Search Profile</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

