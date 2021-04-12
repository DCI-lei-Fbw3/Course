// set 1




const getObjectValues = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  };

  const values = Object.values(getObjectValues);
  console.log('2 =>',values);


  let person = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: 'Paris',
  }

  const newPerson = Object.values(person).join(' ');
  console.log('3 =>',newPerson);


// set 2

// 1
const objectToArray = {
    A: 1,
    B: 2,
    C: 3
  };

const objectToArray2 = {
    cats: 1,
    dogs: 2, 
    turtles: 4
  }

const newArray = Object.entries(objectToArray);
console.log('1 =>',newArray);

convertToArray = (obj) => {
    return Object.entries(obj)
}

console.log(convertToArray(objectToArray));
console.log(convertToArray(objectToArray2));

// 2

let student = {
    name: "Mike", 
    class: "4A",
    course: "English"
  };

const arrayOfProperties = Object.keys(student);
console.log('2 =>', arrayOfProperties);


// 3

let first = {firstName: "John"}
let last = {lastName: "Smith"}

const mergeObj = Object.assign(first, last);
console.log('3 =>',mergeObj);
console.log(" only 'first' will be reassigned because it's target");

// 4

let person2 = {
    name: "John", 
    job: "teacher"
  };

  const newPerson2 = Object.assign({}, ...Object.entries(person).map(([a,b]) => ({ [b]: a })));
  console.log('4 =>',person2);


// 5 

