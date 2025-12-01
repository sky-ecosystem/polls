---
title: Atlas Edit Weekly Cycle Proposal - December 1, 2025
summary: This Atlas Edit 1) documents the types of Sky Capital 2) updates the Ranked Delegates system 3) updates the definition of Net Revenue in the Treasury Management Function 4) updates the Keel Ethereum freezer signers 5) adds the Launch Agent 5 Artifact 6) updates the Grove Artifact.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-01/27488
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
start_date: 2025-12-01T16:00:00
end_date: 2025-12-04T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - December 1, 2025

The Core Facilitator has placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-01/27488/4). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, December 1 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/133)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-12-01/27488)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Document Types Of Sky Capital** - Defines the different types of Sky Capital and rules related to them._
- _**Update Ranked Delegates System** - Updates the Ranked Delegate system to remove the whistleblower bounty, allow Aligned Delegates to author Atlas Edit Proposals, and reduce the budget for Level 1 Ranked Delegates._
- _**Update Definition Of Net Revenue In Treasury Management Function** - Clarifies the methodology for calculating Net Revenue in the Treasury Management Function._
- _**Update Keel Ethereum Freezer Signers** - Adds information regarding the signers of the Freezer Multisig on the Ethereum Mainnet for the Keel Liquidity Layer._
- _**Add Launch Agent 5 Artifact** - Adds the Agent Artifact for Launch Agent 5._
- _**Update Grove Artifact** - Adds new deployments and a new DAO resolution to the Grove Artifact._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
