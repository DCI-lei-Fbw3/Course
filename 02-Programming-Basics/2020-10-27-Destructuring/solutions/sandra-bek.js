// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.


let [fruit, vegetable, food] = ["banana", "cucumber", ["bread", "cakes", "pizza"]]

console.log(fruit)
console.log(vegetable)
console.log(food)


// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key value pairs  to corresponding variable. Print out the object values. 


// let halloween = {
//     fran: "witch", 
//     Bekhzod: "troll", 
//     Sandra: "ghost" 
// };
// let {fran: x, Bekhzod: y, Sandra: z} = halloween
// // let halloween = {};
// // let {fran = "witch", Bekhzod = "troll", Sandra = "ghost" } = halloween

// console.log(x)
// console.log(y)
// console.log(z)

// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to display all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

let musician = {
    name: "Timothy",
    nationality: "Tatar-Jewish",
    greatestHit: "El problemo",
    genre: "Hip-Hop"
}
let {name:x, nationality:y,greatestHit:z, genre:a} = musician;

function data(obj) {
    return x + " is a " + y + " rapper, and his greatest hit is \"" + z + "\" which is a " + a + " song."
}
console.log(data(musician))  


// #### 4. We have an object:


// let user = {
//   name: "John",
//   years: 30
// };

// Write the destructuring assignment that reads:

// `name` property into the variable name.
// `years` property into the variable age.
// `isAdmin` property into the variable isAdmin (false, if no such property)

// Here’s an example of the values after your assignment:

// ```javascript
let user = {name: "John", years: 30};

// // your code to the left side:
let {name: name, years: age, isAdmin: isAdmin}  = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false
// ```
console.log(name)
console.log(age)
console.log(isAdmin)

// #### 5. The maximal salary

// There is a salaries object:

// ```javascript
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
// ```

// Create the function `topSalary(salaries)` that returns the name of the top-paid person.

// If `salaries` is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

function topSalary(var) {
    let paid = Object.entries(var)
    return paid.Math.max()
} 

console.log(topSalary(salaries))