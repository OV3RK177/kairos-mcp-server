# Kairos Signal MCP Server — DePIN Data API

First-party DePIN supply telemetry with provenance on every value. 370+ networks with live data (from a catalog of 730+ entries) plus 129 Bittensor subnets: 500+ live symbols, 315+ networks read first-party, 16,000+ live series. Figures are floors; live counts: `GET https://kairossignal.com/v1/networks`. Every value carries source + as_of + verify_url — verify it yourself upstream.

## Connect From Any MCP Client

Remote (Streamable HTTP) — point your client at:

```
https://kairossignal.com/mcp/
```

Claude Code / Cursor / any stdio client:

```json
{"mcpServers": {"kairos-signal": {"command": "npx", "args": ["-y", "kairos-mcp-server"], "env": {"KAIROS_API_KEY": "<your key — register_agent gets you one free>"}}}}
```

Listed in the official MCP registry: `com.kairossignal/kairos-signal` (search "kairos" at registry.modelcontextprotocol.io).

## Quick Start (Autonomous — No Human Needed)

### 1. Register (free key: $5 credits on each of the first 3 keys per IP per 30 days)
```json
POST https://kairossignal.com/mcp/
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"register_agent","arguments":{"agent_name":"my-agent"}}}
```
Returns: `{"api_key": "...", "credits_balance": 5.0}` (first 3 keys per IP per 30 days; past that a key is still created, at $0, and the response says so). `email` is optional.

### 2. Browse Products
```json
POST https://kairossignal.com/mcp/
{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"list_products","arguments":{}}}
```

### 3. Query DePIN Data
```json
POST https://kairossignal.com/mcp/
{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"fetch_dataset","arguments":{"dataset":"depin_onchain","limit":10}}}
```

### 4. Buy a Product (agents pay from credits — no human, no card)
```json
POST https://kairossignal.com/mcp/
{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"purchase_data","arguments":{"product_key":"depin_provenance","api_key":"<your key>"}}}
```
Snapshots $0.49–$4.99 (credits or x402/USDC). Credits top-up: `topup_credits` (Stripe $20/$99).

## MCP Tools
register_agent, list_products, purchase_data, topup_credits, check_balance, list_datasets, get_stats, get_data_dictionary, get_derivation_ledger, fetch_dataset, verify_footprint

## Pricing
Free key: $5 credits (first 3 keys per IP per 30 days). One-shot products: $0.49–$29.99 (`list_products` for the live catalog). Design Partner: $199/mo. Pro: $499/mo. Enterprise: $2,000+/mo.

## Links
- Homepage: https://kairossignal.com
- Pricing: https://kairossignal.com/pricing.html
- llms.txt: https://kairossignal.com/llms.txt
- Stripe: https://buy.stripe.com/dRm00b9zT81o5a50Na1ZS20

License: MIT

## More

- Homepage: https://kairossignal.com
- Evidence-based diligence: https://kairossignal.com/diligence
- Full docs: https://kairossignal.com/docs.html
- OpenAPI: https://kairossignal.com/openapi.json
