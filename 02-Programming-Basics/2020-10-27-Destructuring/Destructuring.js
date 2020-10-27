// Welcome FBW3! 
// Topic: Destructuring in Javascript 

/* 
Resources: https://javascript.info/destructuring-assignment#smart-function-parameters

*/

//Intro to Destructuring

    // With normal assignment, you extract one piece of data at a time - e.g.:

    const arr = ['a', 'b' ,'c'];
    const x = arr[0];
    const y = arr[1];

    /* 
    - With destructuring, the idea is that you can extract multiple pieces of data at the same time via
    patterns in locations that receive data.
    - The left-hand side of the '=' operator in the example above is one such location.
    - In the following code, the square brackets in line 19 are a destructuring pattern:
    */

    const [x, y] = arr; // this code here is does the same as the previous code

// Constructing vs. extracting

    /* 
    In order to understand what destructuring is, consider that JS has two kinds of operations
    that are opposites:
        - You can CONSTRUCT compound data, for example, by setting propoerties and via object literals.
        - You can EXTRACT data out of compound data, for example, by getting propoerties 
    */

    //Constructing data looks as follows:

    //Constructing: one property at a time
    const person = {}; 
    person.first = 'Taimur';
    //console.log(person2.last) --> this will not print since it is not aviable in the object yet
    person.last = 'Khan';
    person.age = '26';

    //Constructing: multiple properties
    const person2 = {first: 'Taimur',last: 'Khan', age: '26'};
    //console.log(person2.last) --> This is will print everything already

    //Extracting data looks as follows:
    
    //Extracting: one propoerty at a time
    const fn = person.first;
    const ln = person.last;

    //Extracting: multiple properties at a time --> where destructuring come in handy
    const {first: fn2, last: ln2} = person2;
    
    const {first: fn2, last: ln2} = person2;

    /* 
    On the left-hand side of the '=' above:
    - I have created a Pattern
    - This pattern is saying:
        1. assign the 'first' property to a new variable called fn2, and do the same for "last" and ln2
    - On the right-hand side of the '=' operator above, we set the object that is to be DESTRUCTURED
    - Variables holding destructured data can be assigned new values (or cannot be reassigned), but this 
    will not change the value in the original object. 
    */

    console.log(fn2 + '' + ln2);


    /* 
    - The operation in line 52 is new: we declare two variables fn2 and ln2 and initialize them via
    destructuring (multivalue extraction)
    - The following part of line 52 is a destructuring pattern:
    {first: fn2, last: ln2} --> this can be seen as {key: variableName, key: variableName}

    Destructuring patterns are syntactically similar to the literals that are used for 
    multivalue construction. but they appear where data is recieved (e.g., at the left-hand side of
    assignements), not where data is created (e.g. at the right-hand side of assignments)

    */
    

    /* Where can we destructure data?
    Destructuring patterns can be used at "data sink locations" such as:

        - Variable declaration 
            const [a] = ['x'];

            let [b] = ['y'];
        
        - Assignments
        let b; // varibale ahs been declared, but not assigned a valued
        [b] = ['y']; //variable has been assigned destructered data

        - Parameter definitions
        const f = ({x}) => x ;
        console.log(f({'a'}))

    */


//Destructuring Object

    /* 
    Object destructuring let lets you extract multipe values of propoerties via patterns that look
    like object literals.
    */

    const book = {
        title: "My Article",
        rating: 5,
        author: {
        name: "taimur",
        lastName: "khan"
        }
    }


    let {title: t, rating: r} = book;

    /* 
    - You can think of the patter as a transüarent sheet that you place over the data: the pattern
    key 'title' has a match in the data. Therefore, the data value 'My Article' is assigned to the
    pattern variable t.
    - You can also object-destructure primitive values
    */

    const {length: len} = 'abc';
    console.log("The length of the string is:" + len); // prints --> 3

    // And you object-destructure Arrays

    const {0: x, 2: y} = ['a', 'b', 'c']; //Why does this work? Becuase Array indicies are also properties
    console.log(x, y); // prints --> a, c

    //You can destructure objects to any depth

    var {title: t, author: {name: fn}} = book;


    // The Spread Operator

    /* 
    - The spread operator is written with thre dotts --> ...
    - The spread was introdced in ES6
    - The spread allows you to exapand an iterable object into a list of its individual elements
    */

    const {title:t, ...rest} = book; //this is destructuring the props of the book object into indivdual pattern variables

    // You can access the pattern variables by just using the name of the property as a variable

    console.log(rest);



// Array-destructuring 

    /* 
    - Array-destructuring lets you extract multiple values of Array elements via patterns that look like
    array literals.
    - You can destructure arrays in the same way as objects, except you are working with array elements and not 
    object properties

    */

    const arr = ['a', 'b','c','d', 'e'];

    const [x,y] = arr;
     
    /* 
    - The pattern variables x and y are hold values for elemens in the indices 0, 1
    - You can skip elements by mentioning emptyy "holes" inside Array patterns
    */

    const [u,w,,,v] = arr; //--> by leaving the empty space int he beggining of the Array pattern, JS skips destructuring the corresponding index and its element

    /*
    The third element of the Array pattern in line 173 is a "hole", which is why the Array elements
    at index 2 and 3 are ignored.
    */

    /* 
    In Array literals, you can have spread elements. In Array pattersm you can use the spread operator (which comes last)
    */

    const [x,y, ...remaining] = arr;

    console.log(x); //prints --> 'a' 
    console.log(y);//prints --> 'b' 
    console.log(remaining); //prints --> ['c', 'd']
    