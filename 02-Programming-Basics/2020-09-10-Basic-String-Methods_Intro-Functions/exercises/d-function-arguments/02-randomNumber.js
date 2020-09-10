/*

    - create a two functions "randomFloat" and "randomInteger"
    - they take two arguments (min, max)
      only positive integers allowed, but no test is required, 
      assume "min" and "max" are always positive integers including 0
      also assume that "max" is bigger than "min"
    - it should return an integer between and including "min" and "max"

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