---
layout: template.njk
title: Validating
permalink: rules/build-validating/
tags: rules_page
---
## Validating a Mech Build
Once you've selected components, you have to make sure they actually work together. This section summarizes all the things you should double check to make sure your mech is a valid build.

### Component Placement
Double check that:
- You only have one cabin
- Only attachments (weapons and equipment) are in the arm and leg sections
- Large components are in large slots 

### Power Type
Before calculating any resources it's a good idea to get the hard constraints out of the way. First up is {% keyword "Power Type" glossary %}. If you are doing a single power plant mech (or a multi-power plant mech but they all produce the same power type), then all your other components must match the power type of your power plant. For mechs with multiple power types see [Multiple Power Plants]({{site_url}}/rules/multiple-power-plants/).

### Software
Your cabin and all your modules must be compatible with the {% keyword "Software" glossary %} of your mainframe.

### Resource Calculations
There are three parts to {% keyword "Resources" glossary %}, {% keyword "Available Resources" glossary %} (produced by components), {% keyword "Used Resources" glossary %} (used by constant-draw components), and {% keyword "Excess Resources" glossary %} (left over for excess draw components). They are related like so:

Excess Resources = Available Resources - Used Resources

To make sure you have enough resources simply go through your list of components and sum up the available and used resources and calculated the remaining excess resources. Then check to make sure your excess resources is enough to use as many of your excess-draw components as you want to in a single turn.

Here are the component types that contribute to the resource calculations. Note that there may be exceptions to this if the component has a special {% keyword "Effect" glossary %}.

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