// !1. Fido says...
class Dog {
	constructor(name) {
		this.name = name;
	}
	bark = function () {
		console.log(`${this.name} says woof`);
	};
}

let fido = new Dog("fido");
fido.bark();

// !2. Month Name
const months = {
	1: "January",
	2: "February",
	3: "March",
	4: "April",
	5: "May",
	6: "June",
	7: "July",
	8: "August",
	9: "September",
	10: "October",
	11: "November",
	12: "December",
};

const convertNumToMonth = (number) => {
	let arr = Object.entries(months);
	if (number > 0 && number < 13)
		return arr.filter((item) => item[0] == number)[0][1];
	else throw new Error(`Invalid Month Number!`);
};
console.log(convertNumToMonth(13));

// !3. Reverse
const reverseString = (string) => {
	if (typeof string === "string") return string.split("").reverse().join("");
	else throw new Error(`ERROR! this is not a string`);
};
console.log(reverseString(1993));

// !4. Comparing Array
const compareArray = (arr1, arr2) =>
	JSON.stringify(arr1) === JSON.stringify(arr2) ? true : false;

console.log(compareArray([1, 2, 3], [1, 2, 3]));
console.log(compareArray([1, [4, 5], 3], [1, [4, 5], 3]));
console.log(compareArray([1, 2, 4], [1, 2, 3]));
console.log(compareArray([1, 2, [3, 4, 5]], [1, 2, [6, 7, 8]]));

// !5. Recursion
const sumArray = (arr) => {
	if (arr.length === 1) return arr[0];
	if (arr.length === 0) return 0;
	else return arr[0] + sumArray(arr.slice(1, arr.length));
};
console.log(sumArray([1, 2, 3]));
