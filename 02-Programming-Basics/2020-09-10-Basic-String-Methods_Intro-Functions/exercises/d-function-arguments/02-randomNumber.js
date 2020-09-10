/*

    - create a function "randomInteger"
    - that function has two parameter (min, max)
      only positive integers allowed, but no test is required, 
      assume "min" and "max" are always positive integers including 0
      also assume that "max" is bigger than "min", - also not test for this
    - it should return an integer between and including "min" and "max"

    - use the function "randomInteger" to: 
      - output some random numbers with min=0 and max=1    => 1, 0, 0, 1
      - output some random numbers with min=0 and max=100
      - output some random numbers with min=1 and max=6    => like a dice

    - Try to call "randomInteger" the following ways, see what is output:
      - randomInteger(-1, 0)
      - randomInteger(-10, 10)
*/

console.log("[0, 1]:\t\t",   randomInteger(0, 1));
console.log("[0, 100]:\t", randomInteger(0, 100));
console.log("[1, 6]:\t\t",   randomInteger(1, 6));

console.log("The math also works for negative numbers :-)");
console.log("[-1, 0]:\t",   randomInteger(-1, 0));
console.log("[-10, -8]:\t",   randomInteger(-10, -8));
console.log("[-10,-10]:\t",   randomInteger(-10, 10));

function randomInteger(min, max) {
  let rand = Math.random();

  let scalingFactor = max + 1 - min;

  // *** stepwise ***
  // let scaledResult = scalingFactor * rand;
  // let translatedResult = scaledResult + min;
  // let result = Math.floor(translatedResult);
  // return result;

  // *** the math in one step ***
  //                         scaling the random number  and moving it by "min"
  let result2 = Math.floor(scalingFactor * Math.random() + min)
  return result2;
}
