---
title: Atlas Edit Weekly Cycle Proposal - June 1, 2026
summary: This Atlas edit proposal 1) unifies reward recipient and sharing across Sky Primitive reward mechanisms, 2) renames Capital Requirement Ratio to Capital Ratio Requirement, 3) removes irrelevant Facilitator Ecosystem exemptions, 4) amends Circle CCTP v2 TokenMessenger contract address documents in Grove Artifact, 5) updates Immunefi bug bounty program URLs.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-01/27948
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
start_date: 2026-06-01T16:00:00
end_date: 2026-06-04T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 1, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-01/27948/2). This Governance Poll will be active for three days beginning on Monday, June 1 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/253)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-01/27948)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Unify Reward Recipient And Sharing Across Sky Primitive Reward Mechanisms** — Establishes that all Sky Primitive reward payments go to the Prime Agent managing the Integrator relationship, with sharing subject to bilateral negotiation._
- _**Rename Capital Requirement Ratio To Capital Ratio Requirement** — Renames Capital Requirement Ratio to Capital Ratio Requirement across the Atlas to align with the Laniakea Risk Framework convention._
- _**Remove Irrelevant Facilitator Ecosystem Exemptions** — Removes two exemptions that previously applied to Facilitator Ecosystem, who held the Protocol, Accessibility, Stability, and Support Scopes before the scope-facilitator structure was replaced by the Agent framework._
- _**Amend Circle CCTP v2 TokenMessenger Contract Address Documents In Grove Artifact** — Adds the missing TokenMessenger contract address for Avalanche, and consolidates two Base documents recording the same contract address into a single document._
- _**Update Immunefi Bug Bounty Program URLs** — Updates outdated Immunefi links, reflecting the MakerDAO → Sky rebrand._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
