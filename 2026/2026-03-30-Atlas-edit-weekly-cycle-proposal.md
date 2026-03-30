---
title: Atlas Edit Weekly Cycle Proposal - March 30, 2026
summary: This Atlas edit proposal 1) updates the Emergency Response Article to the Agent Framework, 2) updates the Emergency Spells and Protego documents to the Agent Framework, 3) establishes a Demand Side Buffer for Distribution Reward and Integration Boost payments, 4) transitions Keel to the Pioneer Incentive Pool and updates its development company, 5) updates the Grove Artifact for the April 9 spell, 6) adds TechOps Services as a keeper provider and removes deactivated networks, 7) adds missing Grove ALM Controller contract versions, 8) adds the missing Centrifuge ACRDX Grove instance on Plume, 9) adds a development company to the Launch Agent 6 Artifact, 10) fixes punctuation in the MaxAmount document.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-30/27810
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
start_date: 2026-03-30T16:00:00
end_date: 2026-04-02T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - March 30, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Cloaky](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-30/27810/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, March 30 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/217)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-30/27810)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update Emergency Response Article To Agent Framework** - Updates the Emergency Response Article to reflect the Agent Framework, assigning emergency response authority to the Core Facilitator and Core GovOps._
- _**Update Emergency Spells And Protego To Agent Framework** - Updates the Emergency Spells and Protego documents to reflect the Agent Framework, with the Core Facilitator holding decision authority and Core GovOps responsible for authenticity validation._
- _**Establish Demand Side Buffer** - Establishes a standalone Demand Side Buffer account for Distribution Reward and Integration Boost payments, simplifies expense recognition in the Monthly Settlement Cycle, and removes references to legacy roles from Near-Term Process documents._
- _**Transition Keel To Pioneer Incentive Pool And Update Development Company** - Transitions Keel from the Pre-Pioneer to the Pioneer Incentive Pool. Specifies that Keel may retain one hundred percent of Pioneer Incentive funds. Replaces Matariki Labs with Elodin as development company for Keel._
- _**Update Grove Artifact For April 9 Spell** - Onboards Maple syrupUSDC with a deposit rate limit of 50M USDC, increases JTRSY deposit limit to 500M USDC, and increases PSM USDS/USDC swap limit to 500M USDC._
- _**Add TechOps Services As Keeper Provider And Remove Deactivated Networks** - Adds TechOps Services as a keeper provider operating the SKY lane in dss-cron, removes the deactivated Gelato Network and Keep3r Network documents, and updates the Keepers parent document to better describe keeper responsibilities._
- _**Add Missing Grove ALM Controller Contract Versions** - Adds version numbers for the Grove ALM Controller contracts on Avalanche (1.6.0) and Plume (1.6.0), and corrects the Avalanche ALM Controller address._
- _**Add Missing Grove Instance On Plume** - Adds the Centrifuge ACRDX instance to the Grove artifact for Plume, including deposit and withdrawal parameters._
- _**Add Development Company To Launch Agent 6 Artifact** - Adds Stablewatch as the development company and Launch Agent 6 Foundation as the foundation for Launch Agent 6._
- _**Fix Punctuation In MaxAmount Document** - Corrects punctuation in the MaxAmount definition for clarity._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
