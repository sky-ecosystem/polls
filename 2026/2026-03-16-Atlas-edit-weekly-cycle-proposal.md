---
title: Atlas Edit Weekly Cycle Proposal - March 16, 2026
summary: This Atlas edit proposal 1) authorizes funding for Genesis Agents, 2) adds Allocation Vault parameters for Launch Agent 6 and Launch Agent 7, 3) Authorizes investments in ACRDX on Ethereum mainnet, 4) adds Allocation System instances to the Grove Artifact, 5) updates multisig operators to Soter Labs.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-16/27767
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
start_date: 2026-03-16T16:00:00
end_date: 2026-03-19T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - March 16, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Blue](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-16/27767/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, March 16 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/200)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-03-16/27767)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Authorize Funding For Genesis Agents** - Authorizes a total of 70,000,000 USDS of funding to Amatsu, Ozone, Keel, and Launch Agent 6._
- _**Add Launch Agent 6 And Launch Agent 7 Allocator Vault Parameters** - Adds the Allocator Vault contracts and related parameters for Launch Agent 6 and Launch Agent 7._
- _**Authorize Investments In ACRDX On Ethereum Mainnet** - Authorizes investments in ACRDX on Ethereum Mainnet subject to exposure limits and a requirement to reduce this exposure to zero over time._
- _**Add Allocation System Instances To Grove Artifact** - Adds new Centrifuge and Morpho Instances to the Grove Artifact._
- _**Update Multisig Operators From Ozone And Amatsu To Soter Labs** - Updates references to multisig operators from Ozone and Amatsu to Soter Labs._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
