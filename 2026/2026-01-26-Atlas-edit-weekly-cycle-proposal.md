---
title: Atlas Edit Weekly Cycle Proposal - January 26. 2026
summary: This Atlas edit proposal 1) adds a limit to Sky direct exposure to JAAA, 2) codifies asset-specific CRRs in the Risk Framework, 3) identifies GovOps and Facilitator teams, 4) documents process for transfers to Core Council buffers, 5) updates the Launch Agent 6 Ecosystem Accord, 6) updates the Ecosystem Accord 7, 7) updates the Skybase Multisig signers, 8) corrects parameters for the Grove Agora AUSD instance, 9) cleans up the Grove Instance Configuration document title, 10) updates references to Launch Agent 2.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-01-26/27643
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
start_date: 2026-01-26T16:00:00
end_date: 2026-01-29T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - January 26. 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate cloaky](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-01-26/27643/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, January 26 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request]($TBD)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2026-01-26/27643)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Add Limit To Sky Direct Exposure To JAAA** - Limits Sky Direct Exposure to JAAA to $325M._
- _**Codify Asset-Specific CRRs In Risk Framework** - Records CRRs set directly by the Core Council for particular assets in the Risk Framework._
- _**Identify GovOps And Facilitator Teams** - Adds the GovOps and Facilitator teams for each Executor Agent to the Atlas._
- _**Document Process For Transfers To Core Council Buffers** - Updates the process for the Monthly Settlement Cycle to include the calculation of transfers to the Core Council Buffer and Aligned Delegates Buffer._
- _**Update Launch Agent 6 Ecosystem Accord** - Updates the terms of the Ecosystem Accord to reflect the latest understanding between Sky and Launch Agent 6 regarding tokenomics._
- _**Update Ecosystem Accord 7** - Updates the Ecosystem Accord between Sky and Skybase to clarify the authorization for the funding of Skybase._
- _**Update Skybase Multisig Signers** - Updates the signers of the USDS Demand Subsidies Multisig._
- _**Correct Parameters For Grove Agora AUSD Instance** - Corrects the rate limits for the Grove Agora AUSD Instance._
- _**Clean Up Grove Instance Configuration Document Title** - Adds a missing word in the title of an active Instance in the Grove Artifact._
- _**Update References To Launch Agent 2** - Replaces remaining references to “Launch Agent 2” with “Keel”._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
