---
title: Bootstrapping Atlas Edit Proposal - November 6, 2025
summary: This bootstrapping Atlas edit 1) authorizes the Genesis Capital transfer to Launch Agent 4 2) adds documentation for Rate Limits on Base for Grove
discussion_link: https://forum.sky.money/t/out-of-schedule-atlas-edit-proposal/27393
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
start_date: 2025-11-06T16:00:00
end_date: 2025-11-10T16:00:00
---

# Bootstrapping Atlas Edit Proposal - November 6, 2025

The Core Facilitators have placed a [Bootstrapping Governance Poll](https://sky-atlas.io/#A.0.1.2.1.1) into the [voting system](https://vote.sky.money/polling). This Governance [Poll](https://sky-atlas.io/#A.1.10.2) will be active for four days beginning on Thursday, November 6 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following bootstrapping Atlas edit:

- [Atlas Edit Pull Request](https://github.com/sky-ecosystem/next-gen-atlas/pull/107)
- [Proposal Discussion Thread](https://forum.sky.money/t/out-of-schedule-atlas-edit-proposal/27393)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

_This proposal includes the following edits:_

- _**Authorize Genesis Capital Transfer To Launch Agent 4** - Authorizes a transfer of 21,000,000 USDS to Launch Agent 4 for its Genesis Capital._
- _**Add Documentation For Rate Limits On Base** - Adds rate limits on Base for Grove._

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for this proposal is set to **480,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 480,000,000 SKY, then the following actions will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
