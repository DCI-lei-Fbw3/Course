
let arr = [2, 3, 5, 2];


function sum(acc, elem) {
	return acc+elem;
}

function multiply(acc, elem) {
	return acc  * elem;
}

function reduceToSumAndProduct(acc, elem) {
	let sum = acc[0] + elem;
	let product = acc[1] * elem;

	return [sum, product];
}

function reduceToSumAndProductObjectVariant(acc, elem) {
	acc.sum += elem;
	acc.product *= elem;

	return acc;
}

console.log("sum:", arr.reduce(sum));
console.log("product:", arr.reduce(multiply));

let acc = [0, 1];
console.log("[sum, product]:", arr.reduce(reduceToSumAndProduct, acc));

let accObj = {
	sum: 0,
	product: 1,
}
console.log(arr.reduce(reduceToSumAndProductObjectVariant, accObj));
