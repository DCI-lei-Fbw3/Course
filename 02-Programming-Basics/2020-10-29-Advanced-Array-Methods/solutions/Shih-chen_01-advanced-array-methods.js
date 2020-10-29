// # Map, Filter, Reduce

// #### 1. Get total orders
// * Return the total amount of orders.

// ```javascript
const orders = [
   { amount: 250 },
   { amount: 400 },
   { amount: 100 },
   { amount: 325 }
 ];
// ```

const addUp = (objInArr) => {
    let result = objInArr.reduce(function(total, arr) { 
    //use parseInt to convert object values into an integer, or it will be glued up as a string.
      // return the sum with previous value
    return total + parseInt(Object.values(arr)) //arr.amount; (another way to get values of amount)
      //use Object.values(xxx) to extract values when the keys are the same
      // set initial value as 0
  }, 0);
    return result;
  }
  
  console.log(addUp(orders));

// #### 2. Increment by 1
// ```javascript

// ```
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const addUp = (arrNum) => {
let addition = arrNum.map(x=> x + 1);
return addition;
}
console.log(addUp(arrayOfNumbers));

// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
// ```
let test1 = [1,2,3,11,12,13];
let test2 = [22,2,31,110,6,13];

const filterEvenN = (arr) => {
    //number is the element in the array, and return the outcome which is an even number
  let result = arr.filter(number => number%2==0);
    return result;
  }
  console.log(filterEvenN(test1));
  console.log(filterEvenN(test2));

// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.
// * Examples
// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
// ```

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, searchphrase) {
  return arr.filter(function(x) {
      return x.indexOf(searchphrase) !== -1
  })//-1 means no match, The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
}

console.log(filterItems(fruits, 'ape'));  // ['apple', 'grapes']
console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e'));

// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers.
// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20
// ```

const sum = (anArray) => {
    let result = anArray.reduce(function(total, element) {
          return total + element; //another way to write function using reduce method
    }, 0); //0 is the starting number, like sum = 0 when sum is initialised
    return result;
  }
  
  let test1 = [1,2,3,4,5];
  let test2 = [6,7,7];
  
  console.log(sum(test1));
  console.log(sum(test2));

// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.
const arrayNumber = [8, 46, 623, 561, 71, 98];

const sqrRoot = (arrNum) => {
const root = arrNum.map(x => Math.sqrt(x));
return root;
}

console.log(sqrRoot(arrayNumber));