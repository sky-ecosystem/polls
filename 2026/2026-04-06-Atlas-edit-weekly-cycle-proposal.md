---
title: Atlas Edit Weekly Cycle Proposal - April 6, 2026
summary: This Atlas edit proposal 1) introduces a three-stage framework governing allocation of Step 4 capital, 2) raises the target Aggregate Backstop Capital, 3) adds documentation for the Avalanche SkyLink Bridge, 4) adds the Solana Instance Configuration Document to Keel's Pioneer Chain Primitive, 5) designates Grove as the Pioneer Prime for Avalanche and adds the relevant documents, 6) adds Grove's Distribution Reward Instance, 7) adds a maximum exposure limit for Maple syrupUSDC, 8) removes obsolete Keel Ecosystem Accord documents, 9) updates Scope Facilitator references, 10) updates SubDAO Proxy references in the Spark Foundation Grant, 11) expands SLL and GLL abbreviations.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-06/27822
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
start_date: 2026-04-06T16:00:00
end_date: 2026-04-09T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - April 6, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate $Delegate_Name]($link). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, April 6 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/219)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-06/27822)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Introduce Three-Stage Staking Rewards Framework** — Introduces a three-stage framework governing the allocation of Step 4 Capital to SKY staking rewards, SKY buybacks, and the Surplus Buffer._
- _**Raise Aggregate Backstop Capital Target And Introduce Genesis Capital Phase-Out** — Raises the Target Aggregate Backstop Capital to 150 million USDS and introduces a Genesis Capital Phase-Out mechanism that progressively reduces the backstop capital contribution required of Genesis Agents as the Aggregate Backstop Capital grows._
- _**Add Avalanche SkyLink Bridge** — Adds documentation for the Avalanche SkyLink Bridge, specifying Freezer Multisig configuration, Rate Limits, and Validator parameters._
- _**Add Solana Pioneer Chain Instance To Keel** — Adds the Solana Instance Configuration Document to Keel's Pioneer Chain Primitive and specifies its associated parameters._
- _**Designate Grove As Avalanche Pioneer Prime** — Designates Grove as the Avalanche Pioneer Prime and adds Grove's Avalanche Instance Configuration Document with its associated parameters._
- _**Add Grove's Distribution Reward Instance** — Adds the Grove Finance Instance Configuration Document to the Distribution Reward Primitive, specifying its Reward Code and tracking methodology._
- _**Add Maximum Exposure For Maple syrupUSDC** — Adds a Maximum Exposure limit for the Maple syrupUSDC Instance, per Core Council Risk Advisor recommendation._
- _**Remove Obsolete Keel Ecosystem Accord Documents** — Removes three provisions from the Keel Ecosystem Accord which became obsolete following the transfer of the Genesis Capital Allocation to Keel._
- _**Update Scope Facilitator References** — Updates legacy Scope Facilitator role references to the Core Facilitator role when applicable._
- _**Update SubDAO Proxy Terminology In Spark Foundation Grant** — Updates legacy SubDAO Proxy references to Spark's Prime Treasury and corrects Forum link formatting in two Spark Foundation Grant Authorization documents._
- _**Expand SLL And GLL Abbreviations** — Expands "SLL" and "GLL" abbreviations to "Spark Liquidity Layer" and "Grove Liquidity Layer."_

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
