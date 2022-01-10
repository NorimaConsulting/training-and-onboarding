# Resources & References

Some of these sites are great for discovering features, some are good to look for when Googling for a problem, you'll figure out which works for you as you go.

This is **not** an exhaustive list, if you know of other resources that you find particularly useful while learning or good refernces, please share it!

Don't feel constrained by this list either try searching  and finding better tools yourself! 


Everyone's got their own search style, I try and follow "concise and precise" myself (examples below). Worth learning the operators/commands/symbols you can use in Google if you're not familiar with them. [Here's a list fo things such as - to exclude terms](https://www.makeuseof.com/tag/best-google-search-tips-pdf/)

Examples: `$thing`, `$thing reference`, or `how to $x in $thing` ,  `$thing builder`, `$thing generator`, or something similarly concise and precise 


## Miscellaneous

### Links that don't fit a category
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
	- This is worth a read after you're comfier with some code or are making code organization decisions imo
-  Testing/sharing tools
	- [Codepen](https://codepen.io/) is great for testing out all your front-end work
	- [JS Fiddle](https://jsfiddle.net/) is also great for testing out front-end work
- [HTTP Status Code Meanings](https://httpstatuses.com/)
- [Firefox Dev Tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)
	- Both Firefox and Chrome have good developer tools built-in and people should know how to use them
-  Regex Testers/tutorials
	-  https://regex101.com/
	-  https://regexr.com/
-  Markdown
	-  https://www.markdownguide.org/basic-syntax/ (just found this)
-  VS Code
	-  [Snippets Guide]( https://www.freecodecamp.org/news/definitive-guide-to-snippets-visual-studio-code/)
		-  If you have to do anything slightly repetitive snippets are amazingly useful, [here's some examples that I've been using](https://github.com/James-Firth/dot_files/blob/master/.config/Code/User/snippets/javascript.json)



## Cascading Style Sheets (CSS) 🎨

NOTE: Most projects will end up using a css pre-processor, meaning you'll write in another language/format such as [sass/scss](https://sass-lang.com/guide). This gives you more features over basic CSS. However, you'll still need to know how CSS works, as it will normally turn into CSS at some point. Check it out!

### References 📚

- ✨ [CSSReference.io](https://cssreference.io/) 
	- new to me, looks really promising though!
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
	- Mozilla provides very good docs with visual examples, sometimes you can even edit them
- [CSS Tricks](https://css-tricks.com/)
	- There's a few things I have to search often and I always go to their article, flexbox is one such example. 

### Playgounds

- Flexbox
	- https://flexbox.buildwithreact.com/
		- This one supports both Web and React Native so it can be useful in many places

## Javascript/Typescript (JS/TS) ☕️


### Typescript vs Javascript
Typescript is a superset of Javascript, meaning all JS is valid TS. Generally speaking most people I've talked to prefer Typescript at this point. However, whether it's pure TS or JS or a mix will vary by project.

I suspect as a new developer knowing if what you're searching is a Typescript or Javascript feature (or problem!) could be tricky.

In Short:
- Anything using the `type` or `interface` is going to be typescript.
- Often when you see `x: y` then `y` is describing the type. A good IDE/editor like VS Code will tell you when hovering as well. The exception is when you see Destructuring used.

### Sidebar: JS and ESx/ECMAScript useful info

[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) often comes up. It's a bit fuzzy on the details but basically ECMA Script is the specification that Javascript follows (or at least that's how I think of it). Confusingly `ES6` is the same as `ES2015`.

Basically always look for the modern way, which will be ES6 or later. as es6 and es2020 for instance have added a _lot_ of better ways to do things. 

There are a few features that devs tend to refer to by name frequently and sound like technobabble otherwise, I'll mention them in the references below.

### Sidebar: Async functions ⏳

Javascript is a language that builds on top of new features without removing the old ones. Asynchronous code is one of those. You do sometimes need to use the older features, but generally I'd say use the latest when you can. I'll spare the details but give you the terms to look up.

For your reference here's the list in order from newest to oldest:

1. async/await
	- It looks just like synchronous code but has an `await` in front. Function _must_ have `async` keyword in front of their definition.
	- imo this is the best and cleanest way of doing things.
	- Trap: Calling an async function within a loop will likely not behave how you expect. Look up `map` and `Promise.all` solutions
2. Promises
	- You chain `.then` and `.catch` to the functions and a returned promise can also be chained
	- You fairly often will need to make use of static functions like `Promise.all` and sometimes need to manually wrap calls in `new Promise((resolve, reject) // etc`
	- Pretty good and useful to know about
3. Callbacks
	- This is the old way, avoid it when you can. Many libraries will all you to do something like `dbCall().promise()` or `asyncDbCall()` to get a modern solution.
	- In this you provide a function that is called when the async code is done running (success or error). This created a lot of identing and issues called "Callback Hell" or "the Pyramid of Doom"
	

### References 📚

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
	- Once again, Mozilla provides amazing documentation and live examples for Javascript. 
- [The Official Typescript Site](https://www.typescriptlang.org/docs/handbook/intro.html)
	- For all things typescript, it has a handbook (linked) and playground so you can easily learn
- [ES6](https://github.com/lukehoban/es6features) is really the beginning of modern JS and introduced a number of core features, I'll call them out by name to assist with googling
	- Arrow Functions `const greet = (name) => console.log("hello " + name)`
	- Classes!
	- Template Strings (modern string interpolation) ```console.log(`Hello ${name}`)``` 
		- These are preferred over the `+` notation
	- Destructuring and Destructuring Assignment  `const {firstName} = person`
		- Lets you pull out only what you need, even from arrays!
	- Spread operator `...` 
		- This one is tricky to understand, look up examples
	- Let and Const variable types
		- _Always_ use these over `var` (technically you may have a reason but I've never come across a need for var over let in practice.)
	- Iterators
	- and more! (these ones just come up a lot)
- [ES 2020](https://www.freecodecamp.org/news/javascript-new-features-es2020/) Feature highlights
	- especially take note of "Nullish Coalescing" and "Optional Chaining"

## React :atom_symbol:

This is the biggest work-in-progress section as there is an ocean of documentation on the subject.

I'd recommend looking at React's own tutorial https://reactjs.org/tutorial/tutorial.html BUT also learn about Functional Components, as that's what we primarily use. The tutorial focuses on class-based components.



## GraphQL :bar_chart::question:

WIP

 https://graphql.org/

* GraphQL is a popular query language for APIs nowadays (as opposed to using a RESTful API).
* It allows you to make queries from the client that will be used to query the database (or perform other actions)
* Check out the tutorial https://graphql.org/learn/

## Databases and SQL :minidisc:

WIP

* We normally use Postgresql because it has support for UUIDs
* Read up on Primary and Foreign Keys
  * These are used a lot in Hasura APIs
* General knowledge of DBs is good to have especially if you have to start touching the back end.
