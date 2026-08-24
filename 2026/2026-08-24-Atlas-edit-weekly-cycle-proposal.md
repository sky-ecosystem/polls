---
title: Atlas Edit Weekly Cycle Proposal - August 24, 2026
summary: This Atlas edit proposal 1) specifies the PAS (Parallelized Allocation System), 2) adds security specifications for pull request approvals and Freezer Multisigs, 3) corrects the net revenue recognition basis, 4) adds a new-entity verification requirement to Authorized Forum Accounts, 5) updates Osero SparkLend USDS instance off-chain parameters, 6) standardizes language across GSM Pause Delay Exceptions.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-24/28189
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
start_date: 2026-08-24T16:00:00
end_date: 2026-08-27T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - August 24, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-24/28189/2). This Governance Poll will be active for three days beginning on Monday, August 24 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/308)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-24/28189)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Specify The PAS (Parallelized Allocation System)** — Describes the PAS module, its operational process, the governance process, and the emergency mechanism, which together let authorized operators adjust a Diamond PAU's rate limits within governance-set bounds without a full Executive Vote each time._
- _**Add Security Specifications For Pull Request Approvals And Freezer Multisigs** — Requires two approvals from distinct individuals or entities before merging pull requests in Prime Agent Liquidity Layer GitHub repositories. Sets a default Liquidity Layer Freezer Multisig of five signers, with deviations requiring approval from the Protocol Security Workstream Lead and Core GovOps._
- _**Correct Net Revenue Recognition Basis** — Recognizes Prime Agent income and expenses in the month the Monthly Settlement Cycle covers, instead of only when funds move through the Sky Surplus Buffer. Also recognizes certain Stability Fees and savings-rate interest as they accrue, rather than on a cash basis._
- _**Add New-Entity Verification Requirement To Authorized Forum Accounts** — Requires an entity's Operational Executor Agent, or the Core Facilitator if it has none, to verify the entity's legitimacy before it can be added to Authorized Forum Accounts._
- _**Update Osero SparkLend USDS Instance Off-Chain Parameters** — Updates the off-chain parameters for Osero's SparkLend allocation: reduces the CRR to 10% and increases the maximum exposure to 25 million USDS, in accordance with the Core Council Risk Advisor's recommendation._
- _**Standardize Language Across GSM Pause Delay Exceptions** — Standardizes the language used across GSM Pause Delay Exceptions._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
