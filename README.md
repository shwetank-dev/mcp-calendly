# Calendly MCP Server

[![mpak](https://img.shields.io/badge/mpak-registry-blue)](https://mpak.dev/packages/@nimblebraininc/calendly?utm_source=github&utm_medium=readme&utm_campaign=mcp-calendly)
[![NimbleBrain](https://img.shields.io/badge/NimbleBrain-nimblebrain.ai-purple)](https://nimblebrain.ai?utm_source=github&utm_medium=readme&utm_campaign=mcp-calendly)
[![Discord](https://img.shields.io/badge/Discord-community-5865F2)](https://nimblebrain.ai/discord?utm_source=github&utm_medium=readme&utm_campaign=mcp-calendly)

A [NimbleBrain](https://nimblebrain.ai) MCP server for [Calendly](https://calendly.com). Connect Claude to your Calendly account to browse event types, view and filter scheduled meetings, inspect invitee details, check availability windows, and cancel events — all without leaving your AI workflow.

## Installation

Install via [mpak](https://nimblebrain.ai):

```bash
mpak install @nimblebraininc/calendly
```

You'll be prompted for your Calendly Personal Access Token. Get one from [Calendly Integrations](https://calendly.com/integrations/api_webhooks).

## Tools

| Tool | Description |
|------|-------------|
| `get_current_user` | Get the authenticated user's Calendly profile |
| `list_event_types` | List your event types with duration and scheduling links |
| `list_scheduled_events` | List scheduled events with filters for status and date range |
| `get_event` | Get details of a specific scheduled event |
| `list_invitees` | List invitees for a scheduled event |
| `cancel_event` | Cancel a scheduled event with an optional reason |
| `check_availability` | Get available time slots for an event type |

## Development

**Prerequisites:** Node.js 24+, npm

```bash
npm install          # install dependencies
npm run build        # compile TypeScript
npm run check        # format, lint, typecheck, tests
```

**Run checks individually:**

```bash
npm run lint         # eslint
npm run typecheck    # tsc --noEmit
npm run test         # vitest
npm run format       # prettier
```

**Local testing with the MCP Inspector:**

```bash
# stdio mode
CALENDLY_API_KEY=your_token npm run inspect

# HTTP mode (two terminals)
CALENDLY_API_KEY=your_token npm run dev:http
npm run inspect:http
```

**Docker:**

```bash
npm run docker:build   # build the image
npm run docker:run     # run on http://localhost:3000
npm run inspect:http   # connect inspector to running container
```

## Contributing

Issues and pull requests welcome at [github.com/NimbleBrainInc/mcp-calendly](https://github.com/NimbleBrainInc/mcp-calendly).

## License

MIT — see [LICENSE](LICENSE)
