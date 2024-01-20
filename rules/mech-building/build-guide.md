---
layout: template.njk
title: Mech Building Guide
permalink: /rules/build-guide/
tags: rules_page
---

## {{title}}

Mech building is at the heart of the Mechtronica RPG system and as such has some of the most in depth mechanics. To start we'll introduce the key concepts here before you dive into the details.

The mechtronica system is highly modular. It's not like picking a car model and choosing trims and packages—you're building this from the ground up. You will pick a frame which is where all the other parts for your mech will go, but the main thing it determines are how fast your mech is and how many parts it can fit.

Nearly all parts use {% keyword "Resources" glossary %}. Resources (and the related {% keyword "Power Type" glossary %}) are the main constraints on your mech build. You have to make sure you have enough resources for all your {% keyword "Infrastructure Components" glossary %} to operate and enough left over to use your {% keyword "Attachment Components" glossary %} when you need to.

Most infrastructure components can be grouped into "Subsystems". These groups of components interact with each other closely and set constraints on each other. There are three such subsystems:
- Frame Subsystem: Together, the frame and plating determine speed and provide some cooling
- Control Subsystem: The control subsystem components are constrained by software and related by production/consumption of CPU
- Power Subsystem: The power subsystem components are constrained by fuel type

There are also a few things to note about the cabin. The cabin and the frame are the only two components which you can have strictly one of each per mech. The cabin is the ultimate weakpoint of your mech, and if it is destroyed, you die (see [Combat]({{ site.url }}/rules/combat)).


### Step-by-Step

1. Develop a vision for your {% keyword 'Mechaneer' glossary %} and mech
    - Come up with a name and background for your mechaneer. See [Mechaneer Description]({{site.url}}/rules/mechaneer-description)
    - Roll stats. See [Mechaneer States]({{site.url}}/rules/mechaneer-stats)
    - Decide what you want to focus your mech on (combat, field repairs, science, etc.)
    - [Start developing a vision for your mech]({{site.url}}/rules/build-planning)
2. Choose a Frame
    - Smaller mechs are faster and often don't need auxiliary {% keyword 'Cooling' glossary %}
    - Larger mechs have extra slots for more firepower
    - Take a look at [Planning]({{site.url}}/rules/build-planning) for some important frame tradeoffs
    - Filter for Frames on [MechDB]({{site.url}}/mechdb/viewer) to view your options
3. Choose your mech's main Weapons and Equipment
    - Choose a {% keyword 'Power Type' glossary %} that lets you get most of the attachments you want
        - See [Planning]({{site.url}}/rules/build-planning) for some important considerations
    - Find attachments that fit your vision (and match your power type)
    - Learn more about [weapons]({{site.url}}/rules/weapons) and [equipment]({{site.url}}/rules/equipment)
    - Don't worry about filling all your slots here, just pick a couple must-haves
    - For information on how to place components in your mech's frame, see [Placing Components]({{site.url}}/rules/placing-components)
    - You can browse weapons and equipment on [MechDB]({{site.url}}/mechdb/viewer)
4. Add the control subsystem
    - Choose a mainframe that provides enough processing for the components you've selected so far, plus a bit extra to spare
        - See [Planning]({{site.url}}/rules/build-planning) for some important considerations on control software
    - Choose a cabin compatible with your mainframe's software
    - Filter for Mainframes on [MechDB]({{site.url}}/mechdb/viewer) to view options
5. Add the power subsystem
    - Choose a power plant that provides enough power for the components you've selected so far, plus a bit extra to spare
        - Also make sure it matches your power type
        - See [Planning]({{site.url}}/rules/build-planning) for some important considerations on fuel type and capacity
    - Choose a fuel tank that can supply your power plant with fuel
    - Browse Power Plants and Tanks on [MechDB]({{site.url}}/mechdb/viewer)
6. Check whether you need to add a cooler
    - If you just barely have enough excess cooling to use your attachments at this point, you probably need to add a cooler
    - Filter for Coolers on [MechDB]({{site.url}}/mechdb/viewer) to view options
7. Add more weapons and equipment
    - Fill in remaining slots in your mech with a few more attachments
    - Make sure any additional components match your power type
8. Add Modules to your Mainframe
    - Select modules that synergize with your mech's capabilities
    - Make sure any modules are compatible with your mech's software
    - Filter for Modules on [MechDB]({{site.url}}/mechdb/viewer) to view options
9. Check your resources and rebalance if needed
    - Compute Available, Used, and Excess resources for Power, Processing, and Cooling
    - If you don't have enough excess resources, consider upgrading infrastructure components or using less chonky weapons and equipment
    - See [Calculations]({{site.url}}/rules/calculations) for how to calculate resources and other things
    - See [Validating]({{site.url}}/rules/valdiating) for important things to check to make sure your mech is a valid build