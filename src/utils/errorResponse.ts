import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import { CalendlyApiError } from "./calendlyClient.js";

/**
 * Parses the error response to be sent from MCP to Agent
 * @param e 
 * @returns 
 */
export function errorResponse(e: unknown): CallToolResult {
  // TODO: Add case for ZodError
  const msg = e instanceof CalendlyApiError ? e.message : String(e);
  return { content: [{ type: "text", text: `Error: ${msg}` }], isError: true };
}
