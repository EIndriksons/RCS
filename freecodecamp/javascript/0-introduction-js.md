# More Advanced JavaScript Tips and Tricks

- Comments: `// This is an in-line comment.` and `/* This is a multi-line comment */`
- Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
- `MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.
- Augmented operations like `++`, `--`, `+=`, `-=`, `*=`, `/=`
- Escape a quote from considering it as an end of string quote by placing a backslash (`\`) in front of the quote.
- In JavaScript, `String` values are **immutable**, which means that they cannot be altered once created.
- Unlike strings, the entries of `arrays` are mutable and can be changed freely.
- To append data to the end of an array is via the `push()` function
- `.pop()` is used to "pop" a value off of the end of an array.
- `.shift()` is used to remove first element instead of the last.
- `.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.
- Variables which are used without the `var` keyword are automatically created in the `global` scope.
- It is possible to have both local and global variables with the same name. When you do this, the `local` variable takes precedence over the `global` variable.
- A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.
- Strict equality (`===`) is the counterpart to the equality operator (`==`). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
- The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data types.
- Comparison operators `>`, `<`, `>=`, `<=` all convert data types.
- Sometimes you will need to test more than one thing at a time. The logical and operator (`&&`) returns true if and only if the operands to the left and right of it are true.
- The logical or operator (`||`) returns true if either of the operands is true. Otherwise, it returns false.
- If you have many options to choose from, use a `switch` statement. A `switch` statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched `case` value until a `break` is encountered.
    * case values are tested with strict equality (`===`). The `break` tells JavaScript to stop executing statements. If the `break` is omitted, the next statement will be executed.
    * In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the `default` statement which will be executed if no matching case statements are found.
- All comparison operators return a boolean `true` or `false` value.
- There are two ways to access the properties of an object: dot notation (`.`) and bracket notation (`[]`), similar to an array.
- We can also delete properties from objects like this: `delete ourDog.bark;`
- Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a `switch` statement or an `if/else` chain. This is most useful when you know that your input data is limited to a certain range.
- Sometimes it is useful to check if the property of a given object exists or not. We can use the `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name. `.hasOwnProperty()` returns `true` or `false` if the property is found or not.
- To get a min/max random range function use `Math.floor(Math.random() * (max - min + 1)) + min`
- Conditional (Ternary) Operator for one line if-else expression: `condition ? statement-if-true : statement-if-false;`
- Multiple Condition (Ternary) Operator for one line if-else expression: `condition ? statement-if-true :condition ? statement-if-true : statement-if-false;`