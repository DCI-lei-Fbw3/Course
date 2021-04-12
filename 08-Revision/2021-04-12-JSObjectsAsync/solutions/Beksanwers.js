// **1. Object Person.**
// Create an object named person. Loop through the object and print both the property and value of the object. 

var person = {
    name: "Bek",
    lastname: "Abdullaev",
    age: 29
}


// function entries(person) {
//     var entries = {};

//     for (let i = 0; i >= person.length; i++){
//         return entries.push(person[i])
//     }
// return entries}

console.log(`Answer #1: `,  Object.entries(person))
// console.log(entries(person))


// ===================


// **2. Get Values.** 
// Create a function that returns an array of all **values** of an object's properties. 
// * Examples:
// ```javascript
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// ```
// * Expected output: 
// ```javascript
// ["tea", "coffee", "milk"] 
// ```
var values = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
}
function valueArray(obj) {
    return Object.values(obj)
}

console.log("Answer #2: ", valueArray(values))


// ==============


// **3. Add A Method.**
// Create an object and add a method to that object which prints the values of the objects in a string. 
// * Example
// ```javascript
let french = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",
  sentence(){
      console.log("Answer #3: " + this.firstName + " " + this.lastName + " is a " + this.age + " years old " + this.job + " in " + this.city)
  }
}
// ```
// * Example of Expected Output 
// "Michael Smith is a 20 year old driver in Paris".
french.sentence()


// ===============

// ## Set 2

// **1. Convert keys and values into an array.** 
// Create a function that converts an object into an array of keys and values. 
// * Examples:
// ```javascript
// objectToArray({
//   A: 1,
//   B: 2,
//   C: 3
// }) 
// ```
// * Expected output: 
// ```javascript
// [["A", 1], ["B", 2], ["C", 3]]
// ```

// ```javascript
// objectToArray({
//   cats: 1,
//   dogs: 2, 
//   turtles: 4
// }) 
// ```
// * Expected output: 
// ```javascript
// [["cats", 1], ["dogs", 2], ["turtles", 4]] 

var example = {
      A: 1,
      B: 2,
      C: 3
    }
function entriesToArray(obj) {
    return Object.entries(obj)
}

console.log("Set 2: Answer #1: " , entriesToArray(example))

// ============ 

// **2. List Properties.**
// Create a function that returns an array of **properties** of a javascript object. 
// * Example
// ```javascript
let student = {
  name: "Mike", 
  class: "4A", 
  course: "English"
}
// ```
// * Expected output: 
// ```javascript
// ["name", "class", "course"]
// ```

function keysOfObj(obj) {
    return Object.keys(obj)
}

console.log("Set 2: Answer #2: ", keysOfObj(student))


// ===============

// **3. Merge.**
// Create a function that takes two objects as its parameters and merges them together into a new object. 
// * Example
// ```javascript
let first = {firstName: "John"}
let last = {lastName: "Smith"}
// ```
// * Expected output:
// ```javascript
// {firstName: "John", lastName: "Smith"}
// ```
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

function merGer(obj1, obj2) {
    return newObj = Object.assign(obj1, obj2) 
}

console.log("Set 2: Answer #3: ", merGer(first,last))


// =================

// **4. Switch Keys and Values.**
// Create a function to get a copy of an object. The copy must switch the keys and values.
// * Example: 
// ```javascript
let personality = {
  name: "John", 
  job: "teacher"
}
// ```
// * Expected Output: 
// ```javascript
// {"John": name, "teacher": job} 
// ```

function SwitchKeys(obj){
    // return newObj = Object.fromEntries(Object.entries(obj).map(a=> a.reverse())) ==> googled
    return newObj = Object.assign(Object.entries(obj).map(a => a.reverse()))
}

console.log("Set 2: Answer #4: ", SwitchKeys(personality))

// ===================

// **5. Return Keys and Values.**
// Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

// * Examples:
// ```javascript
// { a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
// {key: true} ➞ [["key"], [true]]

var lastObj = { a: 1, b: 2, c: 3 };

function nestedArray(obj) {
    return newArray = Object.entries(obj)
}

console.log("Set 2: Answer #5: ", nestedArray(lastObj))