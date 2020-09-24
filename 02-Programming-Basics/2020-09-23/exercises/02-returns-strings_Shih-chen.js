/* Return: Strings

1. Is the String Empty?
Create a function that returns true if a string is empty and false otherwise.
*/
function emptyString(aString) {
  aString == null || aString === ""
    ? console.log("This string is empty")
    : console.log("This string is not empty");
  //if any value in the looped index position is not a null, then it is not an empty string.
}

emptyString("");
emptyString("     "); //This is not an empty string as there is white space.
emptyString("      @");
emptyString("  Bear! ");

console.log("\n");

/* 2. Compare Strings by Count of Characters
Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
*/
function compareStringLength(string1, string2) {
  string1.length === string2.length
    ? console.log("Hurray!! Both strings have the same length.")
    : console.log("Oops! The two strings do not have the same length.");
}

compareStringLength("Winnie", "Poohbear");
compareStringLength("123456", "654321");
compareStringLength("Peacock", "Piglets");

console.log("\n");

/* 3. Concatenate First and Last Name into One String
Given two strings, firstName and lastName, return a single string in the format "last, first".
*/

function fullName(firstName, lastName) {
  var wholeName = console.log(`${lastName}, ${firstName}`);
  return wholeName;
}

fullName("Edward", "Sanders");

console.log("\n");

/* 4. Name Greeting!

Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

### Examples
```
helloName("Gerald") ➞ "Hello Gerald!"
helloName("Tiffany") ➞ "Hello Tiffany!"
helloName("Ed") ➞ "Hello Ed!"
```
*/
const helloName = function (aName) {
  console.log(`Hello, ${aName}!`);
};

helloName("Winnie the Pooh");

console.log("\n");

/* 5. Check String for Spaces
Create a function that returns true if a string contains any spaces.

### Examples
```
hasSpaces("hello")        ➞ false
hasSpaces("hello, world") ➞ true
hasSpaces(" ")            ➞ true
hasSpaces("")             ➞ false
hasSpaces(",./!@#")       ➞ false
```
*/

const hasSpaces = function (aString) {
  aString === "" || aString.indexOf(" ") >= 0
    ? console.log("true")
    : console.log("false");
};

hasSpaces("hello");
hasSpaces("hello, world");
hasSpaces(" ");
hasSpaces("");
hasSpaces(",./!@#");

console.log("\n");

/* 6. Char-to-ASCII
Create a function that returns the ASCII value of the passed in character.

### Examples
```
ctoa("A") ➞ 65
ctoa("m") ➞ 109
ctoa("[") ➞ 91
ctoa("\") ➞ 92
```
Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
*/

const cToNumber = function (aCharacter) {
  let result = aCharacter.charCodeAt();
  console.log(result);
};

cToNumber("A"); //➞ 65
cToNumber("m"); //➞ 109
cToNumber("["); // 91
cToNumber("<");
cToNumber("(");
cToNumber("@");
cToNumber("n");
cToNumber("\\");

console.log("\n");

/* 7. Case Insensitive Comparison
Write a function that validates whether two strings are identical. Make it case insensitive.

### Examples
```
match("hello", "hELLo") ➞ true
match("motive", "emotive") ➞ false
match("venom", "VENOM") ➞ true
match("mask", "mAskinG") ➞ false
```
*/

const stringMatch = (stringA, stringB) => {
  if (stringA.length != stringB.length) {
    console.log("false");
  } else {
    for (i in stringA) {
      var result1 = stringA.charCodeAt(i);
    }
    for (j in stringB) {
      var result2 = stringB.charCodeAt(j);
    }
    let compareResult =
      (result1 > result2 && result1 - result2 == 32) ||
      (result1 < result2 && result1 + result1 == 32) ||
      result1 == result2
        ? true
        : false;
    console.log(compareResult); 
  }
};

stringMatch("hello", "hELLo");
stringMatch("hello", "hello");
stringMatch("motive", "emotive");
stringMatch("venom", "VENOM");
stringMatch("mask", "mAskinG");
stringMatch("Honey", "hoNEY");

console.log("\n");

/* 8. Check if the Same Case

Create a function that returns true if an input string contains only uppercase or only lowercase letters.

### Examples
```
sameCase("hello") ➞ true
sameCase("HELLO") ➞ true
sameCase("Hello") ➞ false
sameCase("ketcHUp") ➞ false
```
*/
//const sameCase = aString => {
//    for (i in aString) {
//        var letterNumber=aString[i];
//      }
//        //or let letterNumber=aString[i].charCodeAt();
//      (letterNumber>='A' && letterNumber<='Z') || (letterNumber>='a' && letterNumber<='z')? console.log("true"): console.log("false");
//  }

const regex1 = /[A-Z]/g;
const regex2 = /[a-z]/g;
var result;
const sameCase = (aString) => {
  for (let i = 0; i < aString.length; i++) {
    !(aString.match(regex1) && aString.match(regex2))
      ? (result = true)
      : (result = false);
  }
  console.log(result);
};

sameCase("Winnie");
sameCase("hello");
sameCase("HELLO");
sameCase("Hello");
sameCase("ketcHUp");

console.log("\n");

/*9. Remove the First and Last Characters
Create a function that removes the first and last characters from a string.

### Example:
```
removeFirstLast("hello") ➞ "ell"
```
*/

const removeFirstLast = (aString) => {
  let line = "";
  for (let i in aString) {
    if (i != 0 && i != aString.length - 1) {
      line = line + aString[i];
    }
  }
  console.log(line);
};

removeFirstLast("Hello");
removeFirstLast("Winnie the Pooh says hello");

console.log("\n");

/* 10. Strange Pair
A pair of strings form a strange pair if both of the following are true:
- The 1st string's first letter = 2nd string's last letter.
- The 1st string's last letter = 2nd string's first letter.
Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

### Examples
```
isStrangePair("ratio", "orator") ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".

isStrangePair("sparkling", "groups") ➞ true
isStrangePair("bush", "hubris")      ➞ false
isStrangePair("", "")                ➞ true
```
### Note
It should work on a pair of empty strings (they trivially share nothing).
*/

const isStrangePair = (pairA, pairB) => {
  let pairOutcome = ((pairA[0]==pairB[pairB.length-1]) && (pairA[pairA.length-1]==pairB[0]))? true:false; 
  console.log(pairOutcome);    
}

isStrangePair("wolverine", "peacock");  
isStrangePair("sparkling", "groups");
isStrangePair("bush", "hubris");
isStrangePair("", "")   