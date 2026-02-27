import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";
import type { z } from "zod";
import type { CalendlyClient } from "../utils/calendlyClient.js";
import { errorResponse } from "../utils/errorResponse.js";
import { formatInvitee, formatPaginated } from "../utils/formatters.js";
import type { ListInviteesSchema } from "../utils/schemas.js";

export async function listInvitees(
  client: CalendlyClient,
  args: z.infer<typeof ListInviteesSchema>,
): Promise<CallToolResult> {
  try {
    const result = await client.listInvitees(
      args.event_uuid,
      args.count,
      args.page_token,
    );
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(formatPaginated(result, formatInvitee), null, 2),
        },
      ],
    };
  } catch (e) {
    return errorResponse(e);
  }
}
