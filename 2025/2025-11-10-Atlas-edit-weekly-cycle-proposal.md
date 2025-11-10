---
title: Atlas Edit Weekly Cycle Proposal - November 10, 2025
summary: This Atlas edit 1) authorizes Gnosis payment 2) updates ASC Requirements for soft launch 3) removes Grove Interim Deployments restrictions 4) adds Prime Spell security enforcement mechanism.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-10/27400
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
start_date: 2025-11-10T16:00:00
end_date: 2025-11-13T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - November 10, 2025

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-10/27400/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, November 10 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](TBD)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-11-10/27400)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Authorize Gnosis Payment** - Authorizes a payment to Gnosis regarding their upgrade from Dai to USDS._
- _**Update ASC Requirements For Soft Launch** - Updates Sky Direct Exposures, updates eligible ASC, and adds an ASC Incentive as part of the initial implementation of the ASC system._
- _**Remove Grove Interim Deployments Restrictions** - Removes the interim deployment restrictions from Grove’s investments included in the November 3, 2025 Atlas Edit Weekly Cycle Proposal._
- _**Add Prime Spell Security Enforcement Mechanism** - Defines initial logic for enforcement of the Prime Spell Security Process._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
