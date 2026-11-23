import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KishoreProfileCard from "@/components/team/KishoreProfileCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kishore V - Digital Marketing Manager | Baagul LLP",
  description:
    "Official practitioner profile, executive bio, and verified credentials for Kishore V, Digital Marketing Manager at Baagul LLP in Bengaluru.",
  alternates: { canonical: "/docs/kishore" },
  openGraph: {
    title: "Kishore V - Digital Marketing Manager | Baagul LLP",
    description:
      "Official practitioner profile, executive bio, and verified credentials for Kishore V, Digital Marketing Manager at Baagul LLP in Bengaluru.",
    url: `${SITE_URL}/docs/kishore`,
    images: [
      {
        url: `${SITE_URL}/assets/kishore.png`,
        width: 1200,
        height: 630,
        alt: "Kishore V - Digital Marketing Manager at Baagul LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishore V - Digital Marketing Manager | Baagul LLP",
    description:
      "Official practitioner profile, executive bio, and verified credentials for Kishore V, Digital Marketing Manager at Baagul LLP in Bengaluru.",
    images: [`${SITE_URL}/assets/kishore.png`],
  },
};

export default function KishoreProfilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Kishore V",
      jobTitle: "Digital Marketing Manager",
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
      image: `${SITE_URL}/assets/kishore.png`,
      identifier: "BG02",
      email: "support@baagul.in",
      telephone: "+91-62056-97634",
      url: `${SITE_URL}/docs/kishore`,
      sameAs: ["https://www.linkedin.com/in/kishore-v46", "https://www.linkedin.com/company/baagul", SITE_URL],
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
        <KishoreProfileCard />
      </main>

      <Footer />
    </div>
  );
}
