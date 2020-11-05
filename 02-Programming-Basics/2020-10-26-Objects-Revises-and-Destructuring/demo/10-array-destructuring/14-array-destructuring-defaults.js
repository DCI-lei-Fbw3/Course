
console.log("using default name:")
[greeting = "hi", name = "Sarah"] = ["hello"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"

console.log("\nusing no defaults:")
let [greeting = "hi", name = "Sarah"] = ["hello", "Tom"];

console.log(greeting);//"Hello"
console.log(name);
