let obj = { a: 1, b: 2, c: 3 };

function keyValues(obj) {
	let k = [];
	let v = [];

	for (a in obj) {
		k.push(a);
		v.push(obj[a]);
	}

	return [k, v];
}

function keyValues2(obj) { 
	// use of Object.[keys,values] 
	// by courtesy of Lewes
	return [
		Object.keys(obj), 
		Object.values(obj)
	];
}

let keysAndValues = keyValues(obj);
console.log(keysAndValues);

console.log(keyValues2(obj));
