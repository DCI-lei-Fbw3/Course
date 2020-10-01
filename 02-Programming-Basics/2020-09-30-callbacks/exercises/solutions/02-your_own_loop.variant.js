function loop(value, testFunction, updateFunction, bodyFunction) {
	while (testFunction(test)) {
		//  ! false
		//if (!testFunction(value)) break;

		bodyFunction(value);

		value = updateFunction(value);
	}
}

loop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);

// 3
// 2
// 1
