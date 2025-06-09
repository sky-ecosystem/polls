---
title: Atlas Edit Weekly Cycle Proposal - June 9, 2025
summary: This Atlas Edit 1) adds a timeline for disabling the legacy conversion contract, 2) refines SKY Rewards rate normalization process, 3) updates the Spark Artifact and the Ecosystem Accord to prepare for the SPK Launch.  
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-09/26608
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
start_date: 2025-06-09T16:00:00
end_date: 2025-06-12T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 9, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate BONAPUBLICA](http://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-09/26608/3). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, June 09 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/makerdao/next-gen-atlas/pull/10)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-09/26608)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

- _**Add Timeline For Disabling Legacy Conversion Contract** - Specifies when the Legacy Conversion Contract will be disabled._
- _**Refine SKY Rewards Rate Normalization Process** - Provides the Governance Facilitators with greater flexibility in normalizing the effective yield for SKY Token Rewards._
- _**Update Spark Artifact And Ecosystem Accord To Prepare For SPK Launch** - Updates Spark’s Agent Artifact and one of its Ecosystem Accords to prepare for the SPK launch._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
