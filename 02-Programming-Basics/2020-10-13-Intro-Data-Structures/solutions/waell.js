//01

// 1. Declare a variable named myArray and store an array that contains 5 elements. Print the array.
let myArray = ["aaa", "bbb", "ccc", "ddd", "eee"];
console.log(myArray)
// 2. Access the 3rd element in the array and save that to another variable named thirdElement. Print the thirdElement.
thirdElement = myArray[2];
console.log(thirdElement)
// 3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.
myArray[3] = "fourth element";
console.log(myArray[3])

//2

// # Programming Basics: Arrays and Array Methods

//  These exercises are designed for practicing arrays and array methods. __You may need to look up some methods to complete these tasks__. Print each result to the console.


// __Please send me a js file (<firstname>.js) on Slack__

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. 
//   Declare another variable and assign the second item of the array as a value.

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let enCity = euroCities[1]
console.log(enCity)

// 2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin"
console.log(euroCities)

// 3. Print the length of the array "euroCities".

console.log(euroCities.length)

// 4. Remove the last item of the array "euroCities".

euroCities.pop()
console.log(euroCities)

// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities)

// 6. __Bonus__: Remove the second and third items from the euroCities array.


/* function removeItemOnce(arr, value) {
    let err = []
    let index = err.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
console.log(removeItemOnce(euroCities, 1))
 */
// -1-
delete euroCities[1];
delete euroCities[2];
console.log(euroCities);

// -2-
let value = euroCities[1, 2]
euroCities = euroCities.filter(item => item !== value)

console.log(euroCities)


// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

asianCities = ["Shanghai", "Karachi", "Beijing", "Delhi", "Mumbai"]

// 8. __Bonus__: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

/* 
someAsianCities = asianCities[1, 2, 3];
console.log(someAsianCities); */


// 9. __Bonus__: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).


// 10. Reverse the order of worldCities.

// 11. __Bonus__: Replace the 3rd item in the array of worldCities with "Toronto".

// 12. __Bonus__: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

// 13. __Bonus__ Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

// __Bonus__

// 1. Write a program to reverse the string: "Hello World".


// __Extra Practice__

// Print the results to the console.

// Make an array of your siblings' names or your favorite movie characters' names.
// Make an array of your parents' names.
// Combine these two arrays.
// Add your pets' names.
// Reverse the order of the array.
// Access one of your parents' names.
// Update the name of one of your parents.
