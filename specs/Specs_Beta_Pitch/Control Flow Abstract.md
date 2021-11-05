# Control Flow Abstract 

This file contains a specification of our app's control flow in something like plain English. Represents the state of our projected MVP (minimum viable product).  
Author: Zane Wang  

## Remarks and Definitions
1. Import/Export
   1. Importing and Exporting `recipe card packages (.rcpkg, pronounced "RC-Package")` allows users of our app to commmunicate with each other by sharing recipes.
   2. Exporting recipe cards will produce a `.rcpkg` file that can be sent to another user, who will be able to import the received recipe cards encoded in the `.rcpkg` file.
2. [`local-edit`](#local-edit-mode-local-edit) vs [`global-edit`](#global-edit-mode-global-edit)
   1. [`local-edit`](#local-edit-mode-local-edit) refers to edits made to the data contained in a single recipe file.
   2. [`global-edit`](#global-edit-mode-global-edit) refers to edits made to the recipe libary on the level of whole recipe cards, e.g. deleting a recipe card, exporting a recipe card package `(.rcpkg)`, adding to favourites, etc.

## Delivery & Deployment

1. The user will download our app as a zipped folder, such as a .zip or .rar file.
2. Upon decompressing it, the root will contain the index.html file and its dependencies (if any), as well as the assets directory.
3. The user will click the index.html file, which will open our app in his/her favourite browser.

## Home Screen [`home`](#home-screen-home)

1. The user views the home screen.
2. The user can search for recipes, sort recipes, make a new recipe, import a recipe card package `.rcpkg`, edit a recipe, view a recipe, open global edit mode, or open recipe options.
   1. If the user searches for recipes or sorts recipes, [`update`](#recipe-library-transformations-recipe-library-transformations) display list and return to [`home`](#home-screen-home).
   2. If user makes or edits a recipe, GOTO [`local-edit`](#local-edit-mode-local-edit).
      1. making a new recipe will create an empty recipe card first before opening it for edits.
   3. If user views a recipe, GOTO [`rec-view`](#recipe-view-mode-rec-view).
   1. If user opens global edit mode, give edit transformations to recipe card groups and GOTO [`global-edit`](#global-edit-mode-global-edit).
   2. If user elects to `import` a `.rcpkg` file, prompt user for location of file in file browser OR find recipe on web.
      1. After getting a confirmation, [`update`](#recipe-library-transformations-recipe-library-transformations) recipe library.
   3. If user opens recipe options on a specific recipe, display recipe options submenu `card-options`.
3. ### Submenu: Recipe Card Options `card-options`
   1. Either edit this recipe OR GOTO [`recipe-library-transformations`](#recipe-library-transformations-recipe-library-transformations).
      1. If editing a recipe, GOTO [`home.2.ii`](#home-screen-home).
   2. If user doesn't cancel, apply recipe library transformation to selected recipe.
   3. [`update`](#recipe-library-transformations-recipe-library-transformations) display list and return to [`home`](#home-screen-home).

### Recipe Library Transformations [`recipe-library-transformations`](#recipe-library-transformations-recipe-library-transformations)
1. User can delete, add to favourites, `export`, or add tags.
   1. Deleting, adding tags, and favourites will re-arrange the main menu display if appropriate.
   2. Exporting the selected recipe(s) will prompt the user to name the export (the default will be an ID followed by the date); then the app will dump a `.rcpkg` file into the app's `exports` directory.
2. [`update`](#recipe-library-transformations-recipe-library-transformations): if the user acquires new recipe cards or changes their filtering terms, [`update`](#recipe-library-transformations-recipe-library-transformations) displayed cards on home screen.
   1.  Several different tasks will lead to this operation being performed. 

## Local Edit Mode [`local-edit`](#local-edit-mode-local-edit)
1. Also known as the Compose Recipe Form.
2. User can manually type in/edit all fields, including text and image fields.
   1. If the user opens the image field, prompt user with file explorer pop-up to select image.
3. User can Save or Discard Changes.
   1. If the user saves, the changes will be written to the user's recipe library.
   2. If the user discards, the recipe library will return to the state it was in before "edit" or "new recipe" button was pressed.
   3. Return to [`home`](#home-screen-home).

## Global Edit Mode [`global-edit`](#global-edit-mode-global-edit)
1. User selects a group of recipe cards.
   1. If user cancels, return to [`home`](#home-screen-home).
2. GOTO [`recipe-library-transformations`](#recipe-library-transformations-recipe-library-transformations).
3. Apply recipe library transformations to all selected elements.
4. [`update`](#recipe-library-transformations-recipe-library-transformations) display list and return to [`home`](#home-screen-home).

## Recipe View Mode [`rec-view`](#recipe-view-mode-rec-view)
1. User can choose to view either ingredients or directions, or exit.
   1. View ingredients -> ingredient list view with checklist
   2. View directions -> directions list view with checklist
   3. If user exits, GOTO [`home`](#home-screen-home).
2. User can also choose to set the `kitchen-timer`.
3. ### Submenu: Kitchen Timer `kitchen-timer`
      1. User sets time
      2. User presses `play` or `clear`
         1. `clear` -> timer resets to 0
         2. `play` -> timer counts down
      3. When timer is counting down, pressing `pause` will pause it and pressing clear will clear the timer.
      4. When the timer reaches 0 by natural countdown, it will beep until the `clear` button is pressed, 1 minute passes, or this screen is exited.



