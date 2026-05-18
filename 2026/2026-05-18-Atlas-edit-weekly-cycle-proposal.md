---
title: Atlas Edit Weekly Cycle Proposal - May 18, 2026
summary: This Atlas edit proposal 1) defines the Executive Process Liaison and Strategic Team roles and adds Prime Agents to the Roles in the Executive Process Section, 2) rebrands Launch Agent 6 to Osero across the Atlas, 3) fixes stale cross-reference labels and naming inconsistencies.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-18/27910
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
start_date: 2026-05-18T16:00:00
end_date: 2026-05-21T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - May 18, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-18/27910/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, May 18 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/246)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-18/27910)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Define Executive Process Liaison And Strategic Team Roles** — Adds definitional documents for the Executive Process Liaison and Strategic Team, and adds Prime Agents to the Roles in the Executive Process Section._
- _**Rebrand Launch Agent 6 To Osero** — Now that Launch Agent 6 has come out of stealth, its name is updated to Osero across the Atlas._
- _**Fix Stale Cross-Reference Labels And Naming Inconsistencies** — Updates stale cross-reference labels to the canonical short format, normalizes curly quotes and apostrophes in cross-references, and fixes a title-case inconsistency in Ecosystem Accord 7._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
