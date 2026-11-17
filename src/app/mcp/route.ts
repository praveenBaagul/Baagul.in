import { NextResponse, type NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

const SERVICES_DATA = [
  {
    slug: "web-design",
    name: "Website Design & Development",
    url: `${SITE_URL}/services/web-design`,
    description: "Pixel-perfect Next.js, React, and TypeScript web applications engineered with fluid micro-interactions and sub-second loading speeds.",
    deliverables: ["Figma UI/UX Prototypes", "Next.js App Router Architecture", "Core Web Vitals Optimization", "Accessibility (WCAG AA)", "CI/CD Deployment Pipelines"],
  },
  {
    slug: "seo-optimizations",
    name: "SEO Optimization",
    url: `${SITE_URL}/services/seo-optimizations`,
    description: "All-in-one organic search architecture that converts impressions into high-margin clients. Technical site health and Core Web Vitals.",
    deliverables: ["Technical SEO Audit & Remediation", "Semantic On-Page & Schema.org JSON-LD", "High-Intent Keyword Clustering", "Crawl Budget & Indexing Tuning"],
  },
  {
    slug: "logo-design",
    name: "Logo Design & Visual Identity",
    url: `${SITE_URL}/services/logo-design`,
    description: "Distinctive visual identities and scalable logo design engineered to command market authority across digital and physical touchpoints.",
    deliverables: ["Vector Logo Package (SVG/AI/PNG)", "Brand Identity Guidelines", "Typographic Scale & Color Systems", "Social & Collateral Kit"],
  },
  {
    slug: "guest-post",
    name: "Guest Posts & PR",
    url: `${SITE_URL}/services/guest-post`,
    description: "High-authority editorial placements and digital PR strategies that build verified domain authority and sustainable referral traffic.",
    deliverables: ["DA 50+ Editorial Placements", "Ghostwritten Technical Content", "Permanent Contextual Links", "Live Link Verification Reports"],
  },
  {
    slug: "graphics-design",
    name: "Graphic Designing",
    url: `${SITE_URL}/services/graphics-design`,
    description: "High-impact visual communication that drives engagement across paid media, brand collateral, and digital marketing channels.",
    deliverables: ["Paid Ad Creative Sets", "Marketing Collateral & One-Pagers", "Pitch Decks & Presentations", "Brand Identity Guidelines"],
  },
  {
    slug: "e-commerce-solutions",
    name: "E-Commerce Solutions",
    url: `${SITE_URL}/services/e-commerce-solutions`,
    description: "Headless commerce engineering and frictionless checkout workflows that maximize average order value and customer retention.",
    deliverables: ["Headless Next.js Commerce / Shopify", "One-Page Checkout Optimization", "ERP & Inventory Sync", "Post-Purchase Automation"],
  },
  {
    slug: "wordpress-development",
    name: "WordPress & CMS Development",
    url: `${SITE_URL}/services/wordpress-development`,
    description: "Clean, performant WordPress engineering built on custom Gutenberg blocks and lean architectures without plugin bloat.",
    deliverables: ["Custom Gutenberg Blocks", "ACF Pro Architecture", "Security & Database Hardening", "Speed & Object Caching Setup"],
  },
  {
    slug: "paid-promotions",
    name: "Paid Promotions & Media Buying",
    url: `${SITE_URL}/services/paid-promotions`,
    description: "Data-driven media buying across Google Ads, Meta, and LinkedIn focused on lower acquisition costs and maximum return on ad spend.",
    deliverables: ["Full-Funnel Campaign Strategy", "High-Converting Ad Creatives & Copy", "Server-Side Tracking (GTM/CAPI)", "Cohort Retention & ROAS Reporting"],
  },
  {
    slug: "video-editing",
    name: "Video Editing & Motion Graphics",
    url: `${SITE_URL}/services/video-editing`,
    description: "Cinematic promotional edits, kinetic typography, and short-form video content engineered to capture attention and elevate brand recall.",
    deliverables: ["Short-Form Reels / Shorts Edits", "Kinetic Typography & Motion Graphics", "Audio Mastering & Sound Design", "Multi-Platform Export Formats"],
  },
  {
    slug: "app-development",
    name: "App Development",
    url: `${SITE_URL}/services/app-development`,
    description: "Scalable iOS and Android mobile applications built with React Native and modern native APIs for seamless performance.",
    deliverables: ["Cross-Platform React Native App", "Offline-First Data Architecture", "Biometric Auth & Push Notifications", "App Store & Play Store Submissions"],
  },
];

const CASE_STUDIES = [
  {
    client: "PropFirm Coupons",
    url: "https://propfirm.coupons",
    description: "Real-time proprietary trading challenge discounts and comparison platform. Engineered with Next.js, sub-second TTFB, and technical SEO structure that captured top Google rankings for commercial prop firm query variants.",
  },
  {
    client: "Advocate Khevana Dagli",
    url: `${SITE_URL}/services/seo-optimizations/client-success-stories`,
    description: "Legal practice brand authority and high-intent SEO architecture covering criminal, divorce, and civil litigation in Mumbai, driving top-tier organic inquiry growth.",
  },
  {
    client: "SEO Neo Backlinks Campaign",
    url: `${SITE_URL}/services/guest-post`,
    description: "Contextual high-DA editorial outreach and verified backlink portfolio engineering, elevating domain authority and competitive rankings.",
  },
];

const STUDIO_INFO = {
  name: "Baagul LLP",
  tagline: "Architectural Digital Marketing & Web Engineering Studio",
  headquarters: "2nd Floor Hustlehub Tech Park, HSR Layout, Bengaluru, Karnataka 560102, India",
  email: "support@baagul.in",
  phone: "+91 7483737014",
  website: SITE_URL,
  operating_hours: "Monday - Friday, 09:30 AM - 06:30 PM IST",
};

const TOOLS_SCHEMA = [
  {
    name: "list_services",
    description: "List all 10 digital marketing and software engineering services provided by Baagul LLP.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_service",
    description: "Get in-depth specifications, deliverables, and architecture details for a specific Baagul service.",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "The service identifier (e.g. 'web-design', 'seo-optimizations', 'e-commerce-solutions').",
          enum: SERVICES_DATA.map((s) => s.slug),
        },
      },
      required: ["slug"],
    },
  },
  {
    name: "get_case_studies",
    description: "Retrieve documented case studies and client success stories from Baagul LLP.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_studio_info",
    description: "Get Baagul LLP corporate headquarters, contact details, operating hours, and engagement channels.",
    inputSchema: { type: "object", properties: {} },
  },
];

