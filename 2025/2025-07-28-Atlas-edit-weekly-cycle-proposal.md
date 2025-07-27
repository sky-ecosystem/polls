---
title: Atlas Edit Weekly Cycle Proposal - July 28, 2025
summary: This Atlas Edit 1) introduces a framework for a staged implementation of the Monthly Settlement Cycle, 2) updates the methodology for estimating slippage in the Risk Framework, 3) provides Launch Agent 2 with flexibility to fund development with capital previously allocated to providing liquidity, 4) clarifies the process for how Research Proposals are approved and outlines the associated governance procedures, 5) corrects a minor typographical error regarding the Launch Agent 3 Artifact update process introduced in a previous proposal.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-28/26882
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
start_date: 2025-07-28T16:00:00
end_date: 2025-07-31T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - July 28, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate Bonapublica](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-28/26882/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, July 28 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/33)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-07-28/26882)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Establish Framework For Implementation Of Monthly Settlement Cycle** - Introduces a framework for a staged implementation of the Monthly Settlement Cycle._
- _**Update Slippage Estimation In The Risk Framework** - Updates the methodology for estimating slippage in the Risk Framework._
- _**Provide Flexibility For Launch Agent 2 Capital Funding** - Provides Launch Agent 2 with flexibility to fund development with capital previously allocated to providing liquidity._
- _**Clarify Resilience and Preparedness Approval Process** - Clarifies the process for how Research Proposals are approved and outlines the associated governance procedures._
- _**Correct Typographical Error** - Corrects a minor typographical error regarding the Launch Agent 3 Artifact update process introduced in a previous proposal._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
