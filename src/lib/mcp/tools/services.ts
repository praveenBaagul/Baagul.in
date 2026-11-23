import { getService, SERVICE_SLUGS, SERVICES } from "../content";
import { json, NO_INPUT, READ_ONLY, toolError, type Tool } from "./types";

export const serviceTools: Tool[] = [
  {
    name: "list_services",
    title: "List services",
    description:
      `List all ${SERVICES.length} digital marketing and software engineering services provided by Baagul LLP, ` +
      "with a summary and deliverables for each. Use get_service for the process and FAQs of one service.",
    inputSchema: NO_INPUT,
    annotations: READ_ONLY,
    run: () => json(SERVICES),
  },
  {
    name: "get_service",
    title: "Get service details",
    description:
      "Get everything about one Baagul service: description, deliverables, the step-by-step delivery process, " +
      "frequently asked questions with answers, and the page URL.",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "The service identifier (e.g. 'web-design', 'seo-optimizations', 'e-commerce-solutions').",
          enum: SERVICE_SLUGS,
        },
      },
      required: ["slug"],
      additionalProperties: false,
    },
    annotations: READ_ONLY,
    run: (args) => {
      const service = getService(args.slug);
      if (service) return json(service);
      return toolError(`Unknown service slug ${JSON.stringify(args.slug)}. Valid slugs: ${SERVICE_SLUGS.join(", ")}`);
    },
  },
];
