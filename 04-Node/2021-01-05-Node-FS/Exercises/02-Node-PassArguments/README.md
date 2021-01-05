## Instructions for students:

### Pass Arguments

Create a program that prints headers to the terminal, this program should accept 2 arguments the first argument should be the number of stars to print before and after the header. The second argument should be the word to print inside the header. Please follow the specifications below:

-   Make sure to create 2 files, `index.js` should parse the arguments from the terminal and call a function print that is exported from the second file: `stars.js`.

-   `stars.js` should export a function that takes in the number of stars to print and the header text. If no stars or no header are passed to the function, the function should print out 10 stars and the word hi to the console by default. See following example

```bash
$ node index.js
**********
hi
**********
```

-   When arguments are passed to the program as expected the output should look like the following:

```bash
$ node index.js 15 hola
***************
hola
***************
```

### Rules

-   This is an individual assignment.
-   Use **Git properly**

