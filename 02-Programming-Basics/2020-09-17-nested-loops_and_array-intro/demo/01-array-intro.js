let a = "hello";

console.log(a);
console.log("length:", a.length);

console.log("first character:", a[0]);
console.log("last character:", a[4]);

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

console.log("logging an array of numbers:");
let numbers = [2, 3, 5, 1001];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("logging an array of strings:");
let names = ["Alice", "Bob", "Eve"];
for (let i = 0; i < names.length; i++) {
  let currentItem = names[i];
  console.log(currentItem, "length:", currentItem.length);
}

console.log("Alternative with 'while':");
let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
