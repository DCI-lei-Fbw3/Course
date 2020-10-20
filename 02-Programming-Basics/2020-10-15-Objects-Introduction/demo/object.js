function printHeadline(headline) {
	console.log();
	console.log(headline);
}

var person = {
	firstname: "Thomas",
	lastname: "Hofmann",
	birthdate: "1975-07-14",

	fullname: function(){
		return this.firstname + " " + this.lastname;
	},

	details() {
		return this.firstname + " " + this.lastname + "(*" + this.birthdate + ")";
	}
	//	1: "test",
};

printHeadline("the whole person-object");
console.log(person);

printHeadline("properties:");
for (key in person) {
	console.log(key);
}

printHeadline("values of the properties:");
for (key in person) {
	console.log(person[key]);
}

printHeadline("accessing individual properties");
printHeadline("via dot-notation (OBJECT.PROPERTY):");
console.log(
	"person:",
	person.firstname,
	person.lastname,
	"(*" + person.birthdate + ")"
);

printHeadline("via []-notation (OBJECT[PROPERTY]):");
console.log(
	"person:",
	person["firstname"],
	person["lastname"],
	"(*" + person["birthdate"] + ")"
);

printHeadline('person.length only works on "native" arrays:');
console.log(person.length);

printHeadline("using person.fullname():")
console.log(person.fullname());
