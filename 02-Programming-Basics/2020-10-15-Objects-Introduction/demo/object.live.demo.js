// objects in Javascript

let firstname = "Alice";
let lastname = "Miller";
let birthdate = "1965-01-01";

console.log(firstname, lastname, birthdate);

let person = { // object
	firstname: "Alice", // attribute "firstname" of the object
	lastname : "Cooper",
	birthdate: "1975-01-01",

	fullname() { // method definition version 1
		return this.firstname + " " + this.lastname;
	},

	details: function() { // method definition version 2
		return "Firstname: \t" + this.firstname
			+ "\nLastname: \t" + this.lastname
			+ "\nBirthdate: \t" + this.birthdate
	},
};

console.log(person.firstname);
console.log(person["lastname"]);

console.log(person.fullname());

console.log(person);

let keys = Object.keys(person);
console.log(keys);


console.log("typeof person.firstname", typeof person.firstname);
console.log(Object.keys(person));

// person.firstname = undefined;
// console.log("typeof person.firstname after assigning undefined to person.firstname:", typeof person.firstname);
// console.log(Object.keys(person));

// delete person.firstname;
// console.log(Object.keys(person));
// console.log("typeof deleted person.firstname", typeof person.firstname);

person.lastname = "Meier";
console.log(person.fullname());

console.log(person.details());
