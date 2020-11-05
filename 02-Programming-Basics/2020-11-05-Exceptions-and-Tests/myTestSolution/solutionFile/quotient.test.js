const remainder = require('./remainder.js');

test('remainder of 6 by 4 is equal to 2', () => {
  expect(remainder(6, 4)).toBe(2);
});