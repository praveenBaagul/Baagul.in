import { searchTools } from "./search";
import { serviceTools } from "./services";
import { studioTools } from "./studio";
import type { Tool } from "./types";

/** Every tool the server offers. To add one, write it in a file here and list it below. */
export const TOOL_DEFINITIONS: Tool[] = [...serviceTools, ...studioTools, ...searchTools];

/** The tool list as clients see it. */
export const TOOLS = TOOL_DEFINITIONS.map(({ name, title, description, inputSchema, annotations }) => ({
  name,
  title,
  description,
  inputSchema,
  annotations,
}));

export type { Tool, ToolResult } from "./types";
