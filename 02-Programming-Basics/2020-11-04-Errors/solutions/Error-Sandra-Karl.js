// # Debugging Exercises

// #### 1. Fido says...
// * In the following code, we want fido to bark. Instead, we get an error. Why is that?

class Dog {
    constructor(name) {
      this.name = name;
    };
    DogBark = function() {
    console.log(`${this.name} says woof`);
  }
  
  
  };
  
  let fido = new Dog("fido");
  fido.DogBark();

  let maggie = new Dog("Maggie"); 
  maggie.DogBark();






// #### 2. Month Name
// Create a function called `getMonthName`, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.
// * Example
// * getMonthName(15) -> `Invalid Month Number!`

function getMonthName(numOfMonth) { 
  let arr = 
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    if (numOfMonth > 0 && numOfMonth < 13) {
      return arr[numOfMonth-1]; 
    }
    return "Invalid Month Number";
} 

// ### Ilya's Solution: 
// const getMonthName = n => n > 0 && n < 13 ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][n - 1] : "Invalid Month Number" 

console.log(getMonthName(5));




// #### 3. Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.

// * Example
// * reverseString(2019) -> `ERROR! This is not a string!`

// if typeof != string 
// split, reverse, join 

function reverseString(str) { 
  if (typeof str != "string"){
    return "ERROR! This is not a string!"
  } 
  return str.split("").reverse().join("");
}

console.log(reverseString("Karl"));
console.log(reverseString("Madam"));




// #### 4. Comparing Arrays
// Create a function that returns true if two arrays contain identical values, and false otherwise.


function compareArrays(arr1, arr2) {
  //let arr1Str = arr1.toString()
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true
   } else {
    return false
   }
} 

// Ilya's Solution: 
// compareArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2) ? true : false;

console.log(compareArrays([4, 7, 6], [4, 5, 6])); // false
console.log(compareArrays([1, 2], [1, 2]));       // true
console.log(compareArrays([4, 5, 6], [4, 5, 6])); // true
console.log(compareArrays([4, 7, 6], [4, 5, 6])); // false
                        


// # Debugging Exercises

// #### 5. Recursion
// The following code should get the sum of the array items, but it does not work. Fix it so that it will.


function sum(array) {

  if( array.length === 1) return array[0];
    let result = array.pop() + sum(array);

    
    /* ##### Ilya's Explanation: 
    
    level 1:

    function sum([1,2,3]) {

      if( [1,2,3].length === 1) return [1,2,3][0];

                        3                3
      let result = [1,2,3].pop() + sum([1,2]);

                  level 2:

                  function sum([1,2]) {

                  if( [1,2].length === 1) return [1,2][0];

                                  2             1
                  let result = [1,2].pop() + sum([1]);

                        level 3:

                          function sum([1]) {

                                          1
                          if( [1].length === 1) return [1][0];

                        }
                  return 3;
                }
      return 6;
    }
    
    */

   return result;
  }
    


console.log(sum([1, 2, 3])); 


// # Permutations

// Create a function that takes one parameter "word" (string).

// And returns an array of strings, which represent every possible combination of the letters of the given word.

// Hint: Most likely it will be a recursive approach.

// ## Signature

// `permutate(word: string): array[string]`

// ## Example

// ```javascript
// permutate("abc");
/* => [
	'abc',
	'acb',
	'bac',
	'bca',
	'cab',
	'cba'
]
```
// put the string in an array and split into separate items ["w", "o", "r", "d"]
// 


## Bonus

Make the elements of the returned array unique. In other words, if there are some elements doubled, remove the duplicates.
