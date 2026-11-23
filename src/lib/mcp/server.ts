import { getPrompt, PROMPT_LIST } from "./prompts";
import { readResource, RESOURCE_TEMPLATES, RESOURCES } from "./resources";
import { TOOL_DEFINITIONS, TOOLS } from "./tools";

/**
 * A stateless Model Context Protocol server: JSON-RPC 2.0 in, JSON out.
 * No sessions and no streaming, so every request stands on its own.
 *
 * This file is only the protocol. Tools live in ./tools, resources in
 * ./resources, prompts in ./prompts, and the content they serve in ./content.
 */

export const SERVER_INFO = { name: "baagul-mcp", title: "Baagul LLP", version: "1.2.0" };

/** Newest first. The client's version is used when it is one of these. */
export const SUPPORTED_PROTOCOL_VERSIONS = ["2025-11-25", "2025-06-18", "2025-03-26", "2024-11-05"];

const INSTRUCTIONS =
  "Public, read-only information about Baagul LLP, a digital marketing and web engineering studio in Bengaluru, India. " +
  "Use search_site to find anything by keyword. Use list_services for an overview and get_service for one service " +
  "in depth (process and FAQs), get_case_studies for client work, get_team for the people, get_open_roles for jobs, " +
  "and get_studio_info for contact details. Every result includes page URLs to cite. Do not state prices, " +
  "guarantees or results that the data does not contain.";

const MAX_BATCH_SIZE = 20;

const ERROR = {
  parse: -32700,
  invalidRequest: -32600,
  methodNotFound: -32601,
  invalidParams: -32602,
  internal: -32603,
  resourceNotFound: -32002,
} as const;

type JsonRpcId = string | number | null;

export interface JsonRpcResponse {
  jsonrpc: "2.0";
  id: JsonRpcId;
  result?: unknown;
  error?: { code: number; message: string };
}

type Outcome = { result: unknown } | { error: { code: number; message: string } };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isId = (value: unknown): value is string | number =>
  typeof value === "string" || typeof value === "number";

const fail = (code: number, message: string): Outcome => ({ error: { code, message } });

const failure = (id: JsonRpcId, code: number, message: string): JsonRpcResponse => ({
  jsonrpc: "2.0",
  id,
  error: { code, message },
});

async function dispatch(method: string, params: Record<string, unknown>): Promise<Outcome> {
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
          capabilities: { tools: {}, resources: {}, prompts: {} },
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
      if (!tool) return fail(ERROR.invalidParams, `Unknown tool: ${String(params.name)}`);
      const args = params.arguments ?? {};
      if (!isRecord(args)) return fail(ERROR.invalidParams, "Tool arguments must be an object.");
      return { result: await tool.run(args) };
    }

    case "resources/list":
      return { result: { resources: RESOURCES } };

    case "resources/templates/list":
      return { result: { resourceTemplates: RESOURCE_TEMPLATES } };

    case "resources/read": {
      const resource = await readResource(params.uri);
      if (!resource) return fail(ERROR.resourceNotFound, `Resource not found: ${String(params.uri)}`);
      return { result: resource };
    }

    case "prompts/list":
      return { result: { prompts: PROMPT_LIST } };

    case "prompts/get": {
      const outcome = getPrompt(params.name, params.arguments);
      return outcome.ok ? { result: outcome.result } : fail(ERROR.invalidParams, outcome.message);
    }

    default:
      return fail(ERROR.methodNotFound, `Method not found: ${method}`);
  }
}

/** Handles one JSON-RPC message. Returns null when the message needs no reply. */
export async function handleMessage(message: unknown): Promise<JsonRpcResponse | null> {
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

  try {
    return { jsonrpc: "2.0", id, ...(await dispatch(message.method, params)) };
  } catch (error) {
    // Logged for us; the caller only learns that it failed.
    console.error(`MCP ${message.method} failed:`, error instanceof Error ? error.message : error);
    return failure(id, ERROR.internal, "Internal error.");
  }
}

export interface McpHttpResult {
  /** 202 means accepted with nothing to send back. */
  status: 200 | 202 | 400;
  body?: JsonRpcResponse | JsonRpcResponse[];
}

/** Handles the raw POST body: a single message, or a batch from older clients. */
export async function handleBody(raw: string): Promise<McpHttpResult> {
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
    const replies = (await Promise.all(payload.map(handleMessage))).filter((reply) => reply !== null);
    return replies.length > 0 ? { status: 200, body: replies } : { status: 202 };
  }

  const reply = await handleMessage(payload);
  return reply ? { status: 200, body: reply } : { status: 202 };
}
