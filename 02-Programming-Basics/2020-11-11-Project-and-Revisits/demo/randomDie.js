function roll(max) {
	let fn = createFnRollDie(max);
	return fn();
}

function createFnRollDie(max) {
	return () => randomNumber(max);
}

function randomNumber(max) {
	return Math.ceil(Math.random() * max);
}


console.log(roll(4));
