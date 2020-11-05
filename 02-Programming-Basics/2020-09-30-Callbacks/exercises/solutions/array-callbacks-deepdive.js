// Flattening 


let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

let flattened = arrays.reduce(
    function(accumulator, currentValue) {  //[], [1, 2, 3]  // [1,2,3], [4,5]
      return accumulator.concat(currentValue) // [1, 2, 3]  // [1, 2,3 4,5] ... 
    },
    [] // initial value of accumulator; 
  )

  // arrays.reduce (function, [])
console.log(flattened);


///////////////////////////////////////////////////////////////////////

// Your own loop 

// function ownLoop()

// // Your code here.

// loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1


// ////////////////////////////////////////////////////////////////////////

// // Everything 

// function every(array, test) {
//     // Your code here.
//   }
  
//   console.log(every([1, 3, 5], n => n < 10));
//   // → true
//   console.log(every([2, 4, 16], n => n < 10));
//   // → false
//   console.log(every([], n => n < 10));
//   // → true

// ////////////////////////////////////////////////////////////////////

// //Dominant Writing Direction 

// function dominantDirection(text) {
//     // Your code here.
//     }
    
//     console.log(dominantDirection("Hello!"));
//     // → ltr
//     console.log(dominantDirection("Hey, مساء الخير"));
//     // → rtl