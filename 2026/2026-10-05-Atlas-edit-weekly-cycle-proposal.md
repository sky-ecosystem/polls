---
title: Atlas Edit Weekly Cycle Proposal - October 5, 2026
summary: This Atlas edit proposal 1) defines the circulating USDS supply for the Target Aggregate Backstop Capital, 2) updates stUSDS documents for the stUSDS Keeper Launch, 3) enables Spark's cBEAM on Arbitrum and restructures the Parallelized Allocation System by network, 4) grants Grove a Morpho Vault Curation Framework compliance exception for 3 days, 5) adds a highest production rate limit for each Diamond PAU facet, 6) documents the ERC-4626 Facet Maximum Exchange Rate Setter, 7) applies housekeeping updates.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-05/28279
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
start_date: 2026-10-05T16:00:00
end_date: 2026-10-08T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - October 5, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-05/28279/3). This Governance Poll will be active for three days beginning on Monday, October 5 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/352)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-05/28279)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Define The Circulating USDS Supply For The Target Aggregate Backstop Capital** - Defines the Circulating USDS Supply used to calculate the Target Aggregate Backstop Capital._
- _**Update stUSDS Documents For The stUSDS Keeper Launch** - Replaces the stUSDS Rate and SKY Borrow Rate formulas with automatic updates by the stUSDS Keeper._
- _**Enable Spark's cBEAM On Arbitrum And Restructure The Parallelized Allocation System By Network** - Enables the Configurator on the Spark Diamond PAU on Arbitrum with the Spark Operator Multisig as its cBEAM, and splits the Parallelized Allocation System documents into Ethereum Mainnet and Arbitrum deployments._
- _**Grant Grove A 3-Day Morpho Vault Curation Framework Compliance Exception** - Extends Grove's deadline to bring its Morpho vault exposure into compliance with the Morpho Vault Curation Framework to three days after the execution of the October 8, 2026 Executive Vote._
- _**Add A Highest Production Rate Limit For Each Diamond PAU Facet** - Adds a highest production rate limit for each Diamond PAU Facet, with figures for the Facets currently in production use._
- _**Document The ERC-4626 Facet Maximum Exchange Rate Setter** - Documents the Controller function for setting an ERC-4626 vault's maximum exchange rate, and corrects Osero's Maximum Exchange Rate document to cite it._
- _**Housekeeping Updates** - Uses US spelling in nine Sky Core documents and corrects plural agreement in the Distortion Penalty document._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
