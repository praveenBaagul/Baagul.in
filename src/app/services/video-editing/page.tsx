import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoEditingHero from "@/components/video-editing/VideoEditingHero";
import VideoEditingFeatures from "@/components/video-editing/VideoEditingFeatures";
import VideoEditingServicesList from "@/components/video-editing/VideoEditingServicesList";
import VideoEditingProcess from "@/components/video-editing/VideoEditingProcess";
import VideoEditingWhyChooseUs from "@/components/video-editing/VideoEditingWhyChooseUs";
import VideoEditingFAQ from "@/components/video-editing/VideoEditingFAQ";
import VideoEditingServicePager from "@/components/video-editing/VideoEditingServicePager";
import VideoEditingSpecMatrix from "@/components/video-editing/VideoEditingSpecMatrix";

export const metadata: Metadata = {
  title: "Video Editing Services · Baagul Studio Bengaluru",
  description:
    "Professional video editing for reels, YouTube, brand films, and ads — with motion graphics, color grading, sound design, and subtitles.",
  alternates: { canonical: "/services/video-editing" },
};

export default function VideoEditingPage() {
  return (
    <div className="min-h-screen bg-[#FEF9ED] text-[#0E1153] flex flex-col font-sans selection:bg-[#FFBA45] selection:text-[#0E1153]">
      {/* Site-wide Header */}
      <JsonLd data={serviceSchema({ name: "Video Editing", path: "/services/video-editing", description: metadata.description })} />
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Band 1: Hero & Skill Tiles */}
        <VideoEditingHero />

        {/* Band 2: Main Features (Deep Navy) */}
        <VideoEditingFeatures />

        {/* Band 3: Our Services (Stacked Offset Rows) */}
        <VideoEditingServicesList />

        {/* Band 4: Process (Emerald 4-Step) */}
        <VideoEditingProcess />

        {/* Band 5: Editorial Why Choose Us (Lavender) */}
        <VideoEditingWhyChooseUs />

        {/* Band 6: FAQs (Accordion) */}
        <VideoEditingFAQ />

        {/* Band 7: Service Pager */}
        <VideoEditingServicePager />

        {/* Band 8: Design System Matrix */}
        <VideoEditingSpecMatrix />
      </main>

      {/* Site-wide Footer */}
      <Footer />
    </div>
  );
}

