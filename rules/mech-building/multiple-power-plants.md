---
layout: template.njk
title: Using Multiple Power Plants
permalink: /rules/multiple-power-plants/
tags: rules_page
---

## Multiple Power Plants
Having more than one {% keyword "Power Plant" glossary %} *can* make things more complicated. There are a few extra things to consider, but it can also provide you with some interesting build options.

### Single Power Type
If you have more than one power plant, but they each supply the same {% keyword "Power Type" glossary %}, things are fairly simple. You can simply put all the power into one pool.

### Multiple Power Types
If you have more than one power plant and they produce different power types, things get a little more complicated. You will have one power pool for each power type (the character sheets have spots for each type to support this), so if you have two electric plants and one mechanical plant, you simply add the power output of the two electric ones and that goes in the electric power pool, and the power from the mechanical plant goes in the mechanical power pool. Your mainframe will use the same power type as your cabin.

### Multiple Fuels for One Power Type
If multiple plants produce the same power type but use different {% keyword "Fuel Type" glossary %} you have some configuration to do. You can choose how to split up fuel consumption between then different fuels, with the constraint that a power plant can never consume more fuel than power it produces. For instance, if you have an electric hydrogen plant that produces 10 power and an electric ethanol plant that produces 15 power, and your electric {% keyword "Used Power" glossary %} is 15, then you can configure your mech to consume 5 hydrogen and 10 ethanol every day, but not 12 hydrogen and 3 ethanol (because your hydrogen plant can only produce 10 power it cannot consume more than 10 hydrogen). You can configure this fuel consumption any time you are at a {% keyword "Garage" glossary %}.

### Sharing Fuel Tanks
If multiple power plants have the same fuel type, then they can share one or more  fuel tanks. Simply sum up the capacities of all fuel tanks of the same type and treat them as one pool.