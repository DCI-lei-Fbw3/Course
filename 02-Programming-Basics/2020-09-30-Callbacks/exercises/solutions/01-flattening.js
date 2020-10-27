let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

let flattened = arrays.reduce(concatenateArrays);

function concatenateArrays(a, b) {
	return a.concat(b);
}

console.log(arrays);
console.log(flattened);
