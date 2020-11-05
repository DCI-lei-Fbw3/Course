/*

Say we want to extract data from an object
and assign to new variables. Prior to ES6,
how would this be done?

*/

let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

let name = person.name;
let country = person.country;
let job = person.job;

console.log(name);//"Sarah"
console.log(country);//"Nigeria"
console.log(job);//Developer"

/*

See how tedious it is to extract all the data.
We have to repeatedly do the same thing.
ES6 destructuring really saves the day.
Let's jump right into it.

*/
