import { CASE_STUDIES, SERVICES, STUDIO_INFO } from "./content";

/**
 * A stateless Model Context Protocol server: JSON-RPC 2.0 in, JSON out.
 * No sessions and no streaming, so every request stands on its own.
 */

export const SERVER_INFO = { name: "baagul-mcp", title: "Baagul LLP", version: "1.1.0" };

/** Newest first. The client's version is used when it is one of these. */
export const SUPPORTED_PROTOCOL_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];

const INSTRUCTIONS =
  "Public, read-only information about Baagul LLP, a digital marketing and web engineering studio in Bengaluru, India. " +
  "Use list_services for an overview, get_service for one service in depth, get_case_studies for client work, " +
  "and get_studio_info for contact details.";

const MAX_BATCH_SIZE = 20;

const ERROR = {
  parse: -32700,
  invalidRequest: -32600,
  methodNotFound: -32601,
  invalidParams: -32602,
} as const;

type JsonRpcId = string | number | null;

export interface JsonRpcResponse {
  jsonrpc: "2.0";
  id: JsonRpcId;
  result?: unknown;
  error?: { code: number; message: string };
}

interface ToolResult {
  content: { type: "text"; text: string }[];
  isError?: boolean;
}

interface Tool {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: { readOnlyHint: boolean };
  run: (args: Record<string, unknown>) => ToolResult;
}

const NO_INPUT = { type: "object", properties: {}, additionalProperties: false };
const READ_ONLY = { readOnlyHint: true };

const json = (value: unknown): ToolResult => ({
  content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
});

/** A failure the model can read and correct, as opposed to a protocol error. */
const toolError = (message: string): ToolResult => ({
  content: [{ type: "text", text: message }],
  isError: true,
});

const TOOL_DEFINITIONS: Tool[] = [
  {
    name: "list_services",
    title: "List services",
    description: `List all ${SERVICES.length} digital marketing and software engineering services provided by Baagul LLP.`,
    inputSchema: NO_INPUT,
    annotations: READ_ONLY,
    run: () => json(SERVICES),
  },
  {
    name: "get_service",
    title: "Get service details",
    description: "Get the description, deliverables and page URL for one Baagul service.",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "The service identifier (e.g. 'web-design', 'seo-optimizations', 'e-commerce-solutions').",
          enum: SERVICES.map((service) => service.slug),
        },
      },
      required: ["slug"],
      additionalProperties: false,
    },
    annotations: READ_ONLY,
    run: (args) => {
      const service = SERVICES.find((candidate) => candidate.slug === args.slug);
      if (service) return json(service);
      return toolError(
        `Unknown service slug ${JSON.stringify(args.slug)}. Valid slugs: ${SERVICES.map((s) => s.slug).join(", ")}`
      );
    },
  },
  {
    name: "get_case_studies",
    title: "Get case studies",
    description: "Retrieve documented case studies and client success stories from Baagul LLP.",
    inputSchema: NO_INPUT,
    annotations: READ_ONLY,
    run: () => json(CASE_STUDIES),
  },
  {
    name: "get_studio_info",
    title: "Get studio info",
    description: "Get Baagul LLP headquarters, contact details and operating hours.",
    inputSchema: NO_INPUT,
    annotations: READ_ONLY,
    run: () => json(STUDIO_INFO),
  },
];

/** The tool list as clients see it. */
export const TOOLS = TOOL_DEFINITIONS.map(({ name, title, description, inputSchema, annotations }) => ({
  name,
  title,
  description,
  inputSchema,
  annotations,
}));

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isId = (value: unknown): value is string | number =>
  typeof value === "string" || typeof value === "number";

const failure = (id: JsonRpcId, code: number, message: string): JsonRpcResponse => ({
  jsonrpc: "2.0",
  id,
  error: { code, message },
});

function dispatch(method: string, params: Record<string, unknown>) {
  switch (method) {
    case "initialize": {
      const requested = params.protocolVersion;
      const protocolVersion =
        typeof requested === "string" && SUPPORTED_PROTOCOL_VERSIONS.includes(requested)
          ? requested
          : SUPPORTED_PROTOCOL_VERSIONS[0];
      return {
        result: {
          protocolVersion,
          capabilities: { tools: {} },
          serverInfo: SERVER_INFO,
          instructions: INSTRUCTIONS,
        },
      };
    }

    case "ping":
      return { result: {} };

    case "tools/list":
      return { result: { tools: TOOLS } };

    case "tools/call": {
      const tool = TOOL_DEFINITIONS.find((candidate) => candidate.name === params.name);
      if (!tool) {
        return { error: { code: ERROR.invalidParams, message: `Unknown tool: ${String(params.name)}` } };
      }
      const args = params.arguments ?? {};
      if (!isRecord(args)) {
        return { error: { code: ERROR.invalidParams, message: "Tool arguments must be an object." } };
      }
      return { result: tool.run(args) };
    }

    default:
      return { error: { code: ERROR.methodNotFound, message: `Method not found: ${method}` } };
  }
}

/** Handles one JSON-RPC message. Returns null when the message needs no reply. */
export function handleMessage(message: unknown): JsonRpcResponse | null {
  if (!isRecord(message) || message.jsonrpc !== "2.0") {
    return failure(null, ERROR.invalidRequest, "Invalid JSON-RPC 2.0 message.");
  }

  const hasId = isId(message.id);

  if (typeof message.method !== "string") {
    // A response from the client to a request we never sent. Nothing to do.
    if (hasId && ("result" in message || "error" in message)) return null;
    return failure(hasId ? (message.id as JsonRpcId) : null, ERROR.invalidRequest, "Missing method.");
  }

  // Notifications (no id) are never answered, whatever the method.
  if (!hasId) return null;

  const id = message.id as string | number;
  const params = message.params ?? {};
  if (!isRecord(params)) return failure(id, ERROR.invalidParams, "Params must be an object.");

  return { jsonrpc: "2.0", id, ...dispatch(message.method, params) };
}

export interface McpHttpResult {
  /** 202 means accepted with nothing to send back. */
  status: 200 | 202 | 400;
  body?: JsonRpcResponse | JsonRpcResponse[];
}

/** Handles the raw POST body: a single message, or a batch from older clients. */
export function handleBody(raw: string): McpHttpResult {
  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return { status: 400, body: failure(null, ERROR.parse, "Parse error: invalid JSON.") };
  }

  if (Array.isArray(payload)) {
    if (payload.length === 0 || payload.length > MAX_BATCH_SIZE) {
      return {
        status: 400,
        body: failure(null, ERROR.invalidRequest, `A batch must hold 1 to ${MAX_BATCH_SIZE} messages.`),
      };
    }
    const replies = payload.map(handleMessage).filter((reply) => reply !== null);
    return replies.length > 0 ? { status: 200, body: replies } : { status: 202 };
  }

  const reply = handleMessage(payload);
  return reply ? { status: 200, body: reply } : { status: 202 };
}
