---
title: Atlas Edit Monthly Cycle Proposal (AEP-$AEP_Number) - $date_MONTH_DD,_YYYY
summary: $sentence_summary
discussion_link: $discussion_link
parameters:
    input_format:
        type: single-choice
        abstain: [0]
    victory_conditions:
        - {
            type: 'and',
            conditions: [
                { type : plurality },
                { type : comparison, comparator : '>=', value: 240000000 }
            ]
        }
        - {type : default, value : 2 }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: $YYYY-MM-DDT16:00:00
end_date: $YYYY-MM-DDT16:00:00
---

# Atlas Edit Monthly Cycle Proposal (AEP-$AEP_Number) - $date_MONTH_DD,_YYYY

The $poll_deployers have placed an [Atlas Edit Monthly Cycle Proposal](https://sky-atlas.powerhouse.io/A.1.11.2_Atlas_Edit_Monthly_Cycle/430185a5-fa5d-4664-89cf-21c9e6cfc109%7C0db3326e) into the [voting system](https://vote.sky.money/polling) [on behalf of Prime Delegate $Delegate_Name]($link). This Governance Poll will be active for fourteen days beginning on $date_DAY,_MONTH_DD at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community may vote in this poll to express support or opposition to the following Atlas Edit Monthly Cycle Proposal:

- [Atlas Edit Pull Request]($Pull_Request_link)
- [Proposal Discussion Thread]($discussion_link)

A brief summary of this Atlas Edit has been provided by the Author and is shown below:

*$paragraph_summary*

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation for Atlas Edit Monthly Cycle Proposals is currently set to **240,000,000 SKY**.

**If the votes for the 'Yes' option exceed the votes for the 'No' option AND the votes for the 'Yes' option equal or exceed 240,000,000 SKY, then the following action will be taken:**

- The associated Pull Request will be merged into The Atlas.

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Sky Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
