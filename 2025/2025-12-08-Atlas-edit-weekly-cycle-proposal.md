---
title: Atlas Edit Weekly Cycle Proposal - December 8, 2025
summary: This Atlas Edit 1) consolidates funds in Core Council Buffer 2) clarifies roles for January Monthly Settlement Cycle 3) records Core Council Executor Agent 1 Genesis Capital 4) adds risk requirements for Kamino and Drift 5) updates stUSDS Risk Parameters 6) streamlines stUSDS parameter change process 7) updates Grove Artifact 8) removes Interim Deployment Restrictions in Keel Artifact 9) adds Launch Agent 6 Artifact 10) cleans up stale reference. 
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-08/27524
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
start_date: 2025-12-08T16:00:00
end_date: 2025-12-11T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - December 8, 2025

The Core Facilitator has placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate BLUE](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-08/27524/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, December 8 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](TBD)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-08/27524)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Consolidate Funds In Core Council Buffer** - Consolidates funds from Sky Core accounts into the Core Council Buffer._
- _**Clarify Roles For January Monthly Settlement Cycle** - Clarifies the process for the Monthly Settlement Cycle conducted in January 2026._
- _**Record Core Council Executor Agent 1 Genesis Capital** - Adds Core Council Executor Agent 1 to the list of Genesis Agents that have received capital from Sky._
- _**Add Risk Requirements For Kamino And Drift** - Updates the Risk Framework with CRR and maximum exposure for Kamino and Drift._
- _**Update stUSDS Risk Parameters** - Adjusts the risk parameters for stUSDS._
- _**Streamline stUSDS Parameter Change Process** - Revises the process for updates to stUSDS parameters to reflect the use of the new dashboard prepared by BA Labs._
- _**Update Grove Artifact** - Adds new DAO resolutions to the Grove Artifact and removes interim deployment restrictions for Galaxy._
- _**Remove Interim Deployment Restrictions In Keel Artifact** - Removes the initially placed Interim Deployment restrictions for Keel’s Active Instances in Kamino and Drift._
- _**Add Launch Agent 6 Artifact** - Adds the Agent Artifact for Launch Agent 6._
- _**Clean Up Stale Reference** - Removes a stale reference from the Atlas._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
