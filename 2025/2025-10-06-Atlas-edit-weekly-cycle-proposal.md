---
title: Atlas Edit Weekly Cycle Proposal - October 6, 2025
summary: This Atlas Edit 1) introduces Keel, 2) specifies near term logic for the October Monthly Settlement Cycle, 3) specifies expected timing for Stage 2 of Monthly Settlement Cycle implementation, 4) clarifies the definition of Genesis Capital, 5) defines the Capped SKY Oracle Wrapper, 6) allows direct investment in Pendle PTs, 7) implements Equivalent Loss Framework for real world assets, 8) increases Required Risk Capital for Superstate, 9) adds near term logic for Plume, 10) defines the Executive Process.
discussion_link: https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-06/27272
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
start_date: 2025-10-06T16:00:00
end_date: 2025-10-09T16:00:00
---

# Atlas Edit Weekly Cycle Proposal - October 6, 2025

The Governance Facilitators have placed an [Atlas Edit Weekly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) into the [voting system](https://vote.sky.money/polling) [on behalf of Ranked Delegate Bonapublica](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-06/27272/9). This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.2_Atlas_Edit_Weekly_Cycle/4a8ad9ad-5c5d-4994-9b46-f04c0e61ce59|0db30308) will be active for three days beginning on Monday, October 6 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Weekly Cycle Proposal:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/66)
- [Proposal Discussion Thread](https://forum.sky.money/t/atlas-edit-weekly-cycle-proposal-week-of-2025-10-06/27272)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Introduce Keel** - Updates references from Launch Agent 2 to Keel now that Keel has publicly launched._
- _**Specify Near Term Logic For October Monthly Settlement Cycle** - Specifies that Amatsu will only prepare the Initial Calculation with respect to Spark for the October Monthly Settlement Cycle._
- _**Specify Expected Timing For Stage 2 Of Monthly Settlement Cycle Implementation** - Adds an expected timeline of January 1, 2026 for Stage 2 of the implementation of the Monthly Settlement Cycle._
- _**Clarify Definition Of Genesis Capital** - Clarifies the definition of Genesis Capital for the Genesis Capital Backstop._
- _**Define Capped SKY Oracle Wrapper** - Defines the Capped SKY Oracle wrapper to prepare for the launch of stUSDS._
- _**Allow Direct Investment In Pendle PTs** - Allows Prime Agents to invest directly in Pendle PTs backed by Ethena Exposures and defines the Required Risk Capital for doing so._
- _**Implement Equivalent Loss Framework For Real World Assets** - Implements an Equivalent Loss framework for Real World Assets to reflect the lower risk of these assets due to the possibility of recovery through legal recourse._
- _**Increase Required Risk Capital For Superstate** - Increases the Required Risk Capital Percentage for USCC._
- _**Add Near Term Logic For Plume** - Adds near term risk requirements for Plume to support Grove’s investment into ACRDX._
- _**Define The Executive Process** - Adds an initial end-to-end process definition for the Sky Executive Process._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Weekly Cycle Proposals is currently set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
