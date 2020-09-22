// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print _y_ exponential values starting from _x_.
// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

function executeExponential(x, y) {
  if (x != NaN && y != NaN) {
    let result = "";
    let rollingResult = 1;
    for (let i = 0; i < y; i++) {
      rollingResult *= x;
      result += rollingResult + " ";
    }
    console.log(result);
  } else {
    console.log("Invalid input");
  }
}

executeExponential(3, 5);
executeExponential(2, 8);

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_".
let x = "mangoes";
function printFavouriteFruit(x) {
  x = "bananas";
  console.log("My favourite fruit is: " + x); //Should always return bananas
}

printFavouriteFruit("manges");
printFavouriteFruit(x);
printFavouriteFruit("apples");

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

function exponent(x, y) {
  let finalResult = 1;
  for (let i = 0; i < y; i++) {
    finalResult *= x;
  }
  return finalResult;
}

console.log(finalResult); //Will not work: finalResult exists only within the scope of the exponent() function.
