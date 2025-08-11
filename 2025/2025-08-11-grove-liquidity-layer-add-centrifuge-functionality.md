---
title: Grove Liquidity Layer Mainnet - Upgrade Controller - Add Centrifuge Functionality - August 11, 2025
summary: Signal your support or opposition to upgrade the Grove Liquidity Layer's ForeignController on mainnet with added functionality related to ERC7540 Centrifuge vaults.
discussion_link: https://forum.sky.money/t/august-21-2025-proposed-changes-to-grove-for-upcoming-spell/26993
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2025-08-11T16:00:00
end_date: 2025-08-14T16:00:00
---

# Poll: Grove Liquidity Layer Mainnet - Upgrade Controller - Add Centrifuge Functionality - August 11, 2025

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Faciltiators. This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.1_Operational_Weekly_Cycle/b189fa17-57a9-4d4e-9780-0ce4efd94211|0db30308) will be active for three days beginning on Monday, August 11 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes to upgrading the ForeignController on Grove Liquidity Layer mainnet with added functionality related to ERC7540 Centrifuge vaults as follows:

LIMIT_CENTRIFUGE_TRANSFER:

- JAAA (V3) token: 0x1121F4e21eD8B9BC1BB9A2952cDD8639aC897784
- Ethereum destinationCentrifugeId: 1
- Parameters
  - Max amount: 50 million JAAA
  - Slope: 50 million JAAA per day
- JTRSY (V3) token: 0xFE6920eB6C421f1179cA8c8d4170530CDBdfd77A
- Ethereum destinationCentrifugeId: 1
- Parameters:
  - Max amount: 50 million JTRSY
  - Slope: 50 million JTRSY per day

Furthermore, `setCentrifugeRecipient` will be called with following parameters for the Grove_ALM_Proxy on Ethereum:

- centrifugeId: 1
- receipient: Ethereum.ALM_PROXY

Please review the discussion [thread](https://forum.sky.money/t/august-21-2025-proposed-changes-to-grove-for-upcoming-spell/26993) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**

- This change will be included in an upcoming Executive Vote.
- It is expected that this Executive Vote will take place within 30 days of this poll passing, absent external factors.
- If the Executive Vote passes, then these changes will become active in the Sky Protocol after the [GSM Pause Delay](https://sky-atlas.powerhouse.io/A.1.9.2.1_Pause_Delay/a98b8227-95f6-4711-9d8d-f52cbc6ad2d0|0db30758e055) has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Sky Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
