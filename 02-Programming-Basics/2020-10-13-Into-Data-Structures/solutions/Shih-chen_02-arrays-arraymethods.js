// # Programming Basics: Arrays and Array Methods
//  These exercises are designed for practicing arrays and array methods. __You may need to look up some methods to complete these tasks__. Print each result to the console.
// __Please send me a js file (<firstname>.js) on Slack__

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities=["Leipzig", "Halle", "Manchester", "Edinburgh"]
let moreEuroCities="Glasglow";
euroCities[1]=moreEuroCities;
console.log(euroCities);
// 2. Change the first item in the array to "Berlin".
euroCities[0]="Berlin";
console.log(euroCities);
// 3. Print the length of the array "euroCities".
howManyCities=euroCities.length
console.log(howManyCities);
// 4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);
// 5. Use an array method to add "Budapest" to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities);
// 6. __Bonus__: Remove the second and third items from the euroCities array.
ditchedCities=euroCities.splice(1,2);
console.log(euroCities);
// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities=["Tokyo", "Kyoto", "Taipei", "Kaohsiung", "Seoul", "Shanghai"];
console.log(asianCities);
// 8. __Bonus__: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let fewerAsianCities=asianCities.slice(1, 4);
console.log(fewerAsianCities);
// 9. __Bonus__: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
let worldCities=euroCities.concat(asianCities);
console.log(worldCities);
// 10. Reverse the order of worldCities.
reversedWorldCities=worldCities.reverse();
console.log(reversedWorldCities);
// 11. __Bonus__: Replace the 3rd item in the array of worldCities with "Toronto".
worldCities[2]="Toronto";
console.log(worldCities);
// 12. __Bonus__: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
// 13. __Bonus__ Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"

let aNewLine=" ";
for (let i=0; i<=worldCities.length-1; i++) {
    aNewLine=aNewLine+worldCities[i]+" ";
}
console.log(`"${aNewLine}"`);
// __Bonus__

// 1. Write a program to reverse the string: "Hello World".
let myString="Hello World";
console.log(myString.length);
let myReverseString="";
for (let i=myString.length-1; i>=0; i--) {
    myReverseString=myReverseString + (myString[i]); 
}
console.log(myReverseString);

// Print the results to the console.
console.log(`${myString} and ${myReverseString}`);
// Make an array of your siblings' names or your favorite movie characters' names.
movieCharacters=["Piglet", "Winnie the Pooh", "Christopher Robin", "Roo", "Tiger"];
// Make an array of your parents' names.
myParents=["Mum", "Dad"];
// Combine these two arrays.
let funnyArray=myParents.concat(movieCharacters);
console.log(funnyArray);
// Add your pets' names.
funnyArray.push("Paddington Bear");
console.log(funnyArray);
// Reverse the order of the array
reversedFunnyArray=funnyArray.reverse();
console.log(reversedFunnyArray);
// Access one of your parents' names.
console.log(reversedFunnyArray.length);
myMum=reversedFunnyArray[7];
console.log(myMum);
// Update the name of one of your parents.
reversedFunnyArray[7]="Hua";
console.log(reversedFunnyArray);
