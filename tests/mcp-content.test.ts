import { readFileSync } from "node:fs";
import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it } from "vitest";
import { POST } from "@/app/mcp/route";
import { getService, JOB_OPENINGS, SERVICE_SLUGS, TEAM } from "@/lib/mcp/content";
import { resetMcpRateLimitForTests } from "@/lib/mcp/rate-limit";
import { searchSite } from "@/lib/mcp/search";
import { SERVER_INFO, SUPPORTED_PROTOCOL_VERSIONS } from "@/lib/mcp/server";
import { GENERATED_FILE, renderGeneratedFile } from "../scripts/mcp-content-extract";

beforeEach(() => resetMcpRateLimitForTests());

let nextId = 1;

const request = async (method: string, params?: unknown) => {
  const response = await POST(
    new NextRequest("https://baagul.in/mcp", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: nextId++, method, params }),
    })
  );
  return response.json();
};

const callTool = async (name: string, args: Record<string, unknown> = {}) => {
  const { result } = await request("tools/call", { name, arguments: args });
  return { result, data: result.isError ? undefined : JSON.parse(result.content[0].text) };
};

describe("generated content", () => {
  it("matches the page components (run `npm run mcp:sync` if this fails)", () => {
    const onDisk = readFileSync(GENERATED_FILE, "utf8").replace(/\r\n/g, "\n");
    expect(onDisk).toBe(renderGeneratedFile());
  });

  it("has a process for every service", () => {
    for (const slug of SERVICE_SLUGS) {
      expect(getService(slug)!.process.length, slug).toBeGreaterThanOrEqual(3);
    }
  });

  it("has FAQs for every service whose page shows them", () => {
    const withoutFaqSection = ["graphics-design", "paid-promotions"];
    for (const slug of SERVICE_SLUGS) {
      const { faqs } = getService(slug)!;
      if (withoutFaqSection.includes(slug)) expect(faqs, slug).toEqual([]);
      else expect(faqs.length, slug).toBeGreaterThanOrEqual(3);
    }
  });

  it("has the team and the openings", () => {
    expect(TEAM.length).toBeGreaterThanOrEqual(5);
    expect(TEAM.every((member) => member.name && member.role)).toBe(true);
    for (const opening of JOB_OPENINGS) expect(opening.url).toMatch(/^https?:\/\//);
  });
});

describe("content tools", () => {
  it("get_service returns the process and FAQs", async () => {
    const { data } = await callTool("get_service", { slug: "web-design" });
    expect(data.process.map((step: { title: string }) => step.title)).toEqual(["DEFINE", "DESIGN", "DEVELOP", "TEST"]);
    expect(data.faqs[0]).toEqual({
      question: "How much does a website design and development cost?",
      answer: expect.stringContaining("fixed-price proposals"),
    });
  });

  it("get_studio_info includes the general FAQs", async () => {
    const { data } = await callTool("get_studio_info");
    expect(data.email).toBe("support@baagul.in");
    expect(data.faqs.length).toBeGreaterThan(0);
  });

  it("get_team lists members with full profile URLs", async () => {
    const { data } = await callTool("get_team");
    const navin = data.members.find((member: { name: string }) => member.name === "Navin Kumar Verma");
    expect(navin).toMatchObject({
      role: "Flutter Developer",
      profile_url: expect.stringMatching(/^https?:\/\/.+\/team\/navin-kumar-verma$/),
    });
  });

  it("get_open_roles lists openings with how to apply", async () => {
    const { data } = await callTool("get_open_roles");
    const designer = data.openings.find((opening: { id: string }) => opening.id === "ui-ux-designer");
    expect(designer.apply_url).toMatch(/^https:\/\//);
    expect(designer.required_skills.length).toBeGreaterThan(0);
    expect(designer.url).toMatch(/\/career\/ui-ux-designer$/);
  });
});

describe("search_site", () => {
  const top = async (query: string) => (await searchSite(query))[0];

  it("finds a service by what it does", async () => {
    expect(await top("wordpress gutenberg blocks")).toMatchObject({ url: expect.stringContaining("wordpress-development") });
  });

  it("finds an FAQ by its question", async () => {
    expect(await top("website cost")).toMatchObject({
      type: "faq",
      title: "How much does a website design and development cost?",
    });
  });

  it("finds people and jobs", async () => {
    expect(await top("Sindhu Reddy")).toMatchObject({ type: "team", title: "Sindhu Reddy" });
    expect(await top("ui ux designer job")).toMatchObject({ type: "job" });
  });

  it("searches llms-full.txt too", async () => {
    const results = await searchSite("lighthouse scores", 10);
    expect(results.some((result) => result.type === "document")).toBe(true);
  });

  it("respects the limit and keeps snippets short", async () => {
    const results = await searchSite("seo", 3);
    expect(results).toHaveLength(3);
    for (const result of results) expect(result.snippet.length).toBeLessThanOrEqual(250);
  });

  it("returns nothing for words that are not on the site", async () => {
    expect(await searchSite("xylophone zeppelin")).toEqual([]);
    expect(await searchSite("the and of")).toEqual([]);
  });

  it("works as a tool and rejects bad input with a readable error", async () => {
    const found = await callTool("search_site", { query: "logo design", limit: 2 });
    expect(found.data.results).toHaveLength(2);

    const empty = await callTool("search_site", { query: "xylophone" });
    expect(empty.data).toMatchObject({ results: [], hint: expect.any(String) });

    for (const args of [{}, { query: "  " }, { query: "seo", limit: 0 }, { query: "seo", limit: "5" }]) {
      const { result } = await callTool("search_site", args);
      expect(result.isError, JSON.stringify(args)).toBe(true);
    }
  });
});

describe("resources", () => {
  it("lists llms.txt and llms-full.txt", async () => {
    const { result } = await request("resources/list");
    expect(result.resources.map((resource: { name: string }) => resource.name)).toEqual(["llms.txt", "llms-full.txt"]);
    expect(result.resources[0]).toMatchObject({ mimeType: "text/markdown", uri: expect.stringMatching(/\/llms\.txt$/) });
  });

  it("reads a file resource with the same text the website serves", async () => {
    const { result: list } = await request("resources/list");
    const { result } = await request("resources/read", { uri: list.resources[1].uri });
    expect(result.contents[0].text).toBe(readFileSync("public/llms-full.txt", "utf8"));
  });

  it("offers a service template and reads through it", async () => {
    const { result: templates } = await request("resources/templates/list");
    expect(templates.resourceTemplates[0].uriTemplate).toBe("baagul://service/{slug}");

    const { result } = await request("resources/read", { uri: "baagul://service/seo-optimizations" });
    expect(result.contents[0]).toMatchObject({ uri: "baagul://service/seo-optimizations", mimeType: "application/json" });
    expect(JSON.parse(result.contents[0].text)).toMatchObject({ slug: "seo-optimizations", process: expect.any(Array) });
  });

  it("rejects an unknown or unsafe URI", async () => {
    for (const uri of [
      "https://baagul.in/nope.txt",
      "file:///etc/passwd",
      "../.env",
      "baagul://service/",
      "baagul://service/../../.env",
      undefined,
    ]) {
      const { error } = await request("resources/read", { uri });
      expect(error.code, String(uri)).toBe(-32002);
    }
  });
});

describe("prompts", () => {
  const getPromptText = async (name: string, args?: Record<string, unknown>) => {
    const response = await request("prompts/get", { name, arguments: args });
    return { response, text: response.result?.messages[0].content.text as string | undefined };
  };

  it("lists the three prompts with their arguments", async () => {
    const { result } = await request("prompts/list");
    expect(result.prompts.map((prompt: { name: string }) => prompt.name)).toEqual([
      "recommend_service",
      "plan_project",
      "compare_services",
    ]);
    const recommend = result.prompts[0];
    expect(recommend.arguments.find((argument: { name: string }) => argument.name === "goal").required).toBe(true);
  });

  it("recommend_service embeds the goal and the whole catalogue", async () => {
    const { response, text } = await getPromptText("recommend_service", { goal: "more leads from Google", budget: "₹50K" });
    expect(response.result.messages[0].role).toBe("user");
    expect(text).toContain("more leads from Google");
    expect(text).toContain("₹50K");
    for (const slug of SERVICE_SLUGS) expect(text).toContain(`slug: ${slug}`);
    expect(text).toContain("Do not invent prices");
  });

  it("plan_project embeds the service's process and FAQs", async () => {
    const { text } = await getPromptText("plan_project", { service: "web-design", scope: "8-page site" });
    expect(text).toContain("8-page site");
    expect(text).toContain("DEFINE:");
    expect(text).toContain("How much does a website design and development cost?");
  });

  it("compare_services embeds each service", async () => {
    const { text } = await getPromptText("compare_services", { services: "web-design, wordpress-development" });
    expect(text).toContain("## Website Design & Development");
    expect(text).toContain("## WordPress & CMS Development");
  });

  it("rejects bad prompt requests with invalid params", async () => {
    const bad: [string, Record<string, unknown> | undefined][] = [
      ["nope", {}],
      ["recommend_service", {}],
      ["recommend_service", { goal: 42 }],
      ["recommend_service", { goal: "x".repeat(501) }],
      ["plan_project", { service: "nope" }],
      ["compare_services", { services: "web-design" }],
      ["compare_services", { services: "web-design,nope" }],
      ["compare_services", { services: "a,b,c,d,e" }],
    ];
    for (const [name, args] of bad) {
      const { response } = await getPromptText(name, args);
      expect(response.error?.code, `${name} ${JSON.stringify(args)}`).toBe(-32602);
    }
  });
});

describe("discovery file", () => {
  it("matches the server", () => {
    const card = JSON.parse(readFileSync("public/.well-known/mcp.json", "utf8"));
    expect(card).toMatchObject({
      name: SERVER_INFO.name,
      version: SERVER_INFO.version,
      protocolVersions: SUPPORTED_PROTOCOL_VERSIONS,
      endpoint: "https://baagul.in/mcp",
    });
  });
});
