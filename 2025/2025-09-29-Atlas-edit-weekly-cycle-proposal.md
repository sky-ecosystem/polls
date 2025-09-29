---
title: Atlas Edit Weekly Cycle Proposal - September 29, 2025
summary: This Atlas edit 1) develops Risk Framework for Real World Assets, 2) authorizes Genesis Agent Backstop, 3) adds timeline for Primes to submit Atlas Edit requests, 4) authorizes Core GovOps review of Agent Artifacts, 5) authorizes transfer to Spark Foundation, 6) defines role of Spark Assets Foundation, 7) authorizes sweep of Spark profits from the Spark Liquidity Layer, 8) updates terminology in the Atlas to reflect Executor Agents, 9) improves language in the GSM Pause Delay exceptions.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-29/27222
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
start_date: 2025-09-29T16:00:00
end_date: 2025-10-02T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - September 29, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate BLUE](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-29/27222/2). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, September 29 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request]($Pull_Request_link)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-09-29/27222)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

- _**Develop Risk Framework For Real World Assets** - Develops the Risk Framework for Real World Assets to be a fully implemented risk model._
- _**Authorize Genesis Agent Backstop** - Adds logic for Genesis Agent capital to provide a backstop to the Sky Surplus Buffer in extreme situations._
- _**Add Timeline For Primes To Submit Atlas Edit Requests** - Clarifies the process for Prime Agents to submit Atlas Edit requests until their Root Edit Primitive is operational._
- _**Authorize Core GovOps Review Of Agent Artifacts** - Adds authorization in the Atlas for Core GovOps to review Agent Artifacts and process updates to Artifact specifications._
- _**Authorize Transfer To Spark Foundation** - Authorizes an additional cash grant from Spark to the Spark Foundation._
- _**Define Role Of Spark Assets Foundation** - Defines the Spark Assets Foundation as an additional actor in the Spark Ecosystem._
- _**Authorize Sweep Of Spark Profits From Spark Liquidity Layer** - Authorizes Spark to collect profits from the Spark Liquidity Layer without a prior token holder vote._
- _**Update Terminology In Atlas To Reflect Executor Agents** - Continues to update Executor Agent terminology and reallocate responsibilities from Scope Facilitators._
- _**Improve Language In GSM Pause Delay Exceptions** - Makes minor improvements to the documentation regarding the GSM Pause Delay exceptions for the BEAMs._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
