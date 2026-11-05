import type { serviceOptions } from "../validations/enquiry";

type ServiceName = (typeof serviceOptions)[number];

interface ServiceInfo {
  /** Path on the website, or undefined when the service has no page of its own. */
  path?: string;
  summary: string;
  benefits: string;
}

/**
 * Wording for the Day 3 email. Each entry restates what the service page on the
 * website already says, without performance claims or guarantees. Edit here if
 * the service pages change.
 */
export const SERVICE_INFO: Record<ServiceName, ServiceInfo> = {
  "Digital Marketing": {
    summary:
      "Our digital marketing work covers full-funnel campaigns and paid promotion for your business.",
    benefits: "It brings your marketing activity together so it can be planned and reviewed in one place.",
  },
  "SEO Optimization": {
    path: "/services/seo-optimizations",
    summary:
      "Our SEO work covers technical site health, semantic indexing, Core Web Vitals and keyword targeting.",
    benefits: "It focuses on helping the right people find your business through organic search.",
  },
  "Web Design & Dev": {
    path: "/services/web-design",
    summary:
      "We design and build websites and web applications with Next.js, React and TypeScript, with accessible, semantic structure.",
    benefits: "You get a site built around your business, with attention to speed and accessibility.",
  },
  "E-Commerce": {
    path: "/services/e-commerce-solutions",
    summary:
      "We build online stores with custom development, secure payment integration and conversion-focused design.",
    benefits: "It gives your customers a straightforward way to browse, pay and buy from you online.",
  },
  "Cloud Hosting": {
    summary: "We can help you with hosting for your website or application.",
    benefits: "We will go through what your project needs before recommending a setup.",
  },
  "Logo & Brand": {
    path: "/services/logo-design",
    summary: "We create visual brand identities, custom vector marks and design systems.",
    benefits: "It gives your business a consistent look across everything you publish.",
  },
};

/** Builds the service fields of the event payload from validated service names. */
export function describeServices(services: string[], websiteUrl: string) {
  const known = services.filter((name): name is ServiceName => name in SERVICE_INFO);
  const details = known.map((name) => SERVICE_INFO[name]);
  const path = details.length === 1 && details[0].path ? details[0].path : "/services";

  return {
    serviceRequested: known.join(", "),
    serviceSummary: details.map((detail) => detail.summary).join(" "),
    serviceBenefits: details.map((detail) => detail.benefits).join(" "),
    serviceUrl: `${websiteUrl}${path}`,
  };
}
