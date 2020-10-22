let student = {
	name: "Mike",
	class: "4A",
	course: "English"
};

function propertiesA(obj) {
	return Object.keys(obj);
}

function propertiesB(obj) {
	let arr = [];
	
	for (let k in obj) {
		arr.push(k);
	}

	return arr;
}

console.log(propertiesA(student));
console.log(propertiesB(student));
