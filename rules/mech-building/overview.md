---
layout: template.njk
title: Mech Building Overview
permalink: /rules/build-overview/
tags: rules_page
---

## Overview

Mech building is at the heart of the Mechtronica RPG system and as such has some of the most in depth mechanics. To start we'll introduce the key concepts here before you dive into the details.

The mechtronica system is highly modular. It's not like picking a car model and choosing trims and packages—you're building this from the ground up. You will pick a frame which is where all the other parts for your mech will go, but the main thing it determines are how fast your mech is and how many parts it can fit.

Nearly all parts use {% keyword "Resources" glossary %}. Resources (and the related {% keyword "Power Type" glossary %}) are the main constraints on your mech build. You have to make sure you have enough resources for all your {% keyword "Infrastructure Components" glossary %} to operate and enough left over to use your {% keyword "Attachment Components" glossary %} when you need to.

Most infrastructure components can be grouped into "Subsystems". These groups of components interact with each other closely and set constraints on each other. There are three such subsystems:
- Frame Subsystem: Together, the frame and plating determine speed and provide some cooling
- Control Subsystem: The control subsystem components are constrained by software and related by production/consumption of CPU
- Power Subsystem: The power subsystem components are constrained by fuel type

There are also a few things to note about the cabin. The cabin and the frame are the only two components which you can have strictly one of each per mech. The cabin is the ultimate weakpoint of your mech, and if it is destroyed, you die (see [Combat]({{ site.url }}/rules/combat)).

### Step by step Guide to Building a Mech

1. Develop a vision for your mechaneer and mech
    - Come up with a name and background for your mechaneer
    - Decide what you want to focus your mech on (combat, field repairs, science, etc.)
2. Choose a Frame
    - Smaller mechs are faster and often don't need auxiliary cooling
    - Larger mechs have much more firepower
3. Choose your mech's main weapons and equipment
    - Find attachments that fit your vision
    - Choose a power type that lets you get most of the attachments you want
    - Don't worry about filling all your slots here, just pick a couple must-haves
4. Add the control subsystem
    - Choose a mainframe that provides enough processing for the components you've selected so far, plus a bit extra to spare
    - Choose a cabin compatible with your mainframe's software
5. Add the power subsystem
    - Choose a power plant that provides enough power for the components you've selected so far, plus a bit extra to spare
    - Choose a fuel tank for your power plant
6. Check whether you need to add a cooler
    - If you just barely have enough excess cooling to use your attachments at this point, you probably need to add a cooler
7. Add more weapons and equipment
    - Fill in remaining slots in your mech with a few more attachments
8. Add Modules to your Mainframe
    - Select modules that synergize with your mech's capabilities
8. Check your resources and rebalance if needed
    - Compute Available, Used, and Excess resources for Power, Processing, and Cooling
    - If you don't have enough excess resources, consider upgrading infrastructure components or using less chonky weapons and equipment
