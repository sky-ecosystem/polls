---
title: Atlas Edit Weekly Cycle Proposal - June 16, 2025
summary: This Atlas Edit updates various artifacts, risk frameworks, and governance processes to enhance clarity, functionality, and alignment with the Sky Protocol's governance standards.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-16/26664
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
start_date: 2025-06-16T16:00:00
end_date: 2025-06-19T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 16, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate BLUE](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-16/26664/4). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, June 16 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/15)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-16/26664)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

- _**Update Launch Agent 1 Artifact** - Updates the Launch Agent 1 Artifact._
- _**Update Spark Artifact** - Updates the Spark Artifact to prepare for SPK launch._
- _**Add Process For Returning Spark Market Maker And Exchange Funding To Sky** - Defines the process for returning Spark market maker and exchange funding to Sky._
- _**Update Ethena Required Risk Capital Percentage** - Updates Required Risk Capital required with respect to Ethena direct exposures._
- _**Provide Senior Risk Capital To Spark** - Provides 15 million USDS to Spark as Senior Risk Capital._
- _**Refine Pioneer Primitive System** - Clarifies that sUSDS is eligible for the Pioneer Star Accessibility Reward and adds a definition of the Pioneer Phase._
- _**Clarify Control Of SubProxy Accounts** - Clarifies that Star Agent SubProxy accounts are controlled directly by Sky Governance._
- _**Update Penalties In Risk Framework** - Updates penalty thresholds in risk framework._
- _**Update URL Of Voting Platform** - Updates the URL of the voting platform to https://vote.sky.money._
- _**Update References From MKR To SKY** - Updates references from MKR to SKY following the upgrade to SKY as the sole governance token of the Sky Protocol._
- _**Clarify Formal Submission Window** - Clarifies the Formal Submission Window for the Monthly Governance Cycle._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
