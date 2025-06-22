---
title: Atlas Edit Weekly Cycle Proposal - June 23, 2025
summary: This Atlas Edit 1) adds timeline for transferring control of Spark infrastructure from Sky Governance to Spark, 2) updates risk framework and asset liability management framework for latest improvements recommended by BA Labs, 3) adds specifications for Spark Genesis Capital Allocation, 4) limits Spark and Launch Agent 1 from receiving Accessibility Reward bonus on USDS and sUSDS balances they hold, 5) authorizes Launch Agent 2 to deploy idle cash into lending markets on Solana subject to approval of its Operational Executor Agent, 6) makes minor corrections to the Atlas following up on the SPK Launch, 7) adds Aave USDC on Base as an active Instance and corrects references and parameters.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-23/26701
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
start_date: 2025-06-23T16:00:00
end_date: 2025-06-29T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 23, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate BLUE](http://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-23/26701/2). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, June 23 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/18)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-06-23/26701)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Timeline For Transition Of Spark Governance Processes** - Adds timeline for transferring control of Spark infrastructure from Sky Governance to Spark._
- _**Update Risk Framework And Asset Liability Management Framework -** Updates risk framework and asset liability management framework for latest improvements recommended by BA Labs._
- _**Add Specifications For Spark Genesis Capital Allocation** - Adds specifications for Spark Genesis Capital Allocation._
- _**Limit Accessibility Reward Bonus To End User Balances** - Limits Spark and Launch Agent 1 from receiving Accessibility Reward bonus on USDS and sUSDS balances they hold._
- _**Authorize Launch Agent 2 Deployment Of Idle Cash** - Authorizes Launch Agent 2 to deploy idle cash into lending markets on Solana subject to approval of its Operational Executor Agent._
- _**Correct Issues In The SPK Launch Proposal** - Makes minor corrections to the Atlas following up on the SPK Launch._
- _**Update Spark Liquidity Layer** - Adds Aave USDC on Base as an active Instance and corrects references and parameters._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
