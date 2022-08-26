---
title: "A dashboard for programming music"
date: "2021-10-26"
updated: "2021-11-01"
categories:
- "ui"
- "ux"
- "dashboard"
coverImage: "/media/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: "Reducing user effort with grouping and seeding a design system with a simple concept"
---
<script>
import VidForMd from '../../components/VidForMd.svelte';
import PicForMd from '../../components/PicForMd.svelte';
</script>
{excerpt}

***roli seabase and finished design***
## SITUATION
A team at Sussex University are building a web-app which for live programming of music, "Live coding". 


## PROCESS

The initial brief directed look and feel. I worked in sprints with reviews at the end of each stage. At review more problems would be discovered. These in  
turn set the direction for next sprint. Gradually the project shifted from UI  
to UI, UX and interaction design.


## OUTCOME

The team bought in to a radical update, which was future proofed against the development road map. This  
simplified the interface and afforded a more complex arrangement with intuitive navigation.


### Everything is a widget.


The workspace was striped back so that all components shared the same basic
styles and behaviours including simplified tool and navigation bars.
- Progressive enhancement.
Widgets were then progressively enhanced to reveal features which were relevant  
to the changing context.


### Grouping.
Growing complexity and scale was managed by giving widgets the ability to spawn sub-widgets. This created the capacity for multiple related widgets to be  
grouped. Over and above these specifics, a design pattern was seeded that could easily grow and maintain its integrity.


## Streamlining the navigation and toolbars
<VidForMd name={"sema-many-editors"}/>

Live coding uses different languages for different musical sections. Each section is written inside its 
own text editor. These sections can have their any number of child text editors with unique languages 
which effect it. 

A musical piece will be made of multiple sections. However, the current design does not provide a 
graphic connection between sections and their children. So, the dashboard burdens the user and 
requires them to track which children belong to which sections.

<VidForMd name={"sema-grouped-editors"}/>

The solution is to group families of editors together. A section can spawn a child which is contained within 
its parent's boundary. Options relevant to the context present as necessary

## Navigation and toolbars
Navigation and toolbars are streamlined to make it easier to focus. System wide controls are condensed 
into collapsable buttons and session controls replace words with icons



## Integrating all the parts under a simple concept

***graphics: illustration to wrap everything, dashboard and different graphic sized widgets***
Finally the workspace is expanded so that it includes the buttons and navigation. This maintains consistency with the parent/child concept and provides and immersive feel to the entire app.
It affords a simple design concept "everything is a widget" Navigation and toolbars are widgets within the workspace, toolbars spawn editor widgets, which in turn spawn their own children.

