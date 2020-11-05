// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"]
let secondItem = euroCities[1]
console.log(secondItem) 

​// 2. Change the first item in the array to "Berlin".
euroCities[0] = 'Berlin'; 
console.log(euroCities)

// 3. Print the length of the array "euroCities".
console.log(euroCities.length)

// 4. Remove the last item of the array "euroCities".
console.log(euroCities.pop())
console.log(euroCities)

// 5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities)

// 6. __Bonus__: Remove the second and third items from the euroCities array.
let secondAndThirdItem = euroCities.slice(1, 3);
console.log(secondAndThirdItem)

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = ["Tokyo", "Beijing", "Taipei", "Mumbai", "Damascus"]
console.log(asianCities)

// 8. __Bonus__: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let southAsia = asianCities.slice(1, 4)
console.log(southAsia)

// 9. __Bonus__: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let worldCities = euroCities.concat(asianCities);
console.log(worldCities)

// 10. Reverse the order of worldCities.
console.log(worldCities.reverse())

// 11. __Bonus__: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2] = 'Toronto';
console.log(worldCities)

// 12. __Bonus__: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington"); 
console.log(worldCities)

// 13. __Bonus__ Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
console.log(String(worldCities))

// __Bonus__

// 1. Write a program to reverse the string: "Hello World".
let Str = "Hello World"; 
let result = "";  

//start,     finish, direction 
for (let i = Str.length-1; i >= 0; i--) {
    result += Str[i]
}

console.log(result)


// __Extra Practice__

// Print the results to the console.
// Make an array of your siblings' names or your favorite movie characters' names.
let siblings = ["Jana"]

// Make an array of your parents' names.
let parents = ["Snezhana", "Mohammad"]

// Combine these two arrays.
let family = siblings.concat(parents)
console.log(family)

// Add your pets' names.
family.push("Max")
console.log(family)

// Reverse the order of the array.
console.log(family.reverse())

// Access one of your parents' names.
family[2] = "Snezhe";

// Update the name of one of your parents.
console.log(family)

