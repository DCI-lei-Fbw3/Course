console.log("skipping items:")
let [greeting, , , name] = ["Hello", "I", "am", "Sarah"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"


console.log("\nskipping items:");
let [,pronoun2,,name2] = ["Hello", "I" , "am", "Sarah"];

console.log(pronoun2);//"I"
console.log(name2);//"Sarah"


console.log("\nskipping all items:");
let [,,,,] = ["Hello", "I" , "am", "Sarah"];
