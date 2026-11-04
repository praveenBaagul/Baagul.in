import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  domain: string;
  imgSrc: string;
}

const members: TeamMember[] = [
  {
    id: "m1",
    name: "Arvind Kashyap",
    role: "Founding Partner & Head of Search",
    domain: "Ex-Flipkart · 11 yrs SEO",
    imgSrc: "/assets/146d6.png",
  },
  {
    id: "m2",
    name: "Sharath Hegde",
    role: "Partner · Performance Media",
    domain: "₹40Cr+ Meta & Google Ad Spend",
    imgSrc: "/assets/f9746.png",
  },
  {
    id: "m3",
    name: "Darshan Nayak",
    role: "Lead Full-Stack Engineer",
    domain: "Next.js · Headless Shopify",
    imgSrc: "/assets/becc1.png",
  },
  {
    id: "m4",
    name: "Pranav Rao",
    role: "Brand & Creative Director",
    domain: "National Institute of Design (NID)",
    imgSrc: "/assets/b03af.png",
  },
  {
    id: "m5",
    name: "Bhavana Rao",
    role: "Senior Growth Strategist",
    domain: "B2B SaaS Attribution & Funnels",
    imgSrc: "/assets/2fea7.png",
  },
  {
    id: "m6",
    name: "Chetan Kumar",
    role: "Technical SEO Architect",
    domain: "Programmatic Crawl & Indexing",
    imgSrc: "/assets/cd0ff.png",
  },
  {
    id: "m7",
    name: "Ananya Dixit",
    role: "Content & Editorial Lead",
    domain: "Technical & Financial Copywriting",
    imgSrc: "/assets/b21c0.png",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-marigold" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
              PRACTITIONERS, NOT ACCOUNT MANAGERS
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main">
            The people behind Baagul
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-text max-w-md">
          A focused collective of engineers, media buyers, designers, and copywriters working together under one roof in HSR Layout.
        </p>
      </div>

      {/* Grid: 7 Members + 1 CTA Swatch Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="group relative p-4 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[4px_4px_0px_#121a4a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#121a4a] transition-all duration-200 flex flex-col"
          >
            {/* Photo frame */}
            <div className="relative h-56 w-full rounded-lg overflow-hidden border border-indigo-main/30 mb-4 bg-canvas">
              <Image
                src={member.imgSrc}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Member Details */}
            <h4 className="font-heading text-xl text-indigo-main font-semibold leading-tight">
              {member.name}
            </h4>
            <span className="text-xs font-semibold text-terracotta mt-1">
              {member.role}
            </span>
            <span className="text-[11px] text-slate-text mt-0.5">
              {member.domain}
            </span>

            {/* LinkedIn link badge */}
            <div className="mt-4 pt-3 border-t border-indigo-main/15 flex items-center justify-between text-xs text-indigo-mid">
              <span className="font-medium text-[11px]">View Profile</span>
              <span className="text-terracotta group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}

        {/* 8th Card: Meet all 14 CTA Card */}
        <div className="p-6 bg-marigold border-2 border-indigo-main rounded-xl shadow-[4px_4px_0px_#121a4a] flex flex-col justify-between text-indigo-main">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-indigo-main text-canvas inline-block mb-4">
              WE ARE HIRING
            </span>
            <h4 className="font-heading text-2xl font-bold leading-tight mb-2">
              Engineers, Writers, &amp; Media Buyers.
            </h4>
            <p className="font-sans text-xs leading-relaxed opacity-90 mt-2">
              Want to do the most honest, high-craft work of your career in Bengaluru? We are always looking for sharp minds.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-main text-canvas font-semibold text-xs border border-indigo-main shadow-[2px_2px_0px_#121a4a] hover:bg-indigo-mid transition-colors"
            >
              <span>See Open Positions</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

