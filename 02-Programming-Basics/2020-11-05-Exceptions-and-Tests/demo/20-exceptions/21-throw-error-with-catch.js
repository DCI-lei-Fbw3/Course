// see:
// https://eloquentjavascript.net/08_error.html

function lastElement(array) {
    if (array.length == 0) {
      throw new Error("empty array");
    } else {
      return {element: array[array.length - 1]};
    }
}

let last;

/*
try {
  last = lastElement([]);
  console.log(last);
} catch (error) {
  console.log(error);
}
/**/


try {
  last = lastElement([]);
  console.log(last);
} catch (error) {
  console.log(error);
} finally {
  console.log("finally will always be executed, - useful for cleanup or finishing/completing.");
}
/**/
