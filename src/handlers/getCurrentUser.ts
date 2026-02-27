import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { CalendlyClient } from "../utils/calendlyClient.js";
import { errorResponse } from "../utils/errorResponse.js";
import { formatUser } from "../utils/formatters.js";

export async function getCurrentUser(
  client: CalendlyClient,
): Promise<CallToolResult> {
  try {
    const user = await client.getCurrentUser();
    return {
      content: [
        { type: "text", text: JSON.stringify(formatUser(user), null, 2) },
      ],
    };
  } catch (e) {
    return errorResponse(e);
  }
}
