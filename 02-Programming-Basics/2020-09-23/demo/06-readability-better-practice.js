// early bail out

function demo(string, word) {
	// string could be longer than word

	if (string.length > word.length) return false;
	/* // versus:
	if (string.length > word.length) {
		return false;
	}
	*/

	for (let i = 0; i < string.length; i++) {
		if (string[i] !== word[i]) return false;
	}

	return true;
}
