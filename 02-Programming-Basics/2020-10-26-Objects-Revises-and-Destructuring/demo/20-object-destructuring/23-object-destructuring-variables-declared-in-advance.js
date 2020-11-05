/*
let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
let name, country, job;

{name, country, job} = person;

console.log(name);// Error : "Unexpected token ="

/**/


/*

Why?

without declaration via let or const, the '{}' are interpreted as a 'block'

*/

// SOLUTION:

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};
let name, country, job;

({name, country, job} = person);

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//"Developer"
/**/
