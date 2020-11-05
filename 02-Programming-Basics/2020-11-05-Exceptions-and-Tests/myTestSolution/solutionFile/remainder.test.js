const abs = require('./abs.js');

test('the absolute number of -3 is 3', () => {
  expect(abs(-3)).toBe(3);
});