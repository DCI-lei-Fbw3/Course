console.log("everyWithLoop:");
function everyWithLoop(array, testFunction) {
	for (let i = 0; i < array.length; i++) {
		if (!testFunction(array[i])) return false;
	}

	return true;
}

let every = everyWithLoop;

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

// console.log("not working yet - everyWithArraySome:");

// function everyWithArraySome(array, testFunction) {
// 	if (!array.some((a) => !testFunction)) return true;

// 	return false;
// }

every = everyWithArraySome;

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
