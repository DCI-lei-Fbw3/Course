object_a = {
	A: 1,
	B: 2,
	C: 3
};

object_b = {
	cats: 1,
	dogs: 2,
	turtles: 4
};

function objectToArray(object){
	let arr = [];

	for (a in object) {
		if (typeof object[a] == 'function') continue;

		arr.push([a, object[a]]);
	}

	return arr;
}

console.log(objectToArray(object_a));
console.log(objectToArray(object_b));
