/*1. Print Exponential Values
* Write a function that accepts two numbers and validate that they are numbers. 

After that, the function should print _y_ exponential values starting from _x_.

* For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
* function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.
*/


function expoValues(x, y){
  for (let i=1; i<=y; i++) {
  let result=x**i;
  console.log(`${x}**${i} = ${result}`);
}
}

expoValues(3, 5);
expoValues(2, 8);

/*
2. Fruits
* Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 
*/
console.log("......");

let fruit = "strawberries";
function printFavoriteFruit(aFruit) {
  console.log(`My favorite fruit is ${aFruit}`);
}

printFavoriteFruit(fruit);

/*
3. Multiply a Number by Itself
* Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
* Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.
*/

function exponent(x, y) {
  if(typeof x != "number" || typeof y != "number"){
  console.log ("please make sure you have offered two numbers.");
}
for (let i=0; i<y; i++) {
  //let result=x**y;  This cannot be accessed by console.log in line 48 outside of the loop.
  var result=x**y;    
   } 
console.log(result);
}
exponent (3, 5);
exponent (2, 8);
exponent (3, 6);
//If result is initiated using let instead of var, console.log threw out an error for having an unidentified variable. However, with result taking a var, console.log does not throw out an error.
