---
title: Atlas Edit Weekly Cycle Proposal - July 27, 2026
summary: This Atlas edit proposal 1) reassigns the Core GovOps role from Atlas Axis to Soter Labs, 2) enables Grove self-governance with a new Delegation Framework, 3) requires mutual consent to modify or terminate Ecosystem Accords, 4) adds a Morpho deployment verification guide and factory-deployment review requirement, 5) exempts emergency-response multisigs from the standard signer thresholds, 6) moves Spark's USDT Sky Direct Exposure from Curve to Uniswap, 7) documents Grove Monolithic Mainnet and Foreign Controller functions, 8) consolidates Grove's Diamond PAU contracts and functions into the shared Sky Core section, 9) corrects Grove Paxos bridge Instance names and the USDT0 Underlying Asset Address, and 10) aligns Base Rate notation in the Borrow Rate Mechanism formula.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-27/28115
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
start_date: 2026-07-27T16:00:00
end_date: 2026-07-30T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - July 27, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate BLUE](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-27/28115/2). This Governance Poll will be active for three days beginning on Monday, July 27 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/283)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-27/28115)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Reassign The Core GovOps Role From Atlas Axis To Soter Labs** — Reassigns the Core GovOps role from Atlas Axis to Soter Labs, and updates the dependent Authorized Representative lists accordingly. Beyond reassigning the role to Soter Labs, the Emergency Response Group membership is updated to reflect recent changes in the Ecosystem. It also removes an obsolete pre-Core-GovOps clause that had embedded the incubating Ecosystem Actor in Core Facilitator channels for observation, keeping its one still-needed effect — that Soter Labs may assign more than two members to the Emergency Response communication channels._
- _**Enable Grove Self-Governance With A New Delegation Framework** — Adds Grove's Delegation Framework, letting GROVE holders delegate their voting power on Root Edit proposals to Delegates. Also operationalizes Grove's Root Edit Primitive._
- _**Require Mutual Consent To Modify Or Terminate Ecosystem Accords** — Adds a new section requiring the mutual consent of each affected party to modify, suspend, or terminate an Ecosystem Accord. Sky Governance may still act unilaterally for administrative corrections, dispute-resolution decisions, misalignment with the Sky Ecosystem, or a change made in accordance with conditions the Accord already specifies for itself. Where a party is a self-governing Prime, its representative must obtain token-holder ratification before consenting._
- _**Add A Morpho Deployment Verification Guide And Factory-Deployment Review Requirement** — Adds a Morpho Deployment Verification Guide to the Operational Reference Materials. Also adds a general requirement: for a vault or market deployed through a smart contract factory that holds no capital from Sky's Collateral Portfolio, a developer on the deploying team who did not perform the deployment must review the Technical Scope and conduct deployment verification._
- _**Exempt Emergency-Response Multisigs From The Standard Signer Thresholds** — Exempts multisigs whose sole capability is an emergency-response function — such as an emergency freeze, pause, or compromised-Relayer removal — from the standard minimum-signer and signing-threshold requirements, as a transitionary measure._
- _**Move Spark's USDT Sky Direct Exposure From Curve To Uniswap** — Records Spark's move of its USDT Sky Direct Exposure from Curve to Uniswap, restructures the Current Sky Direct Exposures list into a dated table, and adds a new Previous Sky Direct Exposures list so the retired Curve designation is preserved rather than deleted._
- _**Document Grove Monolithic Mainnet And Foreign Controller Functions** — Updates the documentation of the Grove Liquidity Layer's Monolithic Mainnet Controller functions to reflect Grove's deployed contract, and adds a new Monolithic Foreign Controller Contract Functions section for its operations on foreign chains._
- _**Consolidate Grove's Diamond PAU Contracts And Functions Into The Shared Sky Core Section** — Grove's Beacon and Facet contract entries duplicated the ecosystem-shared singletons, so this replaces them with references to the Liquidity Layer Shared Contracts and adds the Basin and PSM controller functions Grove uses to the shared Diamond PAU Controller Functions section. Also aligns the shared controller-function wording with the deployed contract code and updates Grove's ALM Proxy whitelisting note to past tense. No new addresses or on-chain parameter changes._
- _**Correct Grove Paxos Bridge Instance Names And USDT0 Underlying Asset Address** — Title-cases the two Grove Paxos bridge Instance names to match the Atlas naming convention, and corrects the USDT0 (Aave V3, Plasma) Underlying Asset Address._
- _**Align Base Rate Notation In The Borrow Rate Mechanism Formula** — Changes "base_rate" to "Base_Rate" in the Borrow Rate Mechanism subsidy formula to match the notation used elsewhere in the Atlas._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
