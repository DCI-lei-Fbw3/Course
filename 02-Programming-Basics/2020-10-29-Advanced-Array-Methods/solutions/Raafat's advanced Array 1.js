// !Get total orders
// const orders = [
// 	{ amount: 250 },
// 	{ amount: 400 },
// 	{ amount: 100 },
// 	{ amount: 325 },
// ];
// console.log(orders.reduce((sum, item) => sum + item.amount, 0));

// !2. Increment by 1
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// const incrementArr = (arr) => {
// 	return arr.map((element) => ++element);
// };
// console.log(incrementArr(arrayOfNumbers));
// or
// arrayOfNumbers.forEach(function (value, index, array) {
// 	++array[index];
// });
// console.log(arrayOfNumbers);

// !Filter Evens
// const filterEvens = (arr) => arr.filter((item) => item % 2 === 0);
// console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
// console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]

// !Filter Friends
// const filterItems = (arr, item) =>
// 	arr.filter((element) => element.includes(item));

// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, "ka")); // ["Rika"];
// console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];

// !sum up
// const sum = (arr) => arr.reduce((sum, item) => sum + item, 0);
// console.log(sum([1, 2, 3, 4, 5]));
// console.log(sum([6, 7, 7]));

// !Square Root
// const squareRoot = (arr) => arr.map((item) => Math.sqrt(item));
// console.log(squareRoot([1, 2, 3, 4, 5]));
