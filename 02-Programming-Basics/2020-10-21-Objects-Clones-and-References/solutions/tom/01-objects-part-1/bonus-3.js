
let first = {firstName: "John"};
let last = {lastName: "Smith"};

function merge(a, b) {
	return {...a, ...b};
}

let mergedObject = merge(first, last);
console.log(mergedObject);
