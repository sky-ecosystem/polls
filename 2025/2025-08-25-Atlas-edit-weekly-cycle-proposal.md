---
title: Atlas Edit Weekly Cycle Proposal - August 25, 2025
summary: This Atlas edit 1) changes the funding source for the Accessibility Reward Wallet, 2) protects anonymity of Spark delegates, 3) adds pyUSD to the Risk Framework, 4) clarifies approval requirements for Agent Root Edits, 5) moves authority for approving additional lending markets to the Core Executor Agents, 6) updates SparkLend multisig and clarifies update process, 7) corrects the responsible party for updating active data, 8) completes the renaming of Stars to Primes.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-25/27101
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
start_date: 2025-08-25T16:00:00
end_date: 2025-08-28T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - August 25, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate Cloaky](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-25/27101/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, August 25 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/52)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-08-25/27101)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Change Funding Source For Accessibility Reward Wallet** - Updates the Accessibility Reward wallet to be funded by Executive Votes rather than the Launch Project._
- _**Protect Anonymity Of Spark Delegates** - Allows Spark delegates to disclose conflicts of interest to the Spark Foundation instead of publicly to avoid compromising anonymity._
- _**Add pyUSD To Risk Framework** - Adds rules for RRC and ASC for investments in pyUSD to the Risk Framework._
- _**Clarify Approval Requirements For Agent Root Edits** - Makes minor edits to clarify approval threshold for Agent Root Edits and handling of abstentions._
- _**Move Authority For Approving Additional Lending Markets To The Core Executor Agents** - Moves the authority for approving additional lending markets to the Core Executor Agents._
- _**Update SparkLend Multisig And Clarify Update Process** - Updates the SparkLend multisig and clarifies the governance process for updates to multisig signers._
- _**Correct Responsible Party For Updating Active Data** - Corrects the Responsible Party for updating some Active Data to be Operational GovOps rather than the Operational Facilitator._
- _**Complete Renaming Of “Star” To “Prime”** - Replaces remaining references in the Atlas to “Star” with “Prime”._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
