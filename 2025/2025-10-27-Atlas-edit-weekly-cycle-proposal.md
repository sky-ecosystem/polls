---
title: Atlas Edit Weekly Cycle Proposal - October 27, 2025
summary: This proposal 1) enables SKY Rewards for SKY stakers 2) activates Treasury Management Function 3) updates Atlas for new Kicker Module 4) adds listing of capital contributions to Genesis Agents 5) moves to Stage 2 of Monthly Settlement Cycle 6) soft launches ASC System 7) implements StarGuard 8) adds information regarding multisigs in the Grove Artifact 9) removes Grove Interim Deployments Restrictions 10) cleans up Supporting Documents 11) updates terminology in Atlas to reflect Executor Agents.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-27/27362
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
start_date: 2025-10-27T16:00:00
end_date: 2025-10-30T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - October 27, 2025

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate cloaky](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-27/27362/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, October 27 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/96)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-27/27362)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Enable SKY Rewards For SKY Stakers** - Enables SKY Rewards for SKY stakers._
- _**Activate Treasury Management Function** - Activates a modified version of the Treasury Management Function, providing funding for the Core Council Buffer and Aligned Delegates Buffer._
- _**Update Atlas For New Kicker Module** - Updates the Atlas for the new Kicker Module, which allows the Smart Burn Engine to continue to operate when the Surplus Buffer is negative._
- _**Add Listing Of Capital Contributions To Genesis Agents** - Adds a listing of capital contributions by Sky to Genesis Agents._
- _**Move To Stage 2 Of Monthly Settlement Cycle** - Moves the date for Stage 2 of the implementation of the Monthly Settlement Cycle to November 1, 2025 and updates the list of Sky Direct Exposures._
- _**Soft Launch ASC System** - Defines the initial rules for the soft launch of the ASC system._
- _**Implement StarGuard** - Adds logic for StarGuard, a new module that allows for the execution of Prime Spells in separate transactions from Sky Core Spells._
- _**Add Information Regarding Multisigs In Grove Artifact** - Adds logic for the Relay and Freezer multisigs in the Grove Liquidity Layer._
- _**Remove Grove Interim Deployments Restrictions** - Removes the interim deployment restrictions from Grove’s investments into Aave Core v3 RLUSD, Aave Horizon USDC, and Aave Horizon RLUSD._
- _**Clean Up Supporting Documents** - Makes a copy of a Supporting Document so that each copy of a Supporting Document targets exactly one Primary Document in preparation for future upgrades to the Atlas._
- _**Update Terminology In Atlas To Reflect Executor Agents** - Continues to move responsibilities from Scope Facilitators to go forward actors._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
