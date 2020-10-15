// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) 
// and returns the missing integer.

// Sandra's Pseudo Code:
//1. check whether each number is included
//    2. print element if number is not included in array


function missingNum(arr) {
	for (let number=1; number<=10; number++) {
		if (! arr.includes(number)) return number;
	}
}

console.log("10 ==", missingNum([1, 7, 2, 3, 6, 5, 9, 7, 4, 8]));  // =>10
console.log(" 5 ==", missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // => 5
console.log(" 7 ==", missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // => 7
