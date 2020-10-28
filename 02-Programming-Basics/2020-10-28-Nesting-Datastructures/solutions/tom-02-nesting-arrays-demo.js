
function nestArrays(cur, max) {
	if (cur == max ) return [cur]; // early bailout / termination of the recursion

	                      // cur+1 => incrementation / altered state
	return [cur, nestArrays(cur + 1, max)];
}

console.log(nestArrays(0, 2));
