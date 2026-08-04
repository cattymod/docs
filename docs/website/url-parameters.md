---
slug: /url-parameters
hide_table_of_contents: true
---

# URL Parameters


:::note
## Only "hidden" URL parameters are listed here {#only-hidden-url-parameters-are-listed-here}
CattyMod will automatically store settings such as turbo mode, 60 FPS, high quality pen, etc. in the URL, but some advanced options still need to be manually applied. This page only documents these advanced options.
:::


## Username {#username}

The `username` option controls the value of the username block.

https://studio.cattymod.app/?username=ExampleUsername#443603478

## Cloud host {#cloud_host}

The `cloud_host` option lets you change the cloud variable server that CattyMod will connect to, for example:

https://studio.cattymod.app/?cloud_host=wss://clouddata.turbowarp.org#12785898

Inclusion of `ws://` or `wss://` is optional but recommended. `wss://clouddata.turbowarp.org` is the default cloud data server used by CattyMod, so this example doesn't actually change anything. Insecure ws:// servers may not work because CattyMod uses HTTPS.

It is not possible to use this to connect to Scratch's cloud variable server as it requires account credentials which CattyMod can't support.

## Custom extensions {#extension}

The `extension` option loads a custom extension from a URL. See [Custom Extensions](https://docs.turbowarp.org/development/extensions/introduction) on TurboWarp's docs. These will load sandboxed unless it's from a trusted URL such as cattymod.app.

<!-- Commented due to possible removal -->
<!--
## `scale` {#scale}

Controls the maximum relative scale of the player when in fullscreen mode.

https://turbowarp.org/fullscreen?scale=2
-->

## Disable compiler {#nocompile}

The `nocompile` option turns off the compiler. You probably shouldn't enable this.

https://studio.cattymod.app/?nocompile

## Project URL {#project_url}

The `project_url` option tells CattyMod to download project data from an arbitrary URL. Do not use together with a regular project ID.

https://studio.cattymod.app/?project_url=packager.turbowarp.org/example.sb3

https:// is implied if you don't include a protocol. http:// URLs generally will not work for security reasons. Note that the URL needs to be a direct download and must support CORS (`Access-Control-Allow-Origin: *`). [GitHub Pages](https://pages.github.com/) will do this automatically and is known to work well.

## Project title {#project_title}

The `project_title` option tells CattyMod what to name the project. Works with `project_url`. Do not use together with a project loaded from Scratch, otherwise it'll just use the Scratch Project name.

https://studio.cattymod.app/editor?project_title=It+just+works!

### Addons {#addons}

By default, the editor uses the addons picked by the user. This can be overridden with the `addons` parameter, which is a comma separated list of addon IDs to enable. For example: https://studio.cattymod.app/embed?addons=pause,gamepad,mute-project#15832807

Useful addons and their IDs:

 - "Pause button" is `pause`
 - "Muted project player mode" is `mute-project`
 - "Remove curved stage border" is `remove-curved-stage-border`
 - "File drag and drop" is `drag-drop`
 - "Gamepad support" is `gamepad`
 - "Reverse order of project controls" is `editor-buttons-reverse-order`
 - "Clone counter" is `clones`

You can get other IDs by scrolling to the bottom of [Addons](https://studio.cattymod.app/addons.html) and then click the version and then looking at the addon.
Some addons will have no effect on the embed such as [Block count](https://studio.cattymod.app/addons.html#block-count).
