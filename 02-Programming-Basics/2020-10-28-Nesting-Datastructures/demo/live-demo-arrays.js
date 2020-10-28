function log(string) {
	console.log(string);
}

log("nesting arrays:");

let arr1 = [10, 20, 30];
log(arr1);

let arr2 = [
	[10, 20, 30],
	[11, 21, 31]
]

log(arr2);

let arr3 = [
	[
		[10, 20, 30],
		[11, 21, 31],
	],
	[ 
		[-10, -20, -30],
	]
]

log(arr3);

log("looping over 1d-array");
function loop_1d(arr){
	for (let i=0; i < arr.length; i++) {
		log(arr[i]);
	}
}

loop_1d(arr1);

log("looping over 2d-array");
function loop_2d(arr){
	for (let i=0; i < arr.length; i++) {
		let innerArr = arr[i];
		for (let j=0; j<innerArr.length; j++) {
			console.log(i, "->", innerArr[j]);
		}
	}
}

loop_2d(arr2);

log("looping over 3d-array");
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
