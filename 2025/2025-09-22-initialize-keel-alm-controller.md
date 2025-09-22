---
title: Initialize Keel Mainnet ALM Controller - September 22, 2025
summary: Signal your support or opposition to initializing the Keel ALM controller instance and whitelisting the controller on the LitePSM on the Ethereum mainnet with the listed rate limit parameters.
discussion_link: https://forum.sky.money/t/october-02-2025-prime-technical-scope-keel-initialization-for-upcoming-spell/27192
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

# Poll: Initialize Keel Mainnet ALM Controller - September 22, 2025

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Protocol Facilitator. This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.1_Operational_Weekly_Cycle/b189fa17-57a9-4d4e-9780-0ce4efd94211|0db30308) will be active for three days beginning on Monday, September 22 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to initializing the Keel ALM controller and add it to the LitePSM whitelist on mainnet with the following addresses and rate limit parameters:

### Contract Addresses

- ALM Proxy: [0xa5139956eC99aE2e51eA39d0b57C42B6D8db0758](https://etherscan.io/address/0xa5139956eC99aE2e51eA39d0b57C42B6D8db0758)
    - admin: [Keel Subproxy](https://etherscan.io/address/0x355CD90Ecb1b409Fdf8b64c4473C3B858dA2c310)
- RateLimits: [0x65E7B39e508944F7C4278d3e4580f84Eb20b26a7](https://etherscan.io/address/0x65E7B39e508944F7C4278d3e4580f84Eb20b26a7)
    - admin: [Keel Subproxy](https://etherscan.io/address/0x355CD90Ecb1b409Fdf8b64c4473C3B858dA2c310)
- ALM Controller: [0xEF26BDc34F35669C235345aeF24A251B1EE80EF3](https://etherscan.io/address/0xEF26BDc34F35669C235345aeF24A251B1EE80EF3)
    - admin: [Keel Subproxy](https://etherscan.io/address/0x355CD90Ecb1b409Fdf8b64c4473C3B858dA2c310)
    - proxy: ALM Proxy listed above
    - rateLimits_: RateLimits listed above
    - vault_: [ALLOCATOR_NOVA_A_VAULT](https://etherscan.io/address/0xe4470dd3158f7a905cdea07260551f72d4bb0e77)
    - psm_: [MCD_LITE_PSM_USDC_A](https://etherscan.io/address/0xf6e72db5454dd049d0788e411b06cfaf16853042)
    - daiUsds_: [DAI_USDS](https://etherscan.io/address/0x3225737a9bbb6473cb4a45b7244aca2befdb276a)
    - cctp_: [CCTP Token Messenger](https://etherscan.io/address/0xbd3fa81b58ba92a82136038b25adec7066af3155)

### [Rate Limit](https://sky-atlas.powerhouse.io/A.2.3.9.1.1.1.1.2_Rate_Limits/264f2ff0-8d73-8050-892b-e4a0ed9828dc|9e1ff936a6cb63b1903ca2d845de) Parameters

- **LIMIT_USDS_MINT**:
    - Max amount: **10,000 USDS** (Onboarding)
    - Slope: **5,000 USDS per day**
- **LIMIT_USDS_TO_USDC**:
    - Max amount: **10,000 USDS** (Onboarding)
    - Slope: **5,000 USDS per day**
- **sUSDS (LIMIT_4626_DEPOSIT) Deposits**:
    - Max amount: **10,000 sUSDS** (Onboarding)
    - Slope: **5,000 sUSDS per day**
- **sUSDS (LIMIT_4626_WITHDRAW) Withdrawals**:
    - Max amount: **Unlimited**

### LitePSM Whitelist

- `kiss` the deployed ALM controller to allow the use of the swapNoFee functions in the LitePSM.

Please review the discussion [thread](https://forum.sky.money/t/october-02-2025-prime-technical-scope-keel-initialization-for-upcoming-spell/27192) to help inform your position before voting.

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
