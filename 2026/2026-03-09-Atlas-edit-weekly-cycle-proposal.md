---
title: Atlas Edit Weekly Cycle Proposal - March 9, 2026
summary: This Atlas Edit 1) reduces SKY buybacks to zero, 2) removes JAAA from Sky Direct Exposure, 3) adds sanctioned locations to Full Block List, 4) updates RRC dashboard references, 5) corrects LayerZero multisig signers, 6) corrects Safe Harbor addresses and parameters, 7) updates ordering of three Supporting Documents.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-09/27750
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
start_date: 2026-03-09T16:00:00
end_date: 2026-03-12T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - March 9, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-09/27750/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, March 9 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/196)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-09/27750)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Reduce SKY Buybacks To Zero** - Reduces the allocation of protocol revenue to SKY buybacks from 300,000 USDS per day to zero._
- _**Remove JAAA From Sky Direct Exposures** - Removes JAAA from the list of current Sky Direct Exposures._
- _**Add Sanctioned Locations To Full Block List** - Adds Afghanistan, Belarus, Burma, Russia, and Venezuela to the Flagged IPs list for Full Block._
- _**Update RRC Dashboard References** - Updates references to the RRC Dashboard to point to [info.sky.money/required-risk-capital](http://info.sky.money/required-risk-capital) and removes references to the associated API._
- _**Correct LayerZero Multisig Signers** - Corrects the description of the Solana LayerZero Freezer Multisig signers to accurately reflect the current composition._
- _**Correct Safe Harbor Parameters** - Updates the Safe Harbor agreement address, contract URL, asset recovery addresses, and protocol name to reflect the current deployment._
- _**Update Ordering Of Three Supporting Documents** - Reorders three supporting documents to correct their sequence in the Atlas._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
