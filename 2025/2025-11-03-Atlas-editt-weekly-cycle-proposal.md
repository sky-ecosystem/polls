---
title: Atlas Edit Weekly Cycle Proposal - November 3, 2025
summary: This Atlas edit 1) prepares for deployment of the LayerZero bridge 2) updates the Accessibility Reward Primitive 3) renames Risk Tolerance Ratio to Encumberance Ratio 4) Adds Allocation System Primitive Documents for Launch Agent 4 5) adds new Active Instances for Grove 6) Changes Ecosystem Entity Grants to past tense 7) clarifies the process for Pioneer Chain Reimbursement 8) updates references in the Risk Framework 9) updates language regarding the MKR to SKY upgrade.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-03/27381
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
start_date: 2025-11-03T16:00:00
end_date: 2025-11-06T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - November 3, 2025

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-03/27381/5). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, November 3 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/103)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-03/27381)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Prepare For Deployment Of LayerZero Bridge** - Adds initial parameters to prepare for the deployment of the Solana LayerZero bridge, which will replace the existing Wormhole bridge._
- _**Update Accessibility Reward Primitive** - Renames the Accessibility Reward to Distribution Reward and includes new logic regarding a boosted Distribution Reward._
- _**Rename Risk Tolerance Ratio To Encumbrance Ratio** - Renames the Risk Tolerance Ratio to Encumbrance Ratio._
- _**Add Allocation System Primitive Documents For Launch Agent 4** - Adds documentation for the Allocation System Primitive for Launch Agent 4._
- _**Add New Active Instances For Grove** - Adds new deployments in the Grove Liquidity Layer._
- _**Change Ecosystem Entity Grants To Past Tense** - Updates language regarding August 2025 grants to reflect that the transfers have been executed._
- _**Clarify Process For Pioneer Chain Reimbursements** - Clarifies the process for reimbursements for Pioneer Primes._
- _**Update Reference In Risk Framework** - Corrects the internal references in two documents in the Risk Framework._
- _**Update Language Regarding MKR To SKY Upgrade** - Updates the documentation regarding the MKR to SKY upgrade process to reflect that the different stages have been implemented._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
