---
title: Atlas Edit Weekly Cycle Proposal - June 8, 2026
summary: This Atlas edit proposal 1) adds Audit Process, 2) adds USD Stablecoin to USDS swap authorization for Grove, 3) updates documents to reflect a single Core Facilitator, 4) removes duplicate sentences and fixes a broken cross-reference.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-08/27951
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
start_date: 2026-06-08T16:00:00
end_date: 2026-06-11T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 8, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-08/27951/2). This Governance Poll will be active for three days beginning on Monday, June 8 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/255)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-08/27951)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Audit Process** - Adds a new Audit Process codifying the audit requirements for new smart contract code introduced to the Sky Ecosystem, covering script structure standards, audit intake and delivery, report review and acceptance, findings remediation, and audit recordkeeping._
- _**Add USD Stablecoin To USDS Swap Authorization For Grove** - Authorizes Grove to swap USD stablecoins held in its SubProxy Account to USDS at approximately a 1:1 rate, with each swap documented in a Technical Scope, for direct inclusion in a Grove Spell without a prior token holder vote._
- _**Update Documents To Reflect A Single Core Facilitator** - Corrects mentions of multiple Core Facilitators in Spell validation reporting and AEP misalignment procedures, and removes an Action Tenet that only applied with multiple Core Facilitators._
- _**Remove Duplicate Sentences And Fix Broken Cross-Reference** - Removes a duplicate sentence in two documents and corrects a broken cross-reference._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
