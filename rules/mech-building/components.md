---
layout: template.njk
title: Components
permalink: /rules/component-details/
tags: rules_page
---
<!-- The goal of this page is to provide a detailed reference for component information -->
## Components
A mech is exactly the sum of its parts. This page explains the details and stats of different mech parts and components, grouped by part type.

### Common Traits
Almost every part will have a few basic traits:

| Trait         | Explanation |
| ------------- | ----------- |
| Manufacturer  | The in-game group that manufactures a part. |
| Model         | The part's model name as given by the manufacturer. |
| Description   | A short description of the item. Usually provides some information about the design or history of the part. |

{.table}

### Mech Frames
The frame is the core superstructure of a mech. It defines key features such as size and maneuverability.

| Class     | Description |
| --------- | ----------- |
| Light     | Light frames have little space for components, but tend to be fast and hard to hit. |
| Standard  | Standard frames provide a good balance between movement speed and space for components. |
| Heavy     | Heavy frames have loads of component slots, but are very slow as a result of their size. |

{.table}

| Stat       | Description |
| ---------- | ----------- |
| Strength   | The maximum weight (in tons) a mech is rated to lift. |
| Speed      | How quickly a mech can maneuver. Determines how far you can move in one turn. |
| Weight     | The mech's weight (in tons). |
| Height     | The mech's height (in feet). |
| Power      | The amount of power used by the frame's moving parts. |
| Cooling    | The cooling provided by the frame. |
| Processing | The amount of processing used by the frame's sensors and electronics. |

{.table}

#### Component Slots
Mech frames have a number of slots where other components are installed. Slots come in two standard sizes: small (S) and large (L). Some slots are more exposed than others, and therefore more likely to be hit. 

The number of slots in a frame depends on the frame class. 

| Stat       | Description |
| ---------- | ----------- |
| ID         | Used to identify which slot a component is installed in. |
| Size       | The maximum component size which will fit in a slot. |
| Hit Values | The minimum and maximum range you have to roll when targeting in order to hit a particular slot. See [Combat]({{ site.url }}/rules/combat). |

{.table}
