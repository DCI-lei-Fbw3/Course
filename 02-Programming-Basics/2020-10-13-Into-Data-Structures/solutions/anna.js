// # Programming Basics: Arrays and Array Methods

//  These exercises are designed for practicing arrays and array methods. __You may need to look up some methods to complete these tasks__. Print each result to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let cityChoice = euroCities[1];

// 2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";

// 3. Print the length of the array "euroCities".

console.log(euroCities.length);

// 4. Remove the last item of the array "euroCities".

euroCities.pop();

// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");

// 6. __Bonus__: Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = ["Tokyo", "Shanghai", "Seoul", "Singapore", "Hong Kong"];

// 8. __Bonus__: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

let storedCities = asianCities.splice(2, 3);

// 9. __Bonus__: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

let worldCities = asianCities.concat(euroCities);

// 10. Reverse the order of worldCities.

worldCities.reverse();

// 11. __Bonus__: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities[2] = "Toronto";

// 12. __Bonus__: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1, 0, "Washington");

// 13. __Bonus__ Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

function convertToString(arr) {
  let finalString = "";
  for (let i = 0; i < arr.length; i++) {
    finalString += i === arr.length - 1 ? arr[i] : arr[i] + ", ";
  }
  return finalString;
}

console.log(convertToString(worldCities));

// __Bonus__

// 1. Write a program to reverse the string: "Hello World".

function reverseString(text) {
  let textArray = text.split("");
  let reversedTextArray = textArray.reverse();
  let reversedToString = reversedTextArray.join("");
  return reversedToString;
}

console.log(reverseString("Hello World"));

// __Extra Practice__

// Print the results to the console.

// Make an array of your siblings' names or your favorite movie characters' names.

let siblingNames = ["Ben", "Jo", "Jim", "Lamorna", "Chris"];

// Make an array of your parents' names.

let parentNames = ["Virginia", "Garry"];

// Combine these two arrays.

let combinedNames = siblingNames.concat(parentNames);
console.log(combinedNames);

// Add your pets' names.

combinedNames.push("Pammy");
console.log(combinedNames);

// Reverse the order of the array.

combinedNames.reverse();
console.log(combinedNames);

// Access one of your parents' names.

console.log(combinedNames[2]);
console.log(combinedNames);

// Update the name of one of your parents.

combinedNames[1] = "Gazza";
console.log(combinedNames);
