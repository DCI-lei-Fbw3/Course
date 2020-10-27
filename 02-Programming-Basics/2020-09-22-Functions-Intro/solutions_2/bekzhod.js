/*  #### 1. Multiply - Function Declaration
 * Create a function that multiples a number by another number. */

function multiply(x, y) {
  let result = x * y;
  console.log(result);
}
multiply(2, 15);

/*-----------------------*/

const arrow = function (x, y) {
  return x * y;
};
console.log(arrow(5, 5));

/*-----------------------*/

/* #### 3. Multiply - Arrow Function
 * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
 */

const power = function (x, y) {
  let result = 1;
  for (let i = 1; i <= y; i++) result = result * x;
  return result;
};
console.log(power(3, 3));

/*-----------------------*/

/* Exercise_3

/*  # Function Scope

#### 1. Print Exponential Values
* Write a function that accepts two numbers and validate that they are numbers. 

After that, the function should print _y_ exponential values starting from _x_.

* For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
* function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2. */

function numbers(x, y) {
  if (x || y === Number) {
    let result = 1;
    for (let i = 0; i < y; i++) result = result * x;
    return result;
  }
}
console.log(numbers(3, 5));

/*-----------------------*/

/* #### 2. Fruits
 * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". */
var fruit = "apple";
function printFavoriteFruit() {
  var fruit = "pineapple";
  console.log("My favorite fruit is: " + fruit);
}
printFavoriteFruit();
/*-----------------------*/
/*
function printFavoriteFruit(x) {
  console.log("My favorite fruit is: " + x);
}
printFavoriteFruit(fruit);*/

/*-----------------------*/

/*  #### 3. Multiply a Number by Itself
 * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
 * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.  */

const exponent = function (x, y) {
  let result = 1;
  for (let i = 0; i <= y; i++) result = result * x;
  return result;
};
console.log(exponent(5, 5));

/* ---> console.log(result) /* ------> Result is not defined! Since it's has been declared inside of function (localy)*/
