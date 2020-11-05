let person = {
	firstName: "Michael",
	lastName: "Smith",
	job: "driver",
	age: 20,
	city: "Paris"
}

person.toString = function() {
	return [
		this.firstName, 
		this.lastName, 
		"is a", 
		this.age, 
		"year old", 
		this.job, 
		"in", 
		this.city
	].join(' ');
}

console.log(person.toString());
