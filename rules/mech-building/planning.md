---
layout: template.njk
title: Planning
permalink: /rules/build-planning/
tags: rules_page
---
## Planning a Mech Build
The first step in building your mech is planning. Typically you first want to have an idea of how you want your mech to feel. Up-close brawler mechs will feel very different from mid-range gunners or long-range snipers. Think about how you want to play -- and how that relates to your mechaneer's personality.

Once you have an idea of how you want to play, you should select a Mech Frame and Power Type. Read on for information on how each of these affect your mech.

### The Mech Frame
The **Frame** is the foundation of your mech. It provides the superstructure you'll attach your weapons and components to, as well as the moving parts and power distribution system. Each frame has some number of slots for installing components.

#### The Speed Tradeoff
Frames come in three basic sizes: **Light**, **Standard**, and **Heavy**. Frame size determines how many slots you have and your base speed. Light mechs have the fewest slots, but move the fastest. Heavy mechs have a plethora of slots, but move at a crawl. This generally means that the more firepower your mech has, the slower it will be. 

### The Power Subsystem
Every mech requires a steady supply of **Power** to keep running. The power subsystem supplies that power.

The power subsystem consists of two components: a **Power Plant** and a **Fuel Tank**. The power plant uses fuel from the fuel tank to generate a steady supply of energy. In order to have a working mech, you'll need a plant that generates enough power to feed all of your **constant-draw** components. And if you want to use any other **attachments** - like weapons - you'll need enough **excess** power left over to supply those too.

Your Power Plant can only provide a single type of Power. There are three power types to choose from: Mechanical, Electrical, and Steam. Since almost all components in your mech must use the same power type, it's important to choose the right one.

#### Power Type and Weapon Range
Mech play style varies quite a bit with power type. Mechanical mechs tend have short-range weaponry, while Electrical mechs tend to have the longest range. Steam-powered mechs have access to both short-range Blunt Force weapons and long-range artillery, so they're sort of a jack-of-all-trades.

| Power Type  | Range                         |
| ----------- | ----------------------------- |
| Mechanical  | Close range (50 ft to 600 ft) |
| Steam       | Mid range (50 ft to 900 ft)   |
| Electrical  | Long range (200 ft to 900 ft) |

{.table}

### The Control Subystem
A mech is only useful if you can get it to do what you want. That's what the control subsystem is for: it provides a way for mechaneers to interact with their mechs. 

The control subsystem consists of the **Cabin**, **Mainframe**, and **Modules**.

Arguably the most important component in the control subsystem is the Cabin. This is where your mechaneer resides while piloting your mech. Cabins contain a wide range of things: a (hopefully) comfortable place to sit, instruments and controls, and cargo space. The Cabin also powers your Mainframe. (This is why your mainframe doesn't have a power type, even though it draws power). Last but not least, Cabins have a number of slots for installing Modules that modify the behavior of your mech.

The second most important bit of the control subsystem is the Mainframe. This provides your mech with Processing resources. 

Finally we have Modules. Modules consume some amount of Processing in order to provide extra capabilities to your mech. There are a wide variety of modules that do many different things. Some add passive scanning capabilities to your mech. Others improve the accuracy of your weapons. Others still help you optimize resource usage. 

#### Software
In order to control your mech, your Cabin and Modules need to be compatible with the **Software** running on your Mainframe. There are three different types of Software, and each has distinct benefits:

| Software  | Advantages                                                          |
| --------- | ------------------------------------------------------------------- |
| ProtOS    | Well balanced, produces a moderate amount of CPU at reasonable cost |
| Ursa NT   | Bonus to Targeting, lots of CPU and mod slots, but large and hot    |
| UMIX      | Very small, low power usage, but limited CPU production             |

{.table}

Many components are compatible with multiple types of software, but you can only run one type of software at a time on your Mainframe. You can change software at a Garage. As long as your Cabin and Modules can all run the same software as your Mainframe, your mech will be operable.

Next, check out [Selecting Components]({{ site.url }}/rules/selecting-components).