function printCallStack() {
	var stack = new Error("to print callstack").stack;
	console.warn( stack );
}

// source:
// https://www.javascripttutorial.net/javascript-call-stack/

function average(a, b) {
	return add(a, b) / 2;
}

function add(a, b) {
	printCallStack();
    return a + b;
}

let x = average(10, 20);  
