// ## 1.
// * Get the children of the element with id `wrapper` and print them to the console as a list.

let wrapperChildren = document.getElementById("wrapper").children;
console.log(wrapperChildren);

// * Iterate over them and print their children to the console, as well as how many they are.

for (item of wrapperChildren) console.log(item.children, item.children.length);

// ## 2.

// * Next, we need to find which from the children of the element with id `wrapper` has the highest number of classes.

//     For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.

//     Let's write a function that returns an object that contains the element with the most classes and the total number of classes.

function findMostClasses(collection) {
  let classLength = 0;
  let winningElement;
  for (child of collection) {
    if (child.classList.length > classLength) winningElement = child;
  }
  return { winningElement };
}

console.log(findMostClasses(wrapperChildren));
