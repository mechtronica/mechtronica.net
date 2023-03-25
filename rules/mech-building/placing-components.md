---
layout: template.njk
title: Placing Components
permalink: rules/placing-components/
tags: rules_page
---
## Placing Components

### Mech Frames and Sections
Mech Frames are divided up into four sections:
 - Left Arm
 - Right Arm
 - Torso
 - Legs

<img src="{{ site.url }}/images/sections-diagram.png" alt="Mechs have 4 sections: Left Arm, Right Arm, Torso, and Legs">

Each section of the frame will have some combination of joints and component slots. More on those in the sections below.

#### Component Slots
Most sections of a mech frame will have some number of slots where you can install components.

Component slots come in two sizes: small (S) and large (L). Large components are too big to fit in small slots, but you can fit a small component in a large slot with room to spare.

<!-- TODO: make a diagram here that shows S/L component fitment in S/L slots. Like a Punnett square but for components and slots instead of genes -->

#### Joints
In addition to component slots, your mech frame has **Joints** which help it move and transfer power between sections. If one of your joints is damaged by an opponent's attack, you won't be able to use any components in the corresponding section of your mech! If your Legs section is disabled, your mech won't even be able to walk.

For this reason, you may want to consider placing the most critical equipment in the Torso section of your mech. Unlike the Arm and Legs sections, the Torso cannot be disabled by taking out a joint. (That's also why some components can *only* be placed in your mech's Torso. We'll get to that below.)

#### Hit Values
You may have noticed that each Component slot and Joint is has a pair of hit values. When your mech is under attack, your opponents will roll a die to determine where their attack lands (See [Combat]({{ site.url }}/rules/combat) for more on this). The hit values on each slot are the minimum and maximum value that your opponent has to roll in order to hit the component in that slot.

<!-- TODO: consider adding an example -->

When placing your components, you'll want to keep in mind how likely each slot is to be hit by an opponent's attack.

### Placement Limitations
Some components have limitations on where they can be placed in your mech.
 - **Plating**: Plating goes on the outside of your mech. A unit of plating covers one section of your mech, so you'll need 4 units of plating in order to protect your whole mech.
 - **Infrastructure Components**: Infrastructure Components (power plants, coolers, mainframes, and cabins) can only go in the torso.
 - **Attachments**: Weapons and other attachments can be placed anywhere in your mech’s frame.
 - **Modules**: Modules are installed in your cabin. You can have as many modules as your cabin has mod slots.

Now that you've placed your components, check out [Validating]({{ site.url }}/rules/build-validating).