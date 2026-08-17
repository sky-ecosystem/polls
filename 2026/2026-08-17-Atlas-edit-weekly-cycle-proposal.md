---
title: Atlas Edit Weekly Cycle Proposal - August 17, 2026
summary: This Atlas edit proposal 1) removes the Agent Termination Compliance Deadline, 2) adds the SubProxyMethods Contract to the Atlas, 3) adds initial documentation regarding the Parallelized Allocation System, 4) makes the scope of netting explicit, 5) authorizes the August 2026 Grove Foundation Grant, 6) specifies Skybase's Development Company, 7) clarifies a Weekly Cycle reference.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-17/28166
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
start_date: 2026-08-17T16:00:00
end_date: 2026-08-20T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - August 17, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate BLUE](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-17/28166/2). This Governance Poll will be active for three days beginning on Monday, August 17 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/297)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-08-17/28166)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Remove The Agent Termination Compliance Deadline** — Removes the September 1, 2026 deadline for existing Prime Agents to incorporate the Agent Termination Process, and requires Sky Governance approval by Governance Poll to use that process in the short term._
- _**Add The SubProxyMethods Contract To The Atlas** — Documents the SubProxyMethods contract, which lets a Sky Core Spell move ERC20 tokens out of an Agent's SubProxy, and the governance process for using it._
- _**Add Initial Documentation Regarding The Parallelized Allocation System** — Describes the PAS's contracts and records Grove as the first Prime Agent with the PAS enabled._
- _**Make The Scope Of Netting Explicit** — Clarifies that netting is an accounting concept that does not change the gross amounts flowing between Sky and a Prime Agent, and that it applies only to sUSDS; yield on a Prime Agent's other allocations, other than Sky Direct Exposures, is its own revenue._
- _**Authorize August 2026 Grove Foundation Grant** — Authorizes an 800,000 USDS grant from Grove's Prime Treasury to the Grove Foundation Multisig._
- _**Specify Skybase's Development Company** — Names Ekliptyka as a development company providing services to the Skybase Foundation, replacing a placeholder._
- _**Clarify A Weekly Cycle Reference** — Corrects a bare "Weekly Cycle" reference to read "Atlas Edit Weekly Cycle", matching the term used in the parent document._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
