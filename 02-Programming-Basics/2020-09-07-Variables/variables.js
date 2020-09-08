// Let's have a look at Variables in JS


// Creating and naming variables
        // You cannot have two variable with the same name
        let;
        // we're stick let till we dive into functions 

        //or

        var; 

        let whateverYouWant;
        let whatever_you_want;

        /* 
        Two ways to name a variable:
        1) Camel case --> xxxYyyAaa  / yourNewVariable
        2) Snake case --> xxx_yyy_aaa
        */

        let a = 1;
        let b = 2;

        let c = (a+b);
        console.log(c);

        /* A variable name must follow these rules: (Lexical Grammar)

        - Variable names must begin with a letter, $, or _
        - Variable names can contain letters, numbers, _, and $
        - Variables are case sensitive - number is different from Number
        - Reserved JavaScript keywords (such as let and var) cannot be used as variable names: https://www.w3schools.com/js/js_reserved.asp */

    let x = 17;
    let XYZ = 20;
    let $ = 40;
    let _ = 30;
    let $_$_$ = 55;
    let Ab90$_a789 = 57;

// Assigning values to variables

        let x = 17; // assigning  a number value to a variable (x)
        let y = "this was a warm day" // assigning a string to a variable (y)
        let z = true; // assigning a boolean to a variable (z)

        let rand1 = "";
        let rand2 = "some value";

        console.log(rand1+rand2); // returns "some value"

    // Reassigning a variable
        rand1 = "this is where the sentence should begin:"  // Do not repeat 'let' when reassigning

        console.log(rand1+rand2); // returns "this is where the sentence should begin:some value"
                
        /* What is the type of this variable?

        let test = 0; */

// Working with variables 

    // console.log()
        let bool = true;
        let string = 'abc';

        console.log (bool);
        console.log (string);

     // Reassigning a variable
     rand1 = "this is where the sentence should begin:"


// Null & Undefined

    //undefined
        //let variable;
        //console.log(variable);

        // undefined is a special variable typ e used to indicate that something is missing (some value)

        let thisOne = undefined;

        thisOne = "some value";
    
    //null

        let someVariable = null ;
        console.log(someVariable);

        let abc = null; // when you want to declare a variable and keep it empty till some point, assign the null value to it

        let test;
        let testCopy = test;
        testCopy = 'def';
        console.log(testCopy);

/* A) def
B) null
C) undefined
D) error */

// Q: What is the best synonym for null?

/* 
A) empty --> correct
B) missing
C) undefined 
*/
a = 0;
typeof(a)