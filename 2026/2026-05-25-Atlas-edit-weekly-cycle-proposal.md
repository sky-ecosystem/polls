---
title: Atlas Edit Weekly Cycle Proposal - May 25, 2026
summary: This Atlas edit proposal 1) introduces Independent Governance standard for Root Edit Primitive Operation, 2) adds spell checklists and reference materials, 3) adds GROVE token transfer to Grove Foundation, 4) specifies Pre-Risk Review timing, 5) adds Grove to current phased-out Genesis Capital, 6) adds Grove Circle CCTP Governance Relay Receivers to Grove Artifact, 7) renames Synome Editor to Archon Tech, 8) replaces Legacy Facilitator terminology, 9) fixes Cross-Reference formatting.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-25/27933
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
start_date: 2026-05-25T16:00:00
end_date: 2026-05-28T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - May 25, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate cloaky](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-25/27933/2). This Governance Poll will be active for three days beginning on Monday, May 25 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/251)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-25/27933)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Introduce Independent Governance Standard For Root Edit Primitive Operation** — Adds Independent Governance as the new condition for Root Edit Primitive operation, and removes the prior Publicly Held token threshold and Minimum Float requirement._
- _**Add Spell Checklists And Reference Materials** — Defines Core and Agent Spell Checklist categories and maintains a list of the current checklists. Mandates use of a standardized Technical Scope Template and Deployment Checklist within the Executive Process._
- _**Add GROVE Token Transfer To Grove Foundation** — Adds a transfer of 500M GROVE from the Grove SubProxy to the Grove Foundation Multisig._
- _**Specify Pre-Risk Review Timing** — Adds a Wednesday 16:00 UTC deadline for the Core Council Risk Advisor's pre-risk review of proposed Spell items._
- _**Add Grove To Current Phased-Out Genesis Capital** — Adds Grove with a value of 0 USDS to the list of Active Data; Grove was not previously listed because it had not yet received its Genesis Capital._
- _**Add Grove Circle CCTP Governance Relay Receivers To Grove Artifact** — Documents the Grove Circle CCTP governance relay receivers (Circle CCTP v1 and v2) on Avalanche._
- _**Rename Synome Editor To Archon Tech** — Updates the Designated Synome Editor from Archon Labs to Archon Tech._
- _**Replace Legacy Facilitator Terminology** — Renames Support Facilitator and Stability Facilitator to Core Facilitator or Protocol Security Workstream Lead where applicable, keeping one reference for historical context._
- _**Fix Cross-Reference Formatting** — Corrects eight cross-reference formatting issues across the Atlas._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
