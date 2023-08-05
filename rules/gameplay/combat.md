---
layout: template.njk
title: Combat
permalink: rules/combat/
tags: rules_page
---
## Combat
In the cruel world of Mechtronica you're sure to face a scuffle every now and then, whether you're a mercenary, miner, or meanderer.

### Attacking
Attacking happens in a few steps:
1. **Aiming**: Select the section on the opponent mech to aim for.
2. **Firing**: Roll 1d100. You may then adjust this number up or down up to the targeting bonus of your weapon. If the roll falls within any of the section's roll ranges then you hit the corresponding slot.
3. **Dealing Damage**: After a successful attack, deal damage to your opponent.
    - If your opponent has shields on the section you hit, deal the damage to the shields in that section.
    - If your opponent's shields in the section you hit have been destroyed, then the component in the slot you hit is now damaged.
    - If the component was already damaged then it is instead now broken (but may be scrapped later).

<!-- TODO: Consider adding a section on how to record damage -->

### Consequences
Losing some components will have severe consequences for you:
- If one of your components being [damaged or broken]({{site_url}}/rules/component-states/) leaves you with too few resources to power your constant draw components:
    - Your mech will immediately shut down.
    - Your will be unable to use your mech until you have disabled some components or made repairs.
- If a joint is broken:
    - You can no longer use attachments in the section attached to that joint.
    - If the broken joint is your in your legs section: you can no longer move.

### Dying
If your cabin is broken, and no other special circumstances or effects prevent it, your mechaneer dies.