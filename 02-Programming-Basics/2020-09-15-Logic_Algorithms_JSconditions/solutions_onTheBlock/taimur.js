// 1
const determiner = 100;
const x = (determiner >= 0) ? "Greater or equal to 0" : "Less than 0";
console.log(x);


// 2
let updater;
if (determiner >= 0) {
    updater = "Greater or equal to 0"
    let message = "Positive integer";
    console.log(message);
} else {
    updater = "Less than 0";
}

console.log(updater);
// console.log(message);
// We cannot access message outside of the if statement and get an error. This is because message is scoped to the if statement. Message is not defined at the global scope.

// 3 
// Generally, we use a ternary operator when we want to set a value to a variable based on a condition.
// Example
const y = (x == 42) ? true : false;