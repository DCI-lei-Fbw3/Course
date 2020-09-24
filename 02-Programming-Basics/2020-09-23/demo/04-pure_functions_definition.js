/* 
	Pure Functions

	Pure functions return for the same arguments always the same value.

	A pure function is independent of external state and it does not 
	have side effects (e. g. no change of external state).

*/

let result;

function sum(a, b) {
	// same arguments *
	// no dependency on external state
	// no change to external state
	return a + b; // * make it return the same result
}

console.log(sum(1, 3));

console.log(result);
result = sum(2, 4);
console.log(result);

console.log("dependency on external state:");
let speedOfLight = 300000; // km/sec

function calculateDistance(seconds) {
	return speedOfLight * seconds;
}

let distance = calculateDistance(2);
console.log(distance, "km");

speedOfLight = 200000; // km/sec
distance = calculateDistance(2);
console.log(distance, "km");

function calculateDistanceByDurationAndSpeed(seconds, speed) {
	return seconds * speed;
}

distance = calculateDistanceByDurationAndSpeed(2);
distance = calculateDistanceByDurationAndSpeed(2, speedOfLight);
console.log(distance, "km");

/* 
	Introduce: Mathematical Function
	
	FUNCTION_NAME(PARAMETERS) = FUNCTION_BODY
	
	f(x) = x
	g(x) = 2 * x
	h(x) = 2 * x + 1
*/
