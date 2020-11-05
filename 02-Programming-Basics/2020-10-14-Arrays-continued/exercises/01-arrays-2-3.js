// **1. The Greater Numbers.**
// Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number.
// The function should
// return the elements of the array which are greater than the second argument.

// i.e.

// findGreatest([3, 4, 5], 4) ➞ 5

// findGreatest([10, 20, 30], 12) ➞ 20, 30

// findGreatest([0, 10, 3], 4) ➞ 10

function findGreatest(arrayOfNum, Num) {
  let list = [];
  for (let i = 0; i < arrayOfNum.length; i++) {
    currentElement = arrayOfNum[i];
    if (currentElement > Num) list.push(currentElement);
  }

  return list;
}

console.log(findGreatest([9, 10, 15], 20));

function findGreatest2(array, num) {
  let list = array.filter((a) => a > num);
  return list;
}

console.log(findGreatest2([9, 10, 15], 9));

// **2. For the longest word.**
// Create a function to find the longest word in a given string.

// i.e. longestWord("this is a web development course") ➞  "development"

//1. divide string in separate string items (link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
//2. put them in an array?
//3. compare the length?
//4. return the longest

// function longestWord(str) {
//     let arr = str.split(' ');
//     let word = '';

//     for (let i = 0; i < arr.length ; i++) {
//         if (arr[i].length > word.length) word = arr[i];
//     }

//     return word
// }

// console.log(longestWord("This is a Web Development course."))

// function longestWord2(str) {
//     let arr = str.split(' ');
//     let longestWord = '';
//     for (let i = 0; i < arr.length; i++) {
//         let currentElement = arr[i];
//         if (currentElement.length > longestWord.length) longestWord = currentElement;
//     }
//     return longestWord
// }

// console.log(longestWord2("This is a Web Development course."))

// function longestWord(str) {
//     let arr = str.split(' ');
//     let longestWord = "";
//     for (let i = 0; i < arr.length; i++){
//         let currentElement = arr[i];
//         if (currentElement.length > longestWord.length) longestWord = currentElement;
//     }
//     return longestWord
// }

// console.log(longestWord("This is a Web Development course."))

// **3. Reverse.**
// Create a function to reverse a number.

// i.e. reverse(34532) ➞ 3543

function reverseNum(num) {
  let numString = num.toString();

  let reversedNum = "";
  for (let i = numString.length - 1; i >= 0; i--) {
    reversedNum += numString[i];
  }
  return reversedNum;
}

console.log("Sandra's solution:");
console.log(reverseNum(123456789));

function reversed(num) {
  num = num.toString();
  return num.reverse();
}

function reverseNum2(num) {
  //console.log(typeof num.toString().split('').reverse().join(''));
  //console.log(num.toString().split('').reverse().join(''));
  return num.toString().split("").reverse().join("");
}

console.log(reverseNum2(123456789));

// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string.

// i.e. findVowels("this is a string") ➞ 4
//1. split string into array
//2. filter to contain vowels
//3. array.length to count

function vowels(str) {
  let arr = Array.from(str).filter((item) => "aeuio".includes(item)).length;
  return arr;
}
console.log(vowels("develooooooooooooooopmeeeent"));

// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.

//1. include the numbers
// find element == false
//2.  print element if false

// includes 1-10

function missingNum(arr) {
  for (let i = 1; i <= 10; i++) {
    if (! arr.includes(i)) return i;
    // @HINT: maybe reduce computational effort
  }
}
console.log(missingNum([7, 2, 3, 6, 5, 9, 7, 4, 8])); // =>10
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // => 5
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // => 7


// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples:
// * sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0

function cubedFunc(arr){
    // let sum = arr.map(x => x ** 3)
    // return sum 
   let sum = 0; 
   for (let i=0; i < arr.length; i++){
       sum += arr[i]**3                 // 1 += 125  // 126 += 729 // 855 
   }
    return sum
}
                    //  0 1  2 
console.log(cubedFunc([1, 5, 9])) //length is 3 
  
// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered 
// array of the words that start with the same letters as the initial string.

// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

//1. check whether each string includes the initial string  and filter them  
//2. store them in a new array? 
//3. if not, keep the array empty 

function dictionary(initial, array){
    let dictionary = array.filter(element => element.startsWith(initial)); return dictionary
}
// function dictionary(initial, array){
//     let newArray = [];
//     for(let i = 0; i <= array.length; i++){
//       if(array[i] == startsWith(initial)){
//         newArray.push(i);
//       }
//     }  
//   return newArray 
// }
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]))


/* **8. Even Number Generator.**
Create a function that finds all even numbers from 1 to the given number.

Examples:
* evenNums(8) ➞ [2, 4, 6, 8]
* evenNums(4) ➞ [2, 4]
* evenNums(2) ➞ [2] */

//1. create a var that pushes/stores all even numbers till the given number to an array 
//   create a loop 
//2. do the modulo operation on the numbers from the array 

function evenNums(num) {
  let box = [];
  for (let i=1; i <= num; i++) {
    if (i % 2 === 0) box.push(i)
  } return box;  
}

console.log(evenNums(8))
console.log(evenNums(2))

// **Bonus: Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

// i.e. alphaOrder("webdev") ➞ "bdeevw"

//1. split string into an array  --> array from string? 
//2. check the character code and order them according to size --> charCodeAt() SORT? 



function alphaOrder(str) {
  let arr = Array.from(str).sort().join('');
  return arr 
}
console.log(alphaOrder("webdev")); 