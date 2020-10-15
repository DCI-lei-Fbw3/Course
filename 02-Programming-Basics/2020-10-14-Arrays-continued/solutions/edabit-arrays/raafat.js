// !How Much is True?
// function countTrue(arr) {
//  if (!arr) return 0;
//  return arr.filter((a) => a === true).length;
// }
// console.log(countTrue([false]));

// !Convert Number to Corresponding Month Name
// const months = {
//  1: "January",
//  2: "February",
//  3: "March",
//  4: "April",
//  5: "May",
//  6: "June",
//  7: "July",
//  8: "August",
//  9: "September",
//  10: "October",
//  11: "November",
//  12: "December",
// };// const convertNumToMonth = (number) => {
//  let arr = Object.entries(months);
//  return arr.filter((item) => {
//      if (item[0] == number) return item;
//  })[0][1];
// };
// console.log(convertNumToMonth(8));

// !Negate the Array of Numbers
// const NegateNumbers = (arr) => {
//  return arr.map((element) => {
//      return element * -1;
//  });
// };
// console.log(NegateNumbers([]));

// !Difference of Max and Min Numbers in Array
// const bigDifference = (arr) => {
//  return Math.max(...arr) - Math.min(...arr);
// };
// console.log(bigDifference([15, 2, 6, 1]));// !Unlucky 13
// const Unlucky = (arr) => {
//  return arr.filter((item) => {
//      if (item % 13 != 0) return item;
//  });
// };
// console.log(Unlucky([53, 182, 435, 591, 637]));

// !The Greater Numbers
// const findGreatest = (arr, number) => {
//  return arr.filter((item) => {
//      if (item >= number) return item;
//  });
// };
// console.log(findGreatest([10, 20, 30], 12));

// !Missing Number
// const missingNumber = (arr) => {
//  for (let i = 1; i <= 10; i++) {
//      if (!arr.includes(i)) return i;
//  }
// };
// console.log(missingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// !sumOfNumbers
// const sumArray = (arr) => {
//  let newArr = arr.reduce((a, b) => a + b);
//  console.log(newArr);
// };
// sumArray([10, 5, 1, 2, 4, 6, 8, 3, 9]);

// !Hello Friend
// const greeting = (arr) => {
//  return arr.forEach((item) => {
//      console.log(`Hello ${item}`);
//  });
// };
// greeting(["sam", "lily", "luk", "will"]);

// !No Duplicates
// const noDuplicate = (arr) => {
//  let newSet = new Set(arr);
//  return [...newSet];
// };
// console.log(noDuplicate([1, 6, 6, 9, 9]));

// !Repeat it
// const repeatIt = (str, number) => {
//  let arr = new Array(number).fill(str);
//  return arr;
// };
// console.log(repeatIt("example", 5));