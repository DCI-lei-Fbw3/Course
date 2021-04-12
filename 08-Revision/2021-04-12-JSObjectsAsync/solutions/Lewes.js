/*
**1. Object Person.**
Create an object named person. Loop through the object and print both the property and value of the object. 
*/

let person = {
    'firstName': 'Lewes',
    'lastName': 'Walton'
}

// const personKeys = Object.keys(person)
// const personValue = Object.values(person)
//const personFullName = Object.entries(person)

for (const props in person) {
    console.log(props)
    console.log(person[props])
}

// console.log(personFullName)

/*
**2. Get Values.**
Create a function that returns an array of all **values** of an object's properties.
* Examples:
```javascript
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```
* Expected output:
```javascript
["tea", "coffee", "milk"]
*/

function allValues(e) {
    return Object.values(e)
}

console.log(allValues(person))

/*
**3. Add A Method.**
Create an object and add a method to that object which prints the values of the objects in a string. 
* Example
```javascript
let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: Paris
}
```
* Example of Expected Output 
"Michael Smith is a 20 year old driver in Paris".
*/

let personTwo = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: 'Paris',

    pool() {
        return this.firstName + ' ' + this.lastName + ' is a ' + this.age + ' year old ' + this.job + ' in ' + this.city
    }
}

console.log(personTwo.pool())

// const p2Values = Object.values(personTwo)
// console.log(personTwo.firstName + ' ' + personTwo.lastName + ' is a ' + personTwo.age + ' year old ' + personTwo.job + ' in ' + personTwo.city)



/*
## Set 2

**1. Convert keys and values into an array.** 
Create a function that converts an object into an array of keys and values. 
* Examples:
```javascript
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
*/

let objectToArray = ({
    A: 1,
    B: 2,
    C: 3
})

const blah = Object.entries(objectToArray)
console.log(blah)

function blah1(a) {
    return Object.entries(a)
}
console.log(blah1(objectToArray))


/*
**2. List Properties.**
Create a function that returns an array of **properties** of a javascript object. 
* Example
```javascript
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}

* Expected output: 
```javascript
["name", "class", "course"]
*/

let student = {
    name: "Mike",
    class: "4A",
    course: "English"
}

const studentKeys = Object.keys(student)
console.log(studentKeys);

/*
**3. Merge.**
Create a function that takes two objects as its parameters and merges them together into a new object. 
* Example
```javascript
let first = {firstName: "John"}
let last = {lastName: "Smith"}
```
* Expected output:
```javascript
{firstName: "John", lastName: "Smith"}
*/

let first = { firstName: "John" }
let last = { lastName: "Smith" }

function full(f, l) {
    return { ...f, ...l }
}

console.log(full(first, last))


/*
**4. Switch Keys and Values.**
Create a function to get a copy of an object. The copy must switch the keys and values.
* Example: 
```javascript
let person = {
  name: "John", 
  job: "teacher"
}
```
* Expected Output: 
```javascript
{"John": name, "teacher": job} 
*/

let personThree = {
    name: "John",
    job: "teacher"
}

let reverseValues = []

function swap(o) {
    const copy = Object.assign(o)
    let arr = Object.entries(copy).map(a => a.reverse())

    console.log(arr)
}

swap(personThree)



/*
**5. Return Keys and Values.**
Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

* Examples:
```javascript
{ a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
{key: true} ➞ [["key"], [true]]
*/

let ex = { a: 1, b: 2, c: 3 }

function splitter(obj) {
    let a = Object.keys(obj)
    let b = Object.values(obj)
    console.log([a, b])
}

splitter(ex)