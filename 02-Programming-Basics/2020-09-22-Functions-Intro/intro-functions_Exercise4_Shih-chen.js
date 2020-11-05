// /*# Functions Exercises

// Print your answers to the console.*/

// /*1. Add Up.**
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples:
// * sumIntFrom1ToN(4) ➞ 10
// * sumIntFrom1ToN(13) ➞ 91
// * sumIntFrom1ToN(600) ➞ 180300*/

// function addUp(x) {
//   let total = 0;
//   for (let i = 1; i <= x; i++) {
//     total = total + i;
//     console.log(`The total is ${total}.`);
//   }
// }

// addUp(4);
// console.log("...................................");

// /*2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.

// Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0*/

// function sumOfCubes(x, y, z) {
//   let total = 0;
//   if (typeof x == "number" && typeof y == "number" && typeof z == "number") {
//     total = x ** 3 + y ** 3 + z ** 3;
//   }
//   if (typeof x == "number") {
//     if (typeof y == "number" && typeof z == null) total = x ** 3 + y ** 3;
//   }

//   if (typeof x == "number" && (y == null) & (z == null)) {
//     total = x ** 3;
//   }
//   if (x == null && y == null && z == null) {
//     total = 0;
//   }

//   console.log(`The total of the sum of the cubes is ${total}`);
// }
// sumOfCubes(1, 5, 9);
// sumOfCubes(2, 4);
// sumOfCubes(2);
// sumOfCubes();
// console.log("...................................");

// /*3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.

// Examples:
// * isStrInWord("bu", "button") ➞ true
// * isStrInWord("tri", "triplet") ➞ true
// * isStrInWord("beau", "pastry") ➞ false*/

function isStrInWord(aFragment, aString) {
   let aMatch = aString.startsWith(aFragment);

   //if (aMatch == true) {
   //    console.log("true");
   //  } else {
   //    console.log("false");
  //}
  console.log(aMath);
}

// isStrInWord("wi", "winnie pooh");
// isStrInWord("bu", "buttom");
// isStrInWord("bug", "this is a book");
// console.log("...................................");

// /*4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:
// * isLEQZero(3) ➞ false
// * isLEQZero(0) ➞ true
// * isLEQZero(-4) ➞ true
// * isLEQZero(10) ➞ false*/

// const lessThanEqualZero = function (n) {
//   if (typeof n != "number") {
//     console.log("You have not entered a proper number!");
//   }

//   if (n < 0 || n == 0) {
//     console.log(`The number ${n} is less than or equal to 0.`);
//   } else {
//     console.log(`The number ${n} is larger than 0.`);
//   }
// };

// lessThanEqualZero(0);
// lessThanEqualZero(10);
// lessThanEqualZero(-9);
// console.log("...................................");

// /*5. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// i.e.
// countOccurrences("this is a string", "i") ➞ 3*/

// const countOccurences = function (aString, aLetter) {
//   if (typeof aString != "string" || typeof aLetter != "string") {
//     console.log(
//       "Please make sure you provide one string and one alphabet to run this function!"
//     );
//   }
//   let counter = 0;
//   for (let index = 0; index < aString.length; index++) {
//     if (aString[index] == aLetter) {
//       counter = counter + 1;
//     }
//   }
//   if (counter == 0 || counter == 1) {
//     console.log(
//       `The letter "${aLetter}" appears ${counter} time in the string of "${aString}".`
//     );
//   } else {
//     console.log(
//       `The letter "${aLetter}" appears ${counter} times in the string of "${aString}".`
//     );
//   }
// };
// countOccurences("Winnie the Pooh", "w");
// countOccurences("Christopher Robin has a bunch of friends.", "a");
// countOccurences("Dracula is a vampire from Transylvania", "D");
// console.log("...................................");

// /*6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calcBaseToExponent(5, 5) ➞ 3125
// * calcBaseToExponent(10, 10) ➞ 10000000000
// * calcBaseToExponent(3, 3) ➞ 27*/

// const calcBaseExponent = function (base, exponent) {
//   if (base < 0 || exponent < 0) {
//     console.log("Please make sure you the two numbers are positive integers!");
//   }
//   let total = base ** exponent;
//   console.log(
//     `The outcome of base number ${base} with the exponent of ${exponent} is ${total}.`
//   );
// };

