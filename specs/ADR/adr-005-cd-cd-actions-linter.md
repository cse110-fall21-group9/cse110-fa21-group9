# ADR - 005: CI/CD Workflows - Linter

* Date: 11/12/2021

## Context and Problem Statement
Need to decide how we want to implement our CI/CD pipeline. Since we already decided we will use ESLint as the linting tool, we need CI to use ESLint.

## Decision Drivers 

* How fast can we get the linter online using Github Actions
* How easy will it be to use for all team members
* Will it work locally before pushing to github

## Considered Options

1. Github Super Linter
2. Lint Action

## Decision Outcome

Chosen option: **Github Super Linter**. Github super linter supports ESLint and cutom config files, this means that team members will be able to run ESLint 
locally using the VSCode extension, and the workflow will use the same config file online.

### Positive Consequences 

*  The Super Linter is able to also lint HTML files and many other source files should we choose to use them

### Negative Consequences

* We have not made enough tests to determine this, but we should be able to replace this workflow with any other that just runs ESLint using the provided ESLint config YAML file
