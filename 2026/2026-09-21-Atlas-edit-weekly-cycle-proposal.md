---
title: Atlas Edit Weekly Cycle Proposal - September 21, 2026
summary: This Atlas edit proposal 1) enables a Diamond PAU for Osero, 2) records TGE and Genesis Transfer for Grove, 3) corrects the Python reference implementations, 4) implements housekeeping updates.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-21/28241
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
start_date: 2026-09-21T16:00:00
end_date: 2026-09-24T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - September 21, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-21/28241/2). This Governance Poll will be active for three days beginning on Monday, September 21 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/341)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-09-21/28241)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Enable Osero's Diamond PAU** - Adds Osero's Diamond PAU to the Parallelized Allocation System documents._
- _**Record Grove's TGE And Genesis Transfer** - Records Grove's July 6, 2026 Token Generation Event and April 13, 2026 Genesis Capital Allocation transfer._
- _**Correct The Python Reference Implementations** - Formats the three Python reference implementations as fenced code blocks and fixes the time-weighted utilization implementation._
- _**Housekeeping Updates** - Aligns Grove's Diamond PAU Operator wording and records its Controller's Configurator status; updates completed Genesis Capital Allocation and Monthly Settlement Cycle language; and corrects a Spark cross-reference._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
