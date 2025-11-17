---
title: Atlas Edit Weekly Cycle Proposal - November 17, 2025
summary: This Atlas edit 1) updates Sky Direct Exposures logic, 2) adds a new public dashboard requirement for Interim Deployments, 3) updates the timeline for the Monthly Settlement Cycle, 4) adds a new DAO Resolution to the Grove Artifact, 5) adds a new SubProxy account for Launch Agent 4, 6) updates remaining references to the Accessibility Reward, 7) Adds Allocation System Primitive documents for Keel.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-17/27421
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
start_date: 2025-11-17T16:00:00
end_date: 2025-11-20T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - November 17, 2025

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-17/27421/7). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, November 17 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/115)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-17/27421)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update Sky Direct Exposures** - Updates the logic regarding revenue sharing for Sky Direct Exposures._
- _**Add Public Dashboard Requirement For Interim Deployments** - Requires Prime Agents to ensure there is a publicly available information dashboard for Interim Deployments._
- _**Update Timeline For Monthly Settlement Cycle** - Updates the timeline of the Monthly Settlement Cycle to parallelize calculations and adds logic for the handling of the November / December 2025 Monthly Settlement Cycle._
- _**Add New DAO Resolution To Grove Artifact** - Adds a new DAO Resolution for onboarding with Ripple, Agora, and Paxos in the Grove Artifact._
- _**Add SubProxy Account For Launch Agent 4** - Adds the address for the SubProxy Account for Launch Agent 4._
- _**Update Remaining References To Accessibility Reward** - Updates remaining references from Accessibility Reward to Distribution Reward._
- _**Add Allocation System Primitive Documents For Keel** - Adds documentation for the Allocation System Primitive for Keel._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
