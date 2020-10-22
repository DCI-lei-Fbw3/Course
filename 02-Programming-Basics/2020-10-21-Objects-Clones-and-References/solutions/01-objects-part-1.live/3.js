let person = {
	firstName: "Michael",
	lastName: "Smith",
	job: "driver",
	age: 20,
	city: "Paris"
}

function printValues(obj) {
	console.log(
		[  obj.firstName, 
			obj.lastName,
			"is a",
			obj.age,
			"year old",
			obj.job,
			"in",
			obj.city
		
		].join(" ") + "."
	);
}

printValues(person);
