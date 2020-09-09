// source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_comparisons1
console.log("Choose the correct comparison operator to alert true, when x is greater than y.");

x = 10;
y = 5;
console.log("x > y: " + (x > y) ); // <- CHANGE THERE

// source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_comparisons2
console.log("Choose the correct comparison operator to alert true, when x is equal to y.");
x = 10;
y = 10;
console.log("x == y: " + (x == y) )

// source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_comparisons3
console.log("Choose the correct comparison operator to alert true, when x is NOT equal to y.");
x = 10;
y = 5;
console.log("x not equal y: " + (x != y) )

// source: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_comparisons4
console.log('Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".');
var age = 16;
console.log("age: " + age);
var result = (age < 18)? "Too young" : "Old enough";
console.log(result);
