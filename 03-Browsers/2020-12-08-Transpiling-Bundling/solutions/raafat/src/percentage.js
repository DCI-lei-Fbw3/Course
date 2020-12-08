function modulo(first, second) {
	return first % second;
}

function percentage(first, second) {
	return (first * second) / 100;
}

function percentageOf(first, second) {
	return (first * 100) / second;
}

function difference(first, second) {
	let calc = second - first;
	return (calc * 100) / first;
}

export { modulo, percentage, percentageOf, difference };
