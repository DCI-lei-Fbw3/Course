const quotient = require('./quotient.js');

test('6 divided by 3 is equal to 2', () => {
  expect(quotient(6, 3)).toBe(2);
});