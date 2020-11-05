// Multi-dimension arrays in javascript

/* 
Whats interesting is that multidimensional arrays are not directly provided in JS

- In order to create a mutli-dimensional array in JS, we need to wrap an array in anohtber array.
- What this means, is that we have to put arrays within arrays.

*/ 

let arr = []; //empty 1D array
let arr1 = ['A', 'B', 'C']; //1D array contains some alphabets
let arr2 = ['D', 'E', 'F']; // 1D array contains some alphabets


var multiArr = [arr1, arr2]; // this becomes a 2D array
console.log(multiArr); //should print array with two arrays

//Multi-dimensional arrays can also be represented in the following way
let arr3 = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
];


/* Please Read the folllwing:
https://javascript.info/array
*/
