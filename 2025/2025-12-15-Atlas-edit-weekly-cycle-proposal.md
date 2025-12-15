---
title: Atlas Edit Weekly Cycle Proposal - December 15, 2025
summary: This proposal 1) updates the signing requirement and the signers for the Core Council Buffer Multisig, 2) adds an Ecosystem Accord between Sky and Launch Agent 6, 3) updates the Risk Framework with CRR and maximum exposure for Anchorage, 4) expands the usage of StarGuard to include all Agents that have a SubProxy, 5) provides 7.5 million USDS of Senior Risk Capital to Keel.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-15/27546
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
start_date: 2025-12-15T16:00:00
end_date: 2025-12-18T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - December 15, 2025

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Cloaky](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-15/27546/3). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, December 15 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/143)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-15/27546)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update Core Council Buffer Signers** - Updates the signing requirement and the signers for the Core Council Buffer Multisig._
- _**Include Ecosystem Accord With Launch Agent 6** - Adds an Ecosystem Accord between Sky and Launch Agent 6._
- _**Add Risk Requirements For Anchorage** - Updates the Risk Framework with CRR and maximum exposure for Anchorage._
- _**Expand StarGuard To Include All SubProxy Deployments** - Expands the usage of StarGuard to include all Agents that have a SubProxy._
- _**Provide Senior Risk Capital To Keel** - Provides 7.5 million USDS of Senior Risk Capital to Keel._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
