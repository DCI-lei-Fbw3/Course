// import with destructuring the exported object
//const {sum, sumAlt} = require('./sum');

// or import without destructuring the exported object, 
//    hence the exported object's attributes are available 
//    via the "." notation (e. g. "ML.sum(...)")
const ML = require('./sum');

test('sum: 1 + 2 to equal 3', () => {
expect(ML.sum(1, 2)).toBe(3);
});

test('sumAlt: 1 + 2 to equal 3', () => {
	expect(ML.sumAlt(1, 2)).toBe(3);
});

//test('adds 1 + 2 to equal 3', () => {
//	expect(sum(1, 2)).toBe(44);
//});
