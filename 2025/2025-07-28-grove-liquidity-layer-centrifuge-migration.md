---
title: Grove Liquidity Layer Mainnet - Onboard Centrifuge V3 and Offboard Centrifuge V2 - July 28, 2025
summary: Signal your support or opposition to onboarding Centrifuge V3 to the Grove Liquidity Layer and offboarding Centrifuge V2.
discussion_link: https://forum.sky.money/t/august-7-2025-proposed-changes-to-grove-for-upcoming-spell/26883
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
start_date: 2025-07-28T16:00:00
end_date: 2025-07-31T16:00:00
---

# Poll: Grove Liquidity Layer Mainnet - Onboard Centrifuge V3 and Offboard Centrifuge V2 - July 28, 2025

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Facilitators. This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.1_Operational_Weekly_Cycle/b189fa17-57a9-4d4e-9780-0ce4efd94211|0db30308) will be active for three days beginning on Monday, July 28 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following proposal from Grove Labs to migrate from Centrifuge V2 to Centrifuge V3.

Grove Labs proposes a transition from the existing Tokenized JAAA and Tokenized JTRSY vaults on Centrifuge V2 to the Tokenized JAAA and Tokenized JTRSY vaults on Centrifuge V3. This migration allows Grove to leverage new features offered by Centrifuge V3, such as the capability to transfer vault tokens across multiple chains supported by Centrifuge V3. Additionally, this update aligns Grove’s infrastructure with Centrifuge’s latest tech stack.

The underlying assets and structures remain the same across the V2 and V3 implementations. Existing vault share tokens held by the Grove ALM Proxy will remain unaffected and work directly with Centrifuge V3. Centrifuge V3 has undergone a series of security audits, available [here](https://docs.centrifuge.io/developer/protocol/security/). Updated addresses can be verified [here](https://docs.centrifuge.io/developer/protocol/deployments/).

- [Mainnet] JTRSY (V2) Address: [0x36036fFd9B1C6966ab23209E073c68Eb9A992f50](https://etherscan.io/address/0x36036fFd9B1C6966ab23209E073c68Eb9A992f50)
    - Parameters:
        - Deposits:
            - Max amount: **0 USDC** (Offboarding)
            - Slope: **0 USDC** (Offboarding)
        - Withdrawals:
            - Max amount: **Unlimited** (remains the same)
- [Mainnet] JAAA (V2) Address: [0xE9d1f733F406D4bbbDFac6D4CfCD2e13A6ee1d01](https://etherscan.io/address/0xE9d1f733F406D4bbbDFac6D4CfCD2e13A6ee1d01)
    - Parameters:
        - Deposits:
            - Max amount: **0 USDC** (Offboarding)
            - Slope: **0 USDC** (Offboarding)
        - Withdrawals:
            - Max amount: **Unlimited** (remains the same)
- [Mainnet] JTRSY (V3) Address: [0xFE6920eB6C421f1179cA8c8d4170530CDBdfd77A](https://etherscan.io/address/0xFE6920eB6C421f1179cA8c8d4170530CDBdfd77A)
    - Parameters:
        - Deposits:
            - Max amount: **50 million USDC** (same as V2)
            - Slope: **50 million USDC per day** (same as V2)
        - Withdrawals:
            - Max amount: **Unlimited** (same as V2)
- [Mainnet] JAAA (V3) Address: [0x4880799eE5200fC58DA299e965df644fBf46780B](https://etherscan.io/address/0x4880799eE5200fC58DA299e965df644fBf46780B)
    - Parameters:
        - Deposits:
            - Max amount: **100 million USDC** (same as V2)
            - Slope: **50 million USDC per day** (same as V2)
        - Withdrawals:
            - Max amount: **Unlimited** (same as V2)

Please review the discussion [thread](https://forum.sky.money/t/august-7-2025-proposed-changes-to-grove-for-upcoming-spell/26883) to help inform your position before voting.

Rate limit documentation can be found [here](https://docs.spark.fi/dev/spark-liquidity-layer/spark-alm-controller#rate-limits).

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
