# training-and-onboarding

An introductory Project Repo for new hires.
As such, it should contain lots of instructions, examples, and best practices.

## Goals

Learning without Tech Debt
- Give devs a project with a small scale and lots of new tech to make mistakes and learn with
  - This means when moving to the next project you'll already have things you want to do differently/better!
- Since we use the concept of a client, user stories, etc. this also gives BAs and PMs a chance to decide how they prefer to track, write, and prioritize tasks.

Docs
- Provide a centralized location for technical and team onboarding docs
  - This includes the Training Program docs and its associated goals (primarily teaching and reference)
  - Allow these to become a living document that is updated as necessary

Setup
- Give devs the opportunity to learn about tools required and their setup instead of it all being "magic"



## Project Layout

* Docs
  * Used for storing whatever non-code files are needed
* Hasura (API + DB)
  * Stores all the schema and metadata info
* webapp
  * The Typescript React web app

## Tools to use

### CLI Tooling

* Hasura CLI
* pnpm for dependency management

### Necessary setup/libraries

* 

## Concepts and Practices to Follow

* **[Convention Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for Git Commit Messages**
  * TL;DR Commits should be focused and "atomic". Git commit Messages should follow the format `type(scope): subject` and then add details below in the body.  
  [Detailed Explanation from Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
  * I tend to follow Angular's "type" list, here's the ones I use the most (list alphabetically)
    * **ci**: Changes to CI/CD, so Github Actions, Travis, Azure stuff. Mostly configuration files
    * **docs**: Documentation. So adding comments or new markdown files
    * **feat**: A new feature. This may be technical features or user-facing.
    * **fix**: Bug fixes when something is broken
    * **refactor**: "A code change that neither fixes a bug nor adds a feature" - Angular docs
    * **style**: (Note: CODE style, not CSS) "Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)" - Angular docs
    * **test**: Adding or updating tests (if we have them!)
    * ✨ **visual**: Used when changing the UI in ways that (likely) doesn't change functionality and is not a strictly new feature nor is it really a bug fix. For example: Changing small CSS properties or swapping out an html `<button>` for a fancier React `<Button>` component from a component library. (This is one I _just_ came up with, feedback appreciated!)
* **Atomic Design** for folder structure
* **WET Principle**  
  Write Everything Twice aka Don't Prematurely Optimize
  * Example:  
  If you use a component twice great, C&P (copy and paste) it and modify it in two places when you make changes! However, when you need it a third time, take the time to consider if it's worth the time to make a generic component or if you're unlikely to re-use it.
