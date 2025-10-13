---
title: Atlas Edit Weekly Cycle Proposal - October 13, 2025
summary: This Atlas Edit 1) introduces Launch Agent 4, 2) updates RRC Percentage for Pendle PTs, 3) updates Grove Artifact to authorize investment in Pendle PTs, 4) corrects definition in Risk Framework, 5) updates terminology in Atlas to reflect Executor Agents, 6) clarify Governance Poll approval requirements, 7) introduces a minor language cleanup.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-13/27311
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
start_date: 2025-10-13T16:00:00
end_date: 2025-10-16T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - October 13, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-06/27272/9). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, October 6 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](TBD)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-13/27311)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Introduce Launch Agent 4** - Adds the Agent Artifact for Launch Agent 4, a Prime Agent focused on incubating other Prime Agents and Halo Agents._
- _**Update RRC Percentage For Pendle PTs** - Lowers the initial Financial RRC Percentage for Pendle PTs backed by Ethena from 15% to 10%._
- _**Update Grove Artifact To Authorize Investment In Pendle PTs** - Updates the Grove Artifact to authorize investment in Pendle PTs for USDe and sUSDe through FalconX._
- _**Correct Definition In Risk Framework** - Corrects the definition of the LT parameter in the calculation of probability of default for lending markets to refer to the liquidation threshold._
- _**Update Terminology In Atlas To Reflect Executor Agents** - Continues to move responsibilities from Scope Facilitators to go forward actors and removes outdated logic from the Atlas._
- _**Clarify Governance Poll Approval Requirements** - Clarifies the requirements regarding Governance Poll approval for certain Sky Core actions._
- _**Minor Language Cleanup -** Makes minor language changes to clarify the objectives of response to risk capital incidents._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
