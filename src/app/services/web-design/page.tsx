import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebDesignHero from "@/components/web-design/WebDesignHero";
import WebDesignMetricsStrip from "@/components/web-design/WebDesignMetricsStrip";
import WebDesignFeatures from "@/components/web-design/WebDesignFeatures";
import WebDesignServicesList from "@/components/web-design/WebDesignServicesList";
import WebDesignProcess from "@/components/web-design/WebDesignProcess";
import WebDesignWhyChooseUs from "@/components/web-design/WebDesignWhyChooseUs";
import WebDesignWorks from "@/components/web-design/WebDesignWorks";
import WebDesignFAQ from "@/components/web-design/WebDesignFAQ";
import WebDesignServicePager from "@/components/web-design/WebDesignServicePager";
import WebDesignSpecMatrix from "@/components/web-design/WebDesignSpecMatrix";

export const metadata: Metadata = {
  title: "Website Design & Development · Baagul Studio Bengaluru",
  description:
    "Pixel-perfect Next.js, React, and TypeScript web applications engineered with fluid micro-interactions, accessible semantic structures, and sub-second loading speeds.",
  alternates: { canonical: "/services/web-design" },
};

export default function WebDesignPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <JsonLd data={serviceSchema({ name: "Website Design & Development", path: "/services/web-design", description: metadata.description })} />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <WebDesignHero />

        {/* Section 2: Emerald Green Metrics Strip (87%, 76%, 60%) */}
        <WebDesignMetricsStrip />

        {/* Section 3: Overview & 6 Deliverable Cards (Yellow, Lavender, Mint) */}
        <WebDesignFeatures />

        {/* Section 4: Our Services 4 Wide Cards (Corporate, E-Commerce, Blog, Graphics) */}
        <WebDesignServicesList />

        {/* Section 5: 4-Step Process (DEFINE, DESIGN, DEVELOP, TEST) */}
        <WebDesignProcess />

        {/* Section 6: Why Choose Us (Your Business Deserves a Website That Converts) */}
        <WebDesignWhyChooseUs />

        {/* Section 7: Some of Our Works Showcase */}
        <WebDesignWorks />

        {/* Section 8: FAQ Interactive Split Layout */}
        <WebDesignFAQ />

        {/* Section 9: Service Pager */}
        <WebDesignServicePager />

        {/* Section 10: Specimen Matrix */}
        {/* <WebDesignSpecMatrix /> */}
      </main>
      <Footer />
    </div>
  );
}

