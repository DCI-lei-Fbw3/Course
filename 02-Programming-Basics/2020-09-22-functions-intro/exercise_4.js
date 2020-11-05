// // **1. Add Up.**


// function AddUp (x) {
//     let sum = 0; 
//     for (let i = 0; i <= x; i++) {
//         sum += i 
//     } return sum
// }
// console.log(AddUp(4))
// console.log(AddUp(13))

// // **2. Cubed.**

// function sumOfCubes(x, y, z){ 
//     if (z === undefined) {
//         z = 0; 
//     }
//     if (y === undefined) {
//         y = 0; 
//     }
//     if (x === undefined) {
//         x = 0; 
//     }
//     return Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3) 
// }

// console.log(sumOfCubes(1, 5, 9))
// console.log(sumOfCubes(2))
// console.log(sumOfCubes())


// **3. String Check.**

// Create a function that takes a string and a word, and then returns true or false 
//depending on whether the word starts with the initial string.

// function spellCheck (x, y) {
    
//     if (x.length > y.length){       //early bailout 
//         return false
//     }
//     if (x.length > y.length){       //early bailout 
//         return false
//     for (let i = 0; i < x.length; i++){   
//        // console.log(x[i]);
//         if (x[i] !== y[i]) {
//             return false
//         } 
//     } 
//     return true
// }


// console.log(spellCheck("but", "button"))
// console.log(spellCheck("buto", "button"))
// console.log(spellCheck("beau", "pastry"))
// console.log(spellCheck("buttons", "button"))

// Examples:
// * isStrInWord("bu", "button") ➞ true
// * isStrInWord("tri", "triplet") ➞ true
// * isStrInWord("beau", "pastry") ➞ false




// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's 
//less than or equal to zero, otherwise return false.

// Examples:
// * isLEQZero(3) ➞ false
// * isLEQZero(0) ➞ true
// * isLEQZero(-4) ➞ true
// * isLEQZero(10) ➞ false

/* function EQZero (x) { 
    if (x <= 0) {
        return true
    } else 
    return false
}

console.log(EQZero(3));
console.log(EQZero(0));
console.log(EQZero(-4));
 */

//**5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. 
//The function should count the number of occurrences of that letter in the string.

// i.e.
// countOccurrences("this is a string", "i") ➞ 3

// function stringLetter (string, letter) {
//     string = string.toLowerCase();                  // other (more advisable) option: let lowerCase = string.toLowerCase(); 
//     let sum = 0; 
//     for (let position = 0; position < string.length; position++){
//         if (string.charAt(position) == letter){
//             sum += 1; 
//         }
//     } return sum;
// } 

// console.log(stringLetter("Lewes", "e"))
// console.log(stringLetter("Sandra Almoli", "a"))

// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. 
//**NB:** All test inputs will be positive integers.

// Examples:
// * calcBaseToExponent(5, 5) ➞ 3125
// * calcBaseToExponent(10, 10) ➞ 10000000000
// * calcBaseToExponent(3, 3) ➞ 27

// const powerOf = function (a, b) {
//     return a ** b
// }

// console.log(powerOf(5, 5));
// console.log(powerOf(-10, -10));
// console.log(powerOf(3, 3));


//**7. Dog Years.**

// Create a function which calculates how old a dog is in dog years. 
// The function should accept one argument that is the puppy's age in human years. 
//Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// const inDogYear = function (pupsAge) {
//     //pupsAge *= 7;
//     console.log("Your doggo is " + pupsAge * 7 + " years old in human years!");
// }

// inDogYear(2);
// i.e.
//  dogAge(4) ➞ "Your doggo is 28 years old in human years!"


/***************************************************************************************************/

// **8. A Lifetime Supply...**
// Create a function to calculate how much you'll actually be getting for a lifetime supply of your 
//favourite snack. The function should accept two arguments: 
//age and amount per day. The function should calculate the amount that will be consumed for the 
//rest of your life given a constant max age. **Bonus** Accept floating point values for amount 
//per day and round the result.

// i.e.
// let maxAge = 85; 
// let daysInYear = 365; 

// LifetimeSupply = (Age, AmountPerDay) => {
//     let total = ((maxAge - Age)*daysInYear) * (AmountPerDay);
//     return ("You will need " + total + " packets of crisps (" + AmountPerDay + " a day) to last you till the age of " + maxAge + ".");
//   }

// console.log(LifetimeSupply(30, 2));
// console.log(LifetimeSupply(84, 2));

 // const daysInYear = 365;
// const maxAge = 85;
// const calculateSupply = function (age, amountPerDay) {

//     var total = ((maxAge - age) * daysInYear) * amountPerDay;

//     /* var remainingYears = maxage - age;
//     var perYear = amountPerDay * daysInYear;
//     var total = perYear * remainingYears; */

//     console.log("You will need " + total + " to last you until the ripe old age of " + age);
// }

// calculateSupply(30, 2);
// calculateSupply(91, 3);
// calculateSupply(60, 7); 


// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, 
//and false if he's not.

// Examples:
// * isWaldoHere("is there wal here ?") ➞ false
// * isWaldoHere("I found you Waldo!") ➞ true
// * isWaldoHere("is wally here?") ➞ false
// * isWaldoHere("waldo is here") ➞ true


// function wheresWaldo(isHeHere) {
//     var Waldo = isHeHere.toLowerCase();
//     if (Waldo.includes("waldo")){
//         return true;
//     } else 
//         return false;
    
// } 

// console.log(wheresWaldo("is there wal here ?"))
// console.log(wheresWaldo("I found you Waldo"))

//  /************************************************ */
 
// function wheresWaldo(isHeHere) {
//     var lowerCase = isHeHere.toLowerCase();        // other (more advisable) option: let lowerCase = string.toLowerCase();

//     //if (lowerCase.search("waldo")) {               //The .search method returns the character position in the string 
//     if (lowerCase.includes("waldo")) {
//         return true;
//     } else
//         return false;
// }

// console.log(wheresWaldo("Waldo are you here?"));
// console.log(wheresWaldo("Look Harry, it's Lord Waldemort!"));
// console.log(wheresWaldo("wally is a willy who might be a waldo"))


// **10. Pie.**
// Create a function that determines whether or not it's possible to split a pie 
// fairly given these three parameters:



// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.

// Examples:
// * isEqualSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices


// * isEqualSlices(8, 3, 2) ➞ true
// * isEqualSlices(8, 3, 3) ➞ false
// * isEqualSlices(24, 12, 2) ➞ true

// function pie (noOfSlices, noOfReCip, slicePerPerson) {

//     //var isEqualSlices = 

//     if (slicePerPerson * noOfReCip <= noOfSlices) {
//         return true;
//     } else
//         return false;
// }

// console.log(pie(11, 5, 3));
// console.log(pie(8, 3, 2));
// console.log(pie(8, 3, 3));




// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's 
//and 'o's and returns either true or false.

function XO(string) {
    string = string.toLowerCase();
    // two loops to check the number of xs and os and then check if they are equal, return true 
}

// Notes:

//function stringLetter (string, letter) {
    //     string = string.toLowerCase();                  // other (more advisable) option: let lowerCase = string.toLowerCase(); 
    //     let sum = 0; 
    //     for (let position = 0; position < string.length; position++){
    //         if (string.charAt(position) == letter){
    //             sum += 1; 
    //         }
    //     } return sum;
    // } 


    
// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * isEqualNumXandO("ooxx") ➞ true
// * isEqualNumXandO("xooxx") ➞ false
// * isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// * isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// * isEqualNumXandO("zzoo") ➞ false