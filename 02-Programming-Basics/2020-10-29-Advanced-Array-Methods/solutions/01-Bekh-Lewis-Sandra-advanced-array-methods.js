// #### 1. Get total orders
// * Return the total amount of orders.


const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

function callback(accumulator, current) {
  accumulator.amount = accumulator.amount + current.amount;
  return accumulator
} 

let totalAmount = orders.reduce(callback);
console.log(totalAmount);


// #### 2. Increment by 1
// ```javascript
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// ```
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.


const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

//solution 1 
function arrayOfNums(arr) {
    const map1 = arr.map(x => x+1);
    return map1
}

console.log(arrayOfNums(arrayOfNumbers))

//solution 2 
// function newArray (x) {
  
//   var otherArray  = [];

//   for (i=0; i<x; i++) {
//     otherArray.push([i] +1);
//   }
//   return otherArray;
  
// }

// console.log(newArray(arrayOfNumbers));


// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:

//filterEvens([1,2,3,11,12,13]); //returns [2,12]
//; //returns [22,2,110,6]


function filterEvents(arr) {
   return arr.filter(num => num % 2 === 0)
}
console.log(filterEvents([1,2,3,11,12,13]))
console.log(filterEvents([22,2,31,110,6,13]))


// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

// * Examples


const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function arrayFilter (someArray, keyword) {
    return someArray.filter(word => word.includes(keyword)) 
}

console.log(arrayFilter(friends, 'ka'));
console.log(arrayFilter(friends, 'e'))



//#### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers.


// su([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20

function sum(arr) {
  var sum = arr.reduce((a,b) => a + b)
  return sum 
      
//     
// 
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // return arr.reduce(reducer) 
}

console.log(sum([1,2,3,4,5]))
console.log(sum([6,7,7]))


// 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.


function root (x) {
  return x.map(x => Math.sqrt(x));
}

console.log(root([8, 2, 16, 100, 140]));