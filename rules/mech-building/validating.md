---
layout: template.njk
title: Validating
permalink: rules/build-validating/
tags: rules_page
---
## Validating a Mech Build
Once you've selected components, you have to actually make sure they work together. This involves a bit of arithmetic -- wait don't run away! It's not too much work.

The basic idea is to figure out how much **Power**, **Cooling**, and **CPU** your mech has to work with, then make sure that your **constant-draw** components aren't using more than that. You'll also want to have enough resources left over to use any **attachments**. 

### Resource Calculations
Let's start by breaking down resources into three categories: **Available Resources**, **Used Resources**, and **Excess Resources**. These should add up such that **Available = Used + Excess**. 

#### Available Resources
Available resources are the total amount of each resource you have to work with. To calculate Available resources, you just need to figure out how much of each resource your mech is producing. There are some exceptions, but usually that breaks down something like this: 

| Resource   | Available amount                                             |
| ---------- | ------------------------------------------------------------ |
| Power      | Amount produced by Power Plant                               |
| Cooling    | Amount provided by Frame & Plating + any provided by Coolers |
| Processing | Amount provided by Mainframe + any provided by Modules       |

{.table}

Note that each section of your mech has its own plating, so you get Cooling from the plating on each section. 

As you can see from the table above, your resources mostly come from **Infrastructure Components** such as your mech's Frame, Plating, Power Plant, and Mainframe. 

<!-- TODO: Add example -->

#### Used Resources
Used resources are the resources used by all of your constant-draw components. This calculation is pretty straightforward: just add up all of the Power, Cooling, and Processing used up by constant-draw components in your mech.

| Resource   | Used amount                                       |
| ---------- | ------------------------------------------------- |
| Power      | Total Power used by constant-draw components      |
| Cooling    | Total Cooling used by constant-draw components    |
| Processing | Total Processing used by constant-draw components |

{.table}

If your Used Resource amounts are greater than your Available resources, your mech will not be able to function. If you find yourself in this situation, you have two options: upgrade your resource-producing components, or choose constant-draw components that use less resources. 

<!-- TODO: Add example -->

#### Excess Resources
After figuring out Available and Used resources, it's pretty simple to figure out how much Excess resources you have left over.

| Resource   | Excess amount                          |
| ---------- | -------------------------------------- |
| Power      | Available Power - Used Power           |
| Cooling    | Available Cooling - Used Cooling       |
| Processing | Available Processing - Used Processing |

{.table}

Excess resource is used to power the components of your mech that aren't always in use, such as weapons and other attachments. Some modules also use Excess resources to operate. You'll want to make sure you have enough Excess left over to be effective in combat. 