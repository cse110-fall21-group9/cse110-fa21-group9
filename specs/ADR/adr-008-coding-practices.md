# Coding Standards Doc
Author: Zane Wang

As per the professor's suggestions in the Nov. 11 bonus lecture (the notes for which can be found under the *Coding - Best Practices* section in my class notes doc), coupled with my own expectations for what is architecturally sound code, I will be enforcing certain structural standards for our code beyond what ESLint might expect.

## Naming Conventions
JS name conventions resemble Java. Good symbol names improve readability, but also help us avoid namespace collisions and general confusion. **We share the global namespace with every module we import**. This means that our script-level functions need to be named as precisely as possible to avoid possible collisions with function handles in other files, and particularly in APIs we use. Functions that belong to ECMAScript 6 `class` declarations will not have this issue.
- Use `ROAD_KILL_CASE` for global constants
- Use `camelCase` for function-scoped variables and function bindings
- `PascalCase` for class names (and therefore constructors)
- One suggestion from the prof is to use `snake_Case` for our own variables & functions to completely eliminate the possibility of collisions with API code. I suspect that none of you really want to do this, but I'll leave the option open in case you're willing to try. Make sure to commit to one and be consistent across team members.

## Comments
Write comments! You know how to write good comments from previous CSE classes. One point of interest is JSDocs, which can be formed by multi-line comments at the top of files, functions, and classes. Please use tokens (@method nameOfMethod, @param {type}, @return {type}, etc.) to facilitate JSDoc generation via out build pipeline.

Also, make use of annotations like
// TODO: code to complete, indicate details if possible
// HACK: shortcut or ugly workaround. Indicate the owner, date, and details of the hack
// FIXME: code that is currently not performant or straight up not working. A serious problem that needs to be fixed ASAP.

Also, *clean up all commented out code* so that ***none** of it appears in our production build*. We *will* be graded on how much unnecessary junk is in our production code, so please keep this in mind. Ideally, we'd automate our build pipeline to also catch dead code and remove it automatically.

## Magic _______s
Magic _______ is bad, and I will ban them (as most teams probably will). 
- String references (`document.getElementByID('string literal')`), 
- Hardcoded array references (`recipes[43]`), 
- and similar will certainly be frowned upon by our graders.

There are very very few reasons to use unbound literals in any code. **You do NOT want to be debugging a typo for hours.**  Having all values bound to symbols not only allows find/replace to work better, but allows your IDE to detect what member variables and functions exist in the current scope and suggest them to you (code completion), preventing you from having to memorize everything. The only exception would be extremely small files that don't have many dependents.

Ways to get around this include:
- Bind all strings & numbers to variables
- Use dictionaries or classes with static variables to implement Java-style enumerations (`enum`)

## Separation of Concerns

- Keep CSS out of JS
    - The reason that this is largely undesirable is the fact that this is a huge maintainability issue. UI is guaranteed to shift over time, as styles and preferences change/evolve. 
    - Having to go into your code every time to change UX-related aesthetic issues causes interaction logic to be muddled with aesthetic markup. This is architecturally unsound, and best avoided at all costs.
    - Use class name adding through JS and external CSS selectors to achieve logical style changes.

Bad: 
```JS
// Bad
function changeStyle(el) {
    var element = document.getElementById(el);
    element.style.cssText = `color:black; font-size: 24px; background-color: orange;`;
}
```

Good:
```JS
// Good
function changeStyle(el) {
    var element = document.getElementById(el);
    if (element.classList) {
        element.classList.add("halloween");
    } else {
        element.className += "halloween";
    }
}
```
```CSS
.halloween {
    color: black;
    font-size: 24px; 
    background-color: orange;
}
```

- Keep JS out of HTML
    - It is a common practice to use on{*} attributes for elements (onload, onclick, etc), particularly in the old days - and it appears to be coming back. 
    - It is far better to bind our event listeners by passing them to addEventListener or by using a direct binding.

Bad:
```html
<button onclick='alert("ew");'>This Bad</button>
```
Better:
```html
<button id='thisIsButton'>Less Bad</button>
<script>
let myBtn = document.getElementById('thisIsButton);
myBtn.onclick = function() {
    alert('this is less bad');
};
</script>
```
- Keep HTML out of JS
    - Keeping HTML fragments in your JS is also a pretty bad idea. If it must happen, we should centralize them and pull them in with a module and use template strings.
