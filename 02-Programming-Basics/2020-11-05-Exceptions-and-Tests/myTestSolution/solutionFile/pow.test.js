const pow = require('./pow.js');

test('the base number 2 to the power of 3 is 8', () => {
  expect(pow(2, 3)).toBe(8);
});