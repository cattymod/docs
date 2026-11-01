---
slug: /extensions/dangoaudio
title: Audio Recorder
hide_table_of_contents: true
---

# Audio Recorder

This is a **utility** extension that lets you listen to your users' microphone, however, unlike Speech to Text, it'll let you play it back and add effects.

Check it out at https://cattymod.app/extensions/

:::info
This extension is in **beta**. Give your feedback on [**CattyMod Feedback**](https://scratch.mit.edu/projects/1335032585/).
:::

## All blocks included are:

### `Start Recording Audio [option v]`
This block lets start recording the audio. You can either choose `Until Pause`, which will wait until the user stops speaking, or `In the background`, which will make the block run in the background, letting other blocks ahead run.

### `End Recording Audio`
This block will end recording the audio of the user.

### `Play recorded audio [option v]`
This block plays the audio recorded. You can either choose `Until Done` which will wait until the audio has finished before continuing, or `In the background` to let blocks ahead run while it's playing.

### `Stop recorded audio playback`
This block will stop all playback from the `Play recorded audio` block.

### `Download recorded audio as [File v]`
This lets the user download the recorded audio as a `WAV` or `MP3` file. Effects will be carried over too.

### `Set [Effect] to ()`
This block lets you set an effect on the recorded sound.

#### Effect values

| Effect     | Range          | Default |
| ---------- | -------------- | ------- |
| Pitch      | -12 to 12      | 0       |
| Echo       | 0 to 100       | 0       |
| Reverb     | 0 to 100       | 0       |
| Bass       | -100 to 100    | 0       |
| Treble     | -100 to 100    | 0       |
| Robot      | 0 to 100       | 0       |
| Distortion | 0 to 100       | 0       |
| Low-pass   | 20 to 20000 Hz | 20000   |
| High-pass  | 20 to 20000 Hz | 20      |
| Telephone  | 0 to 100       | 0       |

### `Clear Audio Effects`
This block clears all audio effects. This does not include volume.

### `Set Audio Volume to (n)%`
This block lets you set the volume of the recorded audio. Default is 100%.

### `<is recording audio?>`
This boolean reports if the extension is recording audio right at that moment.
