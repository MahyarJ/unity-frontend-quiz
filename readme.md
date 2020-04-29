# Answer Sheet

## Q1

- The pattern `POST /users/:id/update` API is comprehensive and can cover behaviors like `POST /users/:id/rename` and `POST /users/:id/update-timezone`.
- I think a patern like `POST /users/update/:id` is better to implement API.
- The `DELETE` REST API, just like `POST`, can not handle the inline URI variable.

## Q2

- In the `.header` class definition, there is no need to define color could be `#CAD` instead of 6-character-style.
- With the current class hierarchy, there is no need to mention `!impotant` in the `.header.large` sub-class `font-size`.
- The class `.lfnt` is not truly readable and is hard to understand to use.
- The `.box` class margin assignment has no `px` at the end of the values and also we could merge them together, `margin: 3px` to be more readable.

## Q3

-

## Q4

- Instead of defining `sum` and using such `for` loop, we can use `return deposites.reduce()` code style.

## Q5

- At the code, we always use the `u` and `convsPath` together and they never change, so we can attach them together and use `const`, like `const path = 'https://example.com/api/conversations'`
- Instead of defining result as `const` and then returning it, we can return the whole `await` function like `return await fetch(path).then(...)`.
- Defining `promises` and then use it in `Promise.all()` is okey and makes the code more readable, but we better define it `const`.
- Instead of assigning the `item.message` in a mutating matter, we better use spread operator like `return { ...item, messages: msgs }`.

## Q6

- To be more understandable we can remove not operator from the `if-condition` and then switch the actions under `if` and `else` block.
- Totally we better have too method named `increaseCredit` and `increaseDebit` and handle this `if-condition` outside of the class implementation.

## Q7

- The answer is available [here](src/q7.js)

## Q8

- You can run the project using `npm run dev`
