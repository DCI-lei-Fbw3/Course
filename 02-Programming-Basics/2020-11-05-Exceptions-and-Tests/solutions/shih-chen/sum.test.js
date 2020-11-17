const product = require('./product.js');

test('6 times 4 is equal to 24', () => {
  expect(product(6, 4)).toBe(24);
});