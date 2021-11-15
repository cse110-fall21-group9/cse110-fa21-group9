# ADR - 006: CI/CD Workflows: HTML Validation

* Date: 11/12/2021

## Context and Problem Statement
As we start to develop our app, we want to make sure we are complient with HTML5 standards. Therefore we want to validate every HTML file that we develop


## Decision Drivers 

* Ease of adding to Github Actions workflow
* Popularity of validator and frequency of updates so that we are not using a stale project 
* Ability to run on a local copy of the repo

## Considered Options

1. [HTML5Validator-Action](https://github.com/svenkreiss/html5validator)
2. Using the Github Super Linter for html as well

## Decision Outcome

Chosen option: **HTML5Validator**. We want a separate tool to validate HTML5, especially since we want validation based on w3c standards and not linting or recommendations

### Positive Consequences 

*  Because this action is based on a command line tool, we can run this on local repositories.

### Negative Consequences

* Another tool we have to manage in addition to Github Super Linter
