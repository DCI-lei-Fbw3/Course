// !Lowest to Highest
const lowToHigh = (arr) => {
	for (var i = 1; i < arr.length; i++)
		for (var j = 0; j < i; j++)
			if (arr[i] < arr[j]) {
				let swap = arr[i];
				arr[i] = arr[j];
				arr[j] = swap;
			}
	return arr;
};
console.log(lowToHigh([4, 2, 5, 3, 9, 7, 1, 8, 2, 6]));
console.log(lowToHigh(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));

// !sorting on string length
const lowToHigh = (arr) => {
	for (var i = 1; i < arr.length; i++)
		for (var j = 0; j < i; j++)
			if (arr[i].length < arr[j].length) {
				let swap = arr[i];
				arr[i] = arr[j];
				arr[j] = swap;
			}
	return arr;
};
console.log(lowToHigh(["Frankel", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));

// !Bubble Sorting
function bubbleSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			let item = array[j];
			var nextItem = array[j + 1];
			if (item > nextItem) {
				array[j] = nextItem;
				array[j + 1] = item;
			}
		}
	}
	return array;
}

console.log(bubbleSort([9, 5, 7, 1, 0, 2, 4, 10, 1, 6, 3, 5, 8]));
console.log(bubbleSort([900, 5, 70, 0.1, 0, 02, 4, 100, 1, 6, 35, 56, 8]));
