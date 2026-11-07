import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoSuccessHero from "@/components/seo-success/SeoSuccessHero";
import SeoClientsGrid from "@/components/seo-success/SeoClientsGrid";
import SeoSearchShowcase from "@/components/seo-success/SeoSearchShowcase";
import SeoWhyChooseTeam from "@/components/seo-success/SeoWhyChooseTeam";
import SeoSuccessCTA from "@/components/seo-success/SeoSuccessCTA";

export const metadata: Metadata = {
  title: "SEO Client Success Stories • Real Google Search Results | Baagul Studio",
  description:
    "Explore real SEO client success stories and verified Google Search visibility from Baagul Studio. Discover how we help businesses get discovered, attract organic customers, and dominate search rankings.",
  alternates: { canonical: "/services/seo-optimizations/client-success-stories" },
};

export default function SeoClientSuccessStoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <JsonLd
        data={serviceSchema({
          name: "SEO Client Success Stories",
          path: "/services/seo-optimizations/client-success-stories",
          description: metadata.description,
        })}
      />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero with Interactive Search Simulation */}
        <SeoSuccessHero />

        {/* Section 2: 5 Real Clients Portfolio Grid */}
        <SeoClientsGrid />

        {/* Section 3: Google Search Results Showcase with Lightbox Modal */}
        <SeoSearchShowcase />

        {/* Section 4: Why Choose Our SEO Team (3 Feature Cards) */}
        <SeoWhyChooseTeam />

        {/* Section 5: High-Impact Final Conversion CTA */}
        <SeoSuccessCTA />
      </main>
      <Footer />
    </div>
  );
}

