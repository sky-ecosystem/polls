---
title: Atlas Edit Weekly Cycle Proposal - September 1, 2025
summary: This Atlas edit 1) defines the parameters of stUSDS and the process of updating them in preparation for the launch of stUSDS, 2) defines a resolution process for the Core Simplification Buffer Budget, 3) revises the calculation of Smart Contract Risk to reflect the latest process and updates the list of auditors, 4) updates the Instance Financial RRC Ratio for Ethena to account for lending Ethena related assets against other Ethena related assets, 5) makes the Governance Facilitators responsible for updating the members of the Emergency Response Group, 6) adds definitions of commonly used parameters in Prime Agent Liquidity Layers, 7) clarifies the rules for how Prime Agents and Integrators can split the Accessibility Reward, 8) makes minor spelling and grammatical corrections.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-01/27122/
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
start_date: 2025-09-01T16:00:00
end_date: 2025-09-04T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - September 1, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate BLUE](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-01/27122/4). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, September 1 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/54)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-01/27122/1)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Prepare For Implementation Of stUSDS** - Defines the parameters of stUSDS and the process of updating them in preparation for the launch of stUSDS._
- _**Define Resolution Process For Core Simplification Buffer Budget** - Defines a resolution process for the Core Simplification Buffer Budget._
- _**Update Smart Contract Risk Calculations** - Revises the calculation of Smart Contract Risk to reflect the latest process and updates the list of auditors._
- _**Refine Risk Capital Requirements For Ethena** - Updates the Instance Financial RRC Ratio for Ethena to account for lending Ethena related assets against other Ethena related assets._
- _**Update Responsible Party For Updating Emergency Response Group Members** - Makes the Governance Facilitators responsible for updating the members of the Emergency Response Group._
- _**Add Definitions For Liquidity Layer Parameters** - Adds definitions of commonly used parameters in Prime Agent Liquidity Layers._
- _**Update Accessibility Reward Logic** - Clarifies the rules for how Prime Agents and Integrators can split the Accessibility Reward._
- _**Make Minor Corrections** - Makes minor spelling and grammatical corrections._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
