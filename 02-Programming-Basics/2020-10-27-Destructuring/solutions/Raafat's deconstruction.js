// !Array Destructuring

// let [fruit, vegetable, ...food] = [
// 	"banana",
// 	"cucumber",
// 	"cakes",
// 	"bread",
// 	"pizza",
// ];
// console.log(fruit);
// console.log(vegetable);
// console.log(food);

// !Object Destructuring
// const costume = {
// 	frank: "Iron man",
// 	john: "Thor",
// 	well: "zombie",
// };
// let { frank: fo, john, well } = costume;
// //console.log(frank);
// console.log(john);
// console.log(well);
// console.log(fo);

// !Parameters: Object Destructuring
// const band = {
// 	name: "Gojira",
// 	hit: "Shotting stars",
// 	nationally: "French",
// 	genre: "Death Metal",
// 	members: [
// 		"Joe Duplantier",
// 		"Mario Duplantier",
// 		"Christian Andreu",
// 		"Jean-Michel",
// 	],
// };
// const showBand = (obj) => {
// 	let { name, hit, nationally, genre, members } = obj;
// 	return `${name} is a ${nationally} band, the greatest hit is ${hit}, their music is ${genre} and the band members are ${members.join(
// 		", "
// 	)}`;
// };
// console.log(showBand(band));

// !We have an object
// let user = {
// 	name: "John",
// 	years: 30,
// };

// let { name, years: age, isAdmin = false } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);

// !The maximal salary

// let salaries = {
// 	John: 100,
// 	Pete: 300,
// 	Mary: 250,
// };
// const topSalary = (obj) => {
// 	let maxSalary = 0;
// 	let maxName = null;

// 	for (let [name, salary] of Object.entries(obj)) {
// 		if (maxSalary < salary) {
// 			maxSalary = salary;
// 			maxName = name;
// 		}
// 	}
// 	return maxName;
// };
// console.log(topSalary(salaries));
