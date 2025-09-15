---
title: Allocator Instance Operator Adjustment - September 15, 2025
summary: Signal your support or opposition to modifying Launch Agent 2 allocator instance.
discussion_link: https://forum.sky.money/t/technical-scope-of-the-nova-allocator-adjustment/27175
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
start_date: 2025-09-15T16:00:00
end_date: 2025-09-18T16:00:00
---

# Poll: Allocator Instance Operator Adjustment - September 15, 2025

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Protocol Facilitator. This Governance [Poll](https://sky-atlas.powerhouse.io/A.1.10.1_Operational_Weekly_Cycle/b189fa17-57a9-4d4e-9780-0ce4efd94211|0db30308) will be active for three days beginning on Monday, September 15 at 16:00 UTC.

**This is a binary vote.**

- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to executing the following series of actions related to the genesis process pertaining to Launch Agent 2, including advancing its [Single Instance Configuration Document](https://sky-atlas.powerhouse.io/A.AG3.2.1.P1.3.1_Single_Instance_Configuration_Document/1c2f2ff0-8d73-818f-9207-c5b22ef0f5ff%7C7896ed3326389c8cea83117c5d3aa269):

- Offboard previously ratified operator in favor of a SubProxy-based setup:
  - Remove Operator ability to transfer USDS out of the Nova allocator buffer via:
    - `AllocatorBufferLike(ALLOCATOR_NOVA_A_BUFFER).approve(USDS, NOVA_OPERATOR, 0);`
  - Remove Operator from the role 0 via:
  - `AllocatorRolesLike(ALLOCATOR_ROLES).setUserRole("ALLOCATOR-NOVA-A", NOVA_OPERATOR, 0, false);`
  - Remove ability to "draw" and "wipe" for the role 0 via:
    - `AllocatorRolesLike(ALLOCATOR_ROLES).setRoleAction("ALLOCATOR-NOVA-A", 0, ALLOCATOR_NOVA_A_VAULT, VaultLike.draw.selector, false);`
    - `AllocatorRolesLike(ALLOCATOR_ROLES).setRoleAction("ALLOCATOR-NOVA-A", 0, ALLOCATOR_NOVA_A_VAULT, VaultLike.wipe.selector, false);`
- Set the SubProxy address to [0x355CD90Ecb1b409Fdf8b64c4473C3B858dA2c310](https://etherscan.io/address/0x355CD90Ecb1b409Fdf8b64c4473C3B858dA2c310)
- Set up the Subproxy:
  - Set SubProxy as the ilk admin instead of the Pause Proxy via:
    - `AllocatorRolesLike(ALLOCATOR_ROLES).setIlkAdmin("ALLOCATOR-NOVA-A", NOVA_PROXY);`
  - Move ownership of the ALLOCATOR_NOVA_A_VAULT to the SubProxy via:
    - `WardsAbstract(ALLOCATOR_NOVA_A_VAULT).rely(NOVA_PROXY);`
    - `WardsAbstract(ALLOCATOR_NOVA_A_VAULT).deny(MCD_PAUSE_PROXY);`
  - Move ownership of the ALLOCATOR_NOVA_A_BUFFER to the SubProxy via:
    - `WardsAbstract(ALLOCATOR_NOVA_A_BUFFER).rely(NOVA_PROXY);`
    - `WardsAbstract(ALLOCATOR_NOVA_A_BUFFER).deny(MCD_PAUSE_PROXY);`


Please review the discussion [thread](https://forum.sky.money/t/technical-scope-of-the-nova-allocator-adjustment/27175) to help inform your position before voting.

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
