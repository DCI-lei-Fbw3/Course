const {sum, sumAlt} = require('../sum');

test('test from __test__/sum.js', () => {
	expect(sum(1, 2)).toBe(3);
});

test('test2 from __test__/sum.js', () => {
	expect(sumAlt(1, 2)).toBe(3);
});
