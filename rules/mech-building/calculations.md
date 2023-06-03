---
layout: template.njk
title: Mech Stats
permalink: rules/build-calculations/
tags: rules_page
---

## Build Calculations

This page details calculating all the stats and other numbers for your mech.

### Mech Stats

Your mech has 6 different stats describing it's physical parameters:

| Stat        | Description                                                  | Calculation
| ----------- | ------------------------------------------------------------ | ---------------------------------------- |
| Weight      | Weight of your mech in tons                                  | Weight of frame                          |
| Height      | Height of your mech in feet                                  | Height of frame                          |
| Speed       | Speed of your mech in ft/s                                   | Speed of frame - penalties from plating  |
| Strength    | Lift weight of your mech in tons                             | Strength of frame                        |
| Cargo Space | Your mech can store as many components as it has cargo space | Cargo space from cabin and attachments   |

{.table}

### Shields

Your mech has a shield pool for each section (Torso, Left Arm, Right Arm, and Legs) The max shields for each section is equal to the shields of the plating for that section. Current shields is used to track damage to your shields from combat.

### Fuel

Space is provided to track different types of fuel (see [Multiple Power Plants]({{site_url}}/rules/multiple-power-plants) for a case where you might want this). Max fuel for a given type is the sum of the fuel capacity of all tanks for that type of fuel in your mech. Tanks have different sizes and each size+type combination has a different fuel capacity.

### Resources
There are three types of {% keyword "Resources" glossary %}, CPU, Cooling, and Power, and there are three different types of power for a total of 5 unique resources. Spots for all of these are provided on the character sheet.
For any given resource there are 3 numbers to track: {% keyword "Available Resources" glossary %} (produced by components), {% keyword "Used Resources" glossary %} (used by constant-draw components), and {% keyword "Excess Resources" glossary %} (left over for excess draw components). They are related like so:

Excess Resources = Available Resources - Used Resources

Components that consume a resource will list their value for that resource as negative, whereas components that produce it will show that value as positive. Here are the component types that contribute to the resource calculations. Note that there may be exceptions to this if the component has a special {% keyword "Effect" glossary %}.

| Resource        | Calculation                                          |
| --------------- | ---------------------------------------------------- |
| Available Power | Sum power from Power Plant(s)                        |
| Used Power      | Sum power from Frame, Cabin, Mainframe(s), Cooler(s) |
| Excess Power    | Available Power - Used Power                         |

{.table}

| Resource          | Calculation                                          |
| ----------------- | ---------------------------------------------------- |
| Available Cooling | Sum cooling from Frame, Plating, and Cooler(s)       |
| Used Cooling      | Sum cooling from Power Plant(s), Cabin, Mainframe(s) |
| Excess Cooling    | Available Cooling - Used Cooling                     |

{.table}

| Resource          | Calculation                                                   |
| ----------------- | ------------------------------------------------------------- |
| Available CPU     | Sum CPU from Mainframe(s), Compute Module(s)                  |
| Used CPU          | Sum CPU from Cabin, Power Plant(s), Cooler(s), Other Module(s)|
| Excess CPU        | Available CPU - Used CPU                                      |

{.table}