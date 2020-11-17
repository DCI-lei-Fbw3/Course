/* 
# Arrays: Introduction

__Instructions__

1. Declare a variable named myArray and store an array that contains 5 elements. Print the array.

2. Access the 3rd element in the array and save that to another variable named thirdElement. Print the thirdElement.

3. Reassign the fourth element of the array and give it a value of "fourth element". Print the array once more.
*/
console.warn('...::: Arrays: Introduction :::...');

const myArray = [1, 'two', false, [],{info: "that's an object"}];
console.log(myArray);
console.log(myArray[4].info);

const thirdElement = myArray[2];
console.log(thirdElement);

myArray[3] = 'fourth element';
console.log(myArray);

/* 
# Programming Basics: Arrays and Array Methods

 These exercises are designed for practicing arrays and array methods. __You may need to look up some methods to complete these tasks__. Print each result to the console.


__Please send me a js file (<firstname>.js) on Slack__

1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
*/
console.warn('...::: Arrays and Array Methods #1  :::...');
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondItem = euroCities[1];
console.log(euroCities);
console.log(secondItem);

/* 
2. Change the first item in the array to "Berlin".
*/
console.warn('...::: Arrays and Array Methods #2  :::...');
euroCities[0] = 'Berlin';
console.log(euroCities);

// 3. Print the length of the array "euroCities".
console.warn('...::: Arrays and Array Methods #3  :::...');
console.log(euroCities.length);

// 4. Remove the last item of the array "euroCities".
console.warn('...::: Arrays and Array Methods #4  :::...');
euroCities.pop();
console.log(euroCities);

// 5. Use an array method to add "Budapest" to the euroCities array.
console.warn('...::: Arrays and Array Methods #5  :::...');
euroCities.push('Budapest');
console.log(euroCities);

// 6. __Bonus__: Remove the second and third items from the euroCities array.
console.warn('...::: Arrays and Array Methods #6  :::...');
euroCities.splice(1,2);
console.log(euroCities);

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
console.warn('...::: Arrays and Array Methods #7  :::...');
const asianCities = ['Tokyo', 'Delhi', 'Shanghai', 'Beijing', 'Mumbai'];
console.log(asianCities);

// 8. __Bonus__: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
console.warn('...::: Arrays and Array Methods #8  :::...');
const itemsTwoToFour = asianCities.slice(1,4);
console.log(asianCities);
console.log(itemsTwoToFour);

// 9. __Bonus__: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
console.warn('...::: Arrays and Array Methods #9  :::...');
const worldCities = euroCities.concat(asianCities);
console.log(euroCities);
console.log(asianCities);
console.log(worldCities);

// 10. Reverse the order of worldCities.
console.warn('...::: Arrays and Array Methods #10  :::...');
console.log(worldCities);
console.log(worldCities.reverse());

// 11. __Bonus__: Replace the 3rd item in the array of worldCities with "Toronto".
console.warn('...::: Arrays and Array Methods #11  :::...');
console.log(worldCities);
worldCities[2] = 'Toronto';
console.log(worldCities);

// 12. __Bonus__: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
console.warn('...::: Arrays and Array Methods #12  :::...');
console.log(worldCities);
worldCities.splice(1, 0, 'Washington');
console.log(worldCities);

// 13. __Bonus__ Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
console.warn('...::: Arrays and Array Methods #13  :::...');
const arrayToString = array => array.toString();
console.log(worldCities);
const worldCitiesString = arrayToString(worldCities);
console.log(worldCitiesString);
console.log(worldCitiesString.replace(/,/g,'+'));
// alternative without regex:
console.log('no regex\n' + worldCitiesString.split(',').join('+'));


// __Bonus__

// 1. Write a program to reverse the string: "Hello World".
console.warn('...::: Arrays and Array Methods #14  :::...');
const string = 'Hello World';
const reverseStringBuiltIn = str => str.split("").reverse().join("");
console.log('using built-in methods:', reverseStringBuiltIn(string));

const reverseStringForLoop = str => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log('using for-loop:', reverseStringForLoop(string));


const reverseStringRecursion = str => {
    return (str === '') ? '' : reverseStringRecursion(str.substr(1)) + str.charAt(0);
}
console.log('using recursion:', reverseStringRecursion(string));

/*
__Extra Practice__

Print the results to the console.

Make an array of your siblings' names or your favorite movie characters' names.
Make an array of your parents' names.
Combine these two arrays.
Add your pets' names.
Reverse the order of the array.
Access one of your parents' names.
Update the name of one of your parents. 
*/
