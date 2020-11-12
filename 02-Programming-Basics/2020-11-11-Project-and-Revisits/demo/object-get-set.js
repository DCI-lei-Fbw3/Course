let o = {
	_a: 0,
	_b: 1,

	get a() {
		console.log("getter 'a' called.");
		return this._a;
	},

	get b() {
		console.log("getter 'b' called.");
		return this._b;
	},

	toString() {
		return "_a = " + this.a + " _b = " + this.b;
	}
};

console.log(o);

console.log("use getter 'a':", o.a);

console.log("o.toString():", o.toString());

console.log(o);

console.log("What is the difference between getter/setter and a method:")
console.log(o.a);
console.log(o.toString);
console.log(o.toString());

console.log(o.a);

console.log(o.a + o.b + o.b);


let positiveNumber = {
	_a: 0,

	get a() { // a getter is used if variables are consumed or read from
		// logging
		return this._a;
	},

	set a(number) { // the setter is used on asignments
		// logging
		// this is a test to ensure only positive numbers are assigned.
		if (number < 0) throw new Error("invalid number " + number + "- number must be positive");

		this._a = number;
	}
}

console.log(positiveNumber);
positiveNumber.a = 2;

console.log("the getter is used when reading:", positiveNumber.a);

console.log(positiveNumber);

