
let first = {firstName: "John", city: "Leipzig"}
let last = {lastName: "Smith", city: "Berlin"}

function merge(target, source) {
	return Object.assign(target, source);
}

function mergeB(target, source) {
	return {...target, ...source};
}


console.log(merge(first, last));

console.log("with the spread operator '...'");
let merge_var_B = {...first, ...last};
console.log(merge_var_B);

console.log(mergeB(first, last));
