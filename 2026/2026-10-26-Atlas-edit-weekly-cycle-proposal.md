---
title: Atlas Edit Weekly Cycle Proposal - October 26, 2026
summary: This Atlas edit proposal 1) requires maintaining team review before auditing changes to other teams' codebases, 2) authorizes a 900,000 USDS Skybase Foundation grant for November 2026, 3) adds the Base deployment of Spark's Diamond PAU, 4) updates the Osero Gauntlet instance off-chain parameters, 5) makes housekeeping updates.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-26/28348
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
start_date: 2026-10-26T16:00:00
end_date: 2026-10-29T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - October 26, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-26/28348/2). This Governance Poll will be active for three days beginning on Monday, October 26 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/365)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-26/28348)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Require Maintaining Team Review Before Auditing Changes To Other Teams' Codebases** - Requires changes to a codebase maintained by another team to be approved by that team before audit._
- _**Authorize The Skybase Foundation Grant For November 2026** - Authorizes a 900,000 USDS grant from Skybase's SubProxy to the Skybase Foundation to fund operational costs and partner payouts through the end of 2026._
- _**Add The Base Deployment Of Spark's Diamond PAU** - Adds the Base deployment of the Liquidity Layer Shared Contracts and the Parallelized Allocation System for Spark's Diamond PAU._
- _**Update The Osero Gauntlet Instance Off-Chain Parameters** - Increases the Maximum Exposure for Osero's Gauntlet USDC Prime Morpho Vault V2 Instance from 5,000,000 to 10,000,000 USDC and lowers its Capital Ratio Requirement from 100% to 25%._
- _**Housekeeping Updates** - Updates Spark, Grove, Keel and Skybase multisig documents to match on-chain state, and renames the remaining "Proxy" and "SubDAO Proxy" references to "SubProxy" across the Prime Agent Artifacts._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
