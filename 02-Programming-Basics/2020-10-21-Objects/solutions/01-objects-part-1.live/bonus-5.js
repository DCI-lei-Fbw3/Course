let objA = { a: 1, b: 2, c: 3 };
let objB = {key: true};

function keyValues(obj) {
	return [Object.keys(obj), Object.values(obj)];
}

function keyValuesB(obj) {
	let keys = [];
	let values = [];

	for (k in obj) {
		keys.push(k);
		values.push(obj[k]);
	}

	return [keys, values];
}

console.log(keyValues(objA));
console.log(keyValues(objB));

console.log("oldschool version:");
console.log(keyValuesB(objA));
console.log(keyValuesB(objB));

