let string = "abc";

function permutate(string) {
	let result = [];

	// terminate if string is a single character
	if (string.length == 1) {
		result.push(string);
		return result; // return an array with that single character
	}

	// iterate over each character of the given string
	for (let i = 0; i<string.length; i++) {
		// create new inputString by removing the current character in question
		let input = removeChar(string, i);
		
		// retrieve every subresult
		let subResults = permutate(input);
		// iterate over every subresult
		for (let j=0; j<subResults.length; j++) {
			// combine the current subresult with the current character in question
			let word = string[i] + subResults[j];
			// finally push the now combined subresult to the result array
			result.push(word);
		}
	}

	// now really finally ;-) return the whole result set
	return result;
}

function removeChar(string, index) {
	let s = '';

	for (let i = 0; i < string.length; i++) {
		if (i == index) continue;
		s+= string[i];
	}

	return s;
}

console.log(permutate(string));
