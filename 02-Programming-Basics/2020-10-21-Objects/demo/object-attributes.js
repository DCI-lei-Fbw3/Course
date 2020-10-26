let obj = {
	a: 1,
	b: 2,
};

k = "a";

console.log(obj[k]);

for (key in obj) {
	//console.log(typeof key);
	console.log(key, "=", obj[key]);
}

console.log(obj["a"]);

console.log(obj["key"]);
