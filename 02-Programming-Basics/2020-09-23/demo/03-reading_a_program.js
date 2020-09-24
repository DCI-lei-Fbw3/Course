// Replacing function calls with their return values;

let numbers = [1, 2, 23, 9393, -12, 0];

let minNumber = Math.min(...numbers); // "..." := spread operator: expands an array into individual items
let maxNumber = Math.max(...numbers);

let sumMinMax = sum(minNumber, maxNumber);

console.log(minNumber, "+", maxNumber, "=", sumMinMax);
console.log("Alternative with calling the function 'sum':");
console.log(minNumber, "+", maxNumber, "=", sum(minNumber, maxNumber));

function sum(a, b) {
	return a + b;
}

function noReturn() {
	console.log("no return, only logging");
}

console.log("value of the noReturn()-function:", noReturn());
