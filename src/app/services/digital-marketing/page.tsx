import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DigitalMarketingHero from "@/components/digital-marketing/DigitalMarketingHero";
import DigitalMarketingFeatures from "@/components/digital-marketing/DigitalMarketingFeatures";
import DigitalMarketingServicesList from "@/components/digital-marketing/DigitalMarketingServicesList";
import DigitalMarketingProcess from "@/components/digital-marketing/DigitalMarketingProcess";
import DigitalMarketingWhyChooseUs from "@/components/digital-marketing/DigitalMarketingWhyChooseUs";
import DigitalMarketingFAQ from "@/components/digital-marketing/DigitalMarketingFAQ";
import DigitalMarketingServicePager from "@/components/digital-marketing/DigitalMarketingServicePager";
import DigitalMarketingSpecMatrix from "@/components/digital-marketing/DigitalMarketingSpecMatrix";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Baagul",
  description:
    "Data-driven digital marketing campaigns across SEO, PPC, social media, and conversion funnels engineered for high ROI from our Bangalore tech hub.",
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-[#FEF9ED] text-[#0E1153] flex flex-col font-sans selection:bg-[#FFBA45] selection:text-[#0E1153]">
      {/* Site-wide Header */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Band 1: Hero & Skill Tiles */}
        <DigitalMarketingHero />

        {/* Band 2: Main Features (Deep Navy) */}
        <DigitalMarketingFeatures />

        {/* Band 3: Our Services (Stacked Offset Rows) */}
        <DigitalMarketingServicesList />

        {/* Band 4: Process (Emerald 4-Step) */}
        <DigitalMarketingProcess />

        {/* Band 5: Editorial Why Choose Us (Lavender) */}
        <DigitalMarketingWhyChooseUs />

        {/* Band 6: FAQs (Accordion) */}
        <DigitalMarketingFAQ />

        {/* Band 7: Service Pager */}
        <DigitalMarketingServicePager />

        {/* Band 8: Design System Matrix */}
        <DigitalMarketingSpecMatrix />
      </main>

      {/* Site-wide Footer */}
      <Footer />
    </div>
  );
}

