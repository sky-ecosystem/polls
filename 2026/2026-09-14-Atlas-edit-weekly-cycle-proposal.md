---
title: Atlas Edit Weekly Cycle Proposal - September 14, 2026
summary: This Atlas edit proposal 1) equalizes staking reward rates across reward options, 2) adds a Morpho Vault Curation Framework, 3) clarifies how Core Governance Rewards are paid, 4) updates the Osero Artifact for the September 24, 2026 spell, 5) authorizes a September 2026 Grove Foundation grant, 6) authorizes October 2026 Spark Foundation grants, 7) specifies the forum category and title convention for Prime Spell action publications, 8) documents the MKR to SKY Upgrade Penalty's live value, 9) updates two deployment documents to past tense.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-14/28234
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
start_date: 2026-09-14T16:00:00
end_date: 2026-09-17T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - September 14, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-14/28234/3). This Governance Poll will be active for three days beginning on Monday, September 14 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/331)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-14/28234)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Equalize Staking Reward Rates Across Reward Options** - Keeps the SKY and USDS staking reward rates equivalent by adjusting the Step 3 Capital split and the vesting stream rate._
- _**Add Morpho Vault Curation Framework** - Sets the requirements for Morpho vaults that Prime Agents deploy capital into, covering roles, eligible markets, oracles and timelocks. Allocations to noncompliant Morpho vaults carry a 100% Instance Financial CRR after the October 8, 2026 Executive Vote._
- _**Clarify How Core Governance Rewards Are Paid** - Specifies that each Prime Agent's Core Governance Reward is paid from the Core Council Buffer following the Final Calculation for each Monthly Settlement Cycle, and funded out of the Core Council Allocation. Confirms these rewards are not part of the net amounts settled under the Monthly Settlement Cycle and do not reduce Net Revenue._
- _**Update Osero Artifact For September 24, 2026 Spell** - Updates the Osero Artifact for the actions planned in the September 24, 2026 spell, including giving the PAS Configurator authority over Osero's AccessControls and ALM Rate Limits contracts, and increasing the USDS mint and SparkLend USDS deposit rate limits from 5 million to 50 million USDS._
- _**Add Grove Foundation Grant Authorization: September 2026** - Authorizes an 800,000 USDS grant from Grove's Prime Treasury to the Grove Foundation to cover September 2026 expenses._
- _**Add Spark Foundation Grant Authorization: October 2026** - Authorizes two grants from Spark's Prime Treasury to cover October 2026 expenses: 865,000 USDS to the Spark Foundation and 45,000 USDS to the Spark Asset Foundation._
- _**Specify Forum Category And Title Convention For Prime Spell Action Publications** - Requires each Prime Agent to publish its Spell action Forum posts under its own category, and sets a standard format for their titles._
- _**Document The MKR To SKY Upgrade Penalty's Live Value** - Gives readers a way to look up the Delayed Upgrade Penalty's current value directly from the MKR to SKY conversion contract._
- _**Update Two Deployment Documents To Past Tense** - Corrects the tense of the Kicker Module activation and the Avalanche SkyLink Bridge deployment now that both have occurred._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
