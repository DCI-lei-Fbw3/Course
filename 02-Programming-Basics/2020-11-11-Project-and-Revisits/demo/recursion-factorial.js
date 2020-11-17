function factorial(number) {
	// termination condition
	if (number == 1) {
		return 1; // termination
	}

	// the recursive call:
	return number * factorial(number-1); 
	// call it with a argument kind of heading into the termination direction
}

console.log(factorial(5));