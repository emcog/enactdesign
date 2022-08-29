---
title: "An environment for programming music"
date: "2021-10-26"
updated: "2021-11-01"
categories:
- "dashboard"
- "dx"
- "ui"
- "ux"
coverImage: "/media/sema__ui.png"
coverWidth: 16
coverHeight: 9
excerpt: "How I bridged a culture gap to create space for user-centred design"
---
<script>
import VidForMd from '../components/VidForMd.svelte';
import PicsForMd from '../components/PicsForMd.svelte';
</script>
{excerpt}

<PicsForMd images={[
{name: "sema__ui.png", alt: "Screen shot of Sema, a UI for programming music"}, 
{name: "sema__roli.jpg", alt: "roli seaboard, next generation midi keyboard"}
]} caption={"Left: Sema, a UI for programming music in the Neumorphic style. Right: The Roli Seaboard family, next generation midi controllers"}
/>

## Summary
### Situation
A team at Sussex University are building a web-app which for live programming of music, "Live coding". 


### Process

The challenge with this project was to get enough to the team of theorists and engineers to 
understand their language for the project and the road map. Information wasn't forthcoming because 
they were in an established culture where everyone all ready understood the semantic nuts and bolts.

protecting the design process and building relationship
To bridge the gap in culture and knowledge, I arranged a regular reviews. This infromally  created a 
role akin to product owner. In order to protect the design process I asked them not to share any of 
my work without permisssion. 

By sandboxing the creative process like this, I could share roughs and ask naive questions. 
This naturally led to a creative dialogue where questions could be asked from a user-centred perspective.
Throughout this process my role evolved from UI to Interaction and UX designer. 

Below are key steps in the evolution of the design


### Outcome

The team bought in to a radical update, which was future proofed against the development road map. This  
simplified the interface and afforded a more complex arrangement with intuitive navigation.


## Process in detail

### Afford focus

The bulk of a user's time would be spent inside the dashboard programming music. Therefore, anything
which detracted from the programming experience was considered a distraction.

#### Frequency of use

Interactions which are used infrequently were hidden behind expanding/collapsing menus. The site wide 
navigation for example. Obviously a user would need to navigate to and from the dashboard. However,
once they are programming they don't need to do this. So, the site wide navigation can be collapsed, 
likewise with the session setting (volume, save, download etc ).


<PicsForMd images={[
{name: "sema__collapse--ill.png", alt: "Design illustration"}
]} caption={"Design illustration"}
/>


#### Appropriate levels of detail

We followed the principle of Jakobs law (a user will spend more time on apps other than this) and adopted 
conventions used in other software: replacing labels with icons and providing more detail, tool tips etc on hover.


#### Nesting

The process of live coding requires different languages for different musical sections. 
Each section is written inside its own text editor. A section can be connected to any 
number of affect editors, each with their own language. 

A musical piece is usually made of many sections (rhythm, strings, percussion, etc). The existing design
provides no means for connecting affects to sections. It requires the user to track these relationships. 
Taxing their working memory which will lead to unnecessary errors.

<VidForMd name={"sema-many-editors"}/>

The solution is to nest affects inside sections. Then presenting context specific options each editor. 
 

<VidForMd name={"sema-grouped-editors"}/>

#### Everything is a widget

We referred to these collections of section editor and affects editors as widgets. Then the toolbar became a widget.
So too the navigation bar. Suddenly we realised the entire site was a series of different widgets and the 
information architecture could be redesigned to reflect this.
 
The user would always land inside the programming environment. The home page, about page, tutorials and docs 
would all exist as collections of widgets. Significantly, this would allow the user to use the tutorial and 
docs within their workspace.

Finally, this simple concept became the foundation for a design system. It is a simple metaphor anyone involved in 
the project could hook on to work to.

<PicsForMd images={[
{name: "sema__widget-everything--ill.png", alt: "Design illustration"},
{name: "sema__hover.png", alt: "Design drawing"},
{name: "sema__widgets.png", alt: "Components for a design system"},
]} caption={"Left: The expanded workspace, everything inside is a widget. Right: Stripping the widget meataphor back to its simplest forms"}
/>
