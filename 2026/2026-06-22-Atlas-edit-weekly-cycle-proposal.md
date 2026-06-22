---
title: Atlas Edit Weekly Cycle Proposal - June 22, 2026
summary: This Atlas edit proposal 1) re-grounds broad discretionary authority in the Core Council, 2) adds Core Council authority to modify the Treasury Allocation, 3) authorizes transfers to the Sky Frontier Foundation from Executor Agents, 4) clarifies repeat-breach timing for Aligned Delegate voting participation, 5) adds Grove Diamond PAU documentation, 6) adds BUIDL and updates JTRSY Tokenized Treasury Basin Instances, 7) clarifies Agent Rate scope, 8) authorizes a July 2026 Grove Foundation grant, 9) authorizes a July 2026 Skybase Foundation grant, 10) documents Distribution Reward Code ranges, 11) clarifies Core Council Risk Advisor real time data responsibilities, and 12) removes Elodin as Keel's Development Company.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-22/27983
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
start_date: 2026-06-22T16:00:00
end_date: 2026-06-25T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 22, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-22/27983/2). This Governance Poll will be active for three days beginning on Monday, June 22 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/265)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-22/27983)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Re-Ground Broad Discretionary Authority In The Core Council** — Shifts the authority to supersede Atlas provisions from the Core Facilitator alone to the Core Council, preserving the Core Facilitator's flexible interpretive authority, with the Core Facilitator initiating supersession via a public Sky Forum post confirmed by Core GovOps and the Core Council Risk Advisor._
- _**Add Core Council Authority To Modify The Treasury Allocation** — Creates short term authority for the Core Council to reduce or restore Step 1 and Step 2 Capital allocations and modify the allocation of Step 3 Capital among its three uses, exercised through a public Sky Forum post by the Core Facilitator confirmed by Core GovOps and the Core Council Risk Advisor, proceeding directly to an Executive Vote without a prior Governance Poll._
- _**Authorize Transfers To The Sky Frontier Foundation From Executor Agents** — Authorizes Amatsu, Ozone, and Core Council Executor Agent 1 to transfer funds from their Genesis Capital Allocations to the Sky Frontier Foundation without a separate governance decision per transfer or a prior Governance Poll._
- _**Clarify Repeat-Breach Timing For Aligned Delegate Voting Participation** — Clarifies that after a Tier 1 (Procedural) breach for insufficient voting participation, the Core Facilitator will not issue a further breach solely because the rolling six-month rate remains below 75%, provided the Aligned Delegate has met the 75% threshold since the most recent breach._
- _**Add Grove Diamond PAU** — Documents Grove's Diamond Parallelized Allocation Unit (PAU): a modular implementation of the Allocation System in which a single Controller dispatches operations to specialized facet contracts. Reorganizes the existing Grove Liquidity Layer documentation to distinguish Monolithic ALM and Diamond PAU components._
- _**Add BUIDL And Update JTRSY Tokenized Treasury Basin Instances** — Adds the BUIDL Basin Instance (Securitize) and updates the JTRSY Basin Instance (contracts, rate limits, and Target Protocol), with a combined maximum allocation across the two Instances. Also renames two contract documents from RWA Instance to Basin and updates Pauser and Canceller role configuration across all Tokenized Treasury Instances._
- _**Clarify Agent Rate Scope** — Specifies that the Agent Rate applies only to balances held in a Prime Agent's SubProxy, except for Spark's balances in Peg Stability Modules. Adds a rule preventing double counting, so that a balance's total reward never exceeds the Agent Rate, and balances already receiving Integration Boost or USDS Token Rewards earn no Agent Rate._
- _**Authorize July 2026 Grove Foundation Grant** — Authorizes an 800,000 USDS grant from Grove's Prime Treasury to the Grove Foundation Multisig to fund essential activities and operations._
- _**Authorize July 2026 Skybase Foundation Grant** — Establishes a Subsequent Allocation Mechanism for post-Genesis Capital grants to the Skybase Foundation and authorizes a 700,000 USDS grant from Skybase's SubProxy for Agent operational needs and other expenses._
- _**Document Distribution Reward Code Ranges** — Records reserved Reward Code ranges for Skybase, Spark, Grove, and Keel within the Distribution Reward Primitive._
- _**Clarify Core Council Risk Advisor Real Time Data Responsibilities** — Clarifies that the Core Council Risk Advisor's near term real time data obligation covers major lending markets on Ethereum Mainnet and Ethereum L2s._
- _**Remove Elodin As Keel's Development Company** — Removes Elodin as the named Development Company._


## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
