---
title: Atlas Edit Weekly Cycle Proposal - September 8, 2025
summary: This Atlas edit 1) defines the Monthly Settlement Cycle process, 2) renames DAOcraft to Amatsu, 3) removes the Sky Core Simplification Budget, 4) refines the stUSDS BEAM GSM Pause Delay exception, 5) adds stUSDS Rate Normalization logic, 6) adds definition of Sky Forum, 7) removes remaining reference to Star.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-08/27149
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
start_date: 2025-09-08T16:00:00
end_date: 2025-09-08T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - September 8, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate BLUE](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-08/27149/3). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, September 8 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/57)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-08/27149)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Define Monthly Settlement Cycle Process** - Defines the initial process for conducting the Monthly Settlement Cycle._
- _**Rename DAOcraft to Amatsu** - Updates the name of Operational Executor Agent DAOcraft to the rebranded name of Amatsu._
- _**Remove Sky Core Simplification Budget** - Removes the Sky Core Simplification Budget in accordance with its terms._
- _**Refine stUSDS BEAM GSM Pause Delay Exception** - Clarifies that the stUSDS BEAM can modify certain parameters other than rates._
- _**Add stUSDS Rate Normalization Logic** - Directs the Stability Scope Advisors to adjust rates over time to minimize the change when rate setting becomes fully automated._
- _**Add Definition Of Sky Forum** - Adds a definition of the Sky Forum to the Atlas._
- _**Remove Remaining Reference To Star** - Corrects one remaining occurrence of the term “Star” with “Prime”._


## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
