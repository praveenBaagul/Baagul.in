import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  domain: string;
  imgSrc: string;
  profileUrl?: string;
  linkedinUrl?: string;
}

const members: TeamMember[] = [
  {
    id: "m1",
    name: "Kishore V",
    role: "Digital Marketing Manager",
    domain: "Full-Funnel Growth · Performance Strategy",
    imgSrc: "/assets/kishore.png",
    profileUrl: "/docs/kishore",
    linkedinUrl: "https://www.linkedin.com/in/kishore-v46",
  },
  {
    id: "m2",
    name: "Dushyanth Kumar",
    role: "Full Stack AI Developer",
    domain: "Website Design & Development · AI Systems",
    imgSrc: "/assets/dushyanth-kumar.png",
    profileUrl: "/docs/dushyanth",
    linkedinUrl: "https://www.linkedin.com/in/dushyanth-kumar-a2564236b/",
  },
  {
    id: "m3",
    name: "Praveen Kumar A",
    role: "Full Stack AI Developer",
    domain: "Development & E-Commerce Solutions",
    imgSrc: "/assets/praveen-kumar-a.png",
    profileUrl: "/team/praveen-kumara",
    linkedinUrl: "https://in.linkedin.com/in/praveen-kumar-311514297",
  },
  {
    id: "m4",
    name: "Navin Kumar Verma",
    role: "Flutter Developer",
    domain: "WordPress & CMS Development · Mobile Apps",
    imgSrc: "/assets/navin-kumar-verma.png",
    profileUrl: "/team/navin-kumar-verma",
    linkedinUrl: "https://www.linkedin.com/in/navin-kumar-verma",
  },
  {
    id: "m7",
    name: "Sifa Domnic Fernandes",
    role: "UGC Creator & SEO Analyst",
    domain: "Creative Content · Organic Search & Performance",
    imgSrc: "/assets/sifa-domnic-fernandes.png",
    profileUrl: "/team/sifa-domnic-fernandes",
  },
  {
    id: "m5",
    name: "Sahil Goswami",
    role: "Video Editing & Graphic Design",
    domain: "Motion Graphics · Brand & Visual Design",
    imgSrc: "/assets/sahil-placeholder.png",
    profileUrl: "/team/sahil-goswami",
  },
  {
    id: "m6",
    name: "Sindhu Reddy",
    role: "SEO Manager",
    domain: "Organic Search Strategy · Technical SEO",
    imgSrc: "/assets/sindhu-reddy.png",
    profileUrl: "/team/sindhu-reddy",
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
          A focused collective of growth strategists, engineers, and creatives working together under one roof in HSR Layout, Bengaluru.
        </p>
      </div>

      {/* Grid: Active Team Roster + Studio Hiring Swatch Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="group relative p-4 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[4px_4px_0px_#121a4a] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Photo frame */}
              <div className="relative h-64 sm:h-72 w-full rounded-lg overflow-hidden border border-indigo-main/30 mb-4 bg-canvas">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  title={member.name}
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Member Details */}
              <h4 className="font-heading text-2xl text-indigo-main font-bold leading-tight">
                {member.name}
              </h4>
              <span className="text-xs font-bold text-terracotta mt-1 block">
                {member.role}
              </span>
              <span className="text-[11px] text-slate-text mt-0.5 block">
                {member.domain}
              </span>
            </div>

            {/* Profile Action Button with LinkedIn Logo */}
            <Link
              href={member.profileUrl || "/docs/kishore"}
              className="mt-6 w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-indigo-main hover:bg-indigo-mid text-canvas font-mono font-bold text-xs uppercase tracking-wider border-2 border-indigo-main shadow-[4px_4px_0px_#f5a800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#f5a800] transition-all group/btn"
            >
              <div className="flex items-center gap-2.5">
                <span className="tracking-wide">View profile</span>
              </div>
              <span className="text-marigold group-hover/btn:translate-x-1 transition-transform text-sm font-sans font-bold">
                →
              </span>
            </Link>
          </div>
        ))}

        {/* Studio Hiring Card */}
        <div className="p-6 bg-marigold border-2 border-indigo-main rounded-xl shadow-[4px_4px_0px_#121a4a] flex flex-col justify-between text-indigo-main min-h-[380px]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-indigo-main text-canvas inline-block mb-4 font-mono">
              WE ARE HIRING
            </span>
            <h4 className="font-heading text-2xl font-bold leading-tight mb-2">
              Join Our Bengaluru Collective.
            </h4>
            <p className="font-sans text-xs leading-relaxed text-indigo-dark/90 mt-2">
              Looking to do the most honest, high-impact growth and engineering work of your career? We are expanding our core team in HSR Layout.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/career"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-indigo-main text-canvas font-semibold text-xs border border-indigo-main shadow-[2px_2px_0px_#121a4a] hover:bg-indigo-mid transition-colors"
            >
              <span>See Open Roles</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
