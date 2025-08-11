---
title: Atlas Edit Weekly Cycle Proposal 2 - August 11, 2025
summary: This Atlas Edit 1) adds Ecosystem Entity grants, 2) modifies token rewards and the burn engine.
discussion_link: https://forum.sky.money/t/weekly-cycle-atlas-edit-proposal-week-starting-2025-08-11/27008
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
start_date: 2025-08-11T16:00:00
end_date: 2025-08-14T16:00:00
---

# Atlas Edit Weekly Cycle Proposal 2 - August 11, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate cloaky](https://forum.sky.money/t/weekly-cycle-atlas-edit-proposal-week-starting-2025-08-11/27008/4). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, August 11 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/42)
- [Proposal Discussion Thread](https://forum.sky.money/t/weekly-cycle-atlas-edit-proposal-week-starting-2025-08-11/27008)

A brief summary of this Atlas Edit is shown below:

_This proposal includes the following edits:_

- _**Ecosystem Entity Grants** - defines two Ecosystem Entity Grants, the Sky Frontier Grant and the Fortification Grant to be paid in the next Executive Vote._
- _**Modify Token Rewards and Burn Engine** - defines changes to the Surplus Buffer Splitter parameters._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
