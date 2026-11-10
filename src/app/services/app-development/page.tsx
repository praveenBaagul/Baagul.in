import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppDevelopmentHero from "@/components/app-development/AppDevelopmentHero";
import AppDevelopmentPlatforms from "@/components/app-development/AppDevelopmentPlatforms";
import AppDevelopmentFeatures from "@/components/app-development/AppDevelopmentFeatures";
import AppDevelopmentProcess from "@/components/app-development/AppDevelopmentProcess";
import AppDevelopmentWhyChooseUs from "@/components/app-development/AppDevelopmentWhyChooseUs";
import AppDevelopmentFAQ from "@/components/app-development/AppDevelopmentFAQ";
import AppDevelopmentServicePager from "@/components/app-development/AppDevelopmentServicePager";
// import AppDevelopmentSpecMatrix from "@/components/app-development/AppDevelopmentSpecMatrix";

export const metadata: Metadata = {
  title: "App Development Services · iOS, Android & Flutter Studio Bengaluru",
  description:
    "Flagship mobile app development for iOS, Android, Flutter, and React Native. High-performance native engineering, 60 FPS interfaces, and offline-first architectures.",
  alternates: { canonical: "/services/app-development" },
};

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#FEF9ED] text-[#0E1153] flex flex-col font-sans selection:bg-[#FFBA45] selection:text-[#0E1153]">
      {/* Structured Schema */}
      <JsonLd
        data={serviceSchema({
          name: "Mobile & Web App Development",
          path: "/services/app-development",
          description: metadata.description,
        })}
      />

      {/* Site-wide Header */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Band 1: Hero & Skill Tiles */}
        <AppDevelopmentHero />

        {/* Band 2: Platforms & Architecture Ecosystems */}
        <AppDevelopmentPlatforms />

        {/* Band 3: Main Features (Deep Navy) */}
        <AppDevelopmentFeatures />

        {/* Band 4: Process (Emerald 4-Step) */}
        <AppDevelopmentProcess />

        {/* Band 5: Editorial Why Choose Us (Lavender) */}
        <AppDevelopmentWhyChooseUs />

        {/* Band 6: FAQs (Accordion) */}
        <AppDevelopmentFAQ />

        {/* Band 7: Service Pager */}
        <AppDevelopmentServicePager />

        {/* Band 8: Design System Matrix */}
        {/* <AppDevelopmentSpecMatrix /> */}
      </main>

      {/* Site-wide Footer */}
      <Footer />
    </div>
  );
}

