# The shape of a spec I write

This is the structure I use for every agent-built system. It is deliberately short: if a requirement
cannot be checked, it is not a requirement, it is a wish.

## 1. Requirement

> The release review must reject any build whose recorded evidence does not cover every changed
> interface, and must name the specific uncovered interfaces.

Written so that a machine and a tired human can both decide pass/fail.

## 2. Acceptance test

| # | Given | When | Then |
|---|---|---|---|
| 1 | A build touching 3 interfaces, evidence for 2 | review runs | exit non-zero; output names the third interface |
| 2 | A build touching 3 interfaces, evidence for 3 | review runs | exit zero; no findings |
| 3 | Evidence file missing entirely | review runs | exit non-zero with "evidence absent", not a crash |

## 3. Evidence standard

What counts, where it lives, who signs it, how long it is retained. Written before implementation,
because "we'll know it when we see it" is how confidently wrong work ships.

## 4. Gate

Who may waive, what a waiver must record, and what happens to the claim when a waiver is used: the
claim is downgraded to a design claim until the evidence exists.

## 5. Failure modes I check for by default

- Success reported, nothing produced (the dominant failure mode in agent-built systems).
- A guard that covers some cases and reads like it covers all of them.
- Tests that assert the implementation's behaviour instead of the requirement.
- Silent fallbacks that turn a hard failure into a wrong answer.

## Why this is the skill being sold

Enablement and adoption work is the same discipline pointed at people instead of code: define what
"working" means, make it observable, teach it in the language of the person doing the job, and hold
the line when the evidence is thin.
