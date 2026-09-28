---
title: Atlas Edit Weekly Cycle Proposal - September 28, 2026
summary: This Atlas edit proposal 1) onboards the Gauntlet USDC Prime Morpho Vault to the Osero Liquidity Layer, 2) documents the ERC-4626 Facet controller functions, 3) exempts the force deallocate penalty from Morpho Vault timelock minimums, 4) applies housekeeping updates.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-28/28262
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
start_date: 2026-09-28T16:00:00
end_date: 2026-10-01T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - September 28, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-28/28262/2). This Governance Poll will be active for three days beginning on Monday, September 28 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/346)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-28/28262)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Onboard The Gauntlet USDC Prime Morpho Vault To The Osero Liquidity Layer** - Adds the Instance Configuration Document for the Gauntlet USDC Prime Morpho Vault V2 and enables the ERC-4626 and PSM Facets on the Osero Diamond PAU._
- _**Document The ERC-4626 Facet Controller Functions** - Defines the deposit, withdraw, and redeem functions of the ERC-4626 Facet, and adds an Osero process for withdrawing all ERC-4626 vault positions._
- _**Exempt The Force Deallocate Penalty From Morpho Vault Timelock Minimums** - Requires that setting the force deallocate penalty not be subject to a timelock delay (previously seven days)._
- _**Housekeeping Updates** - Records the December 15, 2025 Genesis Capital Allocation transfers, completed Foundation grant transfers, and November 27, 2025 Gnosis payment. Corrects the Osero Initial Allocation distribution to identify both destinations, aligns controller action wording for consistency, updates completed ALM Proxy whitelisting language, and formats the Sky Core Solidity excerpts._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
