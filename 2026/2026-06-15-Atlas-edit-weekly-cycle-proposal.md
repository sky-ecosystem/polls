---
title: Atlas Edit Weekly Cycle Proposal - June 15, 2026
summary: This Atlas edit proposal 1) codifies Core Facilitator authority over final Spell inclusion, 2) updates the Ethereum SkyLink Freezer Multisig configuration from 2/4 to 2/5, 3) adds Spark Foundation grant authorization for Q3 2026, 4) adds a second Allocator Vault and Buffer for Grove Prime, 5) adds SKY Price Oracle documentation, 6) corrects the Grove Monad Uniswap AUSD/USDC Instance, 7) fixes Spark Base Aave USDC contract addresses, 8) migrates internal coordination references from Discord to Slack, and 9) adds a Technical Scope Template cross-reference.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-15/27965
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
start_date: 2026-06-15T16:00:00
end_date: 2026-06-18T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 15, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate cloaky](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-15/27965/2). This Governance Poll will be active for three days beginning on Monday, June 15 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/258)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-15/27965)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Codify Core Facilitator Authority Over Final Spell Inclusion** - Adds a new document establishing the Core Facilitator's authority to make the final, binding determination on which items to include in the Spell where consensus cannot be reached, and specifying where and how that coordination must take place. Where there is credible suspicion that the Core Facilitator is compromised, Core GovOps assumes the final inclusion decision._
- _**Update Ethereum SkyLink Freezer Multisig Configuration** - Updates the Ethereum SkyLink Freezer Multisig from 2/4 to 2/5, adding a third Core GovOps signer, and documents this configuration as a Threshold Exception._
- _**Add Spark Foundation Grant Authorization For Q3 2026** - Adds grant authorizations of 1,100,000 USDS per month to the Spark Foundation and 155,000 USDS per month to the Spark Asset Foundation from Spark's Prime Treasury for Q3 2026._
- _**Add Second Allocator Vault And Buffer For Grove Prime** - Adds a second Allocator Vault and Buffer for Grove Prime, used to rebalance the Tokenized Treasury Instance._
- _**Add SKY Price Oracle Documentation** - Documents the SKY Price Oracle (PIP\_SKY) and its underlying Chronicle Scribe Oracle._
- _**Correct Grove Monad Uniswap AUSD/USDC Instance** - Corrects the placement of the Instance from Ethereum Mainnet to Monad, fixes the Underlying Asset Address to Monad USDC, adds a Broker Address, and clarifies document titles._
- _**Fix Spark Base Aave USDC Contract Addresses** - Corrects the Token Address and Underlying Asset Address, which had been swapped, in the Base Aave USDC Instance Configuration Document._
- _**Migrate Internal Coordination References From Discord To Slack** - Replaces Discord with Slack for internal Spell Process coordination and in the Prime Spell Security Guidelines, and removes the #twitter-requests channel from the Media Liaison communication requirement while preserving the obligation._
- _**Add Technical Scope Template Cross-Reference** - Adds a cross-reference from the Prime Agent forum-post requirement to the Technical Scope Template._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
