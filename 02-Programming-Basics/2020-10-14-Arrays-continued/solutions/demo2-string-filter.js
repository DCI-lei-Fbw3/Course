/* 01-arrays-2-3
**7. Dictionary.**
Create a function that takes an initial string and an array of words, 
and returns a filtered array of the words that start with the same 
letters as the initial string.

Notes:
* If none of the words match, return an empty array.
* Keep the filtered array in the same relative order as the original array of words.

Examples:
* dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
* dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
* dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
*/

function dictionary(needle, arr) {
	return arr.filter(element => element.startsWith(needle));
}

console.log(dictionary("bu", ["button", "breakfast", "border"])); // ["button"]
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); // ["triplet", "tries", trip"]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])); // []


// Discussion with Saad

let arr = ["button", "breakfast", "border"];

console.log(arr.filter(x => x.includes("bu")));

function test_bu_callback(x) {
	return x.startsWith("bu"); // define the search string not statically but dynamic (i. o. w. make it configurable)
}
console.log(arr.filter(test_bu_callback));

function createFilterCallback(needle) {
	let callback;

	callback = x => x.startsWith(needle);

	return callback;
}

callbackFunction = createFilterCallback("bu");
callbackFunction = createFilterCallback("br");

console.log(arr.filter(callbackFunction));
