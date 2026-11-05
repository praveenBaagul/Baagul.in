import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeoHero from "@/components/seo-optimization/SeoHero";
import SeoDeliverables from "@/components/seo-optimization/SeoServicesDepth";
import SeoMainFeatures from "@/components/seo-optimization/SeoMainFeatures";
import SeoProcess from "@/components/seo-optimization/SeoProcess";
import SeoWhyChooseUs from "@/components/seo-optimization/SeoWhyChooseUs";
import SeoFAQ from "@/components/seo-optimization/SeoFAQ";
import SeoServicePager from "@/components/seo-optimization/SeoServicePager";
import SeoSpecMatrix from "@/components/seo-optimization/SeoSpecMatrix";

export const metadata: Metadata = {
  title: "SEO Optimization · Baagul Studio Bengaluru",
  description:
    "All-in-one organic search architecture that converts impressions into high-margin paying clients. Technical site health, semantic indexing, Core Web Vitals, and keyword dominance. Bengaluru engineered.",
  alternates: { canonical: "/services/seo-optimizations" },
};

export default function SeoOptimizationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFBA45] selection:text-[#0E1153]">
      <JsonLd data={serviceSchema({ name: "SEO Optimization", path: "/services/seo-optimizations", description: metadata.description })} />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero with Live Search Performance Mockup */}
        <SeoHero />

        {/* Section 2: Service Overview & Deliverables Accordion */}
        <SeoDeliverables />

        {/* Section 3: Technical & Organic Execution (Navy 2x2 Feature Grid) */}
        <SeoMainFeatures />

        {/* Section 4: 4-Step SEO Optimization Process */}
        <SeoProcess />

        {/* Section 5: Editorial Why Choose Us (Rank Higher. Get Found. Grow Faster.) */}
        <SeoWhyChooseUs />

        {/* Section 6: Green FAQ Accordion */}
        <SeoFAQ />

        {/* Section 7: Service Pager (Content Writing & Editorial / Digital Marketing) */}
        <SeoServicePager />

        {/* Section 8: Design System Specification Matrix */}
        <SeoSpecMatrix />
      </main>
      <Footer />
    </div>
  );
}
