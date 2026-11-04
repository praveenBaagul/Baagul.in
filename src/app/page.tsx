import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricsStrip from "@/components/MetricsStrip";
import StorySection from "@/components/StorySection";
import ServicesGrid from "@/components/ServicesGrid";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <MetricsStrip />
        <StorySection />
        <ServicesGrid />
        <CaseStudiesSection />
        <ProcessSection />
        {/* <TeamSection /> */}
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
