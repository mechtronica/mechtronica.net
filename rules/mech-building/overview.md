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