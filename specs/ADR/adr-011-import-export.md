# ADR - 011: Import/Export & File Storage

* Status: Under Review
* Date: 11/19/2021

## Context and Problem Statement

We know that our app will want to be able to import & export `.rcpkg` files. How can we accomplish this in terms of control flow & file i/o?  
Additionally, how will recipe card data be stored?

## Decision Drivers 

* Global edit mode will allow the user to select multiple recipes to export.
* We want communication between users to consist of only a few steps.
* We know that we will want to use JSON as it is conveniently built-in and will likely be supported by APIs.
* Our standard JSON format is reproduced below:

```JSON
// Note that the ingredients and steps part are JS arrays. This is so that we can future-proof our data structures
// in case we want to discretize the steps and parse them for more information in the future. 
// For now, access using JSONObj.ingredients[0] or similar.
{
  "recipe_id": "", // possibly unneeeded, we will see
  "name": "",
  "image": ".png",
  "metadata": {
     "time_added": <DateTime>,
     "labels": [],
     "src_url": ""
  },
  "metrics": {
      "cook_time": <int>, // minutes
      "prep_time": <int>, // minutes
      "servings": <int>
  },
  "tagline": "", // blurb about recipe, short
  "ingredients": [],
  "steps": []
}
```
## Decision Outcome
The decisions that we have come out with are enumerated below.

### File Storage
1. Each recipe card/data pack will be stored as an individual JSON file in a designated subdirectory of our app.
2. This subdirectory will be scanned when the app launches and all the recipe cards will be loaded in.

### Export Procedure
1. User selects one or more recipe cards to export.
2. The corresponding JSON files are packaged into a `.rcpkg` file, which is actually just a `.json` file that contains a *single array* filled with all of the JSON objects that were exported.
3. The `.rcpkg` file will be dumped into a specific output directory in our app's file structure, with a title that indicates when the dump was performed and other data.

### Import Procedure
1. User selects a `.rcpkg` file to import from disk using the HTML5 `<input type="file">` element.
2. User is alerted that a certain number of recipe cards will be imported. 
   1. Confirmation -> cards are added & written to disk
   2. Rejection -> cards are not added or written to disk
   3. File name collisions will result in the write operations failing for the conflicting file.
