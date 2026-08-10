---
title: Atlas Edit Weekly Cycle Proposal - August 10, 2026
summary: This Atlas edit proposal 1) adds a Diamond PAU subtree consolidating the Liquidity Layer's definitions and a PAS placeholder, 2) adds a maximum exposure tolerance for accrued interest, 3) clarifies the bases for modifying Smart Burn Engine parameters, 4) updates the Osero SparkLend USDS Instance Capital Ratio Requirement to 25%, 5) standardizes Operational Weekly Cycle terminology.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-10/28155
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
start_date: 2026-08-10T16:00:00
end_date: 2026-08-13T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - August 10, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate BLUE](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-10/28155/2). This Governance Poll will be active for three days beginning on Monday, August 10 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/292)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-10/28155)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Diamond PAU Subtree** - Adds a new Diamond PAU subtree, consolidating the Liquidity Layer's parameter, role, contract, and operational process definitions under it, and adds a placeholder for the PAS (Parallelized Allocation System)._
- _**Add A Maximum Exposure Tolerance For Accrued Interest** - Adds a rule permitting actual exposure to exceed a specified maximum by up to 5% where the excess is solely accrued interest, and makes a Prime Agent responsible for claiming and returning that interest to keep exposure within the specified maximum._
- _**Clarify The Bases For Modifying Smart Burn Engine Parameters** - Clarifies the distinction between the governance process and the technical limitations for updating the parameters of the Smart Burn Engine._
- _**Update Osero SparkLend USDS Instance Capital Ratio Requirement To 25%** - Reduces the Capital Ratio Requirement for Osero's Ethereum Mainnet SparkLend USDS Instance from 100% to 25%._
- _**Standardize Operational Weekly Cycle Terminology** - Corrects documents that named the Operational Weekly Cycle imprecisely._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
