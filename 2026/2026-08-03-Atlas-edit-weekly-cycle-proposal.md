---
title: Atlas Edit Weekly Cycle Proposal - August 3, 2026
summary: This Atlas edit proposal 1) adds Rate Conventions and a Settlement Methodology for the Monthly Settlement Cycle, 2) adds a Smart Burn Engine Bounded External Access Module, 3) relocates ended Keel Demand Side Instances to Completed Instances, 4) removes an erroneous Notion link from the Keel Admin Functions document, and 5) adds Uniswap v3 Controller Functions and Regroups Diamond PAU Functions.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-03/28131
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
start_date: 2026-08-03T16:00:00
end_date: 2026-08-06T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - August 3, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-03/28131/2). This Governance Poll will be active for three days beginning on Monday, August 3 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/286)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-03/28131)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Rate Conventions And A Settlement Methodology For The Monthly Settlement Cycle** - Adds a Rate Conventions rule: Atlas rates default to annual percentage yields, and the Base Rate and Agent Credit Line Borrow Rate are re-declared as yields. Also adds a Settlement Methodology section covering the Prime Agent interest-expense calculation and the attribution of third-party, asynchronous, and cross-chain positions, and clarifies the subsidized borrow-rate formula to fix its month counter at zero in the first month. Separately, changes Distribution Reward tracking from first-in-first-out to the most recent marking event._
- _**Add A Smart Burn Engine Bounded External Access Module** - Adds the SBE-BEAM, letting a whitelisted 4-of-6 Operator Multisig adjust the Smart Burn Engine's kbump and hop parameters within governance-set bounds without an Executive Vote or the GSM Pause Delay, and adjust its burn parameter up to a technical 100% cap, so the buyback can stay aligned with the Treasury Management Function allocation as conditions change._
- _**Relocate Ended Keel Demand Side Instances To Completed Instances** - Relocates three ended Keel demand side Instances from Active Instances to Completed Instances. Structural relocation only._
- _**Remove An Erroneous Notion Link From The Keel Admin Functions Document** - Removes an erroneous Notion review link that was embedded in a cross-reference._
- _**Add Uniswap v3 Controller Functions And Regroup Diamond PAU Functions** - Adds three new Uniswap v3 controller functions (Add Liquidity, Remove Liquidity, Swap) to the Diamond PAU in the Sky Core shared section, and restructures the existing Controller Functions from a flat list into five facet-grouped sections (USDS, Aave v3, Basin, PSM, Uniswap v3) to accommodate them._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
