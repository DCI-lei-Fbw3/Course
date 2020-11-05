const {sum, sumAlt} = require('./sum');

test('sum: 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});

test('sumAlt: 1 + 2 to equal 3', () => {
	expect(sumAlt(1, 2)).toBe(3);
});

//test('adds 1 + 2 to equal 3', () => {
//	expect(sum(1, 2)).toBe(44);
//});
