function loopWithFor(value, testFunction, updateFunction, bodyFunction) {
	if (!testFunction(value)) return;

	bodyFunction(value);
	value = updateFunction(value);

	loopWithFor(value, testFunction, updateFunction, bodyFunction);
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

function loopWithWhile(value, testFunction, updateFunction, bodyFunction) {
	while (testFunction(value)) {
		bodyFunction(value);
		value = updateFunction(value);
	}
}

loopWithInternalLoop(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);

function testFunction(n) {
	return n > 0;
}

function updateFunction(n) {
	return n - 1;
}

function bodyFunction(n) {
	console.log(n);
}

loopWithWhile(
	3,
	(n) => n > 0,
	(n) => n - 1,
	console.log
);

loopWithWhile(3, testFunction, updateFunction, bodyFunction);
