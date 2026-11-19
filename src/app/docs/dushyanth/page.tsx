import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DushyanthProfileCard from "@/components/team/DushyanthProfileCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dushyanth Kumar - Full Stack AI Developer | Baagul LLP Credentials",
  description:
    "Official practitioner profile, technical bio, and verified credentials for Dushyanth Kumar, Full Stack AI Developer at Baagul LLP in Bengaluru.",
  alternates: { canonical: "/docs/dushyanth" },
  openGraph: {
    title: "Dushyanth Kumar - Full Stack AI Developer | Baagul LLP Credentials",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Dushyanth Kumar, Full Stack AI Developer at Baagul LLP in Bengaluru.",
    url: `${SITE_URL}/docs/dushyanth`,
    images: [
      {
        url: `${SITE_URL}/assets/dushyanth-kumar.png`,
        width: 1200,
        height: 630,
        alt: "Dushyanth Kumar - Full Stack AI Developer at Baagul LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dushyanth Kumar - Full Stack AI Developer | Baagul LLP Credentials",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Dushyanth Kumar, Full Stack AI Developer at Baagul LLP in Bengaluru.",
    images: [`${SITE_URL}/assets/dushyanth-kumar.png`],
  },
};

export default function DushyanthProfilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Dushyanth Kumar",
      jobTitle: "Full Stack AI Developer",
      worksFor: {
        "@type": "Organization",
        name: "Baagul LLP",
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2nd Floor, H210, Hustlehub Tech Park, 36/5, Somasundarapalya, 27th Main Rd, Sector 2, HSR Layout",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560102",
          addressCountry: "IN",
        },
      },
      image: `${SITE_URL}/assets/dushyanth-kumar.png`,
      identifier: "BG005",
      email: "support@baagul.in",
      telephone: "+91-62056-97634",
      url: `${SITE_URL}/docs/dushyanth`,
      sameAs: [
        "https://www.linkedin.com/in/dushyanth-kumar-a2564236b/",
        "https://www.linkedin.com/company/baagul",
        SITE_URL,
      ],
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-8">
        <DushyanthProfileCard />
      </main>

      <Footer />
    </div>
  );
}
