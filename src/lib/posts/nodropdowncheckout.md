---
title: "No drop down checkout"
date: "2021-10-26"
updated: "2021-11-01"
categories:
- "ui"
- "useability"
- "presentation"
coverImage: "/media/nodd-form--1.png"
 
coverWidth: 16
coverHeight: 9
excerpt: Check out how heading links work with this starter in this post.
---
<script>
    import VidForMd from '../components/VidForMd.svelte';
    import PicForMd from '../components/PicForMd.svelte';
    import PicsForMd from '../components/PicsForMd.svelte';
</script>

<PicForMd image={ {name: "nodd-form--1.png", alt: "'Lets fill in a form', No one ever"} }/>

## Inspiration

I was bouncing around the internet like you when the great algorthym led me to a talk by [Golden Krishna and 
Eric Campbell at SXSW](https://www.youtube.com/watch?v=hcYAHix-riY&t=120s).  Though only about drop-downs it was 
entertaining and left me feeling inspired.

I took their opinnion to heart (Krishna is a design strategist at Google) and set out to design a checkout 
form without a drop down. 

## Early descisions

Throughout the design process I was asking myself "can this be removed and does this build trust in the user". 
I wanted each stage to be as minimial as possible all while providing enough contextual information to 
build and maintain trust throughout the stages of the form.

Making decisions is a difficult and costly process. Working with drawing tools like Figma or Sketch it can be easy
to get lost in the detail. My very rough sketches let me work quickly and test some ideas. They gave me enough of
an outline to move to simple wireframes. 

<PicsForMd hasBorder={true} caption={"Rough sketches to early stage wireframes"} images={[
{name: "nodd-form--4.png", alt:"'Lets Fill in a Form' No One Ever'" },
{name: "nodd-form--5.png", alt:"'Lets Fill in a Form' No One Ever'" }
]}/>

## Progress bar

<PicForMd hasBorder={true} image={ {name: "nodd-form__hi-fi-wire.jpg", alt: "Detailed design wireframes"} }/>

While working the progress I tested positioning it at the top and the bottom of the screen. When it was at the 
bottom I liked how its proximity to the continue button. This coupling gave the continue button more meaning.
The user could see how many steps were left/had been completed on continue. I believe this provided more 
transparency and would build trust in the user.

## Final renders

<VidForMd name={"nodd-form__hi-fi--vid"} hasControls={true}/>

Delivery address
Card Details
Postage and packaging
Check and confirm
Save details