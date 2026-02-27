import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { z } from "zod";
import type { CalendlyClient } from "../utils/calendlyClient.js";
import { errorResponse } from "../utils/errorResponse.js";
import { formatEventType, formatPaginated } from "../utils/formatters.js";
import type { ListEventTypesSchema } from "../utils/schemas.js";

export async function listEventTypes(
  client: CalendlyClient,
  userUri: string,
  args: z.infer<typeof ListEventTypesSchema>,
): Promise<CallToolResult> {
  try {
    const result = await client.listEventTypes(
      userUri,
      args.count,
      args.page_token,
    );
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(
            formatPaginated(result, formatEventType),
            null,
            2,
          ),
        },
      ],
    };
  } catch (e) {
    return errorResponse(e);
  }
}
