---
title: Atlas Edit Weekly Cycle Proposal - February 2, 2026
summary: This Atlas edit proposal 1) updates the definition of Aggregate Backstop Capital, 2) clarifies the governance process for Allocator vaults, 3) adds an additional Grove deployment, 4) expands technical documentation in the Skybase Artifact, 5) prepares an Agent Artifact for Pattern launch.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-02/27675
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
start_date: 2026-02-02T16:00:00
end_date: 2026-02-05T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - February 2, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-02/27675/3). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, February 2 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/176)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-02/27675)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update Definition Of Aggregate Backstop Capital** - Updates the definition of Aggregate Backstop Capital to no longer include funds in the Core Council Buffer or the Aligned Delegates Buffer._
- _**Clarify Governance Process For Allocator Vaults** - Improves the documentation of Allocator Vaults and clarifies the governance process for updating their parameters._
- _**Add Additional Grove Deployment** - Adds an additional Allocation System Instance for Grove x Steakhouse AUSD Morpho Vault V2._
- _**Expand Technical Documentation In Skybase Artifact** - Updates the Skybase Artifact with the address of its SubProxy account and information regarding its StarGuard module._
- _**Prepare Agent Artifact For Pattern Launch** - Updates references from Launch Agent 5 to Pattern and updates its description and technical documentation._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
