// relying on something in the global scope

const G = "9.81";
let a = "test";

function forceForMassOnEarth(massInKg) {
	let force = G * massInKg; // G is from the global scope
	console.log(a);
	return force;
}

console.log(forceForMassOnEarth(10), "Newton");
a = "changed";
console.log(forceForMassOnEarth(10), "Newton");

// changing something in the global scope

let counter = 0;

function increaseCounter() {
	counter++;
}

increaseCounter();
console.log(counter);

increaseCounter();
console.log(counter);

increaseCounter();
console.log(counter);

increaseCounter();
console.log(counter);
