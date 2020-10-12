// Ola FbW3! Let's talk about Higher-Order Functions, Callback functions, and First-Class Functions

    // First-Class Functions

        /*
        - First-Class functions are functions created with the intention to
        be passed around to other function,
        - FCFs do one specific thing,
        - FCFs do not have side-effects,
        - FCFs are also not meant to be called directly, but to be used by other functions
        */

        var add = (x,y) => x+y; // FCF
        var subtract = (x,y) => y-x; // FCF
        var multiply = (x, y) => x * y; // FCF

        function numbers (fn, x, y) { // this is the HOF

            return fn(x,y);
        }

        var addResult = numbers(add, 3, 2);
        console.log(addResult);
        var subtractResult = numbers(subtract, 2, 3);
        console.log(subtractResult);
        var multiplyResult = numbers (multiply, 2, 3);
        console.log(multiplyResult);

        /*
        The numbers function above is a HOF that takes in a FCF as
        its callback funtion. It is custom built (not built into js).

        Why even create a FCF, why not just code an anonymous
        function as the callback?
        Because the purpose of functional programming, and coding in general,
        is to write reusable code.

        */

    // Callback Functions

/*
Why can you pass functions to other functions as variables?
- JavaScript functions are first-class objects.
- The methods of passing in function as parameters to other functions
  allow us to use them inside javascript libraries everywhere.

Definition: A JS Callback function is a function that is passed as a parameter to
another JS function, and the callback function is run inside of the
function it was passed into.

- JavaScript Callback Functions can be synchronous & asychronous
*/

function functionOne(x) { console.log(x);};

function functionTwo(var1, callback) {
    callback(var1); // how the program executes --> funtionOne("Hey this callback stuff is strange!")
}
functionTwo("Hey this callback stuff is strange!",functionOne); // inside functionTwo, var1's value will be functionOne


/*
 This is an example of using the callback variable in a Javascript
 Function.
 Steps:
 1. functionOne takes in an argument and issues an alert with the
 x as it's argument.
 2. functionTwo takes in an argument and a function.
 3. functionTwo then passes the argument it took into the other
 function it took in.
 4. functionOne is the callback function in this case.

*/

// But what if the callback funciton is not FCF, but an anonymous function

function functionTwo(var1, callback) {
    callback(var1);
}
functionTwo("Hey this callback stuff is strange!", function (x) { console.log(x);})


/*
In this case, the callback function is defined when we are calling
functionTwo

Note: we can call the callback inside of functionTwo as many times as
we want. See below:
*/


function functionThree(var1, callback) {
    callback(var1);
    callback(var1);
    callback(var1);
}
functionThree("Hey this callback stuff is strange!", function (x) { console.log(x);})

/*
Note: You can pass in as many callback funtions as you like
to another function. See below.
*/


function functionFour(var1, callback1, var2, callback2) {

    callback1(var1);
    callback2(var2);
}
functionFour("This is callback 1", function (x) { console.log(x);},"This is callback 2!", function (x) { console.log(x);});

/*
1. here in functionTwo we pass in two variables and two anonymous functions
as arguments.
2. Inside functionTwo, we run callback1 with var1 and we run callback2
with va2.
*/

/*
Closure: a function that accesses its lexical scope even when executed
outside of its lexical scope.

*/
function functionFive(var1, var2, callback) {
	let x = var1;
    let y = var2; //this can just be var1+var2, but we want to see an example of closure so we use variable scopes
    // x and y are equal to 2
    
	const innerFunc = () =>{
         let add = x + y;
		return callback(add); // return print(4) --> console.log(4)
	}; // this is where the conncetion between closure and callback is happening
	return innerFunc();
}

functionFive(2, 2, print); // --> this is where it starts

function print(a) {
	console.log(a);
}
