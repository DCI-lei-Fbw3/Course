


// Excercise 3 - Q1

function valid(x, y) {
  if (isNaN(x)) {
    console.log("x is not a number");
  } else {
    console.log("x is a number");
  }
  if (isNaN(y)) {
    console.log("y is not a number");
  } else {
    console.log("y is a number");
  }
  if (isNaN(x)) {
    console.log("x values cannot be exponated");
  } else {
    console.log(x ** y);
  }
}

valid(4, 2);

//Q2

/* let fruit = "apple";
function printFavoriteFruit() {
  let fruit = "oranges";
  return fruit;
}
console.log(printFavoriteFruit()); */

//Q3

/* function exponent(num_1, num_2) {
  var result = num_1 ** num_2;
} 

console.log(result); / */

//the variables let or var cannot be accessed from outside since they are block and function scoped respectively.
