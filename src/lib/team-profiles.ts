import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Team members whose profile pages use the shared TeamProfileCard.
 * (Older profiles have their own card components in src/components/team.)
 * Employee IDs come from the HR roster.
 */
export interface TeamProfile {
  slug: string;
  name: string;
  role: string;
  employeeId: string;
  department: string;
  /** Short uppercase label above the name. */
  eyebrow: string;
  bio: string;
  /** Replace the placeholder with a real photo when available. */
  imgSrc: string;
  title: string;
  description: string;
}

export const TEAM_PROFILES = {
  "varshini-ks": {
    slug: "varshini-ks",
    name: "Varshini KS",
    role: "SEO Analyst",
    employeeId: "BG08",
    department: "SEO & Growth",
    eyebrow: "ORGANIC SEARCH & SEO ANALYSIS",
    bio: "Works on search engine optimization for Baagul LLP clients, covering keyword research, on-page optimization, content briefs and ranking and traffic reporting from our studio in Bengaluru.",
    imgSrc: "/assets/varshini-ks-placeholder.svg",
    title: "Varshini KS - SEO Analyst in Bengaluru | Baagul LLP",
    description:
      "Official practitioner profile, bio and verified credentials for Varshini KS, SEO Analyst at Baagul LLP in HSR Layout, Bengaluru.",
  },
  "lakshmi-p": {
    slug: "lakshmi-p",
    name: "Lakshmi P",
    role: "SEO Analyst",
    employeeId: "BG09",
    department: "SEO & Growth",
    eyebrow: "ORGANIC SEARCH & ON-PAGE SEO",
    bio: "Supports organic search growth for Baagul LLP clients through keyword research, on-page SEO, technical site checks and performance tracking from our studio in Bengaluru.",
    imgSrc: "/assets/lakshmi-p-placeholder.svg",
    title: "Lakshmi P - SEO Analyst in Bengaluru | Baagul LLP",
    description:
      "Official practitioner profile, bio and verified credentials for Lakshmi P, SEO Analyst at Baagul LLP in HSR Layout, Bengaluru.",
  },
  "asif-s": {
    slug: "asif-s",
    name: "Asif S",
    role: "Video Editor",
    employeeId: "BG10",
    department: "Video & Creative",
    eyebrow: "VIDEO EDITING & POST-PRODUCTION",
    bio: "Edits short-form and long-form videos for Baagul LLP clients, including Instagram Reels, YouTube videos and promotional content, with motion graphics, captions and sound design.",
    imgSrc: "/assets/asif-s-placeholder.svg",
    title: "Asif S - Video Editor in Bengaluru | Baagul LLP",
    description:
      "Official practitioner profile, creative bio and verified credentials for Asif S, Video Editor at Baagul LLP in HSR Layout, Bengaluru.",
  },
} satisfies Record<string, TeamProfile>;

export const STUDIO_ADDRESS = {
  streetAddress: "2nd Floor, H210, Hustlehub Tech Park, 36/5, Somasundarapalya, 27th Main Rd, Sector 2, HSR Layout",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560102",
  addressCountry: "IN",
};

const profileUrl = (profile: TeamProfile) => `${SITE_URL}/team/${profile.slug}`;

export function teamProfileMetadata(profile: TeamProfile): Metadata {
  const image = `${SITE_URL}${profile.imgSrc}`;
  return {
    title: profile.title,
    description: profile.description,
    alternates: { canonical: `/team/${profile.slug}` },
    openGraph: {
      title: profile.title,
      description: profile.description,
      url: profileUrl(profile),
      images: [{ url: image, alt: `${profile.name} - ${profile.role} at Baagul LLP` }],
    },
    twitter: {
      card: "summary_large_image",
      title: profile.title,
      description: profile.description,
      images: [image],
    },
  };
}

/** ProfilePage + Person schema, matching the other team profile pages. */
export function teamProfileJsonLd(profile: TeamProfile) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: profile.role,
      worksFor: {
        "@type": "Organization",
        name: "Baagul LLP",
        url: SITE_URL,
        address: { "@type": "PostalAddress", ...STUDIO_ADDRESS },
      },
      image: `${SITE_URL}${profile.imgSrc}`,
      identifier: profile.employeeId,
      email: "support@baagul.in",
      telephone: "+91-62056-97634",
      url: profileUrl(profile),
      sameAs: ["https://www.linkedin.com/company/baagul", SITE_URL],
    },
  };
}
