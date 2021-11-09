# ADR - 001: Form of MVP

* Status: Accepted, proceeding with development as planned
* Date: 11/1/2021

## Context and Problem Statement

At this time, several of our teammates seem to have dropped this course.  
Given our newly discovered personnel shortage, how should we restructure the form of our MVP?

## Decision Drivers <!-- optional -->

* General lack of manpower
  * Case in point: if both team leads completely avoid coding, we are left with 5 while a team fo 12 is left with 10 - giving them twice the people to split tasks between than us.

## Considered Options

1. Recipe search app using APIs that allows for collection of recipes from database and user authentication
2. Fully local cookbook app that allows for import/export and basic API cals for finding recipes, emulating a fake server on to store recipes on disk.
3. Fully local cookbook app that does not allow sharing at all, storing recipes on disk.

## Decision Outcome

Chosen option: a **fully local** app using the index.html file as the "executable" and an extremely minimal backend, while also allowing for import-export. This is because it can help us best leverage our minimal human resources and completely cut out a potentially dangerous rabbit hole which would have been "true" backend development. However, we will allow for import-export as it gives our app a unique trait, and largely involves carrying out development operations that we would have had to do regardless.

### Positive Consequences <!-- optional -->

* Our lean crew should be far less overworked than otherwise, while being able to focus on delivering a decent core experience with only a few extra features.

### Negative Consequences <!-- optional -->

* No backend means less connectivity between users.
* Also, our backend engineers may have a somewhat smaller number of "cool things" to do, though they certainly will still have plenty of tasks to complete.

## Pros and Cons of the Options <!-- optional -->

### Option 1

* This one would be nice if we could properly pull it off. It would be a truly feature-complete app and would exercise many different web development muscles.
* However, it's just not reasonable in our estimation. With the number of people we have, a simpler solution would probably be in order.


### Option 2

* This one seems to be the perfect balance of features and not overworking our developers (which at this point must include management).
* Closing the backend can of worms will allow us to focus on delivering a decent experience and testing our front-end features, while still allowing our backend people to work on API calls.
* Minimal cons; it does seem less "cool", but will probably be healthier for our team in the long run.


### Option 3

* This one probably closes too many doors. For one thing, we will have to implement the file format that allows the app to read recipe data from disk anyways, so allowing import/export sharing should be of little concern to our development overhead.
* While it would certainly give our team an easier time, it doesn't hurt to want to do as well as we can. We should *start here* and work our way to [`Option 2`](#option-2) during the latter half of our first sprint.