---
title: Atlas Edit Weekly Cycle Proposal - September 15, 2025
summary: This Atlas Edit 1) updates terminology in the Atlas to reflect Executor Agents, 2) clarifies the Monthly Settlement Cycle execution process, 3) provides additional guidance regarding the usage of stUSDS BEAM, 4) builds out Spark Governance processes, 5) provides senior risk capital to Grove, 6) documents the process for sending tokens to Sky, 7) renames TechOps to TechOps Services.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-15/27169
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
start_date: 2025-09-15T16:00:00
end_date: 2025-09-18T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - September 15, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate BLUE](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-15/27169/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, September 15 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/59)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-15/27169)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update Terminology In Atlas To Reflect Executor Agents** - Introduces the Core Council and begins to move responsibilities from Scope Facilitators to go forward actors._
- _**Clarify Monthly Settlement Cycle Execution Process** - Clarifies the technical implementation of the Monthly Settlement Cycle._
- _**Provide Additional Guidance Regarding Usage Of stUSDS BEAM** - Adds additional guidance for usage of the stUSDS BEAM in the short term._
- _**Build Out Spark Governance Processes** - Adds logic for the Spark Risk Council and updates the Root Edit process accordingly._
- _**Provide Senior Risk Capital To Grove** - Provides 15 million USDS of Senior Risk Capital to Grove._
- _**Document Process For Sending Tokens To Sky** - Defines the process for sending tokens to the Sky Protocol._
- _**Rename TechOps To TechOps Services** - Updates the name of the Ecosystem Actor TechOps to TechOps Services._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
