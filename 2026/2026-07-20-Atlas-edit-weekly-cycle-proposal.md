---
title: Atlas Edit Weekly Cycle Proposal - July 20, 2026
summary: This Atlas edit proposal 1) reduces the Sky Spread and updates the Reference Rate to SOFR, 2) migrates per-Agent Foundation and Development Company entries into standard parameters, 3) corrects a mislabeled capital term from RRC to CRR, 4) renames SEJRC to PEJRC across the Atlas, 5) renames Spark's Paxos Instances to the Via-Paxos convention, and 6) repoints Ecosystem Operational References repository links to the Soter Labs organization.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-20/28062
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
start_date: 2026-07-20T16:00:00
end_date: 2026-07-23T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - July 20, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate cloaky](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-20/28062/3). This Governance Poll will be active for three days beginning on Monday, July 20 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/280)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-20/28062)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Reduce The Sky Spread And Update The Reference Rate To SOFR** — Reduces the Sky Spread from 0.1% to 0%, so the total spread between the Sky Savings Rate and the Base Rate is the 0.2% Distribution Reward Fee alone, and updates the subsidized-borrowing and Actively Stabilizing Collateral reference rate from the Treasury Bill Rate to SOFR._
- _**Migrate Per-Agent Foundation And Development Company Into Standard Parameters** — Promotes Prime Agents' Foundation and Development Company entries from Custom Instance Parameters to standard parameters; a structural relocation that does not change which entities are associated with any Agent._
- _**Correct A Mislabeled Capital Term (RRC → CRR)** — Corrects "Instance Total RRC" to "Instance Total CRR" in the rule setting a 100% value when a component RRC cannot be calculated; a terminology fix, not a change to the rule._
- _**Rename SEJRC To PEJRC Across The Atlas** — Renames the abbreviation for Prime-External Junior Risk Capital from SEJRC to PEJRC across the Atlas._
- _**Rename Spark's Paxos Instances To The Via-Paxos Convention** — Renames Spark's four Paxos stablecoin-transfer Instances to the "X To Y Via Paxos" form, clarifying transfer direction; naming only._
- _**Repoint Ecosystem Operational References Repository Links To The Soter Labs Organization** — Updates the Ecosystem Operational References repository links from the Atlas Axis organization to the Soter Labs organization, following the repository's move._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
