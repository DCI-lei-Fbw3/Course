// log a countdown starting from a given number.

function countdown(number) {
	console.log(number);

	if (number == 0) {
		console.log("lift off")
		return;
	}

	countdown(number - 1);
}

countdown(10);
