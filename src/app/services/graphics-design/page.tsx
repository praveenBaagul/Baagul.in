import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GraphicsDesignHero from "@/components/graphics-design/GraphicsDesignHero";
import GraphicsDesignFeatures from "@/components/graphics-design/GraphicsDesignFeatures";
import GraphicsDesignServicesGrid from "@/components/graphics-design/GraphicsDesignServicesGrid";
import GraphicsDesignProcess from "@/components/graphics-design/GraphicsDesignProcess";
import GraphicsDesignEnquiry from "@/components/graphics-design/GraphicsDesignEnquiry";
import GraphicsDesignBannerAndPager from "@/components/graphics-design/GraphicsDesignBannerAndPager";
import GraphicsDesignSpecMatrix from "@/components/graphics-design/GraphicsDesignSpecMatrix";

export const metadata: Metadata = {
  title: "Graphics Design · Baagul Studio Bengaluru",
  description:
    "Bespoke marketing graphics, promotional collateral, custom brand assets, and high-converting visual systems engineered for businesses in Bengaluru and worldwide.",
};

export default function GraphicsDesignPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero & 3 Progress Bars */}
        <GraphicsDesignHero />

        {/* Section 2: 6 Sketch Sticky Cards (Lavender Background) */}
        <GraphicsDesignFeatures />

        {/* Section 3: Our Services 4 Deliverables Grid */}
        <GraphicsDesignServicesGrid />

        {/* Section 4: 4-Step Process Timeline (Forest Green #005F4C) */}
        <GraphicsDesignProcess />

        {/* Section 5: Enquiry Now Interactive Form Section (Midnight Navy #1A1F5E) */}
        <GraphicsDesignEnquiry />

        {/* Section 6: Full-Width Banner & Video Editing Pager */}
        <GraphicsDesignBannerAndPager />

        {/* Section 7: Component State Specimen Matrix */}
        <GraphicsDesignSpecMatrix />
      </main>
      <Footer />
    </div>
  );
}

