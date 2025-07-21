---
title: Atlas Edit Weekly Cycle Proposal - July 21, 2025
summary: This Atlas Edit 1) replaces the date of finalization of the Risk Framework with a specific date of July 1, 2025 for certain milestones related to Spark and Grove TGE and income generation, 2) updates the naming convention of the contracts in the Governance Security Article to be consistent with the Chainlog keys and standardizes references to the GSM Pause Delay, 3) adds a definition of the Chainlog to the Atlas, 4) clarifies that Star Agents should use their specified category when posting on the Sky Forum, 5) adds interim logic for the way in which Launch Agent 2 and Launch Agent 3 can update their respective Artifacts, 6) clarifies that any leftover funds in a derecognized AD's Buffer, after deduction of penalties, should be paid out to the AD.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-21/26829/1
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
start_date: 2025-07-21T16:00:00
end_date: 2025-07-24T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - July 21, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate Cloaky](http://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-21/26829/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, July 21 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/31)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-21/26829/1)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Replace Date Of Finalization Of Risk Framework With Fixed Date** - Replaces the date of finalization of the Risk Framework with a specific date of July 1, 2025 for certain milestones related to Spark and Grove TGE and income generation._
- _**Update Contract Naming And References To GSM Pause Delay** - Updates the naming convention of the contracts in the Governance Security Article to be consistent with the Chainlog keys and standardizes references to the GSM Pause Delay._
- _**Add Definition Of Chainlog** - Adds a definition of the Chainlog to the Atlas._
- _**Update Usage Of Tags Versus Categories** - Clarifies that Star Agents should use their specified category when posting on the Sky Forum._
- _**Add Interim Logic For Launch Agent 2 And 3 In Root Edit Primitive** - Adds interim logic for the way in which Launch Agent 2 and Launch Agent 3 can update their respective Artifacts._
- _**Clarify Destination Of Leftover AD Budget** - Clarifies that any leftover funds in a derecognized AD’s Buffer, after deduction of penalties, should be paid out to the AD._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
