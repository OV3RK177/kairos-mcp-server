# Evidence — what is measured and how to reproduce it

All measurements taken 2026-11-04 on the production tree. Scope is the `propintel` source tree.

## Python estate

```
$ find propintel -name '*.py' -type f | wc -l
8712
$ find propintel -name '*.py' -type f -print0 | xargs -0 cat | wc -l
2815972
```

## Go estate

```
$ find propintel -name '*.go' -type f | wc -l
558
$ find propintel -name '*.go' -type f -print0 | xargs -0 cat | wc -l
222199
```

## Selftest and learning proof (Kairos-9B)

- Selftest: 20/20 on CUDA, 2026-10-22, 61.4 seconds.
- Held-out bits-per-byte: 8.07 → 1.3–3.4 on 9 of 11 shards, 39MB proof corpus.

These are recorded results from a small-scale proof run. They demonstrate that the architecture
learns. They do **not** demonstrate generation quality at 9B — that run is unfunded and is labelled a
design claim everywhere it appears.

## What I deliberately do not publish

- Client or candidate data.
- Infrastructure addresses, credentials, or topology.
- Trading performance.
- Proprietary implementation code.

The point of this repository is verifiability of the claim, not disclosure of the asset.

## Why an evidence ledger exists at all

The failure mode I design against is work that reports success and produces nothing. Every claim in
this repository is either (a) reproducible with a command shown above, (b) a recorded test result,
or (c) labelled a design claim. If a claim cannot be placed in one of those three buckets, it does
not go on a resume, a cover letter, or this page.
