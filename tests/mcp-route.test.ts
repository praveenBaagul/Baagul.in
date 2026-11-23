import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it } from "vitest";
import { GET, OPTIONS, POST } from "@/app/mcp/route";
import { SERVICES } from "@/lib/mcp/content";
import { MCP_RATE_LIMIT, resetMcpRateLimitForTests } from "@/lib/mcp/rate-limit";

const ENDPOINT = "https://baagul.in/mcp";

const post = async (body: unknown, headers: Record<string, string> = {}) => {
  const response = await POST(
    new NextRequest(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json, text/event-stream", ...headers },
      body: typeof body === "string" ? body : JSON.stringify(body),
    })
  );
  const text = await response.text();
  return { response, json: text ? JSON.parse(text) : undefined };
};

const rpc = (method: string, params?: unknown, id: number | string = 1) => ({ jsonrpc: "2.0", id, method, params });

const get = (accept: string) => GET(new NextRequest(ENDPOINT, { headers: { accept } }));

beforeEach(() => resetMcpRateLimitForTests());

describe("POST /mcp", () => {
  it("initializes with the client's protocol version when supported", async () => {
    const { response, json } = await post(
      rpc("initialize", { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "t", version: "1" } })
    );

    expect(response.status).toBe(200);
    expect(json).toMatchObject({
      jsonrpc: "2.0",
      id: 1,
      result: {
        protocolVersion: "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: { name: "baagul-mcp" },
      },
    });
    expect(json.result.capabilities.resources).toBeUndefined();
  });

  it("falls back to its newest version for an unknown one", async () => {
    const { json } = await post(rpc("initialize", { protocolVersion: "1999-01-01" }));
    expect(json.result.protocolVersion).toBe("2025-11-25");
  });

  it("accepts notifications with an empty 202", async () => {
    const { response, json } = await post({ jsonrpc: "2.0", method: "notifications/initialized" });
    expect(response.status).toBe(202);
    expect(json).toBeUndefined();
  });

  it("answers ping", async () => {
    const { json } = await post(rpc("ping", undefined, "abc"));
    expect(json).toEqual({ jsonrpc: "2.0", id: "abc", result: {} });
  });

  it("lists tools without leaking internals", async () => {
    const { json } = await post(rpc("tools/list"));
    const names = json.result.tools.map((tool: { name: string }) => tool.name);
    expect(names).toEqual(["list_services", "get_service", "get_case_studies", "get_studio_info"]);
    for (const tool of json.result.tools) {
      expect(tool.inputSchema.type).toBe("object");
      expect(tool.run).toBeUndefined();
    }
  });

  it("calls list_services", async () => {
    const { json } = await post(rpc("tools/call", { name: "list_services", arguments: {} }));
    expect(json.result.isError).toBeUndefined();
    expect(JSON.parse(json.result.content[0].text)).toHaveLength(SERVICES.length);
  });

  it("calls get_service", async () => {
    const { json } = await post(rpc("tools/call", { name: "get_service", arguments: { slug: "web-design" } }));
    expect(JSON.parse(json.result.content[0].text)).toMatchObject({ slug: "web-design" });
  });

  it("reports a bad slug as a tool error the model can read", async () => {
    const { json } = await post(rpc("tools/call", { name: "get_service", arguments: { slug: "nope" } }));
    expect(json.error).toBeUndefined();
    expect(json.result.isError).toBe(true);
    expect(json.result.content[0].text).toContain("web-design");
  });

  it("rejects an unknown tool with invalid params", async () => {
    const { json } = await post(rpc("tools/call", { name: "drop_tables" }));
    expect(json.error.code).toBe(-32602);
  });

  it("rejects an unknown method", async () => {
    const { json } = await post(rpc("resources/list"));
    expect(json.error.code).toBe(-32601);
  });

  it("rejects invalid JSON without echoing parser details", async () => {
    const { response, json } = await post("{not json");
    expect(response.status).toBe(400);
    expect(json).toEqual({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error: invalid JSON." } });
  });

  it("rejects a message that is not JSON-RPC 2.0", async () => {
    const { json } = await post({ method: "ping", id: 1 });
    expect(json.error.code).toBe(-32600);
  });

  it("answers a batch and skips the notifications in it", async () => {
    const { response, json } = await post([
      rpc("ping", undefined, 1),
      { jsonrpc: "2.0", method: "notifications/initialized" },
      rpc("tools/list", undefined, 2),
    ]);
    expect(response.status).toBe(200);
    expect(json.map((reply: { id: number }) => reply.id)).toEqual([1, 2]);
  });

  it("rejects an unsupported MCP-Protocol-Version header", async () => {
    const { response } = await post(rpc("ping"), { "mcp-protocol-version": "1999-01-01" });
    expect(response.status).toBe(400);
  });

  it("rejects an oversized body", async () => {
    const { response } = await post(rpc("ping", { pad: "x".repeat(70_000) }));
    expect(response.status).toBe(413);
  });

  it("rejects an oversized batch", async () => {
    const { response } = await post(Array.from({ length: 21 }, (_, id) => rpc("ping", undefined, id)));
    expect(response.status).toBe(400);
  });

  it("limits requests per client address", async () => {
    const from = (ip: string) => post(rpc("ping"), { "x-forwarded-for": ip });

    for (let i = 0; i < MCP_RATE_LIMIT.requests; i++) {
      expect((await from("203.0.113.9")).response.status).toBe(200);
    }
    const blocked = await from("203.0.113.9");
    expect(blocked.response.status).toBe(429);
    expect(Number(blocked.response.headers.get("retry-after"))).toBeGreaterThan(0);

    expect((await from("203.0.113.10")).response.status).toBe(200);
  });

  it("sends CORS headers", async () => {
    const { response } = await post(rpc("ping"));
    expect(response.headers.get("access-control-allow-origin")).toBe("*");
  });
});

describe("GET /mcp", () => {
  it("serves the documentation page to browsers", async () => {
    const response = await get("text/html,application/xhtml+xml");
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("text/html");
    expect(await response.text()).toContain("get_studio_info");
  });

  it("refuses an event stream with 405", async () => {
    const response = await get("text/event-stream");
    expect(response.status).toBe(405);
    expect(response.headers.get("allow")).toContain("POST");
  });

  it("describes itself as JSON to everything else", async () => {
    const response = await get("*/*");
    expect(response.status).toBe(200);
    expect((await response.json()).tools).toHaveLength(4);
  });
});

describe("OPTIONS /mcp", () => {
  it("allows the MCP headers in preflight", async () => {
    const response = await OPTIONS();
    expect(response.status).toBe(204);
    expect(response.headers.get("access-control-allow-headers")).toContain("Mcp-Protocol-Version");
  });
});
