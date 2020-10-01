function loop(value, testFunction, updateFunction, bodyFunction) {
	while (testFunction(value)) {
		//  ! false
		//if (!testFunction(value)) break;

		bodyFunction(value);

		value = updateFunction(value);
	}
}

function loopWithFor(value, testFunction, updateFunction, bodyFunction) {
	for (value; testFunction(value); value = updateFunction(value)) {
		bodyFunction(value);
	}
}

// const testFn = (n) => n > 0;
// const testFn = (n) => {
// 	return n > 0;
// };

// const testFn = function (n) {
// 	return n > 0;
// };

function testFn(n) {
	return n > 0;
}

function updateFn(n) {
	return n - 1;
}

console.log("loop(inplace-definitions):");
loop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);

console.log("loop(3, testFn, updateFn, console.log):");
loop(3, testFn, updateFn, console.log);

console.log("loopWithFor(...):");
loopWithFor(3, testFn, updateFn, console.log);

//const updateFn

// 3
// 2
// 1
