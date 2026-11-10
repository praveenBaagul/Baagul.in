import React from "react";
import Image from "next/image";
import Link from "next/link";

interface JobRole {
  id: string;
  badgeNum: string;
  title: string;
  employmentType: string;
  location: string;
  region: string;
  description: string;
  imageSrc: string;
  href?: string;
}

const roles: JobRole[] = [
  {
    id: "ui-ux-designer",
    badgeNum: "01",
    title: "UI/UX Designer (Full-Time, On-Site)",
    employmentType: "FULL-TIME",
    location: "BENGALURU",
    region: "WORK FROM OFFICE",
    description:
      "Design modern websites, mobile apps, interactive Figma prototypes, and scalable design systems for fast-growing digital products.",
    imageSrc: "/assets/b03af.png",
    href: "/career/ui-ux-designer",
  }
];

export default function CareerOpeningsList() {
  return (
    <section id="openings" className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#005F4C] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-12">
          <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
            <span className="w-1.5 h-1.5 rounded-xs bg-[#FFA800]" />
            <span className="w-1.5 h-1.5 rounded-xs bg-[#FEF9ED]" />
            <span className="w-1.5 h-1.5 rounded-xs bg-[#FEF9ED]" />
            <span className="w-1.5 h-1.5 rounded-xs bg-[#FFA800]" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FFA800]">
            CURRENT OPENINGS
          </span>
        </div>

        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] leading-tight mb-16">
          Current Opening
        </h2>

        {/* 3 Staggered Large Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden flex flex-col justify-between transition-transform hover:-translate-y-1.5"
            >
              {/* Illustration Top Frame */}
              <div className="p-4 bg-[#FAF8F5] border-b-2 border-[#0E1153] relative">
                <div className="w-full aspect-[16/10] bg-[#EDE8DC] border-2 border-[#0E1153] rounded-xl overflow-hidden relative shadow-[2px_2px_0px_#0E1153]">
                  <Image
                    src={role.imageSrc}
                    alt={role.title}
                    fill
                    className="object-cover"
                  />
                  {/* Badge in top left */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#FFA800] border border-[#0E1153] text-[10px] font-mono font-bold text-[#0E1153]">
                    {role.badgeNum}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  {/* Pills row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#CFE8DC] border border-[#0E1153] text-[10px] font-mono font-bold text-[#005F4C]">
                        {role.employmentType}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E1E3F7] border border-[#0E1153] text-[10px] font-mono font-bold text-[#0E1153]">
                        {role.location}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3E4945]">
                      {role.region}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold mb-3 leading-snug text-[#0E1153]">
                    {role.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                    {role.description}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-[#0E1153]/15 flex items-center justify-between">
                  <Link
                    href={role.href || "/contact"}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-xs border border-[#0E1153] shadow-[2px_2px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                  >
                    <span>View opening</span>
                    <span>→</span>
                  </Link>

                  {/* Quad Color square mark */}
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#005F4C]" />
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#FFA800]" />
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#0E1153]" />
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#E1E3F7]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

