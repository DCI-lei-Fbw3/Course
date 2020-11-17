const {
  difference,
  product,
  quotient,
  remainder,
  sum,
  pow,
  abs,
} = require("./mathLibrary"); //import multiple functions from one file

// const library = require("./mathLibrary")  //with dot notation (e.g. library.sum, library.difference)

//Testing Sum
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("adds 10 + 21 to equal 31", () => {
  expect(sum(10, 21)).toBe(31);
});
test("adds 234 + 2 to equal 236", () => {
  expect(sum(234, 2)).toBe(236);
});

//Testing Difference
test("find difference between 234 and 2 at 232", () => {
  expect(difference(234, 2)).toBe(232);
});
test("find difference between 2 and 2 at 0", () => {
  expect(difference(2, 2)).toBe(0);
});
test("find difference between 8 and 18 at 10", () => {
  expect(difference(8, 18)).toBe(10);
});

//Testing Product
test("find 3 times 5 to be 15", () => {
  expect(product(3, 5)).toBe(15);
});

test("find 12 times 12 to be 144", () => {
  expect(product(12, 12)).toBe(144);
});

test("find 2 times -8 to be -16", () => {
  expect(product(2, -8)).toBe(-16);
});

test("find -1 times -10 to be 10", () => {
  expect(product(-1, -10)).toBe(10);
});

// //Quotient test

test("find 100 divided by 10 to be 10", () => {
  expect(quotient(100, 10)).toBe(10);
});
test("find 100 divided by -10 to be -10", () => {
  expect(quotient(100, -10)).toBe(-10);
});
test("find 2 divided by 4 to be 0.5", () => {
  expect(quotient(2, 4)).toBe(0.5);
});

// //Remainder test

test("Expect modulo 16 by 5 to be 1", () => {
  expect(remainder(16, 5)).toBe(1);
});
test("Expect modulo 8 by 1.5 to be 2", () => {
  expect(remainder(8, 1.5)).toBe(0.5);
});
test("Expect modulo 16 by 8 to be 0", () => {
  expect(remainder(16, 8)).toBe(0);
});

// // Absolute test
test("Expect absolute 9 to be 9", () => {
  expect(abs(9)).toBe(9);
});

test("Expect absolute -2000 to be 2000", () => {
  expect(abs(-2000)).toBe(2000);
});

test("Expect absolute 9.56 to be 9.56", () => {
  expect(abs(9.56)).toBe(9.56);
});

// // Power test
test("Expect 3 to the power of 3 to be 27", () => {
  expect(pow(3, 3)).toBe(27);
});
test("Expect 5 to the power of 2 to be 25", () => {
  expect(pow(5, 2)).toBe(25);
});
