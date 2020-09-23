// Replacing function calls with their return values;

let numbers = [1, 2, 23, 9393, -12, 0];

let minNumber = Math.min(...numbers); // "..." := spread operator: expands an array into individual items
let maxNumber = Math.max(...numbers);

let sumMinMax = sum(minNumber, maxNumber);

console.log(minNumber, "+", maxNumber, "=", sumMinMax);

function sum(a, b) {
  return a + b;
}
