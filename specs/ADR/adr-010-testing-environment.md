# ADR - 010: Testing Environment

* Status: Accepted, proceeding with development as planned
* Date: 11/17/2021

## Context and Problem Statement

We know that the `import pandas` cookbook will be using web components to facilitate the extensibility of CRUD operations.  
How can we test these web components such that bugs can be easily isolated, and encourage web components to be architecturally robust on the individual level?

## Decision Drivers 

* We are using Electron.js for deployment.
* We want our software systems to be architecturally sound. That means keeping dependencies down to only the necessary.

## Considered Options

1. Just test directly in our source code
2. Create a testing environment that can run a single web component in isolation at a time using electron
3. Copy-paste the web component code into an html file, and test it in the browser using the developer console

## Decision Outcome

Chosen option: creation of a testing environment. This will allow our web components to be tested easily, while also allowing bugs to be easily isolated, reproduced, and fixed without the possibility of getting buried deep inside the javascript runtime's callstack, which is likely what would have happened if we were to try and debug web components directly in our app.  
This will inform a kind of funny offshoot of "test-driven-development" where we will be encouraged to write web components that are largely independent of each other when not a part of a parent-child relationship, and that pass messages to each other only through JSON or similar controlled communications protocols.


### Positive Consequences 

* Gives our support team (i.e. management) something to work on while the rest of front end is dealing with the HTML scaffolding.
* When finished, will allow web components to be tested very easily
* Bugs will be easy to isolate, reproduce, and fix
* Several solutions to problems that we will have to face as desktop app developers will be prototyped (i.e. filesystem calls)

### Negative Consequences

* Will take some development time off management's hands. 