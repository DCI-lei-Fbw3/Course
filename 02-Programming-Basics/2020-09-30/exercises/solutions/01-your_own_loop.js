function loop(value, testFunction, updateFunction, bodyFunction) {
	if (!testFunction(value)) return;

	bodyFunction(value);
	value = updateFunction(value);

	loop(value, testFunction, updateFunction, bodyFunction);
}

function loopWithInternalLoop(
	value,
	testFunction,
	updateFunction,
	bodyFunction
) {
	for (value; testFunction(value); value = updateFunction(value)) {
		bodyFunction(value);
	}
}

loopWithInternalLoop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);
