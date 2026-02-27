import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { z } from "zod";
import type { CalendlyClient } from "../utils/calendlyClient.js";
import { errorResponse } from "../utils/errorResponse.js";
import type { CancelEventSchema } from "../utils/schemas.js";

export async function cancelEvent(
  client: CalendlyClient,
  args: z.infer<typeof CancelEventSchema>,
): Promise<CallToolResult> {
  try {
    await client.cancelEvent(args.event_uuid, args.reason);
    return {
      content: [
        {
          type: "text",
          text: `Event ${args.event_uuid} cancelled successfully.`,
        },
      ],
    };
  } catch (e) {
    return errorResponse(e);
  }
}
