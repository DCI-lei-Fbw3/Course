// # Programming Basics: Fizzbuzz (using simple if conditionals)

// Let's play mini FizzBuzz! For any given number, if the number is:
// - divisible by 3, print "Fizz".
// - divisible by "5", print "Buzz".
// - divisible by both 3 and 5, print "FizzBuzz".

// That is, if any of the above conditions apply, print the above words *instead of the number*.

// - Otherwise, just print the number.

let sampleNum = 32;

if ( sampleNum % 3 == 0 && sampleNum % 5 == 0){
  console.log("FizzBuzz")
} else if (sampleNum % 3 == 0) {
  console.log ("Fizz")
} else if (sampleNum % 5 == 0){
  console.log("Buzz")
} else {
  console.log(sampleNum)
}
