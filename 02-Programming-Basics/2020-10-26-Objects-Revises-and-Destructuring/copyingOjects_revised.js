// Welcome FbW3! 
//Topic: Copying Objects: Shallow vs. Deep copying

/* 
Intro:
- As you all know, the assignment ("=") operator does not create a copy of an object
For example:
*/

    let test = {
        a: 1,
        b: 2,
        c: {
            x: 7,
            y: 5,
        },
    };

    let dupObj = test; //does this crete a new object, which looks exactly like "obj"?

    test.a = 100;
    console.log(dupObj.a);
    // Result
    //a = 100

    /* 
    Defining the problem:
    - The problem is that the duplicate object, in this case, is not creating a new copy of the 
    test object, but just refering to it. 
    - Therefore, the duplicate object will also change when you change the test object
    */

// The "choppy" way

    function copy (mainObj){
        let objCopy = {};
        let prop;

        for (prop in mainObj){
            objCopy[prop] = mainObj[prop]
        }
        return objCopy
    }

    console.log(copy(test));

    test.c = {
        x: 700,
        y: 500,
    }
    console.log(copy(test));

    // THIS DOES NOT CREATE A DEEP COPY

    /* 
    How do we control the refference between the copy object and the original object?
    */

    /* 
    There are two ways:
    1) Shallow copying
    2) Deep copying
    */

//Shallow Copying - Objects

        /* 
        An object is said ot the shallow copied when the source top-level props are copied without
        any reference and there exists a source prop whose value is an object and is copied as a reference.

        A shallow copy will duplicate the top-löevel propoerties, but the nested object is shared between
        the original(source) and the copy (target)
        */

        //Object.assign() method

        let test2 = {
            a: 1,
            b: 2,
            
        }

        let dupObj = Object.assign({}, test2);
        console.log(dupObj);
        // Result --> {a: 1, b: 2}

        /* 
        It all works, but let's check if immutability exists
        */

        dupObj.b = 89;
        console.log(dupObj); // result --> {a:1, b: 89}
        console.log(test2); // result --> {a:1, b:2}

        /* 
        Object.assign() has an issue

        */

        let test3 = {
            a: 1,
            b: {
                c: 3
            },
            
        }

        let dupObj = Object.assign({}, test3);
        console.log(dupObj); // {a: 1, b: {c: 3}}
        
        test3.a = 10;
        console.log(test3);// {a: 10, b: {c: 3}}
        console.log(dupObj);// {a: 1, b: {c: 3}}


        dupObj.a = 20;
        console.log(test3); // {a: 10, b: {c: 3}}
        console.log(dupObj);// {a: 20, b: {c: 3}}


        dupObj.b.c = 30;
        console.log(test3); // {a: 10, b: {c: 30}}
        console.log(dupObj); // {a: 20, b: {c: 30}}

        /* 
        The reason why the propoerty "b" is changing for both test3 and dupObj is becuase
        both objects share the same reference.
        - Meaning, that by using the OBJECT.assing() method, you do not create a reference
        for "inner" objects.
        */

// Deep Copying - Objects

        /* 
        - A deep copy will duplicate every object in encounters. 
        - The copy and the original will not share anthing (no reference).
        - And this fixes the problem we saw with the Object.assign() method
        */

       
     // let's use -- > JSON.parse(JSON.stringify(object))

    /* 
    - JSON --> JavaScript Object Notation 
    - Parsing, syntax analysis, is the process of analysing a string of symbols.
    . JSON.strinigify will serialize a JSON object as a string
    - Don't worry about JSON methods at this stage, just know that you can use this
    sytnax to depp copy objects.
    */

       let myObject = {
        a: 1,
        b: {
            c: 3
        },
        
    }  

    let newObj = JSON.parse(JSON.stringify(myObject));

    myObject.b.c = 30;
    console.log(myObject); // {a: 10, b: {c: 30}}
    console.log(newObj);// {a: 10, b: {c: 3}}

    /* 
    What this does if it creates an immutable copy (a copy that has no reference to the
        parent object)

    */


/* 
Important:
- This way of Deep Clonning does not work with methods (i.e. it will not copy
    methods from an object).
- To copy methods, use the Object.assign() method 
*/
