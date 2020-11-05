// # Recursion Exercises

// Please go to the Edabit collection below and work on all _4_ exercises.

// https://edabit.com/collection/AmLf5WfbDLPAqx3gC


// Submit the solutions in a single file as __<your first names>.js__ 

// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0


// const length = str => str == '' ? 0 : length(str.substring(1)) + 1;

function length(str) {  //pie
  if (str === "") {
    return 0
  } else {
    return length(str.substring(1)) + 1
  }
}

//str = pie
//else --> "ie" --> "e" --> 0 --> 1 --> 2 --> 3



// "apple".substring(1) === "pple"
// "pple".substring(1) === "ple"
// "ple".substring(1) === "le"
// "le".substring(1) === "e"
// "e".substring(1) === ""  --> 0 




// length("apple")

// Write a function that reverses a string. Make your function recursive.

// Examples
// reverse("hello") ➞ "olleh"

// reverse("world") ➞ "dlrow"

// reverse("a") ➞ "a"

// reverse("") ➞ ""

function reverse(str) {  //hello
  if (str === "") {
    return ""
  } else {
    const newStr = str.slice(0,-1)    //hello --> hell --> hel --> he --> h --> "" 
    return str.slice(-1) + reverse(newStr)   //  o + 
  }
}

console.log(reverse("hello"))



// Write a function that calculates the factorial of a number recursively.

// Examples
// factorial(5) ➞ 120 ( 5 x 4 x 3 x 2 x 1)
// factorial(3) ➞ 6  (3 x 2 x 1)
// factorial(1) ➞ 1 ( 1 x 1)
// factorial(0) ➞ 1 (1)



function factorial(num) {  
  if (num === 0 ) {
    return 1                    //the function continues until 0 first, so 1 is the first return value
  } else {
    return num*factorial(num-1) // 1 * 1 / 1 * 2 / 2* 3 / 6 *4 / 24 * 5
  }
}
console.log(factorial(3))




// Recursion: Fibonacci Numbers
// Fibonacci numbers are created in the following way:

// F(0) = 0
// F(1) = 1
// ...
// F(n) = F(n-2) + F(n-1)

//0 1 2 3 4 5 6  7  8
//0,1,1,2,3,5,8,13,21


//fib(8) == 21


// function fib(num) {  
//   if (num === 0) {
//     return 0                   
//   } else {
//     return num + fib(num-1) + fib(num-2) 
//   }
// }
// console.log(fib(8))

let arr = []; //empty 1D array
let arr1 = ['A', 'B', 'C']; //1D array contains some alphabets
let arr2 = ['D', 'E', 'F']; // 1D array contains some alphabets

var multiArr = [arr1, arr2]; // this becomes a 2D array
console.log(multiArr); 