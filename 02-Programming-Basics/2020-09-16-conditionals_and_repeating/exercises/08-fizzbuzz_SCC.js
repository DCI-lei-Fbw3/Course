/*

loop from 1 to 100
print the number, but in the following cases instead of printing the number, do:
- print "Fizz" if the number is divisible by 3
- print "Buzz" if the number is divisible by 5
- print "FizzBuzz" if divisible by both

*/

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