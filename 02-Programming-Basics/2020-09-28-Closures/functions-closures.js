// Welcome FbW3! Let's look into the strange ways in which functions behave


// Scope

    /* 
    2 types of scope:
    1) Block scope
    2) Function scope
    */

    function foo () {
    // The function scope
    let count = 0;
    console.log(count);

    }

    foo();             //logs 0
    console.log(count);//undefined

    // count is freely accessed within the scope of foo()

    // The scope is regulating the aaccessibility of your variables

    function bar () {
        // The function scope
        let count = 0;
        console.log(count);
        
        }
        
        foo();             //logs 0
        bar();

    // Scope nesting 

        // You can put one scope into another

    function outerFunc1(){
        let outerVar = "This variable is outside";

        function innerFunc() {
            console.log(outerVar); // => logs "This variable is outside"

        }
    innerFunc();
    }
    outerFunc();

    /* 
    Execution Flow:
    1) The programme starts execution at the outerFunc() call
    2) declares a variable called outerVar to hold a string value
    3) triggers the innerFunc call
    4) enters the innerFunc and runs the console.log
    */

    /* 
    Now you know 2 things:
    1) Scopes can be nested,
    2) The variables of the outer scope are accessible inside the inner scope
    */
    

// Lexical Scope

    /* How does JS understand that outerVar inside innerFunc()
    corresponds to the variable outerVar of outerFunc()
    */

    //https://en.wikipedia.org/wiki/Lexical_analysis

    /* 
    This is because JS implements a scoping mechanism called lexical scoping (or static scoping)
    Lexical scoping means that the accessibility of variables is determined 
    by the position of the variables in the source code inside the nesting scopes

    It's lexical (or static) because the JS engine determines (at lexing time) the
    nesting of scopes just by looking at the JS source code (without execution).
    */

    const myGlobal = 0;

    function outerFunc2(){
    const myVar = 1 ;
    console.log(myVar); // => logs 1

        function innerFunc() {
            const myInnerVar = 2;
            console.log(myGlobal, myVar); // => logs 0 1

            function innerOfInnerFunc() {
            console.log(myGlobal, myVar, myInnerVar); // => logs 0 1 2
            }
        innerOfInnerFunc();
        }
    innerFunc();
    }

    outerFunc2();

// The Closure

function outerFunc3(){
    let outerVar = "This variable is outside";

    function innerFunc() { //closure function
        console.log(outerVar); // => logs "This variable is outside"
        // the variable outerVar is accessed from the lexical scope
    }
return innerFunc;
}
const myInnerFunc = outerFunc3(); //encapsulate a function in a variable to preserve its state and to use later in the script
myInnerFunc();

/* 
Now innerFunc() is executed outside of its lexical scope
innerFunc() still has access to OutVar from its lexical scope, 
even when executed outside of its lexical scope.

In other words, innerFunc() closes over (or captures, remembers) the variable
outerVar from its lexical scope.

innerFunc() is a closure because it closes over the variable outerVar
from its lexical scope.

Closure: a function that accesses its lexical scope even executed
outside of its lexical scope.

*/

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      alert(name);
    }
    return displayName;
  }

  var myFunc = makeFunc(); // storing the state of the function in a variable
  myFunc();






