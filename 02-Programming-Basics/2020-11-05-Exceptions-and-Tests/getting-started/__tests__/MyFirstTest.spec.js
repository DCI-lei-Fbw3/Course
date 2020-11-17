const {sum, difference, multiply, quotient, remainder, abs, pow} = require("./Myfunctions");


describe("check for sum", () => {
  test("sum:", () => {
    expect(sum(1, 2)).toEqual(3);
  });
  test("difference:", () => {
    const output_difference = 1;
    expect(difference(1, 2)).toEqual(output_difference);
  });
  test("multiply:", () => {
    const expected_multiply = 20;
    expect(multiply(10, 2)).toEqual(expected_multiply);
  });
  test("quotient:", () => {
    expect(quotient(8, 2)).toEqual(4);
  });

  test("remainder:", () => {
    expect(remainder(10, 8)).toEqual(2);
  });
  test("abs:", () => {
    expect(abs(-6)).toEqual(6);
  });
  test("pow:", () => {
    expect(pow(2, 2)).toEqual(4);
  });
}); 


