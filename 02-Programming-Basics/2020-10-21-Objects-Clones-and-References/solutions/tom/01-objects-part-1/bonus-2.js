let student = {
	name: "Mike",
	class: "4A",
	course: "English"
}

function properties(object) {
	let arr = [];
	for (a in object) {
		arr.push(a);
	}
	return arr;
}

console.log(properties(student));
