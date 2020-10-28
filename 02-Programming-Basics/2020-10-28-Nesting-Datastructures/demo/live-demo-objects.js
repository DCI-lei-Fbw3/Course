console.log("\n*** nesting objects ***\n");

console.log("starting with a 1-dimensional (1d) object:");
let obj1 = {
	a: 1,
	b: 2,
	c: 3
};

console.log(obj1);

console.log("now a 2d object:");
let obj2 = {
	objA: {a: 1, b: 2, c: 3},
	objB: {d: 4, e: 5, f: 6},
}

console.log(obj2);

console.log("\n*** let's apply functions to work on the objects ***\n")

console.log("first a function to work on the 1d object:")
console.log("\nloop_1d:");
function loop_1d(obj) {
	for (p in obj) {
		console.log(p, "->", obj[p]);
	}
}

loop_1d(obj1);

console.log("\nfinally looping within a function over a nested/2d object:");
function loop_2d(obj) {
	for (o in obj) {
		let innerObj = obj[o];
		for (p in innerObj) {
			console.log(o, "->", p, "->", innerObj[p]);
		}
	}
}

loop_2d(obj2);
