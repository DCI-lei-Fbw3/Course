// source:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      alert(name);
    }
    return displayName;
  }

  var myFunc = makeFunc();
  myFunc();
