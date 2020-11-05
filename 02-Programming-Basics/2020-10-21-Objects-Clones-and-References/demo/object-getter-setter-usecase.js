console.log("\nusecase for getter and setter");
o = {
	_a: 1, // now you shall guarantee that a is positive.

	get square() {
		return this.a ** 2;
	},

	set a(x) {
		console.log("setter is called");
		if (x > 0) {
			this._a = x
			return;
		};
		console.log("error: parameter x must be positive");
	},
	get a() {
		console.log("getter a is called");
		return this._a;
	}

}

o.a = 10; // setter called
console.log(o.a); // getter called

/*
o._a = -12; // direct access to attribute
console.log(o._a); // direct access
*/

console.log("square");
console.log(o.square);
o.a = 6;
console.log(o.square);
