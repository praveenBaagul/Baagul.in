import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareerHero from "@/components/career/CareerHero";
import CareerOpeningsList from "@/components/career/CareerOpeningsList";
import CareerContactBand from "@/components/career/CareerContactBand";
import CareerSpecMatrix from "@/components/career/CareerSpecMatrix";

export const metadata: Metadata = {
  title: "Career & Current Openings · Baagul Marketing LLP",
  description:
    "BAAGUL LLP is hiring a full-time UI/UX Designer in Bengaluru, as well as freelance Video Editors and Content Writers. Build your career with our design and digital marketing studio.",
  alternates: { canonical: "/career" },
};

export default function CareerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero & Headcount 02 Card */}
        <CareerHero />

        {/* Section 2: Current Openings (Emerald Green #005F4C background with 2 large job cards) */}
        <CareerOpeningsList />

        {/* Section 3: Want to work with us? Contact Band (Lavender #E1E3F7) */}
        <CareerContactBand />

        {/* Section 4: Design System Specimen / Component State Matrix */}
        {/* <CareerSpecMatrix /> */}
      </main>
      <Footer />
    </div>
  );
}

