
console.log("strings");
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("unsorted:");
console.log(fruits);

console.log("sorted:");
fruits.sort();
console.log(fruits);


console.log("numbers:")
let numbers = [100, 22, 42, 1, -34];

console.log("unsorted");
console.log(numbers);

console.log("sorted");
numbers.sort((a, b) => a - b );
console.log(numbers);
