import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * The plain-text files written for AI crawlers: llms.txt, llms-full.txt and
 * ai.txt. They live in content/ rather than public/ because the host serves
 * public/ files itself and drops the charset; a route handler keeps
 * `charset=utf-8`, which their non-ASCII characters (·, ₹) need.
 *
 * Edit the files in content/. The MCP server reads the same files.
 */

export const AI_FILES = ["llms.txt", "llms-full.txt", "ai.txt"] as const;
export type AiFile = (typeof AI_FILES)[number];

export const AI_FILES_DIR = path.join(process.cwd(), "content");

const cache = new Map<AiFile, Promise<string>>();

/** Reads a file once per server process. A failed read is retried next time. */
export function readAiFile(file: AiFile): Promise<string> {
  let text = cache.get(file);
  if (!text) {
    text = readFile(path.join(AI_FILES_DIR, file), "utf8");
    text.catch(() => cache.delete(file));
    cache.set(file, text);
  }
  return text;
}

export async function aiFileResponse(file: AiFile): Promise<Response> {
  return new Response(await readAiFile(file), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
