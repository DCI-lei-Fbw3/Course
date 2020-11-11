function higherOrderFunction(callback) {
	callback("hello", "world", "!");
}

function callback3(a, b, c){
	console.log(a, b, c);
}

function callback2(a, b) {
	console.log(a, b);
}

function callback1(a) {
	console.log(a);
}

higherOrderFunction(callback1);
