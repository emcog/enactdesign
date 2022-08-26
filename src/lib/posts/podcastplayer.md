---
title: "Custom podcast player"
date: "2021-10-26"
updated: "2021-11-01"
categories:
- "digital"
- "development"
- "social mindfulness"
coverImage: "/media/meditation-player-cover.png"
coverWidth: 16
coverHeight: 9
excerpt: Custom podcast player
---
<script>
    import PicForMd from "../components/PicForMd.svelte"
</script>
This custom podcast player automatically generates an rss file which is valid for Apple Podcasts. 
It is built using Svelte and SvelteKit. The content is hosted on AWS S3 and distributed on their 
CDN cloudfront and the interface hosted on Netlify. Unless your audience is huge it is basically free to run.

The design is heavily inspired on the apple podcast desktop app. I didn't have tons of time and 
for this project wanted to foucs my efforts on a) getting it out and b) development

The "heart" of the of the app is built around a JSON file which follow Apples podcasting rules. 
It's currently hard coded but I may use this to design a nice form and hook it up to a server. 
With the current translations in process, the form could eventually have 7 users. 
Alternatively I might refactor it to use dynamic routing with markdown files, like this site.

Of course all of this takes time and I'm currently busy with other projects. What ever further 
developments happen the main point was to generate a tidy rss feed to reduce the risk of 
messing up the mark-up, produce a professional looking platform that partner websites could link to,
and, provide the basic architecture for an organisation that is set to grow internationally.
 

<PicForMd caption={"Screenshots"} images={[
{ name: "meditation-player-desktop-half.png", alt:"desktop" },
{ name: "meditation-player-mobile-half.png", alt: "mobile"},
]}/>


<PicForMd caption={"Screenshots"} images={[
{ name: "meditation-player-desktop-half.png", alt: "imagine"}
]}/>

<PicForMd caption={"Screenshots"} images={[
{ name: "meditation-player-mobile-half.png", alt:"imagine" }
]}/>
