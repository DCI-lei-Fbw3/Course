# Anonymous functions all the way

Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "DCI".

**Examples**

```

lambdaDepth(0) ➞ "dci"

lambdaDepth(1)() ➞ "dci"

lambdaDepth(2)()() ➞ "dci"

typeof lambdaDepth(2)() ➞ "function"

```

**_Notes_**

1. num will always be a non-negative integer.
2. If num == 0, return "dci".
3. If num > 0, return a function.
4. All non-example test cases come in two forms: checking whether 5.5.5.5. lambda_depth(k), after being called k times, returns a string, and 6. checking whether lambda_depth(k) returns a function.
