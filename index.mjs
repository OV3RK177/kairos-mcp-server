#!/usr/bin/env node
// Kairos Signal MCP server — stdio bridge to the hosted Streamable-HTTP endpoint.
//
// The hosted endpoint (https://kairossignal.com/mcp/) is stateless JSON-RPC:
// tools are defined server-side, so this bridge always exposes the live
// catalog and never drifts from it. Personal-contact/lead products are not
// offered (product scope: DePIN / world / network telemetry only).
//
// Env:
//   KAIROS_API_KEY  optional — forwarded as X-API-Key for authenticated tools
//                   (register_agent first to get one; $5 free credits, no card)
//   KAIROS_MCP_URL  optional override, default https://kairossignal.com/mcp/

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const MCP_URL = process.env.KAIROS_MCP_URL || "https://kairossignal.com/mcp/";
const API_KEY = process.env.KAIROS_API_KEY || "";

let rpcId = 0;
async function remote(method, params) {
  const res = await fetch(MCP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json, text/event-stream",
      ...(API_KEY ? { "X-API-Key": API_KEY } : {}),
    },
    body: JSON.stringify({ jsonrpc: "2.0", id: ++rpcId, method, params }),
  });
  const text = await res.text();
  // Streamable HTTP may frame the response as an SSE event; unwrap if so.
  const json = text.startsWith("{") ? text : text.slice(text.indexOf("{"));
  const parsed = JSON.parse(json);
  if (parsed.error) {
    throw new Error(`${parsed.error.message || "remote MCP error"} (code ${parsed.error.code})`);
  }
  return parsed.result;
}

const server = new Server(
  { name: "kairos-signal", version: "2.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return await remote("tools/list", {});
});

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  return await remote("tools/call", req.params);
});

const transport = new StdioServerTransport();
await server.connect(transport);
