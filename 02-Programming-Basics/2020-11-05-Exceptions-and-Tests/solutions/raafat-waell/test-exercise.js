// const sum = (num1, num2) => num1 + num2;
// const difference = (num1, num2) => num1 - num2;
// const product = (num1, num2) => num1 * num2;
// const quotient = (num1, num2) => num1 / num2;
// const remainder = (num1, num2) => num1 % num2;
// const abs = (num1) => Math.abs(num1);
// const pow = (num1, num2) => num1 ** num2;

const sumArray = (arr) => {
	if (arr.length === 1) return arr[0];
	if (arr.length === 0) return 0;
	else return arr[0] + sumArray(arr.slice(1, arr.length));
};



//module.exports = { difference, sum, product, quotient, remainder, abs, pow };
// module.exports = sumArray;
