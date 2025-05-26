---
title: Atlas Edit Weekly Cycle Proposal - May 26, 2025
summary: This Atlas Edit 1) builds out the Allocation System Primitive, 2) adds Spark-Launch Agent 1 Ecosystem Accord, 3) adds Sky-Spark-Launch Agent 1 Ecosystem Accord, 4) adds logic regarding key interest rates, 5) updates Risk Framework, 6) renames First Loss Capital To Junior Risk Capital, 7) updates logic regarding distribution of Agent Tokens, 8) updates Spark Liquidity Layer documentation, 9) updates Spark Artifact based on Ecosystem Accords, 10) updates Launch Agent 1 Artifact based on Ecosystem Accords.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-05-26/26454/
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
start_date: 2025-05-26T16:00:00
end_date: 2025-05-29T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - May 26, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate BonaPublica](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-05-26/26454/2). This Governance [Poll](https://sky-atlas.powerhouse.io/#A.1.9.2_Atlas_Edit_Weekly_Cycle-4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59%7C0db30308) will be active for three days beginning on Monday, May 26 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Notion Page](https://www.notion.so/Public-Atlas-Edit-Weekly-Proposal-For-SPK-Launch-Week-of-2025-05-26-1fdf2ff08d73802c804adcf401e7d66f?pvs=21)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-05-26/26454)

Due to the size of the proposal, the GitHub Pull Request won’t be ready in time, so a Notion page with the proposal content has been used instead.
Using the process below, community members can independently verify the contents of the Proposal submitted on the Notion page:
1- Download the HTML file from the Notion page
2- Open it in an editor such as VS Code
3- Copy the contents into the hash generator at [Keccak-256 - Online Tools](https://emn178.github.io/online-tools/keccak_256.html)
4- Verify that the hash is equal to `bedf45dceb0748041815e6a534eba006a83d00aded64c96b0d2ee7ac297f199d`

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

- _**Build Out Allocation System Primitive** - Builds out the Allocation System Primitive, including the process for Star Agents to comply with the risk framework._
- _**Add Spark - Launch Agent 1 Ecosystem Accord** - Adds an Ecosystem Accord between Spark and Launch Agent 1._
- _**Add Sky - Spark / Launch Agent 1 Ecosystem Accord** - Adds an Ecosystem Accord between Sky, Spark, and Launch Agent 1._
- _**Add Logic Regarding Key Interest Rates** - Adds logic regarding how the Base Rate is set and how it relates to the Agent Credit Line Borrow Rate._
- _**Update Risk Framework** - Updates the risk framework to include a new model for lending markets and models for Smart Contract Risk and Administrative Risk._
- _**Rename First Loss Capital To Junior Risk Capital** - Renames First Loss Capital to Junior Risk Capital to better align with other terminology in the Atlas._
- _**Update Logic Regarding Distribution Of Agent Tokens** - Clarifies the distribution of Agent Tokens received by Sky under an Ecosystem Accord._
- _**Update Spark Liquidity Layer Documentation** - Updates the documentation of the Spark Liquidity Layer to reflect that it is an implementation of the Allocation System Primitive._
- _**Update Spark Artifact Based On Ecosystem Accords** - Updates Spark Artifact to reflect the Ecosystem Accords entered into by Spark._
- _**Update Launch Agent 1 Artifact Based On Ecosystem Accords** - Updates the Launch Agent 1 Artifact to reflect the Ecosystem Accords entered into by Launch Agent 1._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- A Pull Request mirroring the contents of the Notion page shared above will be merged into the Atlas GitHub repository.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
