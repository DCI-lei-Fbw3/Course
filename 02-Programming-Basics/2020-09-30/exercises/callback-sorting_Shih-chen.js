//*# Callbacks

let fruits  = ["Banana", "Orange", "Apple", "Mango", "Strawberry"];
let numbers = [100, 22, 42, 1, -34];
let persons = ["Albert Einstein", "Lise Meitner", "Gene Simmons", "Patrick Swayze", "Alice Cooper", "Ronny James Dio", "Bruce Dickinson", "Marcus Miller", "Nathan East", "Al di Meola", "Gloria Estefan", "Naima Husseini", "Alin Coen", "Tina Dico"];

//## 1. Sort the numbers in reverse order*/

const sorted = (x)=> x.slice().sort((a,b)=>a-b); // Make a copy with .slice();
const sortedCallback = (callback)=> {
    console.log(callback);
}
sortedCallback(sorted(persons));

/*for (let i = sortedList.length; i>=0; i--) {
    var sortedReversedList=[];
    sortedReversedList=sortedReversedList+sortedList[i];
    console.log(sortedReversedList);
}*/


/*## 2. Sort the persons by their last name

## 3. String sorting
### a) What happens to the sorting order if you add "apple" or "raspberry"

### b) Why is that?

### c) Create and use a sorting functions that treat characters as being the same if their only difference is their capitalization (lowercase/uppercase; "a" == "A").

Hint 1: Use a search engine to get a first idea, on how to sort strings with a custom function.

Hint 2: Useful string-functions may be:
```
    toLowerCase()
    toUpperCase()
    charCodeAt()
```
*/