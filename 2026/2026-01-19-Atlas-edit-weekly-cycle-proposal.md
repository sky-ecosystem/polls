---
title: Atlas Edit Weekly Cycle Proposal - January 19. 2026
summary: This Atlas edit proposal 1) authorizes the transfer of GROVE tokens to Grove Labs, 2) updates references from Launch Agent 3 to Skybase and adds a new Ecosystem Accord between Sky and Skybase, 3) adds new deployments to and updates the Grove Artifact, 4) removes Atlas Core Development payments, 5) cleans up supporting documents.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-01-19/27627
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
start_date: 2026-01-19T16:00:00
end_date: 2026-01-22T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - January 19. 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-01-19/27627/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, January 19 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/167)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-01-19/27627)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _Authorize Transfer To Grove Labs - Authorizes the transfer of GROVE tokens to Grove Labs._
- _Update The Atlas To Introduce Skybase - Updates references from Launch Agent 3 to Skybase and adds a new Ecosystem Accord between Sky and Skybase._
- _Update Grove Artifact - Adds new deployments and updates to the Grove Artifact._
- _Remove Atlas Core Development Payments - Removes Atlas Core Development payments, which have been replaced by the Treasury Management Function._
- _Clean Up Supporting Documents - Makes a copy of each Supporting Document so that each copy targets exactly one Primary Document in preparation for future upgrades to the Atlas._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
