# ADR - 004: File Formats

* Status: Accepted, proceed with development as planned.
* Date: 11/10/2021

## Context and Problem Statement

We know that we want to represent our recipes as JSON to support import/export. What JSON format should we use??

## Decision Drivers 

* We know that our basic feature set will consist of:
  * Recipe Picture/Name
  * Tags/Keywords/Categories (details TBD)
  * Ingredients Lists
  * A section to describe the cooking process and steps
  * Search by tags/keywords/categories/title/ingredients
  * Add/Delete/Select/Edit recipes
  * Form for composing recipes
  * Select Multiple recipes by long press
  * Import/Export Recipes

## Decision Outcome

Our standard JSON format will be as follows:

```JSON
// Note that the ingredients and steps part are JS arrays. This is so that we can future-proof our data structures
// in case we want to discretize the steps and parse them for more information in the future. 
// For now, access using JSONObj.ingredients[0] or similar.
{
  "recipe_id": "",
  "name": "",
  "image": ".png",
  "metadata": {
     "time_added": <DateTime>,
     "labels": [],
     "src_url": "",
  },
  "metrics": {
      "cook_time": <int>, // minutes
      "prep_time": <int>, // minutes
      "servings": <int>,
  },
  "ingredients": [],
  "steps": [],
}
```
We are going to keep our JSON format as shallow as possible to make it easy on our devs. We do not need to store that much info anyways.