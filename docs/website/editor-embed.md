---
slug: /editor-embed
hide_table_of_contents: true
---

# Embedding the Editor

Introducing Editor Embeds, a way to embed CattyMod's feature-packed editor into your apps and sites.

Just put `https://studio.cattymod.app/editor` in an iframe of any size, but making this fill most of the screen is recommended.

## URL parameters {#url-parameters}

All [standard URL Parameters](url-parameters.md) are available. You can use these to control usernames and other things.

There is a parameter only for here that exists called ?showprojectpage, which shows the "See Project Page" button as it is hidden by default when embedded.

## Limitations {#limitations}
- "See Project Page" (Unless you enable it through ?showprojectpage) and "New Tab" are hidden to keep the experience contained when the editor is embedded in another app or site.
- All links on the Homepage (`/`) are going to open in a new tab to prevent escaping CattyMod in the iframe.

## Extras {#extra}
- You can also embed most CattyMod pages but `https://studio.cattymod.app/editor` is the most helpful URL.

## Official Uses
- [Tabs Mode](tabs.md)
