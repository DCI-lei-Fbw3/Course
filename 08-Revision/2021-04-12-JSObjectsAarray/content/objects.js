//Welcome Fbw3!
//Topic: Objects - Converting Objects to Array and Array to Objects
// Reference:

// Brief re-intro to objects

    /* 
    - Objects in JS have properties and methods. 
    - Properties: key-value pairs
    - Methods: Functions 
    - Objects are always within curly braces "{}"
    - Objects are a unversal programming concept, and the same concepts of properties and methods applies to all programming languages out there. 

    */

    //Object to Array

    /* 
    - To convert an object to an array you can use one of the three methods:
    1) Object.keys()
    2) Object.values()
    3) Object.entries()

    Note: Object.keys() method has only been avaliable since ES5, since ECMAcript 2017 you the other two methods.
    
    Suppose that you have a person object:
    */

    const person = {
        firstName: 'Taimur',
        lastName: 'Khan', 
    };

        //Object.keys()
        //To convert the property's names of the PERSON object to an array, you can use the Object.keys() method:

    const propertyNames = Object.keys(person);
    console.log(propertyNames) //Output: ['firstName', 'lastName']

        //Object.values()
        //Just the previous method, you can also access the values of your objects. 

    const propertyValues = Object.values(person); 
    console.log(propertyValues); // //Output: ['Taimur', 'Khan']

        //Object.entries()
        // This method converts the proporties of an object to an array. 

    const entries = Object.entries(person);
    console.log(entries); // //Output: [['firstName', 'Taimur'], ['lastName', 'Khan']]

    //Array to Objects

    /* 
    - Sometimes, you might have data in a list/array format. You might want to convert the data to an Object bfore moving further.
    - For this, ECMA Script 6 introduces very easy method, called Object.assign.
    - Object.assign() method is used to copy the values of all properties from one or more source object to a target object. This method will return the target object.
    */

    //Object.assign()

    const source = ['a', 'b', 'c'];
    const target = {};
    const list = Object.assign(target, source);

    console.log(list);