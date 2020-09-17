/*

loop from 1 to 100
print the number, but in the following cases instead of printing the number, do:
- print "Fizz" if the number is divisible by 3
- print "Buzz" if the number is divisible by 5
- print "FizzBuzz" if divisible by both

*/

<<<<<<< HEAD
for(let i=1; i<=100;i++) {
    if (i%15==0) {
        console.log(`FizzBuzz ${i}`);
    }
    if (i%3==0 && i%15!=0) {
        console.log(`Fizz ${i}`);
    }
    if (i%5==0 && i%15!=0) {
        console.log(`Buzz ${i}`);
    }
}
=======
for (let number = 1; number <= 100; number++) {
  let output = "";
  if (number % 3 == 0) output += "Fizz";
  if (number % 5 == 0) output += "Buzz";

  console.log(output || number);
}
>>>>>>> 9bea88a4bc661ed807f03b0a9c63e14220334d7d
