#!/usr/bin/env node

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { loadConfig } from "./utils/config.js";
import { VERSION } from "./constants.js";
import { createServer } from "./app.js";

const config = loadConfig();
const server = createServer(config.apiKey);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`Calendly MCP server v${VERSION} running on stdio`);
}

main().catch((e) => {
  console.error("Fatal error:", e);
  process.exit(1);
});
