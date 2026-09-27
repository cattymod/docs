---
slug: /extensions/stt
title: Speech to Text
hide_table_of_contents: true
---

# Speech to Text

This is a **utility** extension that lets you listen to your users' microphone.

Check it out at https://cattymod.app/extensions/

## All blocks included are:

### `on wakeword (text)`
This hat block lets you detect when a user says a specified piece of text out loud. This block will not work while `Listen until Pause` is running. This hat block can be used to create **Voice Assistants**.

### `Listen until Pause`
This block lets the project listen to the user's microphone until they stop speaking.

### `(Speech Text)`
This reporter fetches the last piece of text said by the user. This only works for `Listen until Pause` though.

### `Cancel All Listening`
This cancels all `Listen until Pause` blocks. All speech said from the user will be discarded.
