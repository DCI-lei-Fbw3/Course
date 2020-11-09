/*

    - create a function "randomInteger"
    - that function has two parameter (min, max)
      only positive integers allowed, but no test is required, 
      assume "min" and "max" are always positive integers including 0
      also assume that "max" is bigger than "min", - also not test for this
    - it should return an integer between and including "min" and "max"

<<<<<<< HEAD
    - output some random numbers with min=0 and max=1
    - output some random numbers with min=0 and max=100
    - output some random numbers with min=1 and max=6

*/
const randomInteger = (min, max) => {
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);//this is how to include both max and min
}
console.log(randomInteger(1, 6)); 

const randomFloat = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random();
}

console.log(randomFloat(0));
=======
    - use the function "randomInteger" to: 
      - output some random numbers with min=0 and max=1    => 1, 0, 0, 1
      - output some random numbers with min=0 and max=100
      - output some random numbers with min=1 and max=6    => like a dice
<<<<<<< HEAD
*/
>>>>>>> 7d708aaef3c3c23865d2e7989d9fb03e739ef42e
=======

*/

function rnd(min, max) {
  if (max > 0 && min > 0 && max > min) {
    a = Math.random() * (max - min + 1) + min;
    return Math.floor(a);
  }
  return 100;
}
console.log(rnd(2, 4));
/* - Try to call "randomInteger" the following ways, see what is output:
      - randomInteger(-1, 0)
      - randomInteger(-10, 10)


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
<<<<<<< HEAD
}
>>>>>>> 7c1f39f6ef19c9fea0004488acf01b7f21921a79
=======
} */
>>>>>>> ef5849d880b65514da5a94ef748d8239a5fce83c
