# Answer Sheet

> Mahyar Jamalabadi - Senior Front-End Engineer role quiz

## Q1

- The pattern `POST /users/:id/update` API is comprehensive and can cover behaviors like `POST /users/:id/rename` and `POST /users/:id/update-timezone` depending on the payload

- I think a pattern like `PUT /users/update/:id` is better to be implemented as API.

- The `DELETE` REST API, just like `POST`, can not handle the inline URI variable and should be like `DELETE /users/:id`.

- Also the provided example has an issue that shows an upcoming error while the status code is `200` that it should be something like `409` based on the documentations.
  
## Q2

- Importing the stylesheets through the `<link>` tags in the main html file, or using a bundler, like **webpack** to bundle all the pieces of the stylesheet together are the most common ways. 

- With the current class hierarchy, there is no need to mention `!impotant` for `font-size` in the `.header.large` The selector is more specific than `.header`.

- color definition in the `.header.large` is redundant because it is already specified in `.header`

- The class `.lfnt` is not truly readable and is hard to understand and we should use a more specific name for it.

- The direct descendant selector `>` is slower to match than a unique class name would be. Also `div > a > span` is overly generic, and makes it likelier to have conflicting rules.

- The `.box` class margin assignment has no mentioned unit at the end of the values and also we could merge them together, like `margin: 3px` to be more readable.

## Q3

- Simple and constant password salt is not very secure and should be auto-generated for each password.

- Use a better hashing function, because MD5 is too fast and an attacker can generate many hashes to guess the correct password. `Bcrypt` could be a better choice here.

## Q4

- Instead of defining `sum` and using such `for` loop, we can use `return deposites.reduce()` code style which makes the code both more understandable, and incidentally shorter.

## Q5

- At the code, we always use the `u` and `convsPath` together and they never change, so we can attach them together and use `const`, like `const path = 'https://example.com/api/conversations'`

- Instead of defining result as `const` and then returning it, we can return the whole `await` function like `return await fetch(path).then(...)`.

- Defining `promises` and then use it in `Promise.all()` is okey and makes the code more readable, but we better define it `const`. Also if we're using the `async/await` style, then let's use it consistently. It might be better if we extract `.map` function content as a separate `async` function.

- Instead of assigning the `item.message` in a mutating matter, we better use spread operator like `return { ...item, messages: msgs }` or letting the caller handle it outside of the scope.

## Q6

- To be more understandable we can remove not operator from the `if-condition` and then switch the actions under `if` and `else` block.

- Totally we better have too method named `increaseCredit` and `increaseDebit` and handle this `if-condition` outside of the class implementation.

- In case Account is a class, then better define `increaseBalance` and `increaseDebit` as class methods.

## Q7

- The answer is available [here](https://jsfiddle.net/mahyarj/f7ctjvya/). Also you can find my path to fully optimize it through temporary pages, start from `/1 `

## Q8

- The front-end assignment is available in `.zip` and also `git` repository [here](https://github.com/MahyarJ/unity-frontend-quiz).
