
function objectToArray(obj) {
	let arr = [];

	for (k in obj) {
		arr.push([k, obj[k]]);
	}

	return arr;
}

function objectToArray2(obj) {
	return Object.entries(obj);
}

let object = {
	A: 1,
	B: 2,
	C: 3
};

let arr = objectToArray(object);

console.log(arr);

console.log("variant with 'Object.entries(obj):'");
console.log(objectToArray2(object))
