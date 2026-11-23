export interface ToolResult {
  content: { type: "text"; text: string }[];
  isError?: boolean;
}

export interface Tool {
  name: string;
  title: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: { readOnlyHint: boolean };
  run: (args: Record<string, unknown>) => ToolResult | Promise<ToolResult>;
}

export const NO_INPUT = { type: "object", properties: {}, additionalProperties: false };
export const READ_ONLY = { readOnlyHint: true };

export const json = (value: unknown): ToolResult => ({
  content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
});

/** A failure the model can read and correct, as opposed to a protocol error. */
export const toolError = (message: string): ToolResult => ({
  content: [{ type: "text", text: message }],
  isError: true,
});
