function createRollFunction(max) {
	return () => randomNumber(max);
}

function randomNumber(max) {
	return Math.ceil(Math.random() * max);
}

let roll10 = createRollFunction(10);
console.log(roll10());

let concreteRollFunction = createRollFunction(12);

console.log(concreteRollFunction());
