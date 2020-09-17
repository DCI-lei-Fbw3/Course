// 5 random numbers

// link to documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let numbers = [];

for (let i = 0; i < 5; i++) {
  //numbers[i] = Math.random();
  //numbers.push(Math.random());
  numbers.push(i);
}

// for (let i = 0; i < 5; i++) {
//   console.log(numbers[i]);
// }

while (numbers.length > 0) {
  // console.log(numbers.pop());
  console.log(numbers.shift());
}
