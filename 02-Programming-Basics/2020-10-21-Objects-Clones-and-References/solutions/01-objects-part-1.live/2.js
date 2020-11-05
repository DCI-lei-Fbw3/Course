function getObjectValues(obj) {
	let arr = [];
    for (let k in obj) {
		arr.push(obj[k]);
	}
	return arr;
	//return Object.values(obj); // for "modern" node version
}

let values = getObjectValues({
	choice1: "tea",
	choice2: "coffee",
	choice3: "milk"
});

console.log(values);
