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
*/
>>>>>>> 7d708aaef3c3c23865d2e7989d9fb03e739ef42e
