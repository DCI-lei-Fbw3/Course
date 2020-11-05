console.log("sliding window calculating the average over 5 elements");
let prices = [11.2, 13.3, 15.2, 16.2, 17.5, 12.3, 10.3, 9.5, 10.1, 11.2]; 
let testData = [1, 2, 3, 4, 5, 6, 7, 8];

function slidingAverage(element, index, array) {
	let windowSize = 5;
	
	// this array is used to first store the elements of the window in question, 
	// and to finally calculate the average on.
	let window = [];

	if (index+1 < windowSize) { // zeroes need to be added
		let noOfZeroes = windowSize - (index + 1);

		// pad the window with zeroes:
		for (let i=0; i<noOfZeroes; i++) {
			window.push(0);
		}
	}

	// as long as the window is not full
	for (let i=0; window.length < windowSize ; i++) {
		// push elements of the array into the window
		window.push(array[index-i]);
	}

	// calculate the sum of all elements in the window:
	let sum = window.reduce((sum, element) => sum + element);
	// derive the average from the sum:
	let average = sum / windowSize;

	//console.log(index, "=>", window, "=>", sum, "=>", average);
	this.push(average); // "this" refers to the optional second argument of the "forEach"
}

let result = [];

testData.forEach(slidingAverage, result);
console.log("\nsliding averages of the test-data\ntestData", testData);
console.log("=> slidingAverages =", result);

prices.forEach(slidingAverage, result);
console.log("\nsliding averages of the prices\nprices =", prices);
console.log("=> slidingAverages =", result);
