# Kairos Signal MCP Server — DePIN Intelligence for AI Agents

**Provenance-first DePIN data API.** 453 networks tracked, 399 with first-party supply telemetry, 25 with on-chain revenue, 740 cataloged. Every value carries source + as_of + a public verify-yourself URL.

## What This Is

Verifiable DePIN (Decentralized Physical Infrastructure Networks) supply-side telemetry — node counts, committed CPU/GPU, storage, coverage, utilization — read directly from each network's own public API. Not inferred, smoothed, or modeled.

**Use cases:** DePIN competitor supply tracking, index/ETF constituent screening, supply-vs-revenue divergence research, network-health monitoring.

## Quick Start (Autonomous, No Human Required)

```bash
# 1. Register — get $5 free credits, no card
curl -X POST https://kairossignal.com/v1/credits/register \
  -H "Content-Type: application/json" \
  -d '{"email":"your-agent@example.com","agent_name":"your-agent"}'

# 2. Browse products
curl https://kairossignal.com/v1/credits/pricing

# 3. Buy DePIN data (deducts from balance, delivers inline)
curl -X POST https://kairossignal.com/v1/credits/purchase \
  -H "Content-Type: application/json" \
  -H "X-API-Key: abc123..." \
  -d '{"product_key":"depin_intel_bundle"}'

# 4. Top up via Stripe when free credits run out
curl -X POST https://kairossignal.com/v1/credits/topup \
  -H "Content-Type: application/json" \
  -H "X-API-Key: abc123..." \
  -d '{"method":"stripe","amount":99}'
```

## MCP Endpoint

```
POST https://kairossignal.com/mcp/
Protocol: MCP 2024-11-05 (Streamable HTTP / JSON-RPC)
```

### Tools

| Tool | Description |
|------|-------------|
| `register_agent` | Self-register, get $5 free credits + API key |
| `list_products` | Browse all purchasable products with prices |
| `purchase_data` | Buy a product with credits, data delivered inline |
| `topup_credits` | Add credits via Stripe ($20 or $99 pack) |
| `check_balance` | Check remaining credit balance |
| `list_datasets` | List datasets with record counts (free) |
| `get_stats` | Aggregate statistics (free) |
| `fetch_dataset` | Query records, 10 free per query |
| `verify_footprint` | SHA-256 cryptographic verification |
| `get_zk_provenance` | Zero-knowledge provenance proof |

## Products (22 SKUs, $0.49 to $29.99)

| Product | Price | Description |
|---------|-------|-------------|
| depin_networks | $0.99 | Full network catalog + coverage tiers |
| depin_provenance | $0.49 | Provenance/limits disclosure |
| depin_supply_snapshot | $4.99 | First-party supply telemetry, all networks |
| depin_revenue_snapshot | $2.99 | Verified on-chain protocol fees |
| depin_history | $7.99 | Daily snapshot history per network/metric |
| depin_health_profile | $4.99 | 30+ field health profile per network |
| depin_grades | $9.99 | A-F grades across 6 dimensions |
| depin_enrichment | $3.99 | Field-level enrichment with verify_url |
| depin_ai_intel | $14.99 | Deep AI analysis: thesis, conviction, moat |
| node_quality_score | $4.99 | Quality-adjusted node counts with grades |
| dilution_risk_map | $4.99 | FDV/MC ratio analysis, 200+ networks |
| gpu_supply_demand | $9.99 | Device-level GPU breakdown for io.net + Akash |
| sector_health_index | $4.99 | Composite health score per category |
| bot_detection | $9.99 | Sybil/bot probability for 31 networks |
| geo_concentration | $4.99 | Geographic distribution + concentration risk |
| dev_velocity | $4.99 | GitHub activity for 54 networks |
| competitive_landscape | $9.99 | Category-level market share with HHI |
| depin_intel_bundle | $29.99 | All 8 engines + 400+ AI analysis entries |
| crypto_indicators | $4.99 | SMA, EMA, RSI, MACD, VWAP for 14 assets |
| signal_ledger | $9.99 | Hash-chained trading signals, 73 assets |
| lead_lag_correlations | $7.99 | 33K lead-lag correlations, FDR-corrected |

## Try It Free

No signup, no key — 3 showcase networks with full supply telemetry:
```
curl https://kairossignal.com/try
```

## Trust

- Every value carries `source`, `as_of`, and `verify_url` — check any number against the network's own API
- Coverage limits disclosed: 344 catalog networks named as having no free public feed
- Clean-epoch audit (2026-08-06): fabricated series deleted, not shipped
- No trading-performance claims published
- No personal/contact data collected or sold

## Links

- **API:** https://kairossignal.com/v1/networks
- **MCP:** https://kairossignal.com/mcp/
- **A2A Card:** https://a2a.kairossignal.com/.well-known/agent-card.json
- **OpenAPI:** https://kairossignal.com/openapi.json
- **AGENTS.md:** https://kairossignal.com/AGENTS.md
- **llms.txt:** https://kairossignal.com/llms.txt
- **Pricing:** https://kairossignal.com/pricing
- **Register:** https://kairossignal.com/v1/credits/register

## License

Data (c) Kairos Signal. All rights reserved.
