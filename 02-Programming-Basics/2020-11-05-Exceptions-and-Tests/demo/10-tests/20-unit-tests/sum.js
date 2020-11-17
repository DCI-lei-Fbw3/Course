function sum(a, b) {
	return a + b;
}

function sumAlt(a, b) {
	let result = a + b;
	return result;
}

// exported is an object:
module.exports = {sum, sumAlt};

// variant to export a class:
/*  
let MathLib = {
	sum(a, b){
		return a+b;
	}, 
	sumAlt(a, b){
		return a+b;
	}
}

module.exports = MathLib;
*/
