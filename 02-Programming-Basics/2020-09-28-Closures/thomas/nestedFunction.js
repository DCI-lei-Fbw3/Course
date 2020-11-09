function outerFunc(){
    let outerVar = "This variable is outside";
    function innerFunc() {
        console.log(outerVar);
    }
innerFunc();
}

outerFunc();

const myGlobal = 0;

function outerFunc2(){
    const myVar = 1 ;
    console.log(myVar);
    
        function innerFunc() {
            const myInnerVar = 2;
            console.log(myGlobal, myVar);
    
            function innerOfInnerFunc() {
            console.log(myGlobal, myVar, myInnerVar);
            }
        innerOfInnerFunc();
        }
    innerFunc();
    }
    
    outerFunc2();

    /*function outerFunc3(){
        let outerVar = "This variable is outside";
    
        function innerFunc() {
            console.log(outerVar); // => logs "This variable is outside"
            // the variable outerVar is accessed from the lexical scope
        }
    return innerFunc;
    }
    outerFunc3();
    innerFunc();*/

    const myInnerFunc = outerFunc3(); //this can be put to line 54 as well, it works.

    function outerFunc3(){
    let outerVar = "This variable is outside";

    function innerFunc() {
        console.log(outerVar); // => logs "This variable is outside"
        // the variable outerVar is accessed from the lexical scope
    }
return innerFunc;
}
//const myInnerFunc = outerFunc3();
myInnerFunc();

console.log("\n");

function outerFunc4(){
    //let outerVar = "This variable is supposed to be outside";

    function innerFunc() {
        let outerVar = "This variable is supposed to be outside";
        console.log(outerVar); // => logs "This variable is outside"
        // the variable outerVar is accessed from the lexical scope
    }

outerVar = "This variable is now no longer outside haha";
console.log(outerVar); // first console log
return innerFunc;
}
const myInnerFunc2 = outerFunc4(); //encapsulate a function in a variable to preserve its state and to use later in the script
myInnerFunc2();

console.log("\n");

//examples from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      alert(name);
    }
    return displayName;
  }

  var myFunc = makeFunc();
  myFunc();

  console.log("\n");

  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }  
  //var add5 = makeAdder(5);
  //var add10 = makeAdder(10);
  
  //console.log(add5(2));  // 7
  //console.log(add10(2)); // 12

console.log(makeAdder(3)(7)); //alternative way of calling the nested function.
console.log("\n");
