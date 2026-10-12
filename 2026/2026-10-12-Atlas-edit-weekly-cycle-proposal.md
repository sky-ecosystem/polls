---
title: Atlas Edit Weekly Cycle Proposal - October 12, 2026
summary: This Atlas edit proposal 1) pays Sky Core bug bounty rewards from the Core Council Buffer, 2) adds Morpho oracle contract requirements and clarifies oracle feed terminology, 3) grants Spark a 3-week Morpho Vault timelock compliance exception, 4) excludes idle USDS held in a Tokenized Treasury Instance from Utilized USDS, 5) centralizes the Diamond PAU Emergency Protocol into Sky Core, 6) updates Lite Peg Stability Module authorized parties, 7) adds the Osero Reward Code range and Distribution Reward Instances, 8) adds the Spark Foundation grant authorization for November 2026, 9) adds the Grove Foundation grant authorization for October 2026, 10) adds a River SPV II Transfer Asset Instance to the Pattern Artifact, 11) adds an Osero Gauntlet Vault deposit rate limit default, 12) records the Osero Diamond PAU Controller as registered with the Configurator.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-12/28299
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
start_date: 2026-10-12T16:00:00
end_date: 2026-10-15T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - October 12, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-12/28299/2). This Governance Poll will be active for three days beginning on Monday, October 12 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/356)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-10-12/28299)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Pay Sky Core Bug Bounty Rewards From The Core Council Buffer** - Pays Sky Core bug bounty rewards from the Core Council Buffer instead of through an Executive Vote, keeping the Executive Vote as an option for large rewards._
- _**Add Morpho Oracle Contract Requirements And Clarify Oracle Feed Terminology** - Distinguishes oracle feeds from the Morpho oracle contracts that read them, and allows Morpho oracle contracts to implement custom logic if audited._
- _**Grant Spark A 3-Week Morpho Vault Timelock Compliance Exception** - Gives Spark three additional weeks to bring its Morpho vaults into compliance with the Morpho Vault Curation Framework's Timelock Requirements._
- _**Exclude Idle USDS Held In A Tokenized Treasury Instance From Utilized USDS** - Excludes idle USDS in a Tokenized Treasury Instance from the USDS on which Prime Agents are charged interest._
- _**Centralize Diamond PAU Emergency Protocol Into Sky Core** - Moves the Diamond PAU Emergency Protocol into Sky Core so it covers every Diamond PAU Instance, including Grove's, and adds actions for the Basin and Uniswap v3 Facets._
- _**Update Lite Peg Stability Module Authorized Parties** - Lists the eight addresses whitelisted on the Lite Peg Stability Module, previously recorded as none._
- _**Add Osero Reward Code Range And Distribution Reward Instances** - Reserves Reward Codes 3000–3999 for Osero, adds eight Osero Distribution Reward Instances, and adds Tracking Methodologies for Arbitrum and Optimism._
- _**Add Spark Foundation Grant Authorization: November 2026** - Authorizes two grants from Spark's Prime Treasury to cover November 2026 expenses: 865,000 USDS to the Spark Foundation and 45,000 USDS to the Spark Asset Foundation._
- _**Add Grove Foundation Grant Authorization: October 2026** - Authorizes an 800,000 USDS grant from Grove's Prime Treasury to the Grove Foundation to cover October 2026 expenses._
- _**Add River SPV II Transfer Asset Instance To Pattern Artifact** - Adds a USDC Transfer Asset Instance for River SPV II to Pattern's Liquidity Layer._
- _**Add Osero Gauntlet Vault Deposit Rate Limit Default** - Records a default deposit rate limit for Osero's Gauntlet USDC Prime Morpho Vault V2 Instance, up to which a cBEAM may raise the live limit without a Spell._
- _**Housekeeping Updates** - Records the Osero Diamond PAU Controller as registered with the Configurator._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
