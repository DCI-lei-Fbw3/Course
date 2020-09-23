// original from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init() {
    let name = 'Mozilla'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
init();
