// Hi FbW3: Here we will look a bit further into variables

// Hoisting 
        x = 5;

        console.log(x);

        x = 7;

        console.log(x);

        var x;

//Changing Variables

        let  a = 5;

        a = "test";

        let b = 65;


        console.log(a + b); // returns 65

        /* Rules of re-assignment    
        1) You can use any operator
        2) You can reassign variables to variables
        3) You can reassing the variables anywhere in your code/script
        */
        // Reassigning a variable multiple times in your code is not the best practice

  
// Type Coercion 
    // Two types of type coercion: 
    // 1) implicit: https://dorey.github.io/JavaScript-Equality-Table/
    // 2) explicit: There 3 types of coversion in JS
                // - to String
                // - to Boolean
                // - to Number

    // changing to String value
        let u = 10; //--> variable declarartion
        u = String(u); //--> type coercion, changing the number value to a string value
        console.log(u);
        typeof(u);

        const str1 = 'Hello';
        const str2 = 'World';
        
        console.log(str1.concat(' ', str2));
        // expected output: "Hello World"
        
        console.log(str2.concat(', ', str1));
        // expected output: "World, Hello"
    
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
        //https://stackoverflow.com/questions/34465804/what-is-the-difference-of-operator-and-concat-method-in-javascript



    //Changing to Number value
        let u = "10"; //--> variable declarartion
        u = Number(u); //--> type coercion, changing the number value to a string value
        console.log(u);
        typeof(u);

        /* 
        Implicit conversion is tricky, because it's triggered in more cases:
        - comparison operators 
        - bitwise operators
        - arithmetic operators 
        */
    
        //Changing Boolean  --> Boolean()
        //there will be implicit type coercion with || && !
        // Boolean type coercion is always linked to a logic
        //Come back to this when introducing logic

        Boolean(2)          // explicit
        if (2) { ... }      // implicit due to logical context
        !!2                 // implicit due to logical operator
        2 || 'hello'        // implicit due to logical operator

        Boolean('')           // false
        Boolean(0)            // false     
        Boolean(-0)           // false
        Boolean(NaN)          // false
        Boolean(null)         // false
        Boolean(undefined)    // false
        Boolean(false)        // false

        // When a value is intrisincly False, you cannot convert it to true

        Boolean({})             // true
        Boolean([])             // true
        Boolean(Symbol())       // true
        !!Symbol()              // true
        Boolean(function() {})  // true