// calcBaseExponent(4, 5);
// console.log("...................................");

// /*7. Dog Years.** 
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the puppy's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// i.e.
//  dogAge(4) ➞ "Your doggo is 28 years old in human years!"*/

// const dogAge = function (age) {
//   let total = 7 * age;
//   console.log(
//     `Your dog is now ${age} years old in dog years but ${total} in human years!`
//   );
// };

// dogAge(7);
// console.log("...................................");

// /*8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. **Bonus** Accept floating point values for amount per day and round the result.

// i.e.
// calcLifetimeSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you till the age of 80."
// calcLifetimeSupply(40, 3) ➞ "You will need 43,800 packets of crisps  (3 a day) to last you till the age of 80."*/

// const maxAge = 80;
// const calcLifetimeSupply = function (age, amount) {
//   let total = (maxAge - age) * amount * 365;
//   total = Math.round(total);
//   console.log(
//     `Now you are only ${age} consuming ${amount} box of creamcheese a day.`
//   );
//   console.log(
//     `You will need ${total} boxes of creamcheese to last you until the ripe old age of ${maxAge}.`
//   );
// };

// calcLifetimeSupply(20, 0.3);
// calcLifetimeSupply(40, 0.4);
// calcLifetimeSupply(60, 1.2);

// console.log("...................................");

// /*9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true*/

// const isWaldoHere = (aString) => {
//   if (typeof aString != "string") {
//     console.log("Please enter a string.");
//   } else {
//     if (aString == "is there Wal here?" || aString == "is Wally here?") {
//       console.log("False, Waldo is not here!");
//     }
//     if (aString == "I found you Waldo!" || aString == "Waldo is here") {
//       console.log("True, Waldo is here!");
//     }
//   }
// };

// isWaldoHere("is there Wal here?");
// isWaldoHere("I found you Waldo!");
// isWaldoHere(11235);

// console.log("...................................");

// /*10. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Examples:
// * isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// * isEqualSlices(8, 3, 2) ➞ true
// * isEqualSlices(8, 3, 3) ➞ false
// * isEqualSlices(24, 12, 2) ➞ true*/

// const pieSlice =(numSlice, numPerson, slicePerPerson) => {
//   if (numSlice>numPerson*slicePerPerson && numSlice==numPerson*slicePerPerson) { 
//      console.log(`The pie has ${numSlice} slices, which is enough for ${numPerson} persons to take ${slicePerPerson} slices per head`);
//     }
//   else {
//     console.log(`Nope, we do not have enough slices of pie for ${numPerson} persons.`);
//   }
// }

// pieSlice (12, 3, 4);
// pieSlice (11, 3, 5);
// piceSlice(20, 3, 5);

// console.log ("...................................");

// /*11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * isEqualNumXandO("ooxx") ➞ true
// * isEqualNumXandO("xooxx") ➞ false
// * isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// * isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// * isEqualNumXandO("zzoo") ➞ false*/

// const isEqualNumXandO = (oneString) => {
//   if (typeof oneString != "string") {
//     console.log("please enter a string.");
//   } else {
//     var c1 = (c2 = 0);
//     var freforX = (freforO = 0);

//     for (let index = 0; index < oneString.length; index++) {
//       if (oneString[index] == "x" || oneString[index] == "X") {
//         c1++;
//         freforX = freforX + c1;
//       }
//       if (oneString[index] == "o" || oneString[index] == "O") {
//         c2++;
//         freforO = freforO + c2;
//       }
//     }
//     if (freforX != 0 && freforO != 0 && freforX == freforO) {
//       console.log(`True. The number of x and the number of o are the same.`);
//     } else if (freforX != 0 && freforO != 0 && freforX != freforO) {
//       console.log(
//         `False. The number of x and the number of o are not the same.`
//       );
//     } else if (freforX == 0 && freforO == 0) {
//       console.log(`False. The number of x and the number of o are zero.`);
//     } else if (freforX == 0 || freforO == 0) {
//       console.log(`False. Either there is no x or there is no o.`);
//     }
//   }
// };

// isEqualNumXandO("zpzpzpp");
// isEqualNumXandO("ooxx");
// isEqualNumXandO("xooxx");
// isEqualNumXandO("ooxXm");
// isEqualNumXandO("zzoo");
// isEqualNumXandO(null);

// console.log("...................................");

