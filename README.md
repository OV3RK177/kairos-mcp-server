# Kairos Signal MCP Server — DePIN Data API

First-party DePIN supply telemetry with provenance on every value. 372+ live networks + 129 Bittensor subnets (501+ symbols), 295+ first-party, 11129+ live series.

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

### 1. Register (free key: $5 credits on the first key per IP; 3 keys per IP per 30 days)
```json
POST https://kairossignal.com/mcp/
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"register_agent","arguments":{"agent_name":"my-agent","email":"support@kairossignal.com"}}}
```
Returns: `{"api_key": "...", "credits_balance": 5.0}` (first key per IP; re-registering does not grant more)

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
{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"purchase_data","arguments":{"product_key":"depin_provenance"}}}
```
Snapshots $0.49–$4.99 (credits or x402/USDC). Credits top-up: `topup_credits` (Stripe $20/$99).

## MCP Tools
register_agent, list_products, purchase_data, topup_credits, check_balance, list_datasets, get_stats, get_data_dictionary, get_derivation_ledger, fetch_dataset, verify_footprint, get_zk_provenance

## Pricing
Free key: $5 credits (first key per IP; 3 keys per IP per 30 days). One-shot products: $0.49-$399.90 (`list_products` for the live catalog). Design Partner: $199/mo. Pro: $499/mo. Enterprise: $2,000+/mo.

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
