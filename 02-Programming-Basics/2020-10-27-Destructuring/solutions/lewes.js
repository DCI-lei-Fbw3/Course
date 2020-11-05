/*
1. Array Destructuring
* Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.
*/

// var fruit = "Banana";
// var vegetable = "Cucumber";
// var food = ["Bread", "Cakes", "Pizza"];

var someFoods = ["Banana", "Cucumber", "Bread", "Cakes", "Pizza"];

let [fruit] = someFoods;
let [, vegetable] = someFoods;
let [, , ...food] = someFoods;

console.log("Answer of Number 1");
console.log(fruit);
console.log(vegetable);
console.log(food);


const [F, V, ...B] = someFoods;
console.log(F, V, B);


/*
2.Object Destructuring
* Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values.
*/

var costume = {
    fran: "Witch",
    wendy: "Cat",
}

let { fran: w, wendy: c } = costume; // { fran: "Witch", fran: "Cat" } = costume;

console.log("Answer of Number 2");
console.log(w);
console.log(c);


/*
3. Parameters: Object Destructuring 
* Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
* Then, create a function to display all of the band/musician's data. 
* Example
```javascript
`Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
*/

let music = {
    nameOfBand: "Michel Jackson",
    greatestHit: "Thriller",
    nationality: "American",
    genre: "Pop"
}

let { nameOfBand: singerName, greatestHit: hit, nationality: nat, genre: gen } = music;
//console.log(name);

function details() {
    return singerName + " is a " + nat + " singer/songwriter. The music " + singerName + " sang was " + gen + " and his greatest hit is " + hit + "."
}

console.log("Answer of Number 3");
console.log(details());


/*
4. We have an object:

```javascript
let user = {
  name: "John",
  years: 30
};
```

Write the destructuring assignment that reads:

`name` property into the variable name.
`years` property into the variable age.
`isAdmin` property into the variable isAdmin (false, if no such property)

Here’s an example of the values after your assignment:

```javascript
let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
*/


let user = {
    name: "John",
    years: 30
};

let { name: name, years: age, isAdmin } = user;

console.log("Answer of Number 4");
console.log(name);
console.log(age);
console.log(user.hasOwnProperty(isAdmin));
//console.log(!!isAdmin);                   //<-- can be done like so too. !! is a short hand to test if something exists or not

console.log(user);


/*
5. The maximal salary

There is a salaries object:

```javascript
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
```

Create the function `topSalary(salaries)` that returns the name of the top-paid person.

If `salaries` is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

let salaries = {
    "John": 1000,
    "Pete": 3500,
    "Mary": 250,
    "Sammy": 3500
};


function topSalary(salaries) {
    if (salaries == 0 || salaries == "") {
        return null
    }
    //
    for (const [key, value] of Object.entries(salaries).sort((a, b) => a[1] - b[1]).reverse()) {
        //console.log(`${key}: ${value}`);   // <-- prints off all key pairs
        return "The topped paid person is " + (`${key}: ${value}`);

    }

}

console.log("Answer of Number 5");
console.log(topSalary(salaries));
console.log(topSalary(""));

/*
- Above, the 'const [key, value] of Object.entries()' along with the console.log in the for() loop prints the object to the terminal.accordion
- The '.sort((a, b) => a[1] - b[1])' will sort the values numerically.
- '.reverse()' reverses the order.
- And if we 'return' we will only get one result. (this syntax in required in the return statement - (`${key}: ${value}`))
*/