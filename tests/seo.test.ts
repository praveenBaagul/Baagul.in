import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { GET as aiTxt } from "@/app/ai.txt/route";
import { GET as llmsFullTxt } from "@/app/llms-full.txt/route";
import { GET as llmsTxt } from "@/app/llms.txt/route";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { SERVICES } from "@/lib/mcp/content/services";
import { JOB_OPENINGS } from "@/lib/mcp/content/careers";
import SITEMAP_DATES from "@/lib/sitemap-dates.json";
import {
  aboutPageSchema,
  careersPageSchema,
  ORG_ID,
  organizationSchema,
  servicesHubSchema,
} from "@/lib/structured-data";
import { currentHashes } from "../scripts/sitemap-dates-lib";
import nextConfig from "../next.config";

describe("sitemap", () => {
  const entries = sitemap();

  it("gives every route a lastModified date from the dates file", () => {
    for (const entry of entries) {
      expect(entry.lastModified, entry.url).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
    // Real per-page dates, not one deploy date for everything.
    expect(new Set(entries.map((entry) => entry.lastModified)).size).toBeGreaterThan(1);
  });

  it("has a date entry whose content hash is current (run `npm run sitemap:dates` if this fails)", () => {
    const dates: Record<string, { hash: string }> = SITEMAP_DATES;
    const hashes = currentHashes();
    for (const [route, hash] of Object.entries(hashes)) {
      expect(dates[route]?.hash, route).toBe(hash);
    }
  });
});

describe("robots", () => {
  const rules = [robots().rules].flat();

  it("no longer refers to the missing /api/subscribe endpoint", () => {
    expect(JSON.stringify(rules)).not.toContain("subscribe");
  });

  it("lets ChatGPT search and other AI search bots crawl the site", () => {
    const ai = rules.find((rule) => [rule!.userAgent].flat().includes("OAI-SearchBot"))!;
    expect([ai.userAgent].flat()).toEqual(expect.arrayContaining(["ChatGPT-User", "Claude-SearchBot", "PerplexityBot"]));
    expect([ai.allow].flat()).toContain("/");
    expect(ai.disallow).toBeUndefined();
  });
});

describe("next.config", () => {
  it("permanently redirects www to the bare domain, keeping the path", async () => {
    const redirects = await nextConfig.redirects!();
    const www = redirects.find((redirect) => redirect.has?.some((item) => item.type === "host"));
    expect(www).toMatchObject({ source: "/:path*", destination: "https://baagul.in/:path*", permanent: true });
    const host = www!.has!.find((item) => item.type === "host")!;
    const pattern = new RegExp(`^${host.value}$`);
    expect(pattern.test("www.baagul.in")).toBe(true);
    expect(pattern.test("baagul.in")).toBe(false);
    expect(pattern.test("wwwxbaagul.in")).toBe(false);
  });

});

describe("AI text files", () => {
  const files = [
    ["llms.txt", llmsTxt],
    ["llms-full.txt", llmsFullTxt],
    ["ai.txt", aiTxt],
  ] as const;

  // The host serves public/ files itself and drops the charset, so these are
  // served by route handlers from content/ instead.
  it("serves llms.txt, llms-full.txt and ai.txt as UTF-8 from content/", async () => {
    for (const [file, handler] of files) {
      const response = await handler();
      expect(response.headers.get("content-type"), file).toBe("text/plain; charset=utf-8");
      expect(await response.text(), file).toBe(readFileSync(`content/${file}`, "utf8"));
    }
  });

  it("are not also in public/, where they would bypass the routes", () => {
    for (const [file] of files) expect(existsSync(`public/${file}`), file).toBe(false);
  });
});

describe("structured data", () => {
  it("names the organisation BAAGUL once, and other pages only reference it", () => {
    expect(organizationSchema()).toMatchObject({ "@id": ORG_ID, name: "BAAGUL", legalName: "Baagul LLP" });

    for (const schema of [servicesHubSchema(SERVICES), careersPageSchema(JOB_OPENINGS), aboutPageSchema()]) {
      const json = JSON.stringify(schema);
      expect(json).not.toContain("ProfessionalService");
      expect(json).not.toContain('"Organization"');
      expect((schema["@graph"][0] as { about: unknown }).about).toEqual({ "@id": ORG_ID });
    }
  });

  it("lists every service on the services hub", () => {
    const page = servicesHubSchema(SERVICES)["@graph"][0] as { mainEntity: { itemListElement: unknown[] } };
    const list = page.mainEntity.itemListElement;
    expect(list).toHaveLength(SERVICES.length);
    expect(list[0]).toMatchObject({ position: 1, url: SERVICES[0].url });
  });

  it("builds breadcrumbs from Home", () => {
    const breadcrumb = aboutPageSchema()["@graph"][1] as { itemListElement: { name: string; item: string }[] };
    expect(breadcrumb.itemListElement.map((item) => item.name)).toEqual(["Home", "Team"]);
    expect(breadcrumb.itemListElement[1].item).toMatch(/\/team$/);
  });
});

describe("contact page", () => {
  it("has its main heading as an h1, with the same classes as before", () => {
    const source = readFileSync("src/components/contact/EnquiryFormSection.tsx", "utf8");
    expect(source).toMatch(
      /<h1 className="font-heading text-4xl sm:text-5xl text-indigo-main leading-tight mb-4">\s*Tell us what you need\.\s*<\/h1>/
    );
  });
});
