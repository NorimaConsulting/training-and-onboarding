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
* `pnpm` for dependency management

### Necessary setup/libraries

#### Environment Variables

We'll likely want to use the npm package `dotenv` to handle environment variables.
  * There are many best practices for keeping secrets. We'll do it somewhat properly with a `.env` file as opposed to committing the Hasura secret key.

#### Components
We'll use the [PrimeReact](https://www.primefaces.org/primereact/setup/) component library as much as possible as it has a lot of useful stuff

#### Hasura + GraphQL + Typescript

To talk to Hasura we'll use [Tesseract's](https://github.com/tesseractcollective) [`react-graphql`](https://github.com/tesseractcollective/react-graphql) and [`react-graphql-ui`](https://github.com/tesseractcollective/react-graphql-ui) libraries. You'll need to set those up as a team.

_Note:_ Don't forget to to install the dependencies they need! (`pnpm` will also tell you if you don't have the required `peerDependencies` installed)

We'll also want to use a lot of similar third-party libraries they use. Such as `jotai` and `react-hook-form`. Set them up as needed.

* Check out their [Docs](https://github.com/tesseractcollective/react-graphql-docs) repo for exaples and setup information
  * The main README is good, but also look at https://github.com/tesseractcollective/react-graphql-docs/blob/main/reactGraphqlConfig.md for the graphql code generator information!
  * Check out their "Third Parties We Use" for links to other useful docs
* They use `tailwindcss` and we _can_ too but we don't need to

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
* **WET Principle**  
  Write Everything Twice aka Don't Prematurely Optimize
  * Example:  
  If you use a component twice great, C&P (copy and paste) it and modify it in two places when you make changes! However, when you need it a third time, take the time to consider if it's worth the time to make a generic component or if you're unlikely to re-use it.
* **Atomic Design** for folder structure
  * _Note:_ The `.keep` files have been created because git doesn't push empty folders. Feel free to delete them as you add files to those folders
  * I only make templates when the layout will be re-used between pages. See what happens when you discuss layout and design! You can always refactor later, this is a good place to use the WET principle
  * You can either create `Component.tsx` files or use a folder with a few files. To start out probably just create `.tsx` files as needed. Since we're using a component library you may not have many `atom`s.  
  I find the folder method works best if you have tightly-linked files or if the project uses standalone style files.  
  [React](https://reactjs.org/docs/faq-structure.html) docs themselves say don't spend too long thinking about it!
