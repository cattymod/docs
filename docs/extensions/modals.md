---
slug: /extensions/modals
title: Modals
hide_table_of_contents: true
---

# Modals

This is a **big** extension that lets you create Modals (pop-up windows) and prompts to tell the user something or ask for a response.

Check it out at https://cattymod.app/extensions/

## All blocks included are:

## Modals

### `show modal title (Title) text (Text)`
Show a custom modal with your own Title and Text inside.

### `show web page modal title (Title) page (URL)`
Show a modal with a webpage from the internet. This sometimes won't work due to [CORS](https://cattymod.app/docs/cors).

### `show html modal title (Title) html (Code)`
Show a modal with custom HTML code. This is best for instances where you cannot or don't want to publish your webpage.

### `add button called (Text) to current modal`

Add a button to the current modal. Put this under another modal block for the best result.

### `(button pressed)`

What button did your user press? Check using this block.

### `close modal`

This closes the current modal. It's self explanatory.

---

## Prompts

### `<confirm (text)>`

Let your user choose OK or Cancel (True or false)

### `(text prompt (question))`

Ask your users for short text.

### `(number prompt (question))`

Ask your users for a number.

### `(colour picker)`

Ask your users for a colour by picking one.

### `(textarea prompt (question))`

Ask your users for multi-line text.

### `(choose (Item,Item,Item))`

Ask your users to choose from a list. Seperate them using commas and make sure to not have spaces after each comma.

### `(slider (name) min (smallest amount) max (biggest amount) default (value when you open the prompt))`

Ask your users to drag a slider to choose from a minimum to a maximum.

### `(date prompt) and (time prompt)`

Ask your users to pick a date/time.

---

## Settings and Status

### `set accent colour (Colour)`

Set the main colour of a Modal/Prompt to any colour you choose. You can put a colour prompt inside the colour area too!

### `set prompt title (Title)`

Set the window title of a Prompt. This doesn't affect regular modals.

### `<modal/prompt open?>`

Check if a Modal or Prompt is open. Responds either True or False.

### `(last prompt result)`

See the last thing a prompt has responded with.

## Notes

- All the modal creation related blocks in the Modals section do not wait until a button is pressed when the block runs. You'll have to use `wait until <(button pressed) = ()>` to wait until it's finished.

- You can add extra buttons to prompts by using the `add button called (Text) to current modal` block in another script to add buttons. However, you’ll need to use `(button pressed)` to get the selected one as `(last prompt result)` will not provide it.
