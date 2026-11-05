# Kairos Signal — public proof of direction

This repository documents work I **directed**, not code I wrote. It exists because hiring teams
reasonably ask "show me" when someone says they run AI systems. Here is what is checkable, what is a
design claim, and what I explicitly do not claim.

**Who I am:** Daniel Smith — founder and operator of Kairos Signal, a one-person AI systems company.
Seven years teaching K-5 special education before that, five years U.S. Army technical operations
before that. I do not write production code. I write the requirements, the acceptance tests, and the
evidence standard, and I hold the release gate while AI agents implement.

## What is actually mine

| Claim | Status |
|---|---|
| Selected the architectures and wrote the design constraints for three custom non-attention ML systems | Directed — my decisions, recorded in design docs |
| Wrote requirements, acceptance tests and evidence standards the implementations were judged against | Directed and authored by me |
| Held the release gate: nothing shipped without passing the evidence standard | Directed — my sign-off |
| Operated a production estate of ~2.8M lines of Python and ~222k lines of Go on self-hosted infrastructure | Operator — I run it, I do not author it |
| Wrote the implementation code for those systems | **No — AI agents implemented under my direction** |
| "Proficient in Python/Go/Lean" | **No — I read Python and Go; I write rudimentary HTML and some Python** |

## Measured, not asserted

On 2026-11-04, in the production tree:

```
find propintel -name '*.py' -type f | wc -l          -> 8,712 files
find propintel -name '*.py' -type f -print0 | xargs -0 cat | wc -l  -> 2,815,972 lines
find propintel -name '*.go' -type f | wc -l          -> 558 files
find propintel -name '*.go' -type f -print0 | xargs -0 cat | wc -l  -> 222,199 lines
```

These are line counts of a running system, not a portfolio. They matter because they describe the
scale of what one operator can hold with an agent staff — not because volume is virtue.

## The three systems

1. **Kairos-9B** — a 63-layer, 191-edge byte-level DAG language model with no attention and no KV
   cache; memory is addressed reads of persistent state. Verified: 20/20 selftest, measured held-out
   bits-per-byte improvement on 9 of 11 shards in a small-scale proof run. The full 9B run is not
   funded; generation quality at scale remains a **design claim**, not a demonstrated result.
2. **KairosDAG v2** — a cross-asset causal panel model (HeterogeneousDAG63 + ANOVA-4D) running in a
   live pipeline. Status: live; performance claims stay out of this repo.
3. **Topological / probability engines** — exact Hodge decomposition and network branching/Stein
   bounds driving internal systems. Status: implemented and in use; mathematical claims are the
   authors' of the underlying theorems, not mine.

## What this proves to a hiring team

- I can specify a system precisely enough that agents can build it and I can verify it.
- I can design the checks that catch AI work that is confidently wrong — mutants, selftests,
  evidence ledgers, release gates.
- I can operate and explain complex systems to non-technical people, which is the actual job in
  enablement, adoption and customer education.

## Files

- `ARCHITECTURE.md` — the three systems at design level, with honest status labels.
- `EVIDENCE.md` — the measurements and the exact commands to reproduce them.
- `SPECS/sample-spec.md` — the shape of a spec I write: requirement, acceptance test, evidence, gate.
- `ROLE.md` — what I claim and what I refuse to claim, in one page.

Contact: danieljsmith84@gmail.com · https://www.linkedin.com/in/daniel-smith-54563848
