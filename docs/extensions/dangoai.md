---
slug: /extensions/dangoai
title: DangoAI
hide_table_of_contents: true
---

# DangoAI

This is an **AI** extension that lets you chat with an AI chatbot from CattyMod. This can let you make live NPCs, text based adventure games and more!

Check it out at https://cattymod.app/extensions/

:::info
This extension is in **beta**. Give your feedback on [**CattyMod Feedback**](https://scratch.mit.edu/projects/1335032585/).
:::


## All blocks included are:

### `Set LLM to (AI Model v)`
Set the AI Chat Model. This block may take some time to run.

### `(Chat in Group (group) with message (text))`
Select a Chat ID (to separate chatrooms) and chat with the AI. This reporter may take some time to run.

### `Set Personality for Group (group) to (personality)`
Set a prompt for the AI in a specific chatroom.

### `Clear Group (group)`
This block clears all group data of a specific group. Be careful when using this block!

### `Clear all groups`
This block clears all group data. Be careful when using this block!

### `(current LLM`)
Gets the current LLM. Responds None when none are loaded.

### `(AI status)`
Responds the status of the chatbot. This is best to show to the user rather than coding with it.

### `(loading progress)`
Responds the progress of loading the chatbot. If it's equal to nothing, then nothing is happening and chances are no AI Model is loaded. If it's equal to "Model Ready" then the AI is ready to be used. Else if it's not any of these, it's loading.

### `(AI Error)`
Responds any errors with the AI Chatbot. You can give bug feedback by clicking "CattyMod Feedback" in the navbar or going to https://scratch.mit.edu/projects/1335032585/.

## Notes

- Most major web browsers should support WebGPU which powers WebLLM. This is how DangoAI works!
- Some pages might crash when loading an AI Model. This can be due to it being too large. Try other models, but if none of those work, avoid using DangoAI in your projects when on that device.
