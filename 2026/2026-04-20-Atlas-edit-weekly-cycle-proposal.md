---
title: Atlas Edit Weekly Cycle Proposal - April 20, 2026
summary: This Atlas edit proposal 1) reorders the loss absorption sequence so the Genesis Capital Backstop is applied before the SKY Backstop, 2) collapses ecosystem upkeep to a uniform 50 bps fee, 3) adds documentation for the Plasma SkyLink Bridge, 4) removes the 80/20 Pioneer Incentive Pool split, 5) activates the Launch Agent 6 Pioneer Primitive on Plasma, 6) adds the Multisig Security Enforcement Framework, 7) adds a process for novel Spell items, 8) clarifies the deviation percentage calculation in the Monthly Settlement Cycle, 9) clarifies Prime Agent data production responsibilities, and 10) updates the Solana SkyLink Bridge documents.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-20/27851
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
start_date: 2026-04-20T16:00:00
end_date: 2026-04-23T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - April 20, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-20/27851/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, April 20 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/224)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-20/27851)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Reorder Loss Absorption Sequence** — Reorders the loss absorption sequence so the Genesis Capital Backstop is applied before the SKY Backstop, and revises the Genesis Capital Backstop trigger conditions accordingly._
- _**Collapse Ecosystem Upkeep To Uniform 50 bps** — Replaces the Market Cap Fee and Distribution Requirement Primitives with a single Ecosystem Upkeep Fee Primitive at a uniform 50 bps of market capitalization in USDS, and removes the Ecosystem Accord's special upkeep logic._
- _**Add Plasma SkyLink Bridge** — Adds documentation for the Plasma SkyLink Bridge, specifying Freezer Multisig configuration, Rate Limits, and Validator parameters._
- _**Remove 80/20 Pioneer Incentive Pool Split** — Removes the requirement that 80% of Pioneer Incentive Pool funds be used for third-party USDS adoption incentives, allowing the Pioneer Prime to retain 100% of the funds._
- _**Activate Launch Agent 6 Pioneer Primitive On Plasma** — Activates the Pioneer Chain Primitive for Launch Agent 6 on Plasma, establishing the Pioneer Incentive Pool address and applicable terms._
- _**Add Multisig Security Enforcement Framework** — Adds the Multisig Security Enforcement Framework governing security and operational requirements for Multisigs across Sky Core and Prime Agent infrastructure, effective May 20, 2026._
- _**Add Process For Novel Spell Items** — Adds a definition and process for assessing and including novel Spell items in Executive Votes._
- _**Clarify Deviation Percentage Calculation In Monthly Settlement Cycle** — Clarifies how the percentage deviation between the Initial Calculation and the Independent Calculation is calculated in the Agreed Amount definition within the Monthly Settlement Cycle._
- _**Clarify Prime Agent Data Production Responsibilities** — Clarifies that Prime Agents are responsible for data production and Risk Capital inputs._
- _**Update Solana SkyLink Bridge Documents** — Updates the Solana SkyLink Bridge documents to reflect the completed November 2025 deployment phases and removes outdated forward-looking language._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
