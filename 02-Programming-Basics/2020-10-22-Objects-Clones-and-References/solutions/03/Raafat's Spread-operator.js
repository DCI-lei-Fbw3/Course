// !Combining Arrays
// let arrOne = [3, 2, 1, 4];
// let arrTwo = ["a", "b", "c", "d"];
// let combineArr = [...arrOne, ...arrTwo];
// console.log(combineArr);

// !Copying Arrays
// let originalArr = [5, 6, 7, 8];
// let copyArr = [...originalArr];
// originalArr.push(62);
// console.log(copyArr);
// console.log(originalArr);

// !Find the Largest & the Smallest
// const findLargest = (arr) => Math.max(...arr);
// console.log(findLargest(arrOne));

// const findSmallest = (arr) => Math.min(...arr);
// console.log(findSmallest(arrOne));
// console.log(arrOne);

// !Clone and Merge
// const person1 = { name: "John" };
// const job = { role: "Teacher" };

// let person2 = Object.assign({}, person1);

// let employee = { ...person1, ...job };
// Object.defineProperty(employee, "changeValue", {
// 	get: function () {
// 		return (this.name = "well");
// 	},
// });
// let person3 = { ...employee };
// console.log(employee.changeValue);
// console.log(employee);
// console.log(person2);
// console.log(person3);

// !Is the average a whole number?
// ??unknown
// const isWhole = (arr) => {
// 	return Number.isInteger(arr.reduce((a, b) => (a + b)) / arr.length);
// };
// const isWhole = (arr) => {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	let average = sum / arr.length;
// 	return Number.isInteger(average);
// };
// console.log(isWhole([2, 2, 8, 8, 2, 8]));

// !Deep comparison
// let obj = { here: { is: "an" }, object: 2 };
// const deepEqual = (obj1, obj2) =>
// 	Object.values(obj1).toString() === Object.values(obj2).toString() &&
// 	Object.keys(obj1).toString() === Object.keys(obj2).toString()
// 		? true
// 		: false;

// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// // → true
