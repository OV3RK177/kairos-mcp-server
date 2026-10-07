# Kairos Signal MCP Server — verifiable DePIN data

Measured supply-side telemetry for DePIN (decentralized physical infrastructure) networks: GPU and compute capacity, storage, node and hotspot counts, on-chain totals. 365+ networks with live data (from a catalog of 720+ entries) plus 129 Bittensor subnets: 495+ live symbols, 310+ networks read first-party, 18,700+ live series. Figures are floors; live counts: `GET https://kairossignal.com/v1/networks`.

Every value carries `source`, `as_of` and a `verify_url` on the network's own API, and the `verify_value` tool re-reads that upstream for you and says where the same number appears.

## Connect

Remote endpoint (Streamable HTTP). The read-only tools need no key:

```
https://kairossignal.com/mcp
```

Read-only edition, without account, purchase or payment tools: `https://kairossignal.com/mcp/public`

Claude Code:

```
claude mcp add --transport http kairos-signal https://kairossignal.com/mcp
```

Cursor, Windsurf and other clients that take a URL:

```json
{"mcpServers": {"kairos-signal": {"url": "https://kairossignal.com/mcp"}}}
```

VS Code (`.vscode/mcp.json`):

```json
{"servers": {"kairos-signal": {"type": "http", "url": "https://kairossignal.com/mcp"}}}
```

Any stdio client, through this package's bridge:

```json
{"mcpServers": {"kairos-signal": {"command": "npx", "args": ["-y", "kairos-mcp-server"]}}}
```

Paid depth is optional: send your key as an `X-API-Key` header (remote) or `KAIROS_API_KEY` (bridge).

Official MCP Registry: `com.kairossignal/kairos-signal`. The server negotiates MCP 2025-11-25, 2025-06-18, 2025-03-26 and 2024-11-05, and every tool carries a title and behaviour annotations.

## Ask it things

| Question | Tool calls |
|---|---|
| What is Akash's GPU capacity right now? | `find_networks {"query": "akash"}` → `get_network {"symbol": "AKT", "metric_filter": "gpu"}` |
| How did Filecoin's active miners move this week? | `get_metric_history {"symbol": "FIL", "metric": "ACTIVE_MINERS"}` |
| Is that number real? | `verify_value {"symbol": "FIL", "metric": "ACTIVE_MINERS"}` |

`verify_value` fetches the value's `verify_url` now and reports the JSONPath where the same number appears, the relative difference and a verdict (`exact`, `within_1pct`, `within_10pct`, `no_matching_field`, `not_checkable_by_get`). A real result from 2026-10-07:

```json
{"symbol": "AKT", "metric": "GPU_ACTIVE", "verdict": "within_1pct",
 "match": {"json_path": "$.resources.gpu.active", "upstream_value": 297.0, "relative_difference": 0.003378}}
```

## Tools

| Tool | What it returns | Key |
|---|---|---|
| `find_networks` | networks by name or ticker → symbol, name, category, page | no |
| `get_network` | latest first-party values for one network, each with unit, `as_of`, freshness and `verify_url` | no |
| `get_metric_history` | daily series for one metric (free tier: last 7 days) | no |
| `verify_value` | re-reads the upstream now; JSONPath, difference and verdict | no |
| `get_stats` | row count per dataset, free-tier limits | no |
| `get_data_dictionary` | freshness, history depth and coverage per feed | no |
| `get_derivation_ledger` | archived raw upstream payloads and collector code hashes | no |
| `list_datasets`, `fetch_dataset` | raw rows (free tier: newest 10 per query) | no |
| `verify_footprint` | Merkle inclusion check for one archived row | no |
| `register_agent` | API key plus free starter credits ($5 on each of the first 3 keys per IP per 30 days) | — |
| `list_products`, `purchase_data`, `topup_credits`, `check_balance` | paid data products bought with prepaid credits | yes |

## Paid data (optional)

1. `register_agent {"agent_name": "my-agent"}` returns an API key. The $5 starter credits apply to the first 3 keys per IP per 30 days; past that a key is still created, at $0, and the response says so. `email` is optional.
2. `list_products` lists every product and its live price.
3. `purchase_data {"product_key": "depin_provenance", "api_key": "<your key>"}` charges your credits and delivers the data in the same response.
4. `topup_credits` returns a Stripe checkout link ($20 or $99), or a USDC-on-Base quote after wallet verification (https://kairossignal.com/docs/crypto.html).

## Pricing
Free key: $5 credits (first 3 keys per IP per 30 days). One-shot products: $0.49–$29.99 (`list_products` for the live catalog). Design Partner: $199/mo. Pro: $499/mo. Enterprise: $2,000+/mo.

## Links
- Homepage: https://kairossignal.com
- Network pages: https://kairossignal.com/network/
- Pricing: https://kairossignal.com/pricing.html
- llms.txt: https://kairossignal.com/llms.txt
- Full docs: https://kairossignal.com/docs.html
- OpenAPI: https://kairossignal.com/openapi.json
- Evidence-based diligence: https://kairossignal.com/diligence
- Stripe: https://buy.stripe.com/dRm00b9zT81o5a50Na1ZS20

Measurements and research only; not investment advice. Terms: https://kairossignal.com/terms

License: MIT
