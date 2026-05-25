# Kairos Signal — MCP Server

Data intelligence for AI agents via Model Context Protocol.

**5.27M+ property records** | **DAG manifold computation** | **$7.32T federal contract tracking** | **Corporate distress signals**

## Quick Start

```bash
# Get an API key at https://gpu.kairossignal.com/v1/register
export KAIROS_API_KEY=your_key_here
export KAIROS_API_URL=https://gpu.kairossignal.com

npx -y @smithery-ai/server-kaoris
```

### With Claude / Cursor / Continue

Add to your MCP config:

```json
{
  "mcpServers": {
    "kairos-signal": {
      "command": "npx",
      "args": ["-y", "@smithery-ai/server-kaoris"],
      "env": {
        "KAIROS_API_KEY": "your_key_here",
        "KAIROS_API_URL": "https://gpu.kairossignal.com"
      }
    }
  }
}
```

## Tools

| Tool | Description |
|------|-------------|
| `query_distressed_properties` | Search 5.27M+ property records by state/city/zip |
| `compute_manifold` | 37-layer DAG forward pass — 316-dim topological vectors |
| `search_federal_contracts` | Search $7.32T in tracked federal contracts |
| `get_market_intelligence` | DAG-computed distress indices and correlations |
| `list_available_datasets` | Browse all available data products |

## Pricing

- **Manifold API**: $499/mo — 100K DAG computations
- **MCP Unlimited**: $999/mo — All datasets + DAG
- **TX Property Intelligence**: $149/mo — 36.8K distressed parcels
- **Free tier**: 10K tokens/day on GPU Compute

## Architecture

Kairos Signal uses a 37-layer Neural DAG (Directed Acyclic Graph) to compute topological invariants of real market signals. Markets are non-Markovian — our DAG preserves path-dependent structure that autoregressive models structurally destroy.

- **316-dimensional topological feature vectors**
- **Betti numbers + persistence diagrams**
- **SHA-3 cryptographic receipts** (ZK-footprints)
- **<1ms latency** with CUDA acceleration

## Links

- 🌐 [kairossignal.com](https://kairossignal.com)
- 📊 [Pricing](https://kairossignal.com/pricing)
- 🔑 [Get API Key](https://gpu.kairossignal.com/v1/register)
- 📖 [Docs](https://kairossignal.com/docs)
