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
The **Frame** is the foundation of your mech. It provides the superstructure you'll attach your weapons and components to, as well as the moving parts and power distribution system. Each frame has some number of slots for installing components.

#### The Speed Tradeoff
Frames come in three basic sizes: **Light**, **Standard**, and **Heavy**. Frame size determines how many slots you have and your base speed. Light mechs have the fewest slots, but move the fastest. Heavy mechs have a plethora of slots, but move at a crawl. This generally means that the more firepower your mech has, the slower it will be. 

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

More details on component slots and mech frames can be found in [Placing Components]({{ site.url }}/rules/placing-components).

#### Plating
Plating protects components by absorbing damage dealt to a particular section. You should have plating on each section of your mech.

| Stat    | Description |
| ------- | ----------- |
| Cooling | The cooling provided by the plating. |
| Shields | The amount of damage the plating can take before breaking. |
| Speed   | How much the plating slows down your mech. |
| Effect  | Special effects conferred by the plating. |

### The Power Subsystem
Every mech requires a steady supply of **Power** to keep running. The power subsystem supplies that power.

The power subsystem consists of two components: a **Power Plant** and a **Fuel Tank**. The power plant uses fuel from the fuel tank to generate a steady supply of energy. In order to have a working mech, you'll need a plant that generates enough power to feed all of your **constant-draw** components. And if you want to use any other **attachments** - like weapons - you'll need enough **excess** power left over to supply those too.

Your Power Plant can only provide a single type of Power. There are three power types to choose from: Mechanical, Electrical, and Steam. Since almost all components in your mech must use the same power type, it's important to choose the right one.

#### Power Type and Weapon Range
Mech play style varies quite a bit with power type. Mechanical mechs tend have short-range weaponry, while Electrical mechs tend to have the longest range. Steam-powered mechs have access to both short-range blunt force weapons and long-range artillery, so they're sort of a jack-of-all-trades.

| Power Type  | Range                         |
| ----------- | ----------------------------- |
| Mechanical  | Close range (50 ft to 600 ft) |
| Steam       | Mid range (50 ft to 900 ft)   |
| Electrical  | Long range (200 ft to 900 ft) |

{.table}

#### Power Plants
Power Plants convert fuel into Power. Note that all components which use power must match the power plant's power type.

TODO: stat table

### The Control Subsystem
Mechs are controlled by a combination of mechaneer input and computer automation. The control subsystem consists of the Cabin, Mainframe, and Modules.

| Class      | Description |
| ---------- | ----------- |
| Efficiency | Efficiency-focused control components minimize size, power, and heat at the cost of lower processing capacity and fewer module slots. |
| Standard   | The Standard class focuses on balancing heat, power, and processing while also providing plenty of cargo space. |
| Combat     | Combat-focused control components prioritize maximum processing at the cost of higher heat output and power draw. Combat Mainframes also provide a bonus to targeting through dedicated aim point selection routines. |

{.table}

#### Software
In order to control your mech, your Cabin and Modules need to be compatible with the **Software** running on your Mainframe. There are three different types of Software, and each has distinct benefits.

| Software  | Class      | Advantages                                                          |
| --------- | ---------- | ------------------------------------------------------------------- |
| UMIX      | Efficiency | Very small, low power usage, but limited CPU production             |
| ProtOS    | Standard   | Well balanced, produces a moderate amount of CPU at reasonable cost |
| Ursa NT   | Combat     | Bonus to Targeting, lots of CPU and mod slots, but large and hot    |

{.table}

Many components are compatible with multiple types of software, but you can only run one type of software at a time on your Mainframe. Your Cabin and all Modules must be compatible with the software running on your Mainframe. You can change software at a Garage.

#### Cabins
Cabins provide mechaneers with all the necessary controls to pilot their mechs.

TODO: stat table

#### Mainframes
Mainframes provide mechs with Processing capacity. 

TODO: stat table

#### Modules
Modules are special mech parts that use a small amount of processing in order to augment mech capabilites. They vary widely in effect, from providing combat advantages to cosmetic improvements. Modules are installed in Module slots in the Cabin.

TODO: stat table
