---
title: Atlas Edit Weekly Cycle Proposal - May 11, 2026
summary: This Atlas edit proposal 1) specifies the Agent Termination Process in Root Edit Primitive, 2) defines Synome Documents and the Delegated Authority update process, 3) updates Freezer Multisig configuration for Obex, 4) adds Distribution Reward Instance for 1inch to Keel Artifact, 5) fixes incorrect Signer Rotation Registry references, 6) restores Short Term SKY Staking Rewards rate, 7) capitalizes Spell and Spells throughout the Atlas, 8) codifies Prime Spell process, and 9) fixes minor inconsistencies throughout the Atlas.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-11/27897
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
start_date: 2026-05-11T16:00:00
end_date: 2026-05-14T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - May 11, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#A.1.10.2.2) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-11/27897/2). This Governance [Poll](https://sky-atlas.io/#A.1.10.2.2) will be active for three days beginning on Monday, May 11 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/242)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-05-11/27897)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Specify The Agent Termination Process In Root Edit Primitive** — Specifies the Agent Termination Process that each Prime Agent must incorporate into its Root Edit Primitive by September 1, 2026._
- _**Define Synome Documents And The Delegated Authority Update Process** — Defines Synome Documents, their relationship to Atlas Documents, and the delegated authority process for updating them._
- _**Update Freezer Multisig Configuration For Obex** — Updates the Obex Freezer Multisig signing threshold from 2/4 to 2/5, broadening control from the agent to include the Operational Executor Agent._
- _**Add Distribution Reward Instance For 1inch To Keel Artifact** — Adds 1inch as a Distribution Reward recipient under the Keel Artifact._
- _**Fix Incorrect Signer Rotation Registry References** — Removes Multisig Registry update instructions from the Signer Rotation sections, routing signer change notifications and threshold-reduction approvals to the Protocol Security Workstream Lead._
- _**Restore Short Term SKY Staking Rewards Rate** — Restores the rate for Short Term SKY Staking Rewards, updated to 50% of Step 2 Capital._
- _**Capitalize Spell And Spells Throughout The Atlas** — Capitalizes "Spell" and "Spells" throughout the Atlas as formally defined terms._
- _**Codify Prime Spell Process** — Codifies the four-week process Prime Agents follow to bring proposed actions through governance and into Sky Core Spells for on-chain execution._
- _**Fix Minor Inconsistencies Throughout The Atlas** — Fixes instances of "Core Facilitators" to the correct singular form reflecting the current governance structure; removes the "Sky" qualifier from "Sky Core Facilitator" where the context is unambiguous; fixes two typos, an incorrect UUID, and a stale citation._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
