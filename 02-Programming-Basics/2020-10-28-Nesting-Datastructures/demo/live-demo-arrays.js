console.log("\n*** nesting arrays ***\n");

console.log('starting from a 1-dimensional (1d) array:')
let arr1 = [10, 20, 30];
console.log(arr1);

console.log('introducing a 2d array:')
let arr2 = [
	[10, 20, 30],
	[11, 21, 31]
]

console.log(arr2);

console.log('and finally a 3d array:')
let arr3 = [
	[
		[10, 20, 30],
		[11, 21, 31],
	],
	[ 
		[-10, -20, -30],
	]
]

console.log(arr3);

console.log("\n*** now we introduce functions that work on the arrays ***\n");

console.log("looping with a function over 1d-array");
function loop_1d(arr){
	for (let i=0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

loop_1d(arr1);

console.log("looping with a function over 2d-array");
function loop_2d(arr){
	for (let i=0; i < arr.length; i++) {
		let innerArr = arr[i];
		for (let j=0; j<innerArr.length; j++) {
			console.log(i, "->", innerArr[j]);
		}
	}
}

loop_2d(arr2);

console.log("looping with a function over 3d-array");
function loop_3d(arr){
	for (let i=0; i < arr.length; i++) {
		let arr1 = arr[i];
		for (let j=0; j<arr1.length; j++) {
			let arr2 = arr1[j];
			for (let k=0; k < arr2.length; k++) {
				console.log("("+ i + ", " + j + ", " + k + ") =", arr2[k]);
			}
		}
	}
}

loop_3d(arr3);
