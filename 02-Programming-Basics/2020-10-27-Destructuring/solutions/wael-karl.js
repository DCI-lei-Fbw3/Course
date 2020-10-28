// # Destructuring
// **Instructions**
// #### 1. Array Destructuring
// - Declare the variables `fruit`, `vegetable`, `food`.
// Assign the following values to the variables respectively:
// "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`).
// Use array destructuring assignment to complete this task.
/* [`fruit`, `vegetable`, `food`] =
let arr = ["banana", "cucumber", "bread", "cakes", "pizza"];
let fruit = arr[0];
let vegetables = arr[1];
 */
/* [fruit, vegetables, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"]
console.log(fruit);
console.log(vegetables);
console.log(food);
 */
// #### 2.Object Destructuring
// - Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.
// Assign each key pair value to corresponding variable. Print out the object values.
/* let halloweenCostume = {};
halloweenCostume = {fran: "witch", peter: "pirate" };
halloweenCostume.waell = " bear"
let {fran:x, peter: y, waell: z} = halloweenCostume;
console.log(x);
console.log(y);
console.log(z);
console.log(Object.keys(halloweenCostume));
console.log(Object.values(halloweenCostume)); */
// #### 3. Parameters: Object Destructuring
// - Create an object with band/musician details
//   e.g. name of the band/musician, greatest hit, nationality, genre etc.
// - Then, create a function to display all of the band/musician's data.
// - Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```
/*
let band = {name: "Kraftwerk", greatestHit: "Model", nationality: "german", genre: "electronic"};
function detailDispalyer(obj){
    return (`${obj.name} is a ${obj.nationality} band. The band makes ${obj.genre} and their greatest hit is ${obj.greatestHit}.`)
}
console.log(detailDispalyer(band));
let theBand = {
    name: “Nightwish”,
    greatest_hit: “The Phantom of the Opera”,
    nationality: “Finland”,
    genre: “Goth metal”,
}
const displayBand = ({name, nationality, genre, greatest_hit} = theBand) => {
console.log(name, “is a band from”,nationality,“.” , “The musician sings”, genre,“,”, “and their greates hit is”, greatest_hit);
}
displayBand( );*/
// #### 4. We have an object:
// ```javascript
// let user = {
//   name: "John",
//   years: 30,
// };
// ```
// Write the destructuring assignment that reads:
// `name` property into the variable name.
// `years` property into the variable age.
// `isAdmin` property into the variable isAdmin (false, if no such property)
// Here’s an example of the values after your assignment:
// ```javascript
// let user = { name: "John", years: 30 };
// // your code to the left side:
// // ... = user
/*
let user = { name: "John", years: 30 };
let {name, years: age, isAdmin = false} = user;
console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false */
// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false
// ```
// #### 5. The maximal salary
// There is a salaries object:
// ```javascript
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// ```
// Create the function `topSalary(salaries)` that returns the name of the top-paid person.
// If `salaries` is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.
let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
let {John: x, Pete: y, mary: z} = salaries;
  function topSalary({john = x, pete = y, mary = z}){
      if(x > y && x > z)return x;
      if(y > x && y > z) return y;
      else return z
  }
  console.log(topSalary(x, y, z))
/*
  function topSalary(obj){
      if (obj == {}) return null;
      for (let [key, value] of Object.entries(obj)) {
        alert(`${key}:${value}`);
      }
  }*/
4:08
deep comparison
waell and karl
function deepEqual(a, b) {
    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (Object.keys(a).length != Object.keys(b).length) return false;
      for (var key in a) {
          if (!deepEqual(a[key], b[key])) return false;}
      return true;
    } else return a === b
  }
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(typeof({here: {is: "an"}, object: 2}))
4:08
deep clone
waell and karl
let obj = {here: {is: "an"}, object: 2};
function deepClone(original) {
    let clone = JSON.parse(JSON.stringify(original));
    return clone;
}
 // console.log(deepClone(obj));
 let clone = deepClone(obj); // this assignment is to assign the clone in a global scope.
 console.log("this is a clone")
 console.log(clone);
 console.log(`this is a clone ${clone}`); //? Why it didn't work ... because that doesn't work with objects
 console.log("this is a clone " , clone )