// # Debugging Exercises

// #### 1. Fido says...
// * In the following code, we want fido to bark. Instead, we get an error. Why?

// The method is inappropriately defined and should be inside the class definition

// ``` javascript
class Dog {
  constructor(name) {
    this.name = name;

    this.bark = function () {
      console.log(`${this.name} says woof`);
    };
  }
}

// Dog.bark = function () {
//   console.log(`${this.name} says woof`);
// };

let fido = new Dog("fido");
console.log(Dog);
console.log(fido);
fido.bark();
// ```
// * Edit the code to make fido bark.

// # Debugging Exercises

// #### 2. Month Name
// Create a function called `getMonthName`, which takes the number of the month as an argument (Jan = 1 - Dec = 12). Throw an error if a user inputs an invalid number as an argument.
// * Example
// * getMonthName(15) -> `Invalid Month Number!`

function getMonthName(num) {
  switch (num) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return "Invalid Month Number!";
  }
}

console.log(getMonthName(2));
console.log(getMonthName(15));
// # Debugging Exercises

// #### 3. Reverse
// Create a function that reverses a string. Throw a custom error if the user inputs another type as an argument.

// * Example
// * reverseString(2019) -> `ERROR! This is not a string!`

function reverseString(str) {
  if (typeof str != "string") return "ERROR! This is not a string!";
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString("Jol"));
console.log(reverseString(99));

// # Debugging Exercises

// #### 4. Comparing Arrays

// Create a function that returns true if two arrays contain identical values, and false otherwise.

// Someone wrote the following code:

// ```javascript
// function compareArrays(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// ```

// - Why doesn't the code work?  Because you can't directly compare two objects
// - Fix the code (or restart) to solve the problem.

function compareArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// - Examples of output
console.log(compareArrays([1, 2], [1, 3]));
console.log(compareArrays([1, 2], [1, 2]));
console.log(compareArrays([4, 5, 6], [4, 5, 6]));
console.log(compareArrays([4, 7, 6], [4, 5, 6]));

// # Debugging Exercises

// #### 5. Recursion
// The following code should get the sum of the array items, but it does not work. Fix it so that it will.

// Original code:
// function sum(array) {
//     let result = array.pop() + sum(array);
//     return result;
// }

// console.log(sum([1, 2, 3]));
// ```

function sum(arr) {
  return arr.length > 0 ? arr.pop() + sum(arr) : 0;
}

console.log(sum([1, 2, 3]));
