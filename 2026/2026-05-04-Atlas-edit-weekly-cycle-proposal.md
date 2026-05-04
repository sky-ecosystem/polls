---
title: Atlas Edit Weekly Cycle Proposal - May 4, 2026
summary: This Atlas edit proposal 1) adds Ecosystem Accord 10 between Sky and Grove, 2) documents how to query the Sky Savings Rate current value, 3) updates Governance Facilitator references and removes Sky Ecosystem Liquidity Bootstrapping, 4) simplifies the Pattern Freezer Multisig description, 5) fixes stray spaces in rate limit Solidity identifiers.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-04/27886
parameters:
    input_format:
        type: single-choice
        abstain: [0]
    victory_conditions:
        - {
            type: 'and',
            conditions: [
                { type : plurality },
                { type : comparison, comparator : '>=', value: 480000000 }
            ]
        }
        - {type : default, value : 2 }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2026-05-04T16:00:00
end_date: 2026-05-07T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - May 4, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate BLUE](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-04/27886/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, May 4 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/237)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-04/27886)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Ecosystem Accord Between Sky And Grove** — Adds Ecosystem Accord 10, establishing compensation to Grove for the Chronicle Point Reward Instance at 20% of Base Rate on USDS deposited in the Rewards contract, retroactive to July 24, 2025._
- _**Document How To Query The Sky Savings Rate Current Value** — Specifies the sUSDS contract address, the `ssr()` function, and the formula to convert the per-second rate into an annualized rate._
- _**Update Governance Facilitator References And Remove Sky Ecosystem Liquidity Bootstrapping** — Updates "Governance Facilitators" references to Core Council or Core Facilitator across SparkLend's Security Access Multisig and Liquidity Layer Freezer documents; removes the A.5.5 Liquidity Bootstrapping section, as the bootstrapping program is no longer active._
- _**Simplify Pattern Freezer Multisig Description** — Removes the controlling-party clause from the introduction; the controlling parties are already identified in the Signers subsection._
- _**Fix Stray Spaces In Rate Limit Solidity Identifiers** — Removes spaces from Solidity identifier names in the Keel, Obex, and Pattern Rate Limit Management sections._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
