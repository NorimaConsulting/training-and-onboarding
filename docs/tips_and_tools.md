# Tips and Tools

## Tips for tech professionals 🧑‍💻

- 🔢 Learn how Regular Expressions (regex) works

  - You can use them in almost every language, with some variations
  - You can use them in VS Code's search box
    - This can make find/replace _really_ fast if you're good at it
  - Note: It's not a silver bullet and really shouldn't be used for some tasks. However it comes up often enough gaining comfort with them is very useful.
  - Note: Basically just learn little bits as you do other things as it's useful but not critical like learning JS

- ✍️ Learn how to write Markdown

  - It's used in READMEs, Github comments, almost everywhere a developer might start writing a comment!
  - You can disable the What You See Is What You Get (WYSIWYG) editor in Slack's preferences and use it manualy for example.
  - Editors that use `pandoc` under the hood (VS Code has extensions)can convert markdown `.md` files into PDFs and even Word (`.docx`) files for you.
    - So if someone every asks for a report imo it's your easiest way to write it fast and have it look half decent, with the tools you have already open!

- Look up `awesome $tech` for curated lists on github.  
  For example `awesome react` will give you tons of tutorials, components, etc in a somewhat organized/curated place!

- 🧑‍🎓 Learn your tools and work towards mastery!

  - You can't do it all at once but I slowly work towards learning hotkeys and features in the tools I use.
    - Everyone's brains are different and maybe you don't work well with hotkeys or are better with organizing notes or code in different ways. Find what works for you and lets you communicate well with others.
    - For instance VS Code's Release Notes often highlight useful new features.
    - I slowly look up features I hear about like jumping words with ctrl + arrows (or opt + arrows on mac) or using multiple cursors at once in VS Code
  - Invest in yourself and your tools and you'll slowly become more productive!
    - You can start now by using ctrl+k (or cmd+k) in Slack to jump to different conversations

## Tools to Install for JS/TS projects

Dev tools you should install

1. Browsers: both Chrome (or a Chromium-based browser like Brave or Edge) and Firefox

   - Because you should really test web apps in multiple browsers

2. [NVM](https://github.com/nvm-sh/nvm)

   - in case you end up on projects using older versions
   - You may need to install Node first (below)
   - If there's a better version manager you know of, let us know!

3. Node v16 (LTS)

   - Deliverable: pasted output from your terminal `node --version` (just to make sure we're all on the same version)

4. Node Package Managers

   1. Node comes with `npm` by default. However, most projects tend to prefer something like `yarn` or `pnpm` for various reasons. In most cases you can simply substitute one name for another. Notable execptions:
      1. `npm` uses `npm run $scriptname` while `yarn` and `pnpm` let you omit `run`
      2. `npm` uses `npm install $library` both `yarn` and `pnpm` use `add` instead of `install` . Instead they reserve `install` for installing all the items in the `package.json`

5. Windows Terminal

   - Lets you run many different shells if needed.
   - Get
     - https://aka.ms/terminal shortlink to Microsoft Store OR
     - https://github.com/microsoft/terminal this has a bunch of ways to install(it's open source!)
   - Deliverable: Screenshot again?

6. (Optional) Sublime Merge

   - I prefer this for Git, you may find VS Code's built-in tools to be good enough.

7. Editor/IDE: VS Code
   I'd also recommend a handful of extensions. A few are language-specific but should serve you well for starting off.

   1. VS Code Settings
      I Highly recommend making these settings changes! The dot-delimited name should make them easy to search in the settings tab. You can also edit settings.json directly

      1. (personal preference) Install and enable[FiraCode](https://github.com/tonsky/FiraCode) font and ligature support (give you fancy arrows, etc)

      ```
      "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
      "editor.fontLigatures": true,
      ```

      2. Keep github happy by always including a final newline `"files.insertFinalNewline": true`
      3. Make it easy to see if you have mixed spaces and tabs or trailing whitespace `"editor.renderWhitespace": "all",`
      4. Make it easy to line up brackets `"editor.guides.bracketPairs": true,`

   2. "Required" Extensions

      1. [Live Share by Microsoft](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
         - Allows for easier pair programming when working remotely.
      2. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
         - Shows you git information right within your editor!

   3. General Use, highly recommended extensions:

      1. REST Client
      2. Sort JSON Objects
      3. [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
         - Makes TODOs easy to find

   4. Project-specific extensions:

      1. Always look for language support extensions if VS Code isn't recognizing a file. For example I have the extensions: DotENV (for `.env` files), Markdown All In One (for `.md` files), and `GraphQL` for graphql files among others.
      2. Prettier - Code Formatter
         1. Used a lot in JS projects
      3. Tailwind CSS IntelliSense
         1. adds intellisense support for tailwind classes (if your project is using that for styling)

## :sparkles: Terminal Fun

Good terminal skills are incredibly valuable as terminals are universal. Whether you need to patch a server or just write a quick script, your terminal is always there for you. So, why not become better friends?

1. :rainbow: Customize your terminal!

   1. Don't settle for plain git bash or powershell, try:
      1. [fish](https://fishshell.com/) -- try customizing it further with [oh my fish](https://github.com/oh-my-fish/oh-my-fish) themes such as [bob the fish](https://github.com/oh-my-fish/theme-bobthefish)
      2. [zsh](https://www.zsh.org/) and [oh my zsh](https://ohmyz.sh/)
      3. [powershell core](https://github.com/PowerShell/PowerShell) combined with [oh my posh](https://ohmyposh.dev/)
   2. Make `Vim` fun to use! All it takes is a `~/.vimrc` file.
      1. [Introduction To Vim Customization](https://www.linode.com/docs/guides/introduction-to-vim-customization/)
      2. [vim-plug](https://github.com/junegunn/vim-plug) -- plugins make Vim really powerful
         1. [5 Must-Have Vim Plugins That Will Change Your Workflow](https://www.twilio.com/blog/5-must-have-vim-plugins-that-will-change-your-workflow)
         2. [Markdown Preview for (Neo)vim](https://github.com/iamcco/markdown-preview.nvim)
      3. [21 Best Vim Themes](https://www.dunebook.com/best-vim-themes/)

2. Try tweaking your Powershell's `PROFILE` or Bash's `.bashrc` files. You can write your own terminal commands as functions! E.g. make a `note` command that opens your preferred editor and a file with today's date.
3. Understand what the [PATH](http://www.linfo.org/path_env_var.html) environment variable is for.
4. Practice using [command line git](https://www.learnenough.com/git-tutorial).
5. Make `ssh` cleaner and easier by [saving hosts that you connect to frequently](https://linuxize.com/post/using-the-ssh-config-file/)
