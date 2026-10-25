# Kairos Signal MCP Server — DePIN and world data

Measured DePIN telemetry, physical-world datasets and descriptive research analytics through REST and MCP. Use source links, observation times and coverage metadata to decide whether a result is suitable for your question. Availability and freshness vary by feed.

Kairos Signal is not a property-owner contact or lead-generation service. The current product is data and research, not a promise of profitable trading signals.

Coverage changes. Use `find_networks`, `get_data_dictionary` and the [network catalog](https://kairossignal.com/v1/networks) rather than a copied network count. Catalog entries, distinct networks, Bittensor subnets, rows and metric series are different quantities. `get_stats` describes dataset row counts, not network coverage.

## Connect directly

Full MCP endpoint (Streamable HTTP):

```
https://kairossignal.com/mcp
```

Read-only edition, without account creation, purchases or payment tools:

```
https://kairossignal.com/mcp/public
```

Read-only does **not** mean every tool is anonymous or free. In either edition, `get_network_signals` requires an eligible paid-tier key with the engines capability. Other discovery/data tools have their stated no-key samples and limits. The full edition also exposes account tools and paid analytics.

Claude Code:

```sh
claude mcp add --transport http kairos-signal https://kairossignal.com/mcp
```

Cursor, Windsurf and clients that accept a URL:

```json
{"mcpServers": {"kairos-signal": {"url": "https://kairossignal.com/mcp"}}}
```

VS Code (`.vscode/mcp.json`):

```json
{"servers": {"kairos-signal": {"type": "http", "url": "https://kairossignal.com/mcp"}}}
```

Stdio clients can use this package's bridge:

```json
{"mcpServers": {"kairos-signal": {"command": "npx", "args": ["-y", "kairos-mcp-server"]}}}
```

Key placement depends on the tool:

- `get_network_signals` requires an eligible subscription key in the connection's `X-API-Key` header. Tiered network/history access also uses that header. In the stdio bridge, `KAIROS_API_KEY` supplies the header.
- Paid analytics accept that header **or** an `api_key` tool argument.
- `purchase_data`, `topup_credits` and `check_balance` require `api_key` **inside the tool input**, even when the connection or bridge already has a header key. The bridge does not inject it into the arguments.

An API key, a credit balance and a subscription entitlement are not interchangeable.

Official MCP Registry identity: `com.kairossignal/kairos-signal`. Prefer the vendor endpoint above over a third-party proxy. Smithery's [October 31, 2026 service notice](https://smithery.ai/future) says its proxy and connection-management services will close while its directory remains.

## Ask a measured question

- GPU capacity: `find_networks {"query":"akash"}`, then `get_network {"symbol":"AKT","metric_filter":"gpu"}`.
- Observed history: `get_metric_history {"symbol":"FIL","metric":"ACTIVE_MINERS"}`. An absent series is not a zero.
- Check a figure: `verify_value {"symbol":"FIL","metric":"ACTIVE_MINERS"}`. Read the verdict; some upstream values cannot be checked by a GET.

## Tools and access

The bridge obtains `tools/list` from the hosted service rather than maintaining a separate implementation. Consult that live schema for current inputs, prices and limits.

| Tool | Purpose | Access / effect |
|---|---|---|
| `get_network_signals` | Scheduled Hodge/lag-relation snapshots for configured market, DePIN and world cohorts. Descriptive, not a trading recommendation. | Eligible paid-tier key with engines capability in the connection header |
| `find_networks` | Find networks or subnets by name or ticker. Resolve ambiguous tickers before use. | No key |
| `get_network` | Latest supported first-party network measurements, with provenance and freshness fields. | No key |
| `get_metric_history` | Observed daily history for one metric; gaps are not zero-filled. | No key for the free window; paid tiers have different limits |
| `verify_value` | Compare with a supported upstream GET response, which may be cached; inspect `upstream.read_at_utc` and the verdict. | No key |
| `register_agent` | Create an API key; starter credits are conditional on the current per-IP policy. | Creates an account/key |
| `list_products` | Product descriptions, prices and deliverability information. | No key |
| `purchase_data` | Purchase an eligible product; delivery can be inline or a receipt with a retrieval URL. | `api_key` in tool input and sufficient credits |
| `topup_credits` | Request a supported card-checkout link or USDC quote; follow current payment instructions. | `api_key` in tool input; obtaining a quote is not a confirmed payment |
| `check_balance` | Read the account credit balance. | `api_key` in tool input |
| `list_datasets` | Current dataset catalog. | No key |
| `get_stats` | Dataset row counts, scope and free-tier limits; not a count of distinct networks. | No key |
| `get_data_dictionary` | Coverage, observation freshness, history depth and endpoints per feed. | No key |
| `get_derivation_ledger` | Index of covered archived fetches and their payload/code hashes; raw payload bytes are a separate product. | No key |
| `fetch_dataset` | Raw archive rows within the applicable query limits. Rejected or unchecked observations can be retained. | No key for the free sample |
| `verify_footprint` | Merkle membership for a supported retained observation; not proof of upstream accuracy or zero-knowledge computation. | No key |
| `get_hodge_regime_sieve` | Hodge decomposition of metric lead-lag flows; the historical tool name does not imply regime classification. | Paid per answered call |
| `get_rmt_regime_state` | Correlation-spectrum comparison with a Marchenko–Pastur reference; not a calibrated regime test. | Paid per answered call |
| `get_depin_slashing_audit` | Enforcement-capacity calculation from sourced protocol parameters; bounds and unavailable inputs remain explicit. | Paid per answered call |
| `get_shap_node_attribution` | Day/unit Shapley decomposition of observed metric changes; not causal attribution or a forecast. | Paid per answered call |
| `get_listing_dilution_score` | Measured token-supply changes; not an exchange-listing or investment score. | Paid per answered call |

Paid analytics can spend credits. Read the current description before calling; do not repeatedly invoke a paid tool to retry an uncertain result. Their historically named identifiers are retained for compatibility, not as claims of forecasting or causal validation.

## Provenance: what the checks establish

Supported network measurements expose provenance and observation-time fields. A source URL is a way to inspect an origin, not a guarantee that the origin is correct. History, derived analytics, raw archives and catalog metadata have different response contracts; do not assume that every output is a fresh first-party measurement.

`verify_value` compares against a supported upstream GET response that may be cached; inspect `upstream.read_at_utc` and the verdict rather than assuming a new upstream fetch. `verify_footprint` checks retained Merkle membership, not upstream truth, independent Bitcoin confirmation or a zero-knowledge proof. The derivation ledger covers the fetches it explicitly lists; a network can have live telemetry without an archived derivation entry. Raw archives can retain rejected or unchecked observations—read their quality fields.

## Products, delivery and pricing

Use `list_products` and [the live credit catalog](https://kairossignal.com/v1/credits/pricing) for current prices, eligibility and deliverability; use the [pricing page](https://kairossignal.com/pricing.html) for subscription access. This documentation does not set prices or payment policy.

- Registration creates a key; starter-credit eligibility depends on the current per-IP policy. Read the returned balance instead of assuming a grant. A starter key does not itself grant paid-tier engine access.
- `purchase_data` requires `api_key` in its tool input and a currently deliverable product. Small responses can arrive inline; larger deliveries return a receipt and retrieval URL. Use your own stable `idempotency_key` for each intended purchase and reuse it only for retries of that purchase.
- The current catalog describes `dag_manifold_30d` as a DAG API access product. Listed legacy/retired products are not automatically purchasable; read deliverability before committing credits.
- `topup_credits` provides payment instructions for supported card and USDC modes. A quote or checkout link is not payment confirmation. Follow [the payment documentation](https://kairossignal.com/docs/crypto.html); never send funds without a successful current quote.

## Links

- [Homepage](https://kairossignal.com)
- [Network pages](https://kairossignal.com/network/)
- [Documentation](https://kairossignal.com/docs.html)
- [OpenAPI](https://kairossignal.com/openapi.json)
- [Machine-readable introduction](https://kairossignal.com/llms.txt)
- [Evidence-based diligence](https://kairossignal.com/diligence)

Measurements and research only; not investment advice. [Terms](https://kairossignal.com/terms).

License: MIT
