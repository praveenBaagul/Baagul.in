import type { Metadata } from "next";
import Link from "next/link";
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

        {/* Client Success Stories Banner */}
        <section className="w-full bg-[#1A1F5E] text-[#FEF9ED] py-4 px-4 sm:px-8 border-b-2 border-[#0E1153]">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FFA800] animate-pulse" />
              <span className="font-bold text-[#FFA800] uppercase tracking-wider">
                REAL CLIENT RESULTS:
              </span>
              <span className="text-[#FEF9ED]/90">
                See verified Google Search success stories across 5 active client platforms.
              </span>
            </div>
            <Link
              href="/services/seo-optimizations/client-success-stories"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFA800] text-[#0E1153] font-heading font-bold text-xs border border-[#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 transition-all shrink-0 cursor-pointer"
            >
              <span>Explore Success Stories</span>
              <span>→</span>
            </Link>
          </div>
        </section>

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
        {/* <SeoSpecMatrix /> */}
      </main>
      <Footer />
    </div>
  );
}
