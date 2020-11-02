let arr3d = [
	[
		[10, 11, 12],
		[20, 21, 22]
	],
	[
		[30, 31],
		[
			[40, 41, 42],
			51
		]
	]
];

console.log("flatten a multidimensional array to one array (recursive approach):")
function flattenMultidimensionalArray(thing, arr) { // recursive solution
	if (! Array.isArray(thing)) {
		arr.push(thing);
		return arr;
	}

	for (let e of thing) {
		arr = flattenMultidimensionalArray(e, arr);
	}

	return arr;
}

let targetArr = [];
targetArr = flattenMultidimensionalArray(arr3d, targetArr);
console.log(targetArr);
