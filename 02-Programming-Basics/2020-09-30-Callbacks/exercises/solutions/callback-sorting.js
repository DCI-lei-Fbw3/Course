//# Callbacks

const { fuchsia } = require("color-name");


/* let numbers = [100, 22, 42, 1, -34]; */


// ## 1. Sort the numbers in reverse order

// let numbers = [100, 22, 42,1, -34];
// console.log(numbers.reverse());     // so 22,100, 42,1-34,    22 42,100 1,-34

 

//## 2. Sort the persons by their last name

// first we need to create a compare function 
// to change how sorting works.
// Get two names to compare (a and b)
// function compare (a,b) {                        //"Albert Ein", "Sandra Almoli"
    //split the names as strings into arrays
    // var aName = a.split(" ");                   // ["Albert" , "Ein"]  --->(split always returns an array) I have converted a string into an array because I have two items now;  
    // var bName = b.split(" ");                   // "Sandra", "Almoli"
    // get the last names by selecting
    // the last element in the name arrays
    // using array.length - 1 since full names
    // may also have a middle name or initial
    // var aLastName = aName[aName.length - 1];    // aName[length=2, -1 (because the index position is 1)] 
    // var bLastName = bName[bName.length - 1]; 
    // compare the names and return either
    // a negative number, positive number
    // or zero.
//     if (aLastName < bLastName) return -1;  // js decides based on character codes 
//     if (aLastName > bLastName) return 1;
//     return 0;
//   }
   
  // Now let's get the string of names
//  let persons = ["Albert Einstein", "Lise Meitner", "Gene Simmons", "Patrick Swayze", "Alice Cooper", "Ronny James Dio", "Bruce Dickinson", "Marcus Miller", "Nathan East", "Al di Meola", "Gloria Estefan", "Naima Husseini", "Alin Coen", "Tina Dico"];
   
  // and sort the array using our compare function
//   persons.sort(compare);
   
  // and finally, let's see what we've got
//   console.log(persons);


// let names = ["Sandra Almoli"]
// console.log(names.slice(" "));


// 3. 
let fruits  = ["apple", "rasberry", "Banana", "Orange", "Apple", "Mango", "Strawberry"];
//a) the items with lowercase are sorted after the uppercase items because their character codes are higher than the uppercase items.  

console.log("a".charCodeAt(), "r".charCodeAt(), "B".charCodeAt(), "O".charCodeAt(),"A".charCodeAt(), "M".charCodeAt(), "S".charCodeAt())

console.log(fruits.sort())

//c) 

function compare(a, b){ 
    let aFruit = a.toLowerCase(); 
    let bFruit = b.toLowerCase(); 
    if (aFruit < bFruit) return -1; 
    if (aFruit > bFruit) return 1; 
    return 0; 
}

fruits.sort(compare); 

console.log(fruits); 


