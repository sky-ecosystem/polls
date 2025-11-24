---
title: Atlas Edit Weekly Cycle Proposal - November 24, 2025
summary: This Atlas edit 1) authorizes Core Executor Agent funding, 2) defines a new Ranked Delegate compensation system, 3) updates Agent Artifact for Obex launch, 4) triggers subsidized borrowing for Spark and Grove, 5) expands the use of StarGuard, 6) removes Spark and Grove Senior Risk Capital, 7) adds new DAO Resolution to Grove Artifact, 8) adds internal references.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-24/27452
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
start_date: 2025-11-24T16:00:00
end_date: 2025-11-27T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - November 24, 2025

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-24/27452/3). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, November 24 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](TBD)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-24/27452)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Authorize Core Executor Agent Funding** - Authorizes the Genesis Capital Allocation to Core Council Executor Agent 1._
- _**Define New Ranked Delegate Compensation System** - Defines a new compensation system for Ranked Delegates that integrates with the Treasury Management Function._
- _**Update Agent Artifact For Obex Launch** - Updates references from Launch Agent 4 to Obex now that Obex has publicly launched._
- _**Trigger Subsidized Borrowing For Spark And Grove** - Triggers Subsidized Borrowing for Spark and Grove as of January 1, 2026._
- _**Expand Use Of StarGuard** - Expands the use of StarGuard to cover all Prime Agents._
- _**Remove Spark And Grove Senior Risk Capital** - Removes the Senior Risk Capital that Sky was previously providing to Spark and Grove._
- _**Add New DAO Resolution To Grove Artifact** - Adds a new DAO Resolution for onboarding with Wintermute in the Grove Artifact._
- _**Add Internal References** - Adds two internal references in documents regarding the process for updating Agent Artifacts._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