function renderHtmlDocumentation() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Baagul MCP Server · Model Context Protocol Endpoint</title>
  <meta name="description" content="Model Context Protocol (MCP) server endpoint for Baagul LLP. Access tools for services, case studies, and studio information directly from AI clients." />
  <style>
    :root {
      --bg: #092e20;
      --card-bg: #0d3d2c;
      --border: rgba(251, 246, 234, 0.15);
      --text: #fbf6ea;
      --text-muted: rgba(251, 246, 234, 0.75);
      --accent: #f5a800;
      --accent-hover: #ffbe33;
      --code-bg: #062217;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 2rem 1rem;
    }
    .container {
      max-width: 860px;
      margin: 0 auto;
    }
    header {
      border-bottom: 1px dashed var(--border);
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }
    .badge {
      display: inline-block;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: rgba(245, 168, 0, 0.15);
      color: var(--accent);
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      border: 1px solid var(--accent);
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 2.25rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 0.5rem;
    }
    p.lead {
      font-size: 1.125rem;
      color: var(--text-muted);
    }
    .nav-links {
      margin-top: 1.25rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .nav-links a {
      color: var(--accent);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 600;
      transition: color 0.2s;
    }
    .nav-links a:hover {
      color: var(--accent-hover);
      text-decoration: underline;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }
    h2 {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--accent);
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.05rem;
      font-weight: 600;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }
    pre {
      background: var(--code-bg);
      border: 1px solid rgba(251, 246, 234, 0.1);
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 0.85rem;
      color: #e2e8f0;
      margin: 0.75rem 0;
    }
    code {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      background: rgba(0, 0, 0, 0.25);
      padding: 0.15rem 0.35rem;
      border-radius: 4px;
      color: var(--accent);
      font-size: 0.85em;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(251, 246, 234, 0.08);
    }
    li:last-child { border-bottom: none; }
    .tool-name {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-weight: 700;
      color: var(--accent);
    }
    .tool-desc {
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }
    footer {
      border-top: 1px dashed var(--border);
      padding-top: 1.5rem;
      margin-top: 2rem;
      font-size: 0.85rem;
      color: var(--text-muted);
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="badge">Model Context Protocol (MCP)</div>
      <h1>Baagul LLP · MCP Server</h1>
      <p class="lead">Structured AI discovery and tool execution endpoint for autonomous agents, Claude Desktop, Antigravity, Cursor, and LangChain.</p>
      <div class="nav-links">
        <a href="${SITE_URL}/">← Return to Baagul.in</a>
        <a href="${SITE_URL}/sitemap.xml">XML Sitemap</a>
        <a href="${SITE_URL}/llms.txt">llms.txt</a>
        <a href="${SITE_URL}/llms-full.txt">llms-full.txt</a>
        <a href="${SITE_URL}/ai.txt">ai.txt</a>
      </div>
    </header>

    <section class="card">
      <h2>Server Endpoint</h2>
      <p>Agents and MCP-compatible clients can query this endpoint directly via JSON-RPC 2.0:</p>
      <pre>POST ${SITE_URL}/mcp</pre>
      <p class="tool-desc">Accepts <code>application/json</code> payloads conforming to the Model Context Protocol specification.</p>
    </section>

    <section class="card">
      <h2>Claude Desktop / Antigravity Configuration</h2>
      <p>Add Baagul to your MCP client configuration (e.g. <code>claude_desktop_config.json</code>):</p>
      <pre>{
  "mcpServers": {
    "baagul": {
      "url": "${SITE_URL}/mcp"
    }
  }
}</pre>
    </section>

    <section class="card">
      <h2>Available Tools</h2>
      <ul>
        ${TOOLS_SCHEMA.map(
          (tool) => `
          <li>
            <div class="tool-name">${tool.name}</div>
            <div class="tool-desc">${tool.description}</div>
          </li>
        `
        ).join("")}
      </ul>
    </section>

    <section class="card">
      <h2>Example Tool Execution</h2>
      <p>Sample JSON-RPC call to <code>list_services</code>:</p>
      <pre>{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "list_services",
    "arguments": {}
  },
  "id": 1
}</pre>
    </section>

    <footer>
      <div>&copy; 2025 Baagul LLP. All rights reserved.</div>
      <div>2nd Floor Hustlehub Tech Park, HSR Layout, Bengaluru</div>
    </footer>
  </div>
