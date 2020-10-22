let person = {
	name: "John",
	job: "teacher"
};

function switcher(obj) {
	let newObj = {};

	for (let k in obj) {
		newObj[obj[k]] = k;
	}

	return newObj;
}

console.log(switcher(person));
