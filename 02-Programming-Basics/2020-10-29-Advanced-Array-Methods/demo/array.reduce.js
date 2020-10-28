// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const reduceCallback = (acc, cur) => acc + cur;

let arr = [1, 2, 3, 4];

console.log(arr.reduce(reduceCallback));
