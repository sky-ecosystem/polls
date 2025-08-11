---
title: Atlas Edit Weekly Cycle Proposal - August 11, 2025
summary: This Atlas Edit 1) renames Star Agents to Prime Agents, 2) renames Prime Delegates to Ranked Delegates, 3) updates Ethena risk capital requirements, 4) refines risk requirements for Real World Assets, 5) clarifies operator of the Spark Liquidity Layer, 6) removes logic for DDM Vaults from Sky Core Atlas, 7) unifies terminology for administrative risk, 8) makes follow up changes from the August 4th Atlas Edit Weekly Cycle Proposal.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-11/26991
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
start_date: 2025-08-11T16:00:00
end_date: 2025-08-14T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - August 11, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate cloaky](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-11/26991/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, August 11 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/43)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-11/26991)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Rename Star Agents To Prime Agents** - Renames Star Agents to Prime Agents to prepare for the introduction of Halo Agents._

- _**Rename Prime Delegates To Ranked Delegates** - Renames Prime Delegates to Ranked Delegates to avoid potential confusion given the introduction of Prime Agents._

- _**Update Ethena Risk Capital Requirements** - Updates the near-term Required Risk Capital for Ethena exposures._

- _**Refine Risk Requirements For Real World Assets** - Refines the Risk Framework requirements for investments in JTRSY and JAAA._

- _**Clarify Operator Of Spark Liquidity Layer** - Clarifies that Spark has overall responsibility for the operation of the Spark Liquidity Layer._

- _**Remove Logic For DDM Vaults From Sky Core Atlas** - Removes logic for the deprecated Morpho Dai DDM Vault from the Sky Core Atlas._

- _**Use Consistent Terminology For Administrative Risk** - Updates references to “Admin Risk” to “Administrative Risk” for consistency._

- _**Make Follow Up Changes From August 4th Atlas Edit Weekly Cycle Proposal** - Updates terminology used in the Simplified Profit And Loss Calculation and clarifies the assets that qualify as Resting versus Latent Actively Stabilizing Collateral._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
