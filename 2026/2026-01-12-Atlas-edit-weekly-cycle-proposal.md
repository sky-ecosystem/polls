---
title: Atlas Edit Weekly Cycle Proposal - January 12, 2026
summary: This Atlas edit 1) updates Maple CRR, 2) adjusts token rewards, 3) authorizes transfer to Spark Foundation, 4) updates multisigs in Grove Artifact, 5) updates Grove Allocator Vault parameters, 6) updates multisigs in Keel Artifact, 7) removes legacy references to Accessibility Reward, 8) updates reference to subproxy.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-01-12/27606
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
start_date: 2026-01-12T16:00:00
end_date: 2026-01-15T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - January 12, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate $TBD]($TBD). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, January 12 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request]($TBD)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-01-12/27606)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update Maple CRR** - Updates the Instance Financial CRR for Maple SyrupUSDC._
- _**Adjust Token Rewards** - Sets the current distribution of SPK to SKY stakers and SKY to USDS users to zero._
- _**Authorize Transfer To Spark Foundation** - Authorizes a transfer from Spark to the Spark Foundation and clarifies the process for future approvals._
- _**Update Multisigs In Grove Artifact** - Updates the Multisigs in the Grove Artifact by adding a secondary Prime Relayer Multisig and updating the documents for the Freezer Multisig._
- _**Update Grove Allocator Vault Parameters** - Adds Grove’s Allocator Vault parameters to their Artifact and updates the gap and line parameters._
- _**Update Multisigs In Keel Artifact** - Standardizes the Freezer Multisig documentation for Keel._
- _**Remove Legacy References To Accessibility Reward** - Updates remaining references to the Accessibility Reward to correctly use the new terminology of Distribution Reward._
- _**Update Reference To SubProxy** - Updates a reference in the spell process from Prime SubProxy to Agent SubProxy to clarify that it applies to all Agents._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
