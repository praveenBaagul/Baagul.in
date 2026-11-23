import { SITE_URL } from "@/lib/site";
import { TOOLS } from "./server";

export function renderHtmlDocumentation() {
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
      <h2>Connect Your AI Client</h2>
      <h3>Claude (web and desktop)</h3>
      <p class="tool-desc">Open Settings &rarr; Connectors &rarr; Add custom connector, and enter this URL:</p>
      <pre>${SITE_URL}/mcp</pre>
      <h3>Claude Code</h3>
      <pre>claude mcp add --transport http baagul ${SITE_URL}/mcp</pre>
      <h3>Cursor and other clients with remote server support</h3>
      <p class="tool-desc">Add this to the client's MCP configuration (for Cursor, <code>.cursor/mcp.json</code>):</p>
      <pre>{
  "mcpServers": {
    "baagul": {
      "url": "${SITE_URL}/mcp"
    }
  }
}</pre>
      <p class="tool-desc">No sign-in is needed. Every tool is read-only.</p>
    </section>

    <section class="card">
      <h2>Available Tools</h2>
      <ul>
        ${TOOLS.map(
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
      <div>&copy; Baagul LLP. All rights reserved.</div>
      <div>2nd Floor Hustlehub Tech Park, HSR Layout, Bengaluru</div>
    </footer>
  </div>
</body>
</html>`;
}
