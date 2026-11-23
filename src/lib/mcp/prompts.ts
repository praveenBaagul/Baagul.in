import { getService, getServices, SERVICE_SLUGS, SERVICES, STUDIO_INFO, type DetailedService } from "./content";

/**
 * MCP prompts: ready-made instructions a user can pick in their AI client.
 * Each one embeds the facts it needs, so the model can answer from Baagul's
 * own content even if it never calls a tool. Arguments are always strings.
 */

interface PromptArgument {
  name: string;
  description: string;
  required: boolean;
}

interface Prompt {
  name: string;
  title: string;
  description: string;
  arguments: PromptArgument[];
  /** Returns the prompt text, or an error message for bad arguments. */
  render: (args: Record<string, string>) => { text: string } | { error: string };
}

const MAX_ARGUMENT_LENGTH = 500;

const catalogue = () =>
  SERVICES.map((service) => `- ${service.name} (slug: ${service.slug}, ${service.url}): ${service.description}`).join("\n");

const dossier = (service: DetailedService) =>
  [
    `## ${service.name}`,
    `Page: ${service.url}`,
    service.description,
    `Deliverables: ${service.deliverables.join("; ")}.`,
    service.process.length > 0
      ? `Delivery process:\n${service.process.map((step, i) => `${i + 1}. ${step.title}: ${step.description}`).join("\n")}`
      : "Delivery process: not published on the service page.",
    service.faqs.length > 0
      ? `FAQs:\n${service.faqs.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join("\n")}`
      : "FAQs: none published.",
  ].join("\n\n");

const contact = () =>
  `Contact: ${STUDIO_INFO.email}, ${STUDIO_INFO.phone}, ${STUDIO_INFO.contact_page} (${STUDIO_INFO.operating_hours}).`;

const GROUND_RULES =
  "Use only the facts below and, if available, the Baagul MCP tools. Do not invent prices, guarantees, " +
  "timelines or results that are not stated. Where something is not stated, say so and suggest contacting Baagul. " +
  "Cite page URLs.";

const PROMPTS: Prompt[] = [
  {
    name: "recommend_service",
    title: "Recommend a Baagul service",
    description: "Match a business goal (and optionally budget and timeline) to the Baagul services that fit it.",
    arguments: [
      { name: "goal", description: "What the business wants to achieve, e.g. 'more leads from Google'.", required: true },
      { name: "budget", description: "Rough budget, e.g. '₹50K - ₹1.5L'.", required: false },
      { name: "timeline", description: "When it is needed, e.g. 'within 2 months'.", required: false },
    ],
    render: ({ goal, budget, timeline }) => ({
      text: [
        "Recommend which Baagul LLP services fit this request, best fit first, and explain why in plain language.",
        `Goal: ${goal}`,
        budget ? `Budget: ${budget}` : null,
        timeline ? `Timeline: ${timeline}` : null,
        "Recommend at most three services. For each, name the deliverables that matter for this goal and link its page. " +
          "End with the next step: how to get in touch.",
        GROUND_RULES,
        `Services:\n${catalogue()}`,
        contact(),
      ]
        .filter(Boolean)
        .join("\n\n"),
    }),
  },
  {
    name: "plan_project",
    title: "Plan a project with Baagul",
    description: "Outline how Baagul would run a project for one service, phase by phase, using its published process.",
    arguments: [
      { name: "service", description: `The service slug: ${SERVICE_SLUGS.join(", ")}.`, required: true },
      { name: "scope", description: "What the project covers, e.g. '8-page company website with a blog'.", required: false },
    ],
    render: ({ service: slug, scope }) => {
      const service = getService(slug);
      if (!service) return { error: `Unknown service "${slug}". Valid slugs: ${SERVICE_SLUGS.join(", ")}.` };
      return {
        text: [
          `Draft a project plan for this ${service.name} engagement with Baagul LLP.`,
          scope ? `Scope: ${scope}` : "Scope: not given. Ask the user for it if the plan needs it.",
          "Follow Baagul's delivery process phase by phase: what happens, what the client provides, and what they receive. " +
            "Use the FAQs for timing and practical questions.",
          GROUND_RULES,
          dossier(service),
          contact(),
        ].join("\n\n"),
      };
    },
  },
  {
    name: "compare_services",
    title: "Compare Baagul services",
    description: "Compare two to four Baagul services side by side to help choose between them.",
    arguments: [
      {
        name: "services",
        description: "Comma-separated service slugs, 2 to 4, e.g. 'web-design,wordpress-development'.",
        required: true,
      },
    ],
    render: ({ services }) => {
      const slugs = [...new Set(services.split(",").map((slug) => slug.trim()).filter(Boolean))];
      if (slugs.length < 2 || slugs.length > 4) return { error: "Give 2 to 4 different service slugs, comma-separated." };
      const { found, unknown } = getServices(slugs);
      if (unknown.length > 0) {
        return { error: `Unknown service(s): ${unknown.join(", ")}. Valid slugs: ${SERVICE_SLUGS.join(", ")}.` };
      }
      return {
        text: [
          `Compare these Baagul LLP services: ${found.map((service) => service.name).join(", ")}.`,
          "Give a side-by-side table (what it is, deliverables, process length, who it suits), then say in two or three " +
            "sentences which one fits which kind of need.",
          GROUND_RULES,
          ...found.map(dossier),
          contact(),
        ].join("\n\n"),
      };
    },
  },
];

/** The prompt list as clients see it. */
export const PROMPT_LIST = PROMPTS.map(({ name, title, description, arguments: args }) => ({
  name,
  title,
  description,
  arguments: args,
}));

export type PromptOutcome =
  | { ok: true; result: { description: string; messages: { role: "user"; content: { type: "text"; text: string } }[] } }
  | { ok: false; message: string };

export function getPrompt(name: unknown, rawArgs: unknown): PromptOutcome {
  const prompt = PROMPTS.find((candidate) => candidate.name === name);
  if (!prompt) return { ok: false, message: `Unknown prompt: ${String(name)}` };

  const supplied = typeof rawArgs === "object" && rawArgs !== null && !Array.isArray(rawArgs) ? rawArgs : {};
  const args: Record<string, string> = {};

  for (const argument of prompt.arguments) {
    const value = (supplied as Record<string, unknown>)[argument.name];
    if (value === undefined || value === null || value === "") {
      if (argument.required) return { ok: false, message: `Missing required argument "${argument.name}".` };
      continue;
    }
    if (typeof value !== "string" || value.length > MAX_ARGUMENT_LENGTH) {
      return { ok: false, message: `"${argument.name}" must be a string of at most ${MAX_ARGUMENT_LENGTH} characters.` };
    }
    args[argument.name] = value.trim();
  }

  const rendered = prompt.render(args);
  if ("error" in rendered) return { ok: false, message: rendered.error };

  return {
    ok: true,
    result: {
      description: prompt.description,
      messages: [{ role: "user", content: { type: "text", text: rendered.text } }],
    },
  };
}
