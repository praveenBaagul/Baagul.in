import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoDesignHero from "@/components/logo-design/LogoDesignHero";
import LogoDesignFeatures from "@/components/logo-design/LogoDesignFeatures";
import LogoDesignShowcase from "@/components/logo-design/LogoDesignShowcase";
import LogoDesignWhyChooseUs from "@/components/logo-design/LogoDesignWhyChooseUs";
import LogoDesignProcess from "@/components/logo-design/LogoDesignProcess";
import LogoDesignFAQ from "@/components/logo-design/LogoDesignFAQ";
import LogoDesignServicePager from "@/components/logo-design/LogoDesignServicePager";
import LogoDesignSpecMatrix from "@/components/logo-design/LogoDesignSpecMatrix";

export const metadata: Metadata = {
  title: "Logo Design · Baagul Studio Bengaluru",
  description:
    "Timeless visual brand identities, custom vector marks, and comprehensive design systems that define and elevate your business. Bengaluru engineered brand architecture.",
  alternates: { canonical: "/services/logo-design" },
};

export default function LogoDesignPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <JsonLd data={serviceSchema({ name: "Logo Design", path: "/services/logo-design", description: metadata.description })} />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero & 3 KPI Cards */}
        <LogoDesignHero />

        {/* Section 2: Overview & 6 White Deliverable Cards */}
        <LogoDesignFeatures />

        {/* Section 3: Premium Custom Logos We've Designed (Forest Green #005F4C Showcase) */}
        <LogoDesignShowcase />

        {/* Section 4: Why Choose Us (Midnight Navy #1A1F5E with 2 Parchment Cards) */}
        <LogoDesignWhyChooseUs />

        {/* Section 5: 4-Step Process */}
        <LogoDesignProcess />

        {/* Section 6: FAQs (Soft Lavender #E1E3F7) */}
        <LogoDesignFAQ />

        {/* Section 7: Service Pager */}
        <LogoDesignServicePager />

        {/* Section 8: Design System Component Token Matrix */}
        <LogoDesignSpecMatrix />
      </main>
      <Footer />
    </div>
  );
}

