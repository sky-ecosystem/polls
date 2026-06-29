---
title: Atlas Edit Weekly Cycle Proposal - June 29, 2026
summary: This Atlas edit proposal 1) adds a 100% Capital Ratio Requirement for unauthorized exposures, 2) transitions the Galaxy Warehouse out of Interim Deployment, 3) credits Grove for owed Prime revenue, 4) adds a GROVE token reward distribution schedule, 5) converts inline Spell-checklist URLs to cross-references.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-29/27996
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
start_date: 2026-06-29T16:00:00
end_date: 2026-07-02T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - June 29, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate cloaky](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-29/27996/2). This Governance Poll will be active for three days beginning on Monday, June 29 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/270)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-06-29/27996)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

*_This proposal includes the following edits:_*

- *_**Add 100% Capital Ratio Requirement For Unauthorized Exposures** - Adds a rule that an underlying asset of a lending market not included in the pro-forma Required Risk Capital estimate approved by the Core Council Risk Advisor carries a 100% Capital Ratio Requirement, applied per-exposure._*
- *_**Transition Galaxy Warehouse Out Of Interim Deployment** - The Galaxy Warehouse instance is no longer governed by Interim Deployment parameters. Its Capital Ratio Requirement of 2% and maximum exposure of 500,000,000 USD are now recorded in the Risk Framework._*
- *_**Credit Grove For Owed Prime Revenue** - Records that Grove is owed 2,528,000 USDS from the true-up of prior Monthly Settlement Cycles; until this amount is paid through the next Monthly Settlement Cycle, the credit counts toward Grove's Total Risk Capital._*
- *_**Add Grove Token Reward Distribution Schedule** - Specifies the token distribution schedule for GROVE token rewards._*
- *_**Convert Inline Checklist URLs To Cross-References** - Replaces inline Spell-checklist GitHub URLs across the Spell process documents with cross-references to the Registered Spell Checklists document._*

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
