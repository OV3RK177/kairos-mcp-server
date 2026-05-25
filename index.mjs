#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const API_KEY = process.env.KAIROS_API_KEY || "";
const API_URL = process.env.KAIROS_API_URL || "https://gpu.kairossignal.com";

const server = new Server(
  { name: "kairos-signal", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

const headers = () => ({
  "Content-Type": "application/json",
  "Authorization": `Bearer ${API_KEY}`,
});

async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`, { headers: headers() });
  return res.json();
}

async function apiPost(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body),
  });
  return res.json();
}

const TOOLS = [
  {
    name: "query_distressed_properties",
    description: "Search distressed property records by state, city, or zip. Returns enriched leads with owner contact vectors and DAG risk scores.",
    inputSchema: {
      type: "object",
      properties: {
        state: { type: "string", description: "US state abbreviation (e.g. TX, FL)" },
        city: { type: "string", description: "City name" },
        zip: { type: "string", description: "ZIP code" },
        limit: { type: "integer", description: "Max results (default 25, max 100)" },
      },
    },
  },
  {
    name: "compute_manifold",
    description: "Run a 37-layer DAG forward pass on a signal profile. Returns 316-dim topological feature vectors, Betti numbers, persistence diagrams, and SHA-3 ZK-footprints.",
    inputSchema: {
      type: "object",
      properties: {
        signal: {
          type: "array",
          items: { type: "number" },
          description: "Input signal array (up to 1024 values)",
        },
        dimensions: { type: "integer", description: "Output dimensions (default 316)" },
      },
      required: ["signal"],
    },
  },
  {
    name: "search_federal_contracts",
    description: "Search USASpending federal contract data. $7.32T tracked across DoD, HHS, DOE, and more.",
    inputSchema: {
      type: "object",
      properties: {
        agency: { type: "string", description: "Agency name (e.g. 'Department of Defense')" },
        min_amount: { type: "number", description: "Minimum contract amount in USD" },
        state: { type: "string", description: "Recipient state" },
        limit: { type: "integer", description: "Max results (default 25)" },
      },
    },
  },
  {
    name: "get_market_intelligence",
    description: "Get DAG-computed market intelligence: distress indices, volatility metrics, and cross-asset correlations.",
    inputSchema: {
      type: "object",
      properties: {
        asset_class: { type: "string", description: "Asset class (realestate, crypto, equities)" },
        region: { type: "string", description: "Region (us, global)" },
      },
    },
  },
  {
    name: "list_available_datasets",
    description: "List all available Kairos data products with pricing and access tiers.",
    inputSchema: { type: "object", properties: {} },
  },
];

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (!API_KEY) {
    return {
      content: [{ type: "text", text: "Error: KAIROS_API_KEY not set. Register at https://gpu.kairossignal.com/v1/register" }],
      isError: true,
    };
  }

  try {
    let result;
    switch (name) {
      case "query_distressed_properties": {
        const params = new URLSearchParams();
        if (args.state) params.set("state", args.state);
        if (args.city) params.set("city", args.city);
        if (args.zip) params.set("zip", args.zip);
        params.set("limit", String(args.limit || 25));
        result = await apiGet(`/v1/alpha/distressed?${params}`);
        break;
      }
      case "compute_manifold": {
        result = await apiPost("/dag/compute", {
          signal: args.signal,
          dimensions: args.dimensions || 316,
        });
        break;
      }
      case "search_federal_contracts": {
        const params = new URLSearchParams();
        if (args.agency) params.set("agency", args.agency);
        if (args.min_amount) params.set("min_amount", String(args.min_amount));
        if (args.state) params.set("state", args.state);
        params.set("limit", String(args.limit || 25));
        result = await apiGet(`/v1/alpha/contracts?${params}`);
        break;
      }
      case "get_market_intelligence": {
        const params = new URLSearchParams();
        if (args.asset_class) params.set("asset_class", args.asset_class);
        if (args.region) params.set("region", args.region);
        result = await apiGet(`/v1/alpha/market?${params}`);
        break;
      }
      case "list_available_datasets": {
        result = await apiGet("/v1/alpha/datasets");
        break;
      }
      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }

    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  } catch (err) {
    return {
      content: [{ type: "text", text: `API error: ${err.message}` }],
      isError: true,
    };
  }
});

const transport = new StdioServerTransport();
await server.connect(transport);
