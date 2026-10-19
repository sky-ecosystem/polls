---
title: Atlas Edit Weekly Cycle Proposal - October 19, 2026
summary: This Atlas edit proposal 1) adds standards for audits not commissioned by Sky and revises recognized audit firms, 2) requires the Executive Process Liaison to confirm Prime Spell actions are authorized in the Atlas, 3) clarifies the Core Council Multisig is deployed separately on Arbitrum, 4) records permissioned role holders for Morpho vaults, 5) clarifies Burn USDS and USDC swap rate limit restoration is capped at maxAmount, 6) sets the River I Instance Capital Ratio Requirement to 7%, 7) increases the Osero Gauntlet Vault deposit slope to 650,000 USDC per day, 8) makes housekeeping updates. 
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-19/28303
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
start_date: 2026-10-19T16:00:00
end_date: 2026-10-22T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - October 19, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate cloaky](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-19/28303/2). This Governance Poll will be active for three days beginning on Monday, October 19 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/360)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-19/28303)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Standards For Audits Not Commissioned By Sky And Revise Recognized Audit Firms** - Sets audit standards and coverage requirements for audits not commissioned by Sky, and updates the recognized audit firm lists._
- _**Executive Process Liaison Confirms Prime Spell Actions Are Authorized In The Atlas** - Requires the Executive Process Liaison to check that each Prime Spell action is authorized in the Atlas before confirming the Prime Spell address._
- _**Clarify Core Council Multisig Is Deployed Separately On Arbitrum** - Clarifies that the Core Council Multisig on Arbitrum is a separate deployment, and requires its signer requirements and signer changes to apply on every network on which it is deployed._
- _**Record Permissioned Role Holders For Morpho Vaults** - Requires the records for each Prime Agent's Morpho vaults to specify every permissioned role, its holder and address, and brings the Spark, Grove and Osero Morpho vault records up to date with the current role holders._
- _**Clarify Burn USDS And USDC Swap Rate Limit Restoration Is Capped At maxAmount** - Clarifies that the rate limit capacity restored by burning USDS or swapping USDC to USDS is capped at the rate limit's `maxAmount`._
- _**Set River I Instance Capital Ratio Requirement To 7%** - Sets the Capital Ratio Requirement for Pattern's River I Instance to 7%._
- _**Increase Osero Gauntlet Vault Deposit Slope To 650,000 USDC Per Day** - Increases the deposit rate limit slope for Osero's Gauntlet USDC Prime Morpho Vault V2 Instance from zero to 650,000 USDC per day._
- _**Housekeeping Updates** - Corrects wording in the Obex Relayer Multisig and `RateLimitID` documents._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