// /*12. isPrime?**
// Create a function that returns true if a number is prime and false if it's not. 
// **NB:** a prime number is any positive integer *greater than 1*, which is 
// *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false*/
// DRY principle: Do Not Repeat Yourself
// There are only two numbers in JavaScript: 1 and infinity. The moment you need to do something more than once, assume it will be done infinitely.

//Anna's solution:
function isItPrime(number) {
  if (number <= 1) {
    console.log("Invalid number")
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false
      }
    }
    return true
  }
}

// Shih-chen's solution: this needs to be re-written because this piece of code is too long
 const isPrime = (prime) => {
  if (typeof prime!="number" || prime<0) {
     console.log("Please enter a positive integer");
  }
   else {
     if (prime%2==0 && prime!=2) {
       console.log(`${prime} is an odd number. Any odd number but 2 which will never a prime number.`);
     }
     if (prime==2) {
       console.log(`${prime} is the smallest prime number`);
     }
     if (prime==1) {
       
     }
    else {
   let counter=0;
   for (let i=2; i<=prime; i++) {
    let result=prime%i;     
        if (result==0){
      counter=counter+1;
     }
      console.log(`${prime} divded by ${i} has the ${result} as the remainder number.`);
    }
   if (counter==2) {
      console.log(`${prime} is a prime number.`);
      }
     else {
      console.log(`${prime} is not a prime number.`);
    }   
 }
 }
 }

// isPrime(15);
// isPrime("Pooh");
// isPrime(-8);
// isPrime(2);
// isPrime(17);

// /*
// 13. Validate Email.**
// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// * The string must contain exactly one "@" character.  //Variable which is set to true if "@" is included in a string using .includes
// * The string must contain at least one "." character.  //Variable which is set to true if "." is included in a string using .includes

// * The "." and the "@" must be in the appropriate places.
// *   e.g. "." cannot be the last character. //if statement using length - 1, if it's . or @ then return false
// *   e.g. "." cannot be directly before or after "@"  //variable where we store the index of @ and all '.'s and compare them (difference cannot be 1 or -1)
// *   e.g. there cannot be consecutive "." characters
// * e.g. "@" must have at least one character in front of it.  //check that @ index isn't 0
// * e.g. "j@example.com" is valid while "@example.com" is invalid.
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.
// * e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid.*/

//by Anna and Shih-chen but Anna did most of the job.
function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    let atPositions = [];
    let dotPositions = [];
    
    for (let i = 0; i<email.length; i++) {                    //Establishes the positions of all @s and .s
      if (email[i] === "@") atPositions.push(i)
      if (email[i] === ".") dotPositions.push(i)
    }

    if (atPositions.length > 1 ||                             //too many @s
      atPositions[0] == 0 ||                                  //starts with @ 
      atPositions[0] == email.length - 1 ||                   //ends with @
      dotPositions[dotPositions.length - 1] < atPositions[0]  //@ isn't followed by a .
      ) {   
      return false
    }

    for (let i = 0; i < dotPositions.length; i++) {
      if (dotPositions[i] == 0 || 
        dotPositions[i] == email.length - 1 || 
        dotPositions[i] == dotPositions[i + 1] - 1 ||       
        dotPositions[i] == atPositions[0] - 1 ||
        dotPositions[i] == atPositions[0] + 1
        ) {                                                   //if . is at the beginning or the end, return false
        return false
      }
    }
    return true                                               //If all of the above checks out, return true
  } else {
    return false
  }
}


console.log(validateEmail("@example.com"))                  //false - YES GOOD
console.log(validateEmail("j@example.com"))                 //true  - YES GOOD
console.log(validateEmail("john.smith@com"))                //false - YES GOOD
console.log(validateEmail("john.smith@email.com"))          //true  - YES GOOD
console.log(validateEmail("john..smith@email.com"))         //false - YES GOOD
console.log(validateEmail("john.@email.com"))               //false - YES GOOD
console.log(validateEmail("john@.email.com"))               //false - YES GOOD
console.log(validateEmail("Winnie.the..pooh@@honey.net."))  //false - YES GOOD
console.log(validateEmail("helo...@mdcom"))                 //false - YES GOOD
console.log(validateEmail("anna.m@hey.com"))                //true  - YES GOOD
console.log(validateEmail("gjw3j@@.com"))                   //false - YES GOOD






