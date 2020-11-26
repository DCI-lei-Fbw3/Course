let parent = document.getElementById("wrapper");
const list_children = parent.children; // array of children

//let arr = [];
for (let i = 0; i < list_children.length; i++) {
  console.log(list_children[i]); //1
  var child = list_children[i].children;
  console.log(child); //2
  console.log("section ", i + 1, child.length); //3
}

let arr = [];
for (let i = 0; i < list_children.length; i++) {}

//children = list_children[i].children;
let value = list_children[0].children;
let value_2 = value[0].classList;
console.log("the value is ", value_2);
console.log(typeof value_2);

function countClass() {
  let arr = [];
  for (let i = 0; i < list_children.length; i++) {
    let object = {};
    object.section = list_children[i].classList.length;
    arr.push(object);
  }
  return arr;
}

let abc = countClass();

/* let sorted = sorting.sort(function (a, b) {
  return a.value - b.value;
}); */

/* console.log("the highest child class is ", sorted[0]); */
/* console.log("this is sorted:", sorted); */

let a = abc.map(function (x) {
  return x.section;
});
console.log(Math.max(...a));
