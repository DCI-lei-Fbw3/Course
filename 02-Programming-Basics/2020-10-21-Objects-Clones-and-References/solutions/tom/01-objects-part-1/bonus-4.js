
let person = {
	name: "John",
	job: "teacher"
}

function switchKeysAndValues(obj) {
	let newObj = {};

	for (a in obj) {
		newObj[obj[a]] = a;
	}

	return newObj;
}

console.log(switchKeysAndValues(person));
