---
title: Atlas Edit Weekly Cycle Proposal - April 13, 2026
summary: This Atlas edit proposal 1) updates Grove Liquidity Layer for future spell contents, 2) adds Pattern Liquidity Layer documentation, 3) transfers Integrator Program responsibility to Operational GovOps, 4) adds Avalanche Asset Recovery Address to Safe Harbor, 5) adds Solana Bridge Distribution Reward Instance to Keel Artifact, 6) corrects RRC And CRR terminology in Risk Framework.
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
start_date: 2026-04-13T16:00:00
end_date: 2026-04-16T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - April 13, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate BLUE](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-13/27838/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, April 13 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/222)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-13/27838)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update Grove Liquidity Layer For Future Spell Contents** — Updates the Grove Liquidity Layer: increases USDS mint rate limits to 500M, adds SkyLink transfer rate limits between Ethereum Mainnet and Avalanche, sets the USDC to Ethereum CCTP transfer to Unlimited, onboards the Avalanche Curve USDS/USDC pool, onboards the Centrifuge JTRSY USDS Vault, adds Grove Executor and Receiver addresses on Avalanche, and upgrades the Avalanche ForeignController to version 1.8.0 (LayerZero V2)._
- _**Add Pattern Liquidity Layer Documentation** — Adds documentation for the Pattern Liquidity Layer, including ALM contract addresses, rate limits, Relayer and Freezer Multisigs, and the Maple syrupUSDC Active Instance._
- _**Transfer Integrator Program Responsibility To Operational GovOps** — Transfers responsibility for the Integrator Program from Ecosystem Actor Viridian Advisors to Operational GovOps._
- _**Add Avalanche Asset Recovery Address To Safe Harbor** — Adds Avalanche's chain ID and Asset Recovery Address to the Safe Harbor list._
- _**Add Solana Bridge Distribution Reward Instance To Keel Artifact** — Adds documentation for the Solana Bridge Distribution Reward Primitive Instance to the Keel Artifact, with Reward Code 4001._
- _**Correct RRC And CRR Terminology In Risk Framework** — Corrects "Instance Smart Contract Risk RRC" to "Instance Smart Contract RRC" and "Instance Financial RRC Ratio" to "Instance Financial CRR"._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
