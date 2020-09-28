// !Addition
// const add = (num1) => {
//  const add2 = (num2) => {
//      return num1 + num2;
//  };
//  return add2;
// };
// console.log(add(3)(4));
// !Multiply
// const multi = (x) => {
//  const innerFunc = (y) => {
//      return x * y;
//  };
//  return innerFunc;
// };
// let doMulti = multi(5);
// console.log(doMulti(6));
// !Calculate Money Saved till Pension Day!
// (function calculatePension(age, retireAge) {
//  if (age >= retireAge) {
//      console.log(`You're already retired`);
//  } else {
//      const totalAmount = (salary, percentSave) => {
//          return `${
//              (retireAge - age) * ((salary * percentSave * 12) / 100)
//          }$`;
//      };
//      console.log(totalAmount(2000, 5));
//  }
// })(66, 65);