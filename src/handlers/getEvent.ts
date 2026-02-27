import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { z } from "zod";
import type { CalendlyClient } from "../utils/calendlyClient.js";
import { errorResponse } from "../utils/errorResponse.js";
import { formatScheduledEvent } from "../utils/formatters.js";
import type { GetEventSchema } from "../utils/schemas.js";

export async function getEvent(
  client: CalendlyClient,
  args: z.infer<typeof GetEventSchema>,
): Promise<CallToolResult> {
  try {
    const event = await client.getEvent(args.event_uuid);
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(formatScheduledEvent(event), null, 2),
        },
      ],
    };
  } catch (e) {
    return errorResponse(e);
  }
}
