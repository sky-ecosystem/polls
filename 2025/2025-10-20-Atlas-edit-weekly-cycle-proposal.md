---
title: Atlas Edit Weekly Cycle Proposal - October 20, 2025
summary: This proposal 1) introduces Sky Direct Exposures 2) defines the process for Interim Deployments 3) renames RRC to CRR 4) replaces Stability Scope Advisor with Core Council Risk Advisor 5) refined documentation of the spell validation process 6) provides flexibility in updating Smart Burn Engine parameters 7) adds new instances to the Grove Artifact.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-20/27327
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
start_date: 2025-10-20T16:00:00
end_date: 2025-10-23T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - October 20, 2025

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-20/27327/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, October 20 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/89)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-20/27327)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Introduce Direct Sky Exposures** - Introduces the concept of Direct Sky Exposures, exposures that are held directly by Sky but implemented through the Allocation System of a Prime Agent._
- _**Define Process For Interim Deployments** - Defines an initial process for Interim Deployments to allow Prime Agents to test new Allocation System instances under specific constraints, pending completion of a full risk assessment._
- _**Rename RRC Percentage To CRR** - Introduces a new definition of Capital Requirement Ratio in the Risk Framework and updates references from “RRC percentage” to “CRR”._
- _**Replace Stability Scope Advisor With Core Council Risk Advisor** - Updates references to the Stability Scope Advisor to Core Council Risk Advisor._
- _**Refine Documentation Of Spell Validation Process** - Refines the logic for Spell validators when confirming the Spell’s EVM version._
- _**Provide Flexibility In Updating Smart Burn Engine Parameters** - Provides the Core Facilitator with greater flexibility in modifying the parameters of the Smart Burn Engine._
- _**Add New Instances To Grove Artifact** - Adds a new DAO Resolution for Ethena onboarding in the Grove Artifact and new active Instances in Grove's Allocation System Instances._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
