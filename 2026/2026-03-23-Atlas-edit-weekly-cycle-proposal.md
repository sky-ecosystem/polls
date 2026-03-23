---
title: Atlas Edit Weekly Cycle Proposal - March 23, 2026
summary: This Atlas edit proposal 1) removes Governance poll requirement for SparkLend parameter changes, 2) removes Signal Requests and Non-Standard Weekly Polls from the Atlas, 3) clarifies Facilitator authority to update Atlas after spell execution, 4) adds Spark Foundation Grant Authorization for Q2 2026, 5) updates Spark Prime Arkis deployment parameters, 6) fixes Sentora RLUSD Morpho Vault V2 MaxExchangeRate precision.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-23/27781
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
start_date: 2026-03-23T16:00:00
end_date: 2026-03-26T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - March 23, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-23/27781/3). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, March 23 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/208)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-23/27781)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Remove Governance Poll Requirement For SparkLend Parameter Changes** - Removes the requirement for a Governance Poll before modifying SparkLend Liquidation Threshold and Liquidation Bonus parameters, allowing these changes to proceed directly to an Executive Vote via the Operational Weekly Cycle._
- _**Remove Signal Requests And Non-Standard Weekly Polls From The Atlas** - Removes Non-Standard Weekly Polls, Signal Requests, and the Signal Request reference from the Emergency Declaration Procedure._
- _**Clarify Facilitator Authority To Update Atlas After Spell Execution** - Codifies the existing practice of the Core Facilitator updating Sky Core Atlas documents after a Spell executes, with Operational Facilitators responsible for Agent Artifact follow-ups._
- _**Add Spark Foundation Grant Authorization For Q2 2026** - Authorizes a cash grant of 1,100,000 USDS per month to the Spark Foundation and 100,000 USDS per month to the Spark Asset Foundation from the SubDAO Proxy for Q2 2026._
- _**Update Spark Prime Arkis Deployment Parameters** - Removes Interim Deployment status from Arkis, raises Maximum Exposure from $20M to $50M, and reduces Instance Capital Requirement Ratio from 100% to 50%._
- _**Fix Sentora RLUSD Morpho Vault V2 MaxExchangeRate Precision** - Corrects the maxExchangeRate precision for the Sentora RLUSD Morpho Vault V2 from 3e6 to 3e18 to match RLUSD’s 18-decimal token standard._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
