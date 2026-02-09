---
title: Atlas Edit Weekly Cycle Proposal - February 9, 2026
summary: This Atlas edit proposal 1) updates Ecosystem Accord, 2) builds out basic information for Core Governance Reward Primitive, 3) removes legacy documents for Ranked Delegates, 4) updates the Distribution Reward Instance Skybase Artifact, 5) removes mentions of Scope Advisor, 6) updates references to Core GovOps, 7) updates Active Data Process to include Operational Facilitator, 8) removes stale references in Needed Research Documents.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-09/27696
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
start_date: 2026-02-09T16:00:00
end_date: 2026-02-12T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - February 9, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-09/27696/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, February 9 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request]($TBD)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-02-09/27696)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update Ecosystem Accord** - Updates the Ecosystem Accord between Sky, Spark, and Grove to add a definition of a Prime Token Generation Event and define a new process for Token Launch Penalty Settlement._
- _**Build Out Basic Information For Core Governance Reward Primitive** - Adds initial logic regarding the implementation of the Core Governance Reward Primitive._
- _**Remove Legacy Documents For Ranked Delegates** - Removes short-term logic that was applicable prior to the implementation of the new Aligned Delegates system._
- _**Update Distribution Reward Instance Skybase Artifact** - Updates the status of the Summer.fi Instance in the Skybase Artifact from Active to Completed._
- _**Remove Mentions Of Scope Advisor** - Removes references to the outdated “Scope Advisor” concept, replacing them with “Core Council Risk Advisor” where appropriate._
- _**Update References To Core GovOps** - Makes corrections to reflect that Atlas Axis is Core GovOps, not the Core Executor Agent._
- _**Update Active Data Process To Include Operational Facilitator** - Gives Operational Facilitators authority to update Active Data in the Agent Artifacts that they are responsible for._
- _**Remove Stale References In Needed Research Documents** - Removes a stale reference in two Needed Research documents in the Atlas._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
