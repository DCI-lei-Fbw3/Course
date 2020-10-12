let array = [
	[1, 2],
	[3, 4],
];

//                CALLBACK_FUNCTION, INITIAL_VALUE
let flattenedArray = array.reduce(callback);

function callback(acc, curVal) {
	return acc.concat(curVal);
}

console.log(array);
console.log(flattenedArray);
