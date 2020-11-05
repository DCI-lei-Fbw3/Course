// # Debugging Exercises

// #### 4. Comparing Arrays
// Create a function that returns true if two arrays contain identical values, and false otherwise.

// Someone wrote the following code:
// ```javascript
// function compareArrays(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true
//    } else {
//     return false
//    }
// }
// ```
// * Why doesn't the code work?
// * Fix the code (or restart) to solve the problem.

// * Examples of output
// * compareArrays([1, 2], [1, 3]) ➞ false
// * compareArrays([1, 2], [1, 2]) ➞ true
// * compareArrays([4, 5, 6], [4, 5, 6]) ➞ true
// * compareArrays([4, 7, 6], [4, 5, 6]) ➞ false

//Method 1:
    "use strict"

function compareArrays(arr1, arr2) {
  let result; 
  for (let i=0; i<arr1.length; i++) {
      if (arr1[i] !== arr2[i]){
      return false;
   } else {
    result = true;
    }
  } return result;
 }

console.log(compareArrays([1, 2], [1, 3])) //➞ false
console.log(compareArrays([1, 2], [1, 2])) //➞ true
console.log(compareArrays([4, 5, 6], [4, 5, 6])) //➞ true
console.log(compareArrays([4, 7, 6], [4, 5, 6])) //➞ false

//Method 2:
function compareArrays(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true
   } else {
    return false
   }
}

console.log(compareArrays([1, 2], [1, 3])) //➞ false
console.log(compareArrays([1, 2], [1, 2])) //➞ true
console.log(compareArrays([4, 5, 6], [4, 5, 6])) //➞ true
console.log(compareArrays([4, 7, 6], [4, 5, 6])) //➞ false
