# Kairos Signal MCP Server

**63-layer Symplectic Neural ODE — 256-dimensional DAG Manifold Correlation Engine**

Real market signal compression via topological invariants. Not flat embeddings — structure that flat-vector models structurally cannot discover.

## Live Data (4.31B+ records)

| Dataset | Records | Source |
|---------|---------|--------|
| Market Ticks | 4.31B | ClickHouse (230+ crypto perpetuals) |
| ZK Cryptographic Footprints | 1.44M | ClickHouse (SHA-256 DAG provenance) |
| DePIN Network Stats | 339K | ClickHouse (node telemetry) |
| Distressed Property Leads | 23,674 | SQLite (owner contacts, risk scores) |
| Massive Technical Indicators | 7,419 | ClickHouse (RSI, MACD, ATR) |
| US County Atlas | 3,235 | SQLite (counties + places) |

## Quick Start

```bash
# MCP JSON-RPC endpoint (works with Claude, Cursor, Continue):
POST https://kairossignal.com/mcp/

# Free tier: 50 queries/day, 10 records max
# No API key required for free tier
```

## Tools

- `list_datasets` — List all datasets with real record counts
- `get_stats` — Aggregate statistics across all databases
- `fetch_dataset` — Query records from any dataset
- `verify_footprint` — SHA-256 cryptographic verification
- `get_zk_provenance` — Zero-knowledge provenance proof
- `purchase_data` — Autonomous Stripe checkout (7 LIVE SKUs)

## Products (7 LIVE, Stripe-enabled)

| Product | Price | Description |
|---------|-------|-------------|
| Distress Feed Snapshot | $85 | 290 platinum-tier leads |
| TX Distress Intelligence | $149/mo | 1,876 Texas leads |
| Foreclosure Intel Feed | $199/mo | 2,120 foreclosure leads |
| Probate Property Intel | $199/mo | 1,681 probate leads |
| Nationwide County Atlas | $499 | 3,235 counties + 32,633 places |
| Manifold Computation API | $499/mo | 100K DAG requests |
| MCP Unlimited | $999/mo | All datasets, 10K req/day |

## Discovery

- MCP: https://kairossignal.com/mcp/
- Agent Card: https://kairossignal.com/.well-known/agent-card.json
- MCP Discovery: https://kairossignal.com/.well-known/mcp.json
- Server Card: https://kairossignal.com/.well-known/mcp/server-card.json
- LLMs.txt: https://kairossignal.com/llms.txt
- OpenAPI: https://kairossignal.com/openapi.json
- Health: https://kairossignal.com/mcp/health

## Architecture

- 63-layer continuous-time Symplectic Neural ODE (GPU-resident, RTX 3070)
- 256-dim topological feature space with non-Abelian gauge field geometry
- ClickHouse: 3.93B rows, 15 data sectors
- SHA-256 immutable signal proof ledger
- MCP 2024-11-05 protocol (JSON-RPC over HTTP with SSE)

## License

MIT
