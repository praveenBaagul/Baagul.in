import { SITE_URL } from "@/lib/site";
import { GENERAL_FAQS } from "./generated";

export const CASE_STUDIES = [
  {
    client: "PropFirm Coupons",
    url: "https://propfirm.coupons",
    description: "Real-time proprietary trading challenge discounts and comparison platform. Engineered with Next.js, sub-second TTFB, and technical SEO structure that captured top Google rankings for commercial prop firm query variants.",
  },
  {
    client: "Advocate Khevana Dagli",
    url: `${SITE_URL}/services/seo-optimizations/client-success-stories`,
    description: "Legal practice brand authority and high-intent SEO architecture covering criminal, divorce, and civil litigation in Mumbai, driving top-tier organic inquiry growth.",
  },
  {
    client: "SEO Neo Backlinks Campaign",
    url: `${SITE_URL}/services/guest-post`,
    description: "Contextual high-DA editorial outreach and verified backlink portfolio engineering, elevating domain authority and competitive rankings.",
  },
];

export const STUDIO_INFO = {
  name: "Baagul LLP",
  tagline: "Architectural Digital Marketing & Web Engineering Studio",
  headquarters: "2nd Floor Hustlehub Tech Park, HSR Layout, Bengaluru, Karnataka 560102, India",
  email: "support@baagul.in",
  phone: "+91 62056 97634",
  website: SITE_URL,
  contact_page: `${SITE_URL}/contact`,
  operating_hours: "Monday - Friday, 09:30 AM - 06:30 PM IST",
};

export { GENERAL_FAQS };
