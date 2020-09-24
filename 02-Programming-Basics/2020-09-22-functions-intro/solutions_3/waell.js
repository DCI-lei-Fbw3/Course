/*# Function Scope
#### 1. Print Exponential Values
* Write a function that accepts two numbers and validate that they are numbers. */
/*After that, the function should print _y_ exponential values starting from _x_.
* For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
* function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2. */
/*function exponential(x, y) {
  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum = sum + i;
    console.log(sum);
  }
}
exponential(3, 5); */
function exponential(x, y) {
    let sum = 1;
    for (let i = 0; i < y; i++) {
      // sum = sum * x
      sum *= x;
      console.log(sum);
    }
  }
  exponential(3, 5);
  exponential(2, 8);
  /*#### 2. Fruits
   * Create a function named `printFavoriteFruit`.
   Declare a variable outside of the function and store your favorite fruit as a value.
   eassign the variable within the function and print "My favorite fruit is: _x_". */
  let fruit = "bananas";
  function printFavoriteFruit(fruit) {
    fruit = "apples";
    console.log(`My favorite fruit is: ${fruit}`);
  }
  printFavoriteFruit("oranges");
  printFavoriteFruit("fruit");
  printFavoriteFruit("apples");
  printFavoriteFruit("bananas");
  /*#### 3. Multiply a Number by Itself
   * Create a function named `exponent` that takes two numbers as parameters.
   The second parameter defines how many times the first number should be multiplied by itself.
   Save the output in a variable named `result`.
   * Then, try to access the variable `result` outside of the `exponent` function.
   Is this possible? Why/Why not? Comment your answer in the `index.js` file.*/
  function exponent(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
      result *= x;
    }
    console.log(result);
  }
  exponent(2, 3); // "result" exists only within the scope of the exponent() function.
  function exponent(x, y) {
      let result = 1;
      for (let i = 0; i < y; i++) {
        result *= x;
        console.log(result);
      }
    }
    exponent(2, 3);