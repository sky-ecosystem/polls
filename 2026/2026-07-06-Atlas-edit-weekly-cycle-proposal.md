---
title: Atlas Edit Weekly Cycle Proposal - July 6, 2026
summary: This Atlas edit proposal 1) adds the Shared Diamond PAU Framework, 2) prepares the Osero Artifact for the July 16 Spell, 3) prepares the Grove Artifact for the July 16 Spell, 4) clarifies the Peg Defense Obligation calculation basis, 5) terminates the Boosted Distribution Reward Rate, 6) transfers Maple syrupUSDC allocation from Grove to Spark, 7) adds definitions for Sky Frontier Foundation and Fortification Foundation, 8) expands Agent Creation Primitive inputs, 9) removes the duplicate Monad AUSD Morpho Instance, 10) clarifies that each Agent Spell Reviewer must attach their own Reviewer Checklist, 11) standardizes rate-limit formatting in Grove and Spark Artifacts, and 12) standardizes cross-chain Rate-Limit document names.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-06/28028
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
start_date: 2026-07-06T16:00:00
end_date: 2026-07-09T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - July 6, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate ](). This Governance Poll will be active for three days beginning on Monday, June 29 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/273)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-06/28028)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Shared Diamond PAU Framework** — Adds to Sky Core the role definitions, shared contracts, and operational processes that the Prime Agent Liquidity Layer Instances build on._
- _**Prepare Osero Artifact For July 16 Spell** — Adds Osero's full Liquidity Layer, including its Diamond PAU, operating multisigs, and first active Instance, SparkLend USDS on Ethereum Mainnet._
- _**Prepare Grove Artifact For July 16 Spell** — Onboards the Robinhood Chain to the Grove Liquidity Layer and adds three new Instances: the Grove x Steakhouse USDG Morpho vault on Robinhood Chain, and both directions of the Paxos USDG bridge._
- _**Clarify Peg Defense Obligation Calculation Basis** — Clarifies how the Peg Defense obligation is measured over time, and that each Prime Agent must monitor and maintain sufficient capacity during a Peg Defense Event._
- _**Terminate the Boosted Distribution Reward Rate** — Removes the additional 0.3% Boosted Distribution Reward Rate on top of the base Distribution Reward._
- _**Transfer Maple syrupUSDC Allocation From Grove To Spark** — Grove transfers its syrupUSDC to Spark; Spark transfers equivalent USDS to the Grove ALM Proxy._
- _**Add Definitions For Sky Frontier Foundation And Fortification Foundation** — Adds Atlas definitions for both foundations._
- _**Expand Agent Creation Primitive Inputs** — Adds the Agent Foundation and Agent Development Company as inputs to the Agent Creation Primitive._
- _**Remove Duplicate Monad AUSD Morpho Instance** — Removes the duplicate Monad AUSD Morpho vault Instance from the Grove artifact and its matching Risk Capital CRR exception._
- _**Clarify Each Reviewer Attaches Own Agent Spell Reviewer Checklist** — Per the July 16 Executive Vote, each Agent Spell Reviewer must include their own Reviewer Checklist in the Spell review PR._
- _**Standardize Rate Limit Formatting In Grove And Spark Artifacts** — Standardizes rate-limit formatting to the Atlas-wide standard._
- _**Standardize Cross-Chain Rate-Limit Document Names** — Standardizes names and direction wording of cross-chain rate-limit documents to a consistent, direction-explicit form._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
