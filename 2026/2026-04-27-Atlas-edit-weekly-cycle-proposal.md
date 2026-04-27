---
title: Atlas Edit Weekly Cycle Proposal - April 27, 2026
summary: This Atlas edit proposal 1) restructures the Treasury Management Function, 2) adds Authorized Forum Accounts requirements, 3) defines the Protocol Security workstream lead role, 4) increases the GSM Pause Delay from 24 hours to 48 hours, 5) clarifies the Genesis Capital Backstop Haircut and Settlement, 6) adds Grove Foundation Grant Authorization for Q2 2026, 7) adds Tokenized Treasury Shared Infrastructure and a JTRSY instance, 8) defers the Plasma SkyLink Bridge deployment date.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-27/27864
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
start_date: 2026-04-27T16:00:00
end_date: 2026-04-30T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - April 27, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate cloaky](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-27/27864/4). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, April 27 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/227)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-04-27/27864)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Restructure Treasury Management Function** — Restructures the TMF waterfall across four steps (Security and Maintenance, Aggregate Backstop Capital growth, Smart Burn Engine with split between SKY rewards / USDS rewards / burn, and Staking Rewards). Retires the Net Revenue Ratio and activity-based staking reward tiers._
- _**Add Authorized Forum Accounts Requirements** — Establishes registration, disclosure, and enforcement requirements for Sky Forum accounts used in a governance capacity, so the community can trust that posts made on behalf of an entity come from its authorized representatives._
- _**Define Protocol Security Workstream Lead Role** — Defines the Protocol Security Workstream Lead role, establishing its security and incident coordination responsibilities, and names the current holder._
- _**Increase GSM Pause Delay From 24h To 48h** — Increases the GSM Pause Delay from 24 hours to 48 hours._
- _**Clarify Genesis Capital Backstop Haircut And Settlement** — Clarifies the haircut cap as Aggregate Backstop Capital and removes the 24 billion SKY distribution to Genesis Agents when the haircut fully covers the loss._
- _**Add Grove Foundation Grant Authorization For Q2 2026** — Adds a grant authorization of 800,000 USDS per month to the Grove Foundation from Grove's Prime Treasury for Q2 2026._
- _**Add Tokenized Treasury Shared Infrastructure And JTRSY Instance** — Adds shared Tokenized Treasury contract addresses and role definitions at the Grove Liquidity Layer level, onboards the Tokenized Treasury JTRSY instance, and adds the Grove x Steakhouse RLUSD Morpho Vault V2 instance._
- _**Defer Plasma SkyLink Bridge Deployment Date** — Defers the Plasma SkyLink Bridge deployment from the April 23, 2026 Executive Vote to a future Executive Vote._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
