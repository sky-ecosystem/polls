---
title: Atlas Edit Weekly Cycle Proposal - June 30, 2025
summary: This Atlas Edit 1) documents transfer of funds to Launch Agent 2 and establishes a Pre-Pioneer Incentive Pool, 2) authorizes a gradual increase in Stability Fees for Core Vaults to incentivize migration to platforms maintained by Stars, 3) updates near-term Financial Required Risk Capital Percentage for Real World Assets to cover JAAA, 4) adds additional Instances to the Grove Allocation System Primitive, 5) updates the references from Launch Agent 1 to Grove now that Grove has publicly launched, 6) specifies that funds borrowed by Agents must be invested into Allocation System Instances, 7) updates references to the Accessibility Reward Fee to reflect the total fee that can be earned, 8) updates the title of an internal reference to ensure accuracy in the Atlas.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-30/26744/
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
start_date: 2025-06-30T16:00:00
end_date: 2025-07-03T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 30, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate Cloaky](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-30/26744/2). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, June 30 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/22)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-30/26744/)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_
_- Transfer Capital To Launch Agent 2 And Establish Pre-Pioneer Incentive Pool - Documents transfer of funds to Launch Agent 2 and establishes a Pre-Pioneer Incentive Pool._
_- Authorize Gradual Increases In Core Vault Stability Fees - Authorizes a gradual increase in Stability Fees for Core Vaults to incentivize migration to platforms maintained by Stars._
_- Update Required Risk Capital For Real World Assets - Updates near-term Financial Required Risk Capital Percentage for Real World Assets to cover JAAA._
_- Add Additional Grove Allocation System Primitive Instances - Adds additional Instances to the Grove Allocation System Primitive._
_- Remove Launch Agent 1 Anonymity - Updates the references from Launch Agent 1 to Grove now that Grove has publicly launched._
_- Clarify That Agent Borrowings Must Be Invested In Allocation System Instances - Specifies that funds borrowed by Agents must be invested into Allocation System Instances._
_- Update References To Accessibility Reward Fee - Updates references to the Accessibility Reward Fee to reflect the total fee that can be earned._
_- Update Document Title Of Internal Reference - Updates the title of an internal reference to ensure accuracy in the Atlas._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
