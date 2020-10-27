// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.
const arr = ["banana", "cucumber", "bread", "cakes", "pizza"];
const [fruit, vegetable, ...food] = arr;

console.log(fruit);
console.log(vegetable);
console.log(...food);
console.log(food) //this will put the element into an array, but not line 11.

// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values.
let halloWeen = {
    Fran: "the Green Witch",
    Tom: "Freddy Krüger",
    Jenny: "Vampirella",
    Chris: "Michael Myers", 
    Bobby: ["Alien", "Predator"],       
}

const getValue = (obj) => {
    let list = [];
    for (let [a, b] of Object.entries(obj)) { //assign the key as a and value as b using destructuring for loop
        list.push(b);
    }
    console.log(list);
} 
getValue(halloWeen);

// for (let x in halloWeen) {
//     console.log(`${x}: ${halloWeen[x]}`);
}
// #### 3. Parameters: Object Destructuring
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc.
// * Then, create a function to display all of the band/musician's data.
// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```

let theBand = {
    name: "Nightwish",
    greatest_hit: "The Phantom of the Opera",
    nationality: "Finland",
    genre: "Goth metal", 
}

const displayBand = ({name, nationality, genre, greatest_hit} = theBand) => {
console.log(name, "is a band from",nationality,"." , "The musician sings", genre,",", "and their greates hit is", greatest_hit);
}

displayBand();

//non-destructuring way
// const displayBandInfo = (obj) => {
//     let arr=[];
//     for (let x in obj){
//         arr.push(obj[x]);
//     }
//     console.log(`${arr[0]} is a band from ${arr[2]}. The band sings ${arr[3]} and their greatest hit is ${arr[1]}`);
// } 

// displayBandInfo(theBand);

//task1 taken from javascript.into at https://javascript.info/destructuring-assignment
let user = {
    name: "John",
    years: 30,
};

let {
    name,
    years: age, //age is assigned as a valuable to hold an existing value in the reference object, which is 30,
    isAdmin = false, //this is the "default value" for isAdmin. It did not exist in the reference object therefore an "=" sign is needed here
} = user;

console.log(name);
console.log(age);

//task2: create a function topSalary(salaries) that returns the name of the top-paid person.

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary =(obj)=> {
    let maxPay=0;
    let theName=null;
    for (let [person, payment] of Object.entries(obj)) {
        if (maxPay<payment) {
             maxPay = payment;
             theName = person;
        }         
    }
    return theName;     
};     

console.log(topSalary(salaries));









