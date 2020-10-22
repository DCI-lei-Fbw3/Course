
let result = getObjectValues(
	{
		choice1: "tea",
		choice2: "coffee",
		choice3: "milk"
	}
);

console.log(result);

function getObjectValues(object) {
	let array = [];

	for (a in object) {
		array.push(object[a]);
	}

	return array
}

