import { MAX_SEARCH_RESULTS, searchSite } from "../search";
import { json, READ_ONLY, toolError, type Tool } from "./types";

const MAX_QUERY_LENGTH = 200;

export const searchTools: Tool[] = [
  {
    name: "search_site",
    title: "Search the Baagul site",
    description:
      "Keyword search across Baagul LLP's services, delivery processes, FAQs, case studies, team, job openings " +
      "and studio information. Use short keyword queries (e.g. 'website cost', 'shopify checkout', 'ui ux job'). " +
      "Returns the best matches with a snippet and the page URL.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Keywords to search for.", minLength: 1, maxLength: MAX_QUERY_LENGTH },
        limit: {
          type: "integer",
          description: "How many results to return.",
          minimum: 1,
          maximum: MAX_SEARCH_RESULTS,
          default: 5,
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    annotations: READ_ONLY,
    run: async (args) => {
      const { query, limit = 5 } = args;
      if (typeof query !== "string" || query.trim() === "" || query.length > MAX_QUERY_LENGTH) {
        return toolError(`"query" must be a non-empty string of at most ${MAX_QUERY_LENGTH} characters.`);
      }
      if (typeof limit !== "number" || !Number.isInteger(limit) || limit < 1 || limit > MAX_SEARCH_RESULTS) {
        return toolError(`"limit" must be a whole number from 1 to ${MAX_SEARCH_RESULTS}.`);
      }

      const results = await searchSite(query, limit);
      return json({
        query,
        results,
        ...(results.length === 0 ? { hint: "No matches. Try fewer or more general keywords, or call list_services." } : {}),
      });
    },
  },
];