</body>
</html>`;
}

function handleRpcCall(body: any) {
  const { jsonrpc = "2.0", method, params = {}, id = null } = body || {};

  switch (method) {
    case "initialize":
      return {
        jsonrpc,
        id,
        result: {
          protocolVersion: "2024-11-05",
          serverInfo: {
            name: "baagul-mcp",
            version: "1.0.0",
          },
          capabilities: {
            tools: {},
            resources: {},
          },
        },
      };

    case "tools/list":
      return {
        jsonrpc,
        id,
        result: {
          tools: TOOLS_SCHEMA,
        },
      };

    case "tools/call": {
      const toolName = params?.name;
      const args = params?.arguments || {};

      if (toolName === "list_services") {
        return {
          jsonrpc,
          id,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(SERVICES_DATA, null, 2),
              },
            ],
          },
        };
      }

      if (toolName === "get_service") {
        const slug = args?.slug;
        const service = SERVICES_DATA.find((s) => s.slug === slug);
        if (!service) {
          return {
            jsonrpc,
            id,
            error: {
              code: -32602,
              message: `Unknown service slug '${slug}'. Valid slugs: ${SERVICES_DATA.map((s) => s.slug).join(", ")}`,
            },
          };
        }
        return {
          jsonrpc,
          id,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(service, null, 2),
              },
            ],
          },
        };
      }

      if (toolName === "get_case_studies") {
        return {
          jsonrpc,
          id,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(CASE_STUDIES, null, 2),
              },
            ],
          },
        };
      }

      if (toolName === "get_studio_info") {
        return {
          jsonrpc,
          id,
          result: {
            content: [
              {
                type: "text",
                text: JSON.stringify(STUDIO_INFO, null, 2),
              },
            ],
          },
        };
      }

      return {
        jsonrpc,
        id,
        error: {
          code: -32601,
          message: `Method not found: ${toolName}`,
        },
      };
    }

    case "ping":
      return { jsonrpc, id, result: {} };

    default:
      return {
        jsonrpc,
        id,
        error: {
          code: -32601,
          message: `Unknown method: ${method}`,
        },
      };
  }
}

export async function GET(request: NextRequest) {
  const accept = request.headers.get("accept") || "";

  // If a human visitor opens /mcp in their browser, serve the interactive HTML documentation
  if (accept.includes("text/html")) {
    return new Response(renderHtmlDocumentation(), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  }

  // Otherwise, return JSON discovery
  return NextResponse.json(
    {
      jsonrpc: "2.0",
      result: {
        name: "baagul-mcp",
        version: "1.0.0",
        description: "Baagul LLP Model Context Protocol Server",
        capabilities: {
          tools: TOOLS_SCHEMA,
        },
        endpoints: {
          mcp: `${SITE_URL}/mcp`,
          llms: `${SITE_URL}/llms.txt`,
          llms_full: `${SITE_URL}/llms-full.txt`,
          ai: `${SITE_URL}/ai.txt`,
          sitemap: `${SITE_URL}/sitemap.xml`,
        },
      },
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = handleRpcCall(body);
    return NextResponse.json(result, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        jsonrpc: "2.0",
        error: {
          code: -32700,
          message: "Parse error: invalid JSON payload received.",
          data: error?.message,
        },
        id: null,
      },
      {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
