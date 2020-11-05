// Let's recap Objects!

/* 

Introduction to Objects:

- In order to get familiar with OOP (object-oriented programming), 
it's crucial to get familiar with objects

- Objects are primary of JS, as almost everything in JS is an object
, this includes functions, arrays, regular expressions, dates, 
booleans, and strings

- Objects, just in real life, are found everywhere. They have a set of propoerties
that distinguish them. 

- You can replicate, add, delete or morph these propoerties to change 
your object

- Before assigning objects properties and methds, think about what you
want to achieve with your objets

*/


/* 
Let's look at an example:
- Assume that we have 3 shapes: square, rectangle, and a circle
Now let's try to calculate the areas of all 3 shapes

- So far, the common approach was to write individual functions for
the calculation of areas (or any math)

- however, JS allows you to do this with objects. For this, we will convert
our code to object-oriented paradigm.
- This means, we will create objects for each shape: square, rectabgle, and a circle

- Here, each shape object will have its own set of properties which includes:
    - data values
    - functions

- What values would we need to calculate the areas of the 3 shapes?

Square: length of a side
Rectangle: width, and the length 
Circle: radius

- All these values (length, width, radius) will be encapsulated the object
for the particular shape and they will be represented by properties of the
object.

For example:

rectangle: 
    width
    length
    area()

*/

/* 
Just like other variables in JS, an object too has to be defined and 
initilized in order to be created.

An object literal can be created:
    1) using figure brackets {....} in the declaration
    2) by using the NEW keyword
    3) using create() method, based on an existing object

*/

//(1) Figure Brackets

//name the object, and declare the object literal

var objectName1 = {

    //define propoerties
    propertyName1 : propertyValue1,
    propertyName2 : propertyValue2,
    functionName(),
}

/* 
A propoerty value can be anything, e.g:
    - string
    - integer
    - boolean
    - object

The function declared inside objects (e.g. functionName()) is called a method

*/

        //example
    
var employee1 = {
    //define the properties here
    // set data values
    //these below are the properties of the object
    name: 'Taimur Khan',
    age: 26,
    designation: 'Trainer',
    //function to display name of the employee
    //these below are the methods of the object
    displayName(){
        console.log("Name is Taimur")
    }
}

employee.displayName();
console.log("Age is: ", employee.age);
console.log("Designation is: ", employee.designation);


/* 
You can declare objects within objects, but you don't have to decalre them 
as variables inside the object literal

*/
var employee2 = {
    //define the properties here
    // set data values
    //these below are the properties of the object
    name: {// this is a nested object
        firstName : 'Taimur', 
        lastName : 'Khan'
    },
    age: 26,
    designation: 'Trainer',
    //function to display name of the employee
    //these below are the methods of the object
    displayName(){
        console.log("Name is Taimur")
    }
}

//employee.displayName();
console.log("Age is: ", employee2.age);
console.log("Designation is: ", employee2.designation);
console.log("Last name is: ", employee2.name.lastName);



// (2) NEW Operator

/* 
The NEW operator allows you to create and assign objects in variables
however, the objects created using NEW operator are emtpty
*/

var objectName2 = new Object(); // JS is assigning a new object to the "objectName variable"

var employee3 = new Object();
/* 
Think of it as:
var employee3 = {

}
*/
//define the properties here
    // set data values
    //these below are the properties of the object
employee3.name =  'Taimur';
employee3.age = 26;
employee3.designation = 'Trainer';

//function to display name of the employee
    //these below are the methods of the object

employee3.display = function(){
    console.log("Name is Taimur");

}


console.log("Age is: ", employee3.age);
console.log("Designation is: ", employee3.designation);
employee3.display();


// (3) The create() method

    //the create method allows the creation of a new object based on an existing one 

var objectnName3 = Object.create(objectName1);

/* 
objectName3 = {

     propertyName1 : propertyValue1,
    propertyName2 : propertyValue2,
    functionName(),
}
*/

/* 
IMPORTANT NOTE: The new object (i.e. objectName3) will have the same propoerties as
propoerties as the object on which it was based.
*/

var assistantManager = {
    //define the properties here
    // set data values
    //these below are the properties of the object
    name: 'Taimur Khan',
    age: 26,
    designation: 'AM',
    //function to display name of the employee
    //these below are the methods of the object
    displayName(){
        console.log("Name is Taimur")
    }
}

//"Copy-Paste" of the assistantManager object 
var manager = Object.create(assistantManager);


console.log("Age is: ", assistantManager.age);
console.log("Designation is: ", assistantManager.designation);
assistantManager.display();

console.log("Age is: ", manager.age);
console.log("Designation is: ", manager.designation);
manager.display();


/* 
The assistantManger object is seperate from the manager object
*/


/* 
Accessing Object Properties 
*/

    //1. Dot Operator

        var shape1 = {
            name: 'square',
            sides: 4
        }

        console.log("Name is: ", shape.name);
        console.log("Numner of sides are: ", shape.sides);

        /*
        - The dot operator, as you can see above in <objectname>.<propoerty or method>,
        is one way of accessing your object's props and methods 

        - To access the props or methods of a nested object, you need to add more dot
        operators.
        */

        var shape2 = {
            name: 'square',
            dimensions: {
                length: 4,
                width: 4
            }, 
        }
        console.log(shape2.dimensions.length);//log 4



    //2.  Using Square bracket - Bracket Notation

        /*
        Another way to access you object's props and methods
        is by using square brackets [], with the name of the prop given as a
        string value within the brackets
        */
    
            //example for non-nested objects
            console.log("Name is: ", shape2['name']);
            console.log("Numner of sides are: ", shape1['sides']);

            //example for nested objects
            console.log("Name is: ", shape2['dimensions']['length']);
            console.log("Numner of sides are: ", shape1['sides']);
        
        /* 
        The bracket notation is also allowing you to access propoerties
        with variables
        */


        const variable = 'cookie';

    
        const snack = {
            cookie : 'chocolate chip cookie',
        }


    // 3. Key difference between dot and bracket notatons

        // with DOT notation
        console.log(snack.cookie);

        // with Bracket notation
        snack[variable]; // could also be written as snack['cookie']

    