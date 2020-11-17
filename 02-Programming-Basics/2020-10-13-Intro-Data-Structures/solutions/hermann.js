
// ------------------------------First exercices(01-arrays-intro)----------------------------------------- 
// 1. Declare a variable named myArray and store an array that contains 5 elements. Print the array.
let myArray = [0,2,5,4,'Banane'];
console.log(myArray);

// 2. Access the 3rd element in the array and save that to another variable named thirdElement. Print the thirdElement.
console.log(myArray[2]);

// 3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.
myArray[3] = 'fourth element';
console.log(myArray);



 //------------------------------second exercices(02-arrays-arraymethods)-----------------------------------


 /* 
 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
 */
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let city = "London";

//2. Change the first item in the array to "Berlin".

euroCities[0] = 'Berlin';

//3. Print the length of the array "euroCities".

console.log(euroCities);

//4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);

//5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push('Budapest');
console.log(euroCities);

//6. __Bonus__: Remove the second and third items from the euroCities array.
 
 euroCities.splice(1,2);
console.log(euroCities);

//7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

let asianCities = ['Tokyo','Seol','Shanghai', 'Delhi', 'Bombay'];
console.log(asianCities);

//8. __Bonus__: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.

let asianCitiesReduce = asianCities.slice(1,4);
console.log(asianCitiesReduce);

//9. __Bonus__: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

let worldCities = euroCities.concat(asianCitiesReduce);
console.log(worldCities);

//10. Reverse the order of worldCities.
console.log(worldCities.reverse());

//11. __Bonus__: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2]='Toronto';
console.log(worldCities);

//12. __Bonus__: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(2, 0, "Washington");
console.log(worldCities);
//13. __Bonus__ Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
 console.log(worldCities.join());
 console.log(worldCities.join('+'));





/* __Bonus__

1. Write a program to reverse the string: "Hello World".*/

let word = Array.from("Hello World");
 word.reverse();
 console.log(word.join(''));

/*__Extra Practice__

Print the results to the console.

Make an array of your siblings' names or your favorite movie characters' names.
Make an array of your parents' names.
Combine these two arrays.
Add your pets' names.
Reverse the order of the array.
Access one of your parents' names.
Update the name of one of your parents. */


//Make an array of your siblings' names or your favorite movie characters' names.

let moviesName = ['Terminator'];

console.log(moviesName);

//Make an array of your parents' names.

let parentName = ['Marie'];

//Combine these two arrays.

let result = moviesName.concat(parentName);

console.log(result);

//Add your pets' names.

result.push('Rocky');

console.log(result);

//Reverse the order of the array.

result.reverse();

//Access one of your parents' names.

console.log(result[1]);

//Update the name of one of your parents

result.push('Totim');
console.log(result);



