import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoEditingHero from "@/components/video-editing/VideoEditingHero";
import VideoEditingFeatures from "@/components/video-editing/VideoEditingFeatures";
import VideoEditingFormatShowcase from "@/components/video-editing/VideoEditingFormatShowcase";
// import VideoEditingServicesList from "@/components/video-editing/VideoEditingServicesList";
import VideoEditingProcess from "@/components/video-editing/VideoEditingProcess";
import VideoEditingWhyChooseUs from "@/components/video-editing/VideoEditingWhyChooseUs";
import VideoEditingFAQ from "@/components/video-editing/VideoEditingFAQ";
import VideoEditingServicePager from "@/components/video-editing/VideoEditingServicePager";
// import VideoEditingSpecMatrix from "@/components/video-editing/VideoEditingSpecMatrix";

export const metadata: Metadata = {
  title: "Video Editing Services in Bangalore | BAAGUL",
  description:
    "Professional video editing services in Bangalore by BAAGUL. Get YouTube editing, Instagram Reels, motion graphics, promotional videos and video ads.",
  alternates: { canonical: "/services/video-editing" },
  openGraph: {
    title: "Video Editing Services in Bangalore | BAAGUL",
    description:
      "Professional video editing services in Bangalore by BAAGUL. Get YouTube editing, Instagram Reels, motion graphics, promotional videos and video ads.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Editing Services in Bangalore | BAAGUL",
    description:
      "Professional video editing services in Bangalore by BAAGUL. Get YouTube editing, Instagram Reels, motion graphics, promotional videos and video ads.",
  },
};

export default function VideoEditingPage() {
  return (
    <div className="min-h-screen bg-[#FEF9ED] text-[#0E1153] flex flex-col font-sans selection:bg-[#FFBA45] selection:text-[#0E1153]">
      {/* Site-wide Header */}
      <JsonLd data={serviceSchema({ name: "Video Editing Services", path: "/services/video-editing", description: metadata.description })} />
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Band 1: Hero & Skill Tiles */}
        <VideoEditingHero />


        {/* Band 2: Main Features (Deep Navy) */}
        <VideoEditingFeatures />

        {/* Band 3: Interactive Format Showcase (Phone Mockup / YouTube Mockup) */}
        <VideoEditingFormatShowcase />

        {/* Band 4: Process (Emerald 4-Step) */}
        <VideoEditingProcess />

        {/* Band 5: Editorial Why Choose Us (Lavender) */}
        <VideoEditingWhyChooseUs />

        {/* Band 6: FAQs (Accordion) */}
        <VideoEditingFAQ />

        {/* Band 7: Service Pager */}
        <VideoEditingServicePager />

        {/* Band 8: Design System Matrix */}
        {/* <VideoEditingSpecMatrix /> */}
      </main>

      {/* Site-wide Footer */}
      <Footer />
    </div>
  );
}

