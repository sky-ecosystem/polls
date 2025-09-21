---
title: Grove Liquidity Layer Mainnet and Plume - Onboard Apollo ACRDX - September 22, 2025
summary: Signal your support or opposition to onboarding Apollo ACRDX to the Grove Liquidity Layer on Plume.
discussion_link: https://forum.sky.money/t/october-2-2025-proposed-changes-to-grove-for-upcoming-spell/27190
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
start_date: 2025-09-22T16:00:00
end_date: 2025-09-25T16:00:00
---

# Poll: Grove Liquidity Layer Mainnet and Plume - Onboard Apollo ACRDX - September 22, 2025

The Governance Faciltiators have placed a Governance Poll into the voting system on behalf of the Stability Facilitator. This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.1_Operational_Weekly_Cycle/b189fa17-57a9-4d4e-9780-0ce4efd94211|0db30308) will be active for three days beginning on Monday, September 22 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following changes to facilitate the onboarding of Apollo ACRDX to the Grove Liquidity Layer on Plume. A risk assessment for this deployment has been produced and can be found [here](https://forum.sky.money/t/anemoy-tokenized-apollo-diversified-credit-fund-risk-assessment/27186).

### Associated DAO Resolution

If this poll passes, Sky Governance will approve the DAO Resolution authorizing the subscription to the Anemoy Tokenized Apollo Diversified Credit Fund by Aspen Grove Ltd with the IPFS hash [bafkreiefed2vyibzwd7ajacaezuq5r422z4zoo4lnbk3ximd5mzktwjzfi](https://gateway.pinata.cloud/ipfs/bafkreiefed2vyibzwd7ajacaezuq5r422z4zoo4lnbk3ximd5mzktwjzfi)

### [Plume] Apollo ACRDX Rate Limits

* ACRDX: plume:[0x354a9222571259457B2e98b2285B62e6a9bf4eD3](https://explorer.plume.org/address/0x354a9222571259457B2e98b2285B62e6a9bf4eD3)
  * Deposits:
    * Max amount: **20 million USDC**
    * Slope: **20 million USDC per day**
  * Withdrawals:
    * Max amount: **Unlimited**

### [Mainnet and Plume] JTRSY Transfer and Redemption Rate Limits

Grove will be redeeming JTRSY on Plume for the USDC liquidity necessary to purchase 50m of ACRDX. The following rate parameters will be necessary to transfer JTRSY shares to Plume and redeem it for USDC.

#### [Mainnet] LIMIT_CENTRIFUGE_TRANSFER Rate Limits

- JTRSY token: eth:[0xFE6920eB6C421f1179cA8c8d4170530CDBdfd77A](https://etherscan.io/address/0xFE6920eB6C421f1179cA8c8d4170530CDBdfd77A)
- Plume destinationCentrifugeId: **4**
    * Max amount: **20 million JTRSY**
    * Slope: **20 million JTRSY per day**

#### [Mainnet] setCentrifugeRecipient

- centrifugeId: **4**
- receipient: Plume.ALM_PROXY

#### JTRSY Withdrawl Rate Limits

- JTRSY token: plume:[0x818A3593340622c1D6A51B039e191F2f8C99A1F2](https://explorer.plume.org/address/0x818A3593340622c1D6A51B039e191F2f8C99A1F2)
- Max amount: **20 million USDC**
- Slope: **20 million USDC per day**

Please review the discussion [thread](https://forum.sky.money/t/october-2-2025-proposed-changes-to-grove-for-upcoming-spell/27190) to help inform your position before voting.

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
