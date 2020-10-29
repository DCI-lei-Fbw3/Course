// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

/*

// the callback takes up to 3 arguments:
1.) currentValue (mandatory)
2.) index (optional)
3.) array (optional)

function callback(currentValue[, index[, array]]) {
	// body
}

arr.forEach(callback);

*/

let arr = [10, 20, 30];

console.log("\ncallback with 1 argument (currentValue):")
arr.forEach(element => console.log(element));

console.log("\ncallback with 2 arguments (currentValue, index):")
arr.forEach((element, index) => console.log(index, "=>", element));

console.log("\ncallback with 3 arguments (currentValue, index, array):")
arr.forEach((element, index, array) => console.log("["+array+"]["+index+"]", "=>", element));


console.log("sliding window calculating the average over 5 elements");
let prices = [11.2, 13.3, 15.2, 16.2, 17.5, 12.3, 10.3, 9.5, 10.1, 11.2]; 
let test = [1, 2, 3, 4, 5, 6, 7, 8];

function slidingAverage(element, index, array) {
	let windowSize = 5;
	
	let window = [];

	if (index+1 < windowSize) { // zeroes need to be added
		let noOfZeroes = windowSize - (index + 1);

		// stuff the window with zeroes:
		for (let i=0; i<noOfZeroes; i++) {
			window.push(0);
		}
	}

	for(let i=0; window.length < windowSize ; i++) {
		window.push(array[index-i]);
	}

	let sum = window.reduce((sum, element) => sum + element);
	let average = sum / windowSize;

	//console.log(index, "=>", window, "=>", sum, "=>", average);
	this.push(average);
}


let result = [];
test.forEach(slidingAverage, result);
console.log(result);
