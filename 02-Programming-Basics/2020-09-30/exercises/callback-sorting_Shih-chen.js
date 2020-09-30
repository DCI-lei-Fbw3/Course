//*# Callbacks

let fruits = ["Banana", "Orange", "Apple", "Mango", "Strawberry"];
let numbers = [100, 22, 42, 1, -34];

//alternatively

function sortNumbersReversed(a, b) {
  function sortNumbers(a, b) {
    var difference = a - b;

    if (difference < 0) return -1;
    if (difference > 0) return 1;
    return 0;

    //return a - b; // negative, 0, positive
  }
  return b - a;
}

numbers.sort(sortNumbersReversed);
//## 1. Sort the numbers in reverse order*/

const sorted = (x) => x.slice().sort((a, b) => a - b); // Make a copy with .slice();
const sortedCallBack = (aList) => {
  let reversalSorted = sorted(aList);
  //return reversalSorted;
  console.log(reversalSorted);
};

sortedCallBack(numbers);

//## 2. Sort the persons by their last name
let persons1 = [
  "Albert Einstein",
  "Lise Meitner",
  "Gene Simmons",
  "Patrick Swayze",
  "Alice Cooper",
  "Ronny James Dio",
  "Bruce Dickinson",
  "Marcus Miller",
  "Nathan East",
  "Al di Meola",
  "Gloria Estefan",
  "Naima Husseini",
  "Alin Coen",
  "Tina Dico",
];

function sortedByLastName1(aNameArray) {
  function compareName(a, b) {
    var aName = a.split(" ");
    var bName = b.split(" ");

    var aLastName = aName[aName.length - 1];
    var bLastName = bName[bName.length - 1];
    //console.log (aLastName);

    if (aLastName < bLastName) return -1;
    if (bLastName > aLastName) return 1;
    return 0;
  }
  //return a - b; // negative, 0, positive
  return aNameArray.sort(compareName);
}

console.log(sortedByLastName1(persons1));

let persons2 = [
  "Albert Einstein",
  "Lise Meitner",
  "Gene Simmons",
  "Patrick Swayze",
  "Alice Cooper",
  "Ronny James Dio",
  "Bruce Dickinson",
  "Marcus Miller",
  "Nathan East",
  "Al di Meola",
  "Gloria Estefan",
  "Naima Husseini",
  "Alin Coen",
  "Tina Dico",
  "apple",
  "raspberry",
];

sortedByLastName1(persons2);

/*## 3. String sorting
### a) What happens to the sorting order if you add "apple" or "raspberry"
apple and raspberry are listed the last. 

### b) Why is that?
because a and r are lowercase. 

### c) Create and use a sorting functions that treat characters as being the same if their only difference is their capitalization (lowercase/uppercase; "a" == "A").

Hint 1: Use a search engine to get a first idea, on how to sort strings with a custom function.

Hint 2: Useful string-functions may be:
```
    toLowerCase()
    toUpperCase()
    charCodeAt()
```
*/

//console.log(upperCased(persons2));

//console.log("........");

function sortedByLastName2(aNameArray) {
  const upperCased = (aNameArray) =>
    aNameArray.map(function (name) {
      return name.toUpperCase();
    }); //write a function to convert all letters into uppercase using map;

  function compareName(a, b) {
    var aName = a.split(" ");
    var bName = b.split(" ");

    var aLastName = aName[aName.length - 1];
    var bLastName = bName[bName.length - 1];

    //console.log (aLastName);
    if (aLastName < bLastName) return -1;
    if (bLastName > aLastName) return 1;
    return 0;
  }
  //return a - b; // negative, 0, positive
  
  return upperCased(aNameArray).sort(compareName);
  //console.log(compareName(aNameArray));
}
console.log(sortedByLastName2(persons2));

/*const lowercased = (names) => names.map(function(name) {
      return name.toLowerCase();
  });

  console.log(lowercased(persons2));*/
