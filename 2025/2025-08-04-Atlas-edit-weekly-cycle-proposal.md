---
title: Atlas Edit Weekly Cycle Proposal - August 4, 2025
summary: This Atlas edit 1) documents the simplified profit and loss calculation that will be used in Stage 1 of the implementation of the Monthly Settlement Cycle, 2) updates the minimum level of Actively Stabilizing Collateral that Stars must maintain and defines Resting versus Latent Actively Stabilizing Collateral, 3) updates the Required Risk Capital for Real World Assets to take into account new versus existing deployments, 4) removes exceptions for Maple from the Risk Framework since risk assessments for Maple have now been completed, 5)adds the terms for sharing revenue from investments in USDe and sUSDe to the Ecosystem Accord between Spark and Grove, 6) updates the name of yUSDS to stUSDS, 7) incorporates the Linear Interpolation Module and its features in the Atlas.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-04/26957
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
start_date: 2025-08-04T16:00:00
end_date: 2025-08-07T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - August 4, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate Cloaky](http://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-04/26957/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, August 4 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/38)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-04/26957)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Document Simplified Profit And Loss Calculation** - Documents the Simplified Profit And Loss Calculation that will be used in Stage 1 of the implementation of the Monthly Settlement Cycle._
- _**Update Actively Stabilizing Collateral Requirements** - Updates the minimum level of Actively Stabilizing Collateral that Stars must maintain and defines Resting versus Latent Actively Stabilizing Collateral._
- _**Update Required Risk Capital For Real World Assets** - Updates the Required Risk Capital for Real World Assets to take into account new versus existing deployments._
- _**Remove Exceptions For Maple In Risk Framework** - Removes exceptions for Maple from the Risk Framework since risk assessments for Maple have now been completed._
- _**Update Spark / Grove Ecosystem Accord To Include Ethena Revenue Share** - Adds the terms for sharing revenue from investments in USDe and sUSDe to the Ecosystem Accord between Spark and Grove._
- _**Rename yUSDS to stUSDS** - Updates the name of yUSDS to stUSDS._
- _**Incorporate Linear Interpolation Module** - Incorporates the Linear Interpolation Module and its features in the Atlas._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
