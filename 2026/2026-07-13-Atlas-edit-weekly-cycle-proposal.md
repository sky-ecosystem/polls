---
title: Atlas Edit Weekly Cycle Proposal - July 13, 2026
summary: This Atlas edit proposal 1) updates the Monthly Settlement Cycle Process, 2) adds a timeliness requirement to Aligned Delegate voting participation, 3) clarifies that Genesis Capital phase-out is not a repayment to Sky, 4) adds the canonical Sky Frontier Foundation multisig address, 5) reduces the Instance Financial CRR for JAAA on Avalanche, 6) adds off-chain parameters to the Osero SparkLend USDS Instance, 7) updates Spell validation and TechOps communications to the Sky Forum and Slack, 8) generalizes the Junior Risk Capital Rental Primitive into the Risk Capital Rental Primitive, 9) updates stale URLs, and 10) moves SkyLink Bridges from Governance Scope to Protocol Scope.
discussion_link: https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-13/28043
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
start_date: 2026-07-13T16:00:00
end_date: 2026-07-16T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - July 13, 2026

The Core Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.io/#14e99d92-71fc-44d9-9dbf-933bce2e1b32) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate BLUE](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-13/28043/2). This Governance Poll will be active for three days beginning on Monday, July 13 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/277)
- [Proposal Discussion Thread](https://forum.skyeco.com/t/atlas-edit-weekly-cycle-proposal-week-of-2026-07-13/28043)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Update the Monthly Settlement Cycle Process** — Removes the Core Council Risk Advisor's Independent Calculation from the Monthly Settlement Cycle; amounts are now resolved through the Operational Executor Agent's Initial Calculation, the Prime-Agent dispute process, and Core GovOps's Final Calculation. Also aligns the documented process with practice: the first Initial Calculation begins the Monthly Settlement Cycle forum thread, and the last Initial Calculation includes the Core Council and Aligned Delegates Buffer amounts._
- _**Add A Timeliness Requirement To Aligned Delegate Voting Participation** — Adds that, for Executive Votes, a vote counts toward an Aligned Delegate's participation only where it is cast within three (3) business days of the vote being posted._
- _**Clarify Genesis Capital Phase-Out Is Not A Repayment To Sky** — Clarifies that Genesis Capital phase-out reduces an Agent's Genesis Capital through Phased-Out Genesis Capital and involves no repayment or transfer of capital from the Genesis Agents to Sky._
- _**Add The Canonical Sky Frontier Foundation Multisig Address** — Records the Sky Frontier Foundation's canonical multisig address in its definition as a standing source of truth for verifying transfer destinations._
- _**Reduce The Instance Financial CRR For JAAA On Avalanche** — Reduces the Instance Financial CRR for JAAA on Avalanche from 2.1% to 1.6%._
- _**Add Off-Chain Parameters To The Osero SparkLend USDS Instance** — Sets the Osero SparkLend USDS Instance's Maximum Exposure to 5,000,000 USDS and its Capital Ratio Requirement to 100%._
- _**Update Spell Validation And TechOps Communications To The Sky Forum And Slack** — With the Spell address handover now on the Sky Forum, points Spell validators to the Forum handover thread for context, adjusts public validation-issue reporting to the Sky Forum to match, and moves the TechOps whitelisting request to Slack. Because validation issues are now reported publicly, this also removes the separate escalation route for a potentially malicious Core Facilitator — a public Forum report already reaches Aligned Delegates and wider Sky Governance directly._
- _**Generalize The Junior Risk Capital Rental Primitive Into The Risk Capital Rental Primitive** — Broadens the Primitive to cover rental of both Junior Risk Capital and Originated Senior Risk Capital between Prime Agents, where it previously covered only Junior Risk Capital._
- _**Update Stale URLs** — Updates Chainlog and public-dashboard references from sky.money sub-sites to their canonical skyeco.com equivalents._
- _**Move SkyLink Bridges From Governance Scope To Protocol Scope** — Relocates the SkyLink Bridge documentation from the Governance Scope to a new Section under the SkyLink Article in the Protocol Scope. The documentation is moved as-is, with no content changes._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
