import type { NextRequest } from "next/server";
import { clientIp } from "@/lib/enquiries/http";
import { renderHtmlDocumentation } from "@/lib/mcp/docs-page";
import { checkMcpRateLimit } from "@/lib/mcp/rate-limit";
import { handleBody, SERVER_INFO, SUPPORTED_PROTOCOL_VERSIONS, TOOLS } from "@/lib/mcp/server";
import { SITE_URL } from "@/lib/site";

const MAX_BODY_BYTES = 64 * 1024;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization, Mcp-Protocol-Version, Mcp-Session-Id",
  "Access-Control-Max-Age": "86400",
};

const rpcError = (status: number, code: number, message: string) =>
  Response.json({ jsonrpc: "2.0", id: null, error: { code, message } }, { status, headers: CORS_HEADERS });

export async function GET(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";

  // A person opening /mcp in a browser gets the documentation page.
  if (accept.includes("text/html")) {
    return new Response(renderHtmlDocumentation(), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  }

  // An MCP client asking for a server-to-client stream. This server has none,
  // and 405 is how the protocol says so.
  if (accept.includes("text/event-stream")) {
    return new Response(null, { status: 405, headers: { ...CORS_HEADERS, Allow: "POST, OPTIONS" } });
  }

  // Anything else (curl, crawlers) gets a plain JSON description.
  return Response.json(
    {
      ...SERVER_INFO,
      description: "Baagul LLP Model Context Protocol server. Send JSON-RPC 2.0 requests with POST.",
      transport: "streamable-http",
      protocolVersions: SUPPORTED_PROTOCOL_VERSIONS,
      tools: TOOLS,
      endpoints: {
        mcp: `${SITE_URL}/mcp`,
        llms: `${SITE_URL}/llms.txt`,
        llms_full: `${SITE_URL}/llms-full.txt`,
        ai: `${SITE_URL}/ai.txt`,
        sitemap: `${SITE_URL}/sitemap.xml`,
      },
    },
    { headers: CORS_HEADERS }
  );
}

/*
 * Security model: everything served here is public and read-only, so there is
 * no authentication, and any Origin may call it (the same data is on the
 * website). CORS never allows credentials. If a tool that writes data or
 * returns private data is added, it needs its own checks before it ships.
 */
export async function POST(request: NextRequest) {
  const retryAfter = checkMcpRateLimit(clientIp(request) ?? "unknown");
  if (retryAfter !== null) {
    return Response.json(
      { jsonrpc: "2.0", id: null, error: { code: -32000, message: "Too many requests. Try again later." } },
      { status: 429, headers: { ...CORS_HEADERS, "Retry-After": String(retryAfter) } }
    );
  }

  const version = request.headers.get("mcp-protocol-version");
  if (version && !SUPPORTED_PROTOCOL_VERSIONS.includes(version)) {
    return rpcError(400, -32600, `Unsupported MCP-Protocol-Version: ${version}`);
  }

  const raw = await request.text();
  if (Buffer.byteLength(raw) > MAX_BODY_BYTES) {
    return rpcError(413, -32600, "Request body too large.");
  }

  const { status, body } = handleBody(raw);
  if (body === undefined) return new Response(null, { status, headers: CORS_HEADERS });
  return Response.json(body, { status, headers: CORS_HEADERS });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
