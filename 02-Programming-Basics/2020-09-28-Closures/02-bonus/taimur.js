
const lambdaDepth = (num) => {
	const depth = () => {
		if (num === 0) return 'dci';
		num --;

		return depth;
	}

	return depth();
}