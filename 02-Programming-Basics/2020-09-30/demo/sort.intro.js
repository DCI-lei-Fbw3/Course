let names = [
	"Lise",
	"Karl",
	"Friedrich",
	"Albert",
	"Eve",
	"Katja",
	"eve",
	"katja",
];

console.log(names);
console.log(names.reverse());

names.sort();
console.log(names);
console.log(names.reverse());

console.log("numbers:");
let numbers = [100, 42, 11, -12, 0];
numbers.sort();
console.log(numbers);

console.log("callback in arrow notation:");
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort(sortNumbers);
console.log(numbers);

numbers.sort(sortNumbersReversed);
console.log(numbers);

function sortNumbers(a, b) {
	let difference = a - b;

	if (difference < 0) return -1;
	if (difference > 0) return 1;
	return 0;

	//return a - b; // negative, 0, positive
}

function sortNumbersReversed(a, b) {
	return b - a;
}

names.sort();
for (let i = 0; i < names.length; i++) {
	let name = names[i];
	for (let j = 0; j < name.length; j++) {
		console.log(name[j], name[j].charCodeAt());
	}
	break;
}
