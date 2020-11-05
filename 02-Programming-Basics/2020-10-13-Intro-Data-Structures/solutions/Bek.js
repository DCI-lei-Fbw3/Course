/* # Arrays: Introduction

__Instructions__

1. Declare a variable named myArray and store an array that contains 5 elements. Print the array.

2. Access the 3rd element in the array and save that to another variable named thirdElement. Print the thirdElement.

3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more. */

let arr1 = ["Bike", "Car", "AirPlane", "Boat", "Train"];
console.log(arr1);
let newarr = arr1[2];
console.log(newarr);
arr1[3] = "fourth element";
console.log(arr1);

/* # Programming Basics: Arrays and Array Methods

 These exercises are designed for practicing arrays and array methods. __You may need to look up some methods to complete these tasks__. Print each result to the console.


__Please send me a js file (<firstname>.js) on Slack__

1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value. */
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let euroCity = euroCities[1];

// 2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";

// 3. Print the length of the array "euroCities".
console.log(euroCities.length);

// 4. Remove the last item of the array "euroCities".
euroCities.pop();

//5. Use an array method to add "Budapest" to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities);

//6. __Bonus__: Remove the second and third items from the euroCities array.

euroCities.splice(1, 2);
console.log(euroCities);

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = [
  "Tashkent",
  "Phuket",
  "Ho Chi Min City",
  "Mumbai",
  "Bishkek",
];
console.log(asianCities);

//8. __Bonus__: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let bestCities = asianCities.slice(1, 3);
console.log(bestCities);

//9. __Bonus__: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 10. Reverse the order of worldCities.

console.log(worldCities.reverse());

//11. __Bonus__: Replace the 3rd item in the array of worldCities with "Toronto".

worldCities[2] = "Toronto";
console.log(worldCities);

//12. __Bonus__: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(2, 0, "Washington");
console.log(worldCities);

//13. __Bonus__ Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
worldCities = worldCities.toString();
console.log(worldCities);
