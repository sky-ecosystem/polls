---
title: Atlas Edit Weekly Cycle Proposal - July 14, 2025
summary: This Atlas Edit 1) adds Launch Agent 2 reference to Ecosystem Accord, 2) updates documentation for Arranged Structures, 3) adds definition of unrewarded USDS, 4) clarifies emergency process documentation, 5) updates capitalization of "Risk Framework", 6) updates name of Actively Stabilizing Collateral Rental Primitive.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-14/26795
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
start_date: 2025-07-14T16:00:00
end_date: 2025-07-17T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - July 14, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate Cloaky](http://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-14/26795/2). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, July 14 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/30)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-14/26795)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Reference To Ecosystem Accord For Launch Agent 2** - Adds an internal reference in Launch Agent 2’s Agent Artifact to the currently agreed Ecosystem Accord._
- _**Update Documentation For Arranged Structures** - Updates the Atlas documents related to Arranged Structures to clarify that Andromeda is no longer operational and there are no active arrangers for Sky Core._
- _**Add Definition Of Unrewarded USDS** - Adds a new definition of Unrewarded USDS._
- _**Clarify Emergency Process Documentation** - Makes minor edits in the documentation of Emergency Spells for consistency between Standby Spells and Protego._
- _**Update Capitalization Of The Term Risk Framework** - Updates the capitalization of the term “Risk Framework” to be consistently capitalized in the Atlas._
- _**Update Name Of Actively Stabilizing Collateral Rental Primitive** - Updates the name of the Actively Stabilizing Collateral Rental Primitive to Asset Liability Management Rental Primitive to reflect that rentals transfer all Asset Liability Management obligations._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
