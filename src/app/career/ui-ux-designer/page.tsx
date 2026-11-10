import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "We're Hiring – UI/UX Designer · BAAGUL LLP Bengaluru",
  description:
    "BAAGUL LLP is hiring a full-time UI/UX Designer in Bengaluru (Work From Office). Design modern websites, mobile apps, wireframes, and design systems. Freshers with strong real-world project portfolios and experienced designers may apply.",
  alternates: { canonical: "/career/ui-ux-designer" },
};

const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "UI/UX Designer",
  description:
    "We are looking for a creative, detail-oriented UI/UX Designer with a strong eye for design, a passion for user experience, and the ability to transform ideas into visually appealing, intuitive digital products. Proven experience working on at least one real-world UI/UX project is strongly preferred.",
  datePosted: "2026-11-10",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "BAAGUL LLP",
    sameAs: "https://baagul.in",
    logo: "https://baagul.in/assets/favicon.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor Hustlehub Tech Park, HSR Layout",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560102",
      addressCountry: "IN",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: {
      "@type": "QuantitativeValue",
      unitText: "YEAR",
    },
  },
  applicantLocationRequirements: {
    "@type": "Country",
    name: "India",
  },
  jobLocationType: "TELECOMMUTE_NONE",
};

const rolesAndResponsibilities = [
  "Design modern, user-friendly websites, mobile applications, and digital interfaces.",
  "Create wireframes, user flows, interactive prototypes, and high-fidelity UI designs.",
  "Translate business requirements into practical, visually engaging design solutions.",
  "Develop responsive layouts for desktop, tablet, and mobile devices.",
  "Maintain visual consistency across typography, colors, spacing, and design components.",
  "Collaborate with developers to ensure accurate design implementation.",
  "Improve usability, accessibility, and overall user experience.",
  "Stay updated with modern UI/UX trends and design best practices.",
];

const requiredSkills = [
  "Strong proficiency in Figma and modern UI/UX design tools.",
  "Excellent visual design sense and attention to detail.",
  "Good understanding of typography, color theory, layout, and visual hierarchy.",
  "Knowledge of responsive web design and mobile-first principles.",
  "Ability to create professional, functional, and visually polished interfaces.",
  "Strong communication, creativity, and problem-solving skills.",
];

const preferredQualifications = [
  "Proven hands-on experience with real-world website or mobile application projects.",
  "Strong portfolio demonstrating UI/UX design skills.",
  "Experience collaborating with frontend developers.",
  "Understanding of design systems, usability principles, and user-centered design.",
];

const applyFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdiOHf11LvzgDam3-cT2RY91VPK6v_gxcZfr3zjy6_1UeHcMQ/viewform";

