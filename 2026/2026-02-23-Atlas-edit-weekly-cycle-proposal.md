---
title: Atlas Edit Weekly Cycle Proposal - February 23, 2026
summary: This Atlas Edit 1) updates references to Amatsu GovOps to Soter Labs, 2) adds Governance Accessibility Reward Instances to the Skybase Artifact, 3) removes references to StarkNet in Safe Harbor documentation, 4) aligns GitHub and Portal versions of the Atlas.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-23/27728
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
start_date: 2026-02-23T16:00:00
end_date: 2026-02-26T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - February 23, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-23/27728/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, February 23 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/187)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-23/27728)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update References To Amatsu GovOps To Soter Labs** - Updates the Atlas to reflect that Soter Labs is now Operational GovOps for the Amatsu Operational Executor Agent._
- _**Add Governance Accessibility Reward Instances To Skybase Artifact** - Adds an Instance of the Governance Accessibility Reward Primitive to the Skybase Artifact._
- _**Remove References To Starknet In Safe Harbor Document** - Removes references to Starknet from Safe Harbor documentation._
- _**Align GitHub And Portal Versions Of Atlas** - Makes minor changes to align the versions of the Atlas shown in GitHub and on the Atlas Portal._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
