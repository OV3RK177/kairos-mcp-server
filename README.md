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

### 1. Register (get $5 free credits)
```json
POST https://kairossignal.com/mcp/
{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"register_agent","arguments":{"agent_name":"my-agent","email":"support@kairossignal.com"}}}
```
Returns: `{"api_key": "...", "credits_balance": 5.0}`

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

## MCP Tools
register_agent, list_products, purchase_data, topup_credits, check_balance, list_datasets, get_stats, get_data_dictionary, get_derivation_ledger, fetch_dataset, verify_footprint, get_zk_provenance

## Pricing
Free: $5 credits on signup. Snapshots: $0.49-$4.99. Design Partner: $199/mo. Pro: $499/mo. Enterprise: $2,000+/mo.

## Links
- Homepage: https://kairossignal.com
- Pricing: https://kairossignal.com/pricing.html
- llms.txt: https://kairossignal.com/llms.txt
- Stripe: https://buy.stripe.com/dRm00b9zT81o5a50Na1ZS20

License: MIT
