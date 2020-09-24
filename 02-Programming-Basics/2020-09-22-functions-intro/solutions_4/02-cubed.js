function sumOfCubes(a, b, c) {
	if (a === undefined) a = 0;
	if (b === undefined) b = 0;
	if (c === undefined) c = 0;

	return a ** 3 + b ** 3 + c ** 3;
}

console.log(sumOfCubes());
console.log(sumOfCubes(2));
console.log(sumOfCubes(1, 2));
console.log(sumOfCubes(1, 2, 3));

// some clever programmer might try to provoke a bug:
console.log(sumOfCubes(2, undefined, 3));
