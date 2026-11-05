# Architecture, at the level I own

I own decisions, constraints and acceptance criteria. I do not own the implementation code.
Status labels are deliberate: **verified** means there is a recorded test result; **design claim**
means it is a property of the design that has not been demonstrated at full scale; **live** means it
runs in production today.

## 1. Kairos-9B — byte-level DAG language model

- 63 layers, 191 edges, no attention, no KV cache.
- Memory is addressed reads of persistent state: the model reads what it wrote, rather than attending
  over a growing context window.
- Vocabulary is 256 — every byte is predicted from the DAG plus causal features.
- **Verified:** selftest 20/20 on CUDA (2026-10-22, 61.4s); held-out bits-per-byte improved from
  8.07 to 1.3–3.4 on 9 of 11 shards in a 39MB proof run.
- **Design claim:** that this architecture produces coherent long-form generation at 9B scale. The
  full run is not funded, so I do not claim it.

Why it matters to a buyer: a model with no attention and no cache is cheap to run and its memory is
inspectable. That is an infrastructure argument, not a benchmark argument, and I present it as such.

## 2. KairosDAG v2 — cross-asset causal panel model

- HeterogeneousDAG63 graph over assets plus an ANOVA-4D whiteboard for interaction effects.
- **Live** in a running pipeline.
- I do not publish performance numbers here. Trading results are not evidence of engineering skill,
  and publishing them invites the wrong conversation.

## 3. Topological and probability engines

- Exact Hodge decomposition over network structure; branching/Stein bounds for probability work.
- **Live**, used by internal systems.
- The mathematics belongs to the theorems' authors. My contribution is recognising where they apply
  and specifying the implementation precisely enough to be verified.

## The pattern across all three

Every one of these was built the same way: I wrote what the system must do, what evidence would
prove it, and what would disqualify it. Agents implemented. I reviewed the evidence and held the
release gate. When the evidence was thin, the claim stayed a design claim — which is why this page
has a "design claim" label at all.
