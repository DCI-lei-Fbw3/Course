const abs = require('./abs.js');

test('the absolute value of -3 is equal to 3', () => {
  expect(abs(-3)).toBe(3);
});