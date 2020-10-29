let arr1d = [10, 20, 30];

console.log(arr1d);

let arr2d = [
	[10, 11, 12],
	[20, 21, 22]
];

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

console.log(arr2d);

console.log("variant with 'for...of':")
for (let arr of arr2d) {
	for (let e of arr) {
		console.log(e);
	}
}

console.log("variant with indices:")
for (let i=0; i<arr2d.length; i++) {
	let arr = arr2d[i];
	for (let j=0; j<arr.length; j++) {
		console.log(i, j, "=>", arr[j]);
	}
}

function walkArray(thing) { // recursive solution
	if (! Array.isArray(thing)) {
		console.log(thing);
		return;
	}

	for (let e of thing) {
		walkArray(e);
	}
}

walkArray(arr3d);

console.log("flatten a multidimensional array to one array (recursive):")
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
