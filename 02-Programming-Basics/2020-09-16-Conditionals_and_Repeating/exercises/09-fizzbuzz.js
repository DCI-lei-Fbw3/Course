/*

loop from 1 to 100
print the number, but in the following cases instead of printing the number, do:
- print "Fizz" if the number is divisible by 3
- print "Buzz" if the number is divisible by 5
- print "FizzBuzz" if divisible by both

*/

for (let number = 1; number <= 100; number++) {
  let output = "";
  if (number % 3 == 0) output += "Fizz";
  if (number % 5 == 0) output += "Buzz";

  console.log(output || number);
}