export default function UiUxDesignerJobPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <JsonLd data={jobPostingSchema} />
      <Header />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-8 lg:px-12">
        {/* Single-Span Document Container */}
        <article className="max-w-4xl mx-auto bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl p-6 sm:p-12 lg:p-16 shadow-[8px_8px_0px_#0E1153]">

          {/* Back Link */}
          <div className="mb-8">
            <Link
              href="/career"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#0E1153]/70 hover:text-[#005F4C] transition-colors"
            >
              <span>← Back to all openings</span>
            </Link>
          </div>

          {/* Opening Header */}
          <header className="pb-8 border-b-2 border-[#0E1153]/15">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEF9ED] border border-[#0E1153] rounded-md text-[11px] font-mono font-bold uppercase tracking-wider text-[#005F4C] mb-4 shadow-[2px_2px_0px_#0E1153]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>WE&apos;RE HIRING · FULL-TIME</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] leading-tight mb-4">
              UI/UX Designer
            </h1>

            {/* Metadata Line */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs font-bold text-[#0E1153]/80 mb-6">
              <span className="text-[#0E1153]">BAAGUL LLP</span>
              <span>·</span>
              <span>Bengaluru, Karnataka</span>
              <span>·</span>
              <span className="px-2 py-0.5 rounded bg-[#FFA800]/20 text-[#0E1153] border border-[#FFA800]">
                Full-Time
              </span>
              <span>·</span>
              <span>Work From Office</span>
            </div>

            <div>
              <a
                href={applyFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>APPLY NOW</span>
                <span>→</span>
              </a>
            </div>
          </header>

          {/* Job Details Document Content (Single Span Flow) */}
          <div className="pt-8 space-y-10 text-[#0E1153]">

            {/* Tagline & Intro */}
            <section className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#005F4C]">
                Design Experiences That Make an Impact.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#121A4A]/85 leading-relaxed">
                We are looking for a creative, detail-oriented UI/UX Designer with a strong eye for design, a passion for user experience, and the ability to transform ideas into visually appealing, intuitive digital products.
              </p>
            </section>

            {/* Portfolio Notice Banner */}
            <section className="p-5 sm:p-6 bg-[#FEF9ED] border-l-4 border-[#FFA800] rounded-r-xl border border-y-[#0E1153]/15 border-r-[#0E1153]/15">
              <p className="font-sans text-sm sm:text-base text-[#0E1153] font-medium leading-relaxed">
                <strong className="font-heading font-bold text-[#0E1153] block mb-1">
                  Portfolio Requirement:
                </strong>
                Proven experience working on at least one real-world UI/UX project is strongly preferred. Candidates must demonstrate practical design skills through a portfolio of completed projects.
              </p>
            </section>

            {/* Roles & Responsibilities */}
            <section className="space-y-4 pt-4 border-t border-[#0E1153]/10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                Roles &amp; Responsibilities
              </h3>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#121A4A]/85">
                {rolesAndResponsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#005F4C] font-bold text-lg leading-none mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Required Skills */}
            <section className="space-y-4 pt-4 border-t border-[#0E1153]/10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                Required Skills
              </h3>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#121A4A]/85">
                {requiredSkills.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#005F4C] font-bold text-lg leading-none mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Preferred Qualifications */}
            <section className="space-y-4 pt-4 border-t border-[#0E1153]/10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                Preferred Qualifications
              </h3>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#121A4A]/85">
                {preferredQualifications.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#005F4C] font-bold text-lg leading-none mt-0.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Job Criteria Table / Overview */}
            <section className="pt-4 border-t border-[#0E1153]/10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153] mb-4">
                Position Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#0E1153]/15">
                  <span className="font-mono text-xs font-bold text-[#0E1153]/60 uppercase block mb-1">
                    Experience
                  </span>
                  <span className="font-medium text-[#0E1153]">
                    Freshers with strong real-world project portfolios and experienced designers may apply.
                  </span>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#0E1153]/15">
                  <span className="font-mono text-xs font-bold text-[#0E1153]/60 uppercase block mb-1">
                    Location
                  </span>
                  <span className="font-medium text-[#0E1153]">
                    Bengaluru, Karnataka (2nd Floor, Hustlehub Tech Park, HSR Layout)
                  </span>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#0E1153]/15">
                  <span className="font-mono text-xs font-bold text-[#0E1153]/60 uppercase block mb-1">
                    Job Type
                  </span>
                  <span className="font-medium text-[#0E1153]">
                    Full-Time, Work From Office
                  </span>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#0E1153]/15">
                  <span className="font-mono text-xs font-bold text-[#0E1153]/60 uppercase block mb-1">
                    Portfolio
                  </span>
                  <span className="font-medium text-[#0E1153]">
                    Required (Figma, Behance, Dribbble, or live website link)
                  </span>
                </div>
              </div>
            </section>

            {/* Ready to Apply & Closing Section */}
            <section className="pt-8 border-t-2 border-[#0E1153]/15 text-center sm:text-left">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-3">
                Ready to Create Exceptional Digital Experiences?
              </h3>
              <p className="font-sans text-base text-[#121A4A]/85 mb-8 max-w-2xl">
                Join BAAGUL LLP and bring your creativity, design thinking, and attention to detail to real-world projects.
              </p>

              <div>
                <a
                  href={applyFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#FFA800] text-[#0E1153] font-heading font-bold text-base border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all"
                >
                  <span>APPLY NOW</span>
                  <span>→</span>
                </a>
              </div>

              <div className="pt-8 mt-8 border-t border-[#0E1153]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#0E1153]/60">
                <span>Website: https://baagul.in</span>
                <span>BAAGUL LLP · Bengaluru, Karnataka</span>
              </div>
            </section>

          </div>

        </article>
      </main>

      <Footer />
    </div >
  );
}
