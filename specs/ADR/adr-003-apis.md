# ADR - 003: API Usage

* Status: Live, this document is to be updated as more APIs surface.
* Date: 11/7/2021

## Context and Problem Statement

Given our new MVP statement, what APIs should we be using to facilitate the more difficult features? In particular, we should be paying attention to:
1. Webscraping vs. Existing databases
2. Format of information retrieval
3. Monetization policies
4. Overall effectiveness

## Decision Drivers 

* The new form of our app is a cookbook with minimal sharing & searching options.
* In particular, we are concerned with importing/exporting recipes and 
* What kind of APIs can help us accomplish our objectives?

## Considered Options

1. EDAMAM
2. Spoonacular

## Decision Outcome

Chosen option: **Spponacular**. From testing both Spoonacular and EDMAM, even though EDMAM is simpler, it didn't provide us with recipe instructions. Instructions are vital for our "digital cookbook" application therefore we chose Spoonacular.

### Positive Consequences 

*  Gives a lot of flexibility in terms of the information we would want to have in the cookbook.

### Negative Consequences

* A little more cumbersome to use since in addition to the query API call, it requires multiple calls per recipe: instructions and general info and ingredients.
