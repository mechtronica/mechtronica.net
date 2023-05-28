---
layout: template.njk
title: Planning
permalink: /rules/build-planning/
tags: rules_page
---
## Planning a Mech Build
The first step in building your mech is planning. Do you want to build a combat-focused mech built for dealing maximum damage? Perhaps your {% keyword 'Mechaneer' glossary %} needs a mech capable of hauling scientific equipment and taking specific measurements. Or maybe you earn a living as a field mechanic, and focus on equipment to make sophistocated repairs when far from a garage. Think about how you want to play, and how that relates to your mechaneer's personality.

Once you choose a focus, you should select a mech Frame and a {%keyword 'Power' glossary %} Type. Read on for information on factors that you should consider when building your mech.

### Tradeoffs to Consider

#### Frame Size and Speed
As the foundation of your mech, your frame has a significant impact on play style. Heavy frames provide more space for additional attachments, but are much slower as a result of their size. Large frames also offer a much larger target, and as such are easier to hit. Light frames are quick and hard to hit, but have very limited space for components. Standard frames are a good balance between the two.

Note that Plating also confers a speed penalty. Heavier armor can absorb a lot more damage before breaking, but will slow your mech down.

#### Power Type and Weapon Range
Mech play style varies quite a bit with power type. Mechanical mechs tend have short-range weaponry, while Electrical mechs tend to have the longest range. Steam-powered mechs have access to both short-range blunt force weapons which can compound damage and long-range artillery, so they're sort of a jack-of-all-trades.

| Power Type  | Range                         |
| ----------- | ----------------------------- |
| Mechanical  | Close range (50 ft to 600 ft) |
| Steam       | Any range (50 ft to 900 ft)   |
| Electrical  | Long range (200 ft to 900 ft) |

{.table}

#### Control Software
The {% keyword 'Components' glossary %} compatible with each software have distinct costs and benefits. As such, you'll want to choose software that fits well with your focus.

| Software | Component Tradeoffs |
| -------- | ------------------- |
| UMIX     | Very small, with low heat and power usage, but limited Processing and few Module slots |
| ProtOS   | Well balanced, with moderate CPU at reasonable resource usage |
| Ursa NT  | Bonuses to Targeting and lots of Module slots, but large and resource-intensive |

{.table}

#### Fuel Type and Power Plant Class
Power Plants are categorized based on what type of Power they generate and what type of Fuel they require. Some fuels deplete quickly, and some are much more scarce than others, so you'll want to pay attention to the type of fuel your power plant uses. 

| Power Plant Class     | Power Type | Fuel        |
| --------------------- | ---------- | ----------- |
| Ethanol Boiler        | Steam      | Ethanol     |
| Ethanol Engine        | Mechanical | Ethanol     |
| Ethanol Fuel Cell     | Electrical | Ethanol     |
| Hydrogen Boiler       | Steam      | Hydrogen    |
| Hydrogen Engine       | Mechanical | Hydrogen    |
| Hydrogen Fuel Cell    | Electrical | Hydrogen    |
| Lithium Ion Regulator | Electrical | Lithium Ion |
| Methane Boiler        | Steam      | Methane     |
| Methane Engine        | Mechanical | Methane     |
| Nuclear Boiler        | Steam      | Nuclear     |
| Nuclear Generator     | Mechanical | Nuclear     |
| Nuclear Turbine       | Electrical | Nuclear     |

{.table}

#### Fuel Tank Capacity and Depletion
Each day, your mech will use up an amount of fuel equal to its Used Power. If you run out of fuel, your mech will be unable to move or use attachments until refueled. 

Some fuel types are much more energy-dense than others, which means that mechs using those types of fuel will typically need to refuel less often. The table below shows how much Power can be stored in small and large Fuel Tanks of each type.

| Fuel Tank          | Fuel        | Capacity (Small) | Capacity (Large) |
| ------------------ | ----------- | ---------------- | ---------------- |
| Ethanol Tank       | Ethanol     | 10               | 20               |
| Hydrogen Tank      | Hydrogen    | 20               | 40               |
| Lithim Ion Battery | Lithium Ion | 30               | 60               |
| Methane Tank       | Methane     | 40               | 80               |
| Reactor Vessel     | Nuclear     | 60               | 120              |

{.table}

Depending on how much power your mech uses, you may need to consider a larger fuel tank or even a different fuel type. 

### Step by step Mech-Building Outline

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
    - Choose a mainframe that provides enough processing for your attachments and frame, plus a bit extra to spare
    - Choose a cabin compatible with your mainframe's software
5. Add the power subsystem
    - Choose a power plant that provides enough power for your attachments and frame, plus a bit extra to spare
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