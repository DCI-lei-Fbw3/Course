// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

console.warn('*****************#### 1. Array Destructuring************');
let fruit, vegetable,food;
[fruit, vegetable, ...food] = ['banana','cucumber','bread','cakes', 'pizza'];
console.log(fruit);
console.log(vegetable);
console.log(food);
/* const fruit = [];
let ["banana"] = fruit;
console.log(fruit); */
/* let fruit = ['banana','cucumber','bread','cakes','pizza'];
let vegetable = ['bread','cakes','pizza'];
let food = ['bread','cakes','pizza']; */

// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values.



console.warn('*****************2.Object Destructuring************');
    let object1 = {
        fran: 'witch',
        nom : 'Tamouya',
        prenom:'Hermann',
    }
    const {fran : a ,nom : b ,prenom : c} = object1;
    console.log(a);
    console.log(b);
    console.log(c);


// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to display all of the band/musician's data. 
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

console.warn('*****************3. Parameters: Object Destructuring ************');

let object2 = {
    name : 'Hermann',
    greatest:'Us',
    nationality: 'Cameroon',
    genre:'Rap'
}

function music({name,greatest,nationality,genre} ){
    return (`${name} is a ${nationality} singer an pianist. The musician sings ${genre} an their greatest hit is ${greatest}`);
   
}
console.log(music(object2))

// #### 4. We have an object:

// ```javascript
// let user = {
//   name: "John",
//   years: 30
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

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false
// ```

console.warn('*****************4. We have an object************');

let user = {
      name: "John",
       years: 30
     };
const {name,years:age,isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);
console.log(user);

// #### 5. The maximal salary

// There is a salaries object:

// ```javascript
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// ```

// Create the function `topSalary(salaries)` that returns the name of the top-paid person.

// If `salaries` is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

console.warn('*****************5. The maximal salary************');


let salaries = {
       "John": 100,
       "Pete": 300,
       "Mary": 800
     };
function topSalaries(object){
    let arrObject = Object.entries(object);
    let result = 0;
     let topSalarie;
    for(let [key,value] of arrObject){
     if(result < value){
         result = value;
         topSalarie = key
     }
     
    }
    return topSalarie

}
console.log(topSalaries(salaries));

