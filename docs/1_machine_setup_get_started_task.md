# Get Started: Machine Setup & Initial Tasks

Run through this doc before working on the project as your first task.
It will get your machine set up correctly, confirm linting/formatting is working, teach you a bit about React, and have you make a Github Pull Request.

Everyone on the team doing this should help confirm we're all on the same page.


## 0. Before We Get Started

### Placeholder Text

Docs will often indicate placeholder text you should replace. I tend to flip between `<placeholder>` and `$placeholder`.  

`ALLCAPS` is often used to grab attention in longer lines of text, whereas `snake_case`, `camelCase`, `kebab-case`, and `PascalOrTitleCase` often indicate the format you should follow.

For example, `$YourName` could be replaced with `JamesFirth` and `$myFeature` could be replaced with `writeDocumentation` for example. The edge case is `$ALLCA

### Prerequisites

1. Install the current LTS (Long-Term Support) version of Node.js on your work computer.
2. Install `pnpm` as your dependency manager
   * Other dependency managers include `npm` (default) and `yarn`. However, `pnpm` has several benefits and is currently used by our partners.
3. Either have VSCode formatter extensions such as `Prettier` installed or with the tooling of your choice (simply must pass ESLint checks on Github)

## Web App

### 1. Create Your Branch
* Clone the Repo
* Check out the latest commit from branch `winter2022/main` (initially equal to `main`)
* Create a branch following the format `winter2022/$yourname`  
  Eg: `winter2022/jamesf`, `winter2022/james`, or `winter2022/jfirth`
  * Reminder: any feature branches should follow the format `winter2022/$yourname/$ticket_$feature`.  
  Ignore `$ticket_` if there's no ticket for the change.  
  Eg: `winter2022/jamesf/REC-001_automatic-linting`


### 2. Get Tools, Test Your Setup, Learn about Routes

1. Install dependencies
   1. Navigate to `webapp/` in your terminal
   2. Run `pnpm install` to install all the dependencies
2. Test your initial setup
   1. Run `pnpm dev` to start the dev server
   2. Navigate to http://localhost:3000/ to confirm it works (Just a base-level test)
3. Test your formatter/code style
   1. Copy the file `webapp/SetupChecks/LinkCheckTemplate.tsx` to `webapp/src/linterChecks/$YOURNAME.tsx`
   2. Open the file
   3. Check the `Problems` View in VS Code (at the bottom panel with Terminal). You should see Problems listed for this file.  
   🧠 Protip: Files won't necessarily be checked by ESLint until they're opened
   4. Run your Formatter
      * I have `editor.formatOnSave` set to `true` in VS Code so I just hit `ctrl-s`  
       🧠 Protip: When viewing the settings in VS Code you can search via the setting ID (eg `editor.formatOnSave`) if you know it. This is the key used in the JSON-format settings file (which you can also edit directly). The name will display differently in the settings tab (eg `Editor: Format On Save`)
       * You could format via the CLI or using the VS Code (or other editor) command palette as well.
   5. Confirm all problems are resolved locally  
    _Note_: You can also fix these manually, but may as well have VS Code do it for you manually.  

### 3. Making Changes and Getting Feedback

1. Add a Feature to the Project (in the linterChecks file you made)
   1. Add a custom route for your page eg: `/awesome-developers/james`
   2. Update your Component to include a link to your custom route 
      * Wrap your name in a `Link` or create a button or something else fun. Whatever you choose, it should use the [React Router](https://reactrouter.com/docs/en/v6) library
   3. Confirm clicking on it sends you to the correct route.
2. Create a Pull Request on Github
   1. Make sure your "base" branch (the one on the left and the one that this code will be merged into) is correct. For now it will be `winter2022/main` as our default
   2. Confirm the Lint checks pass (you should get a ✅ saying tests passed)
   3. Have someone else look at your code (projects will vary how many people look at code, some say 2 some say 1)
      1. As a reviewer you should look at the code for organization and typos, but also pull down their branch in case it only works on their machine.  
      I would recommend using `git checkout origin/winter2022/$theirname/$branch`, this checks out the version your machine knows is on github (the `origin` unless you changed that). This will let you check it out again in the future without pulling (easy to forget!). However, you'll need a local copy if you need to make changes to their branch (ask first).
   4. Get it Squashed and Merged! (this also varies project-to-project. Some say the reviewer should merge, others have a dedicated merger, often the project's lead dev)
