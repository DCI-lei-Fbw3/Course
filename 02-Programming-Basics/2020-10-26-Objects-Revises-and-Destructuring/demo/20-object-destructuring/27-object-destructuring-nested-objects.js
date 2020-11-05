console.log("object with a property being an array:");

let person = { name: "Sarah", country: "Nigeria", friends: ["Annie", "Becky"] };

let {name:foo, friends: bar} = person;

console.log(foo);//"Sarah"
console.log(bar);//["Annie", "Becky"]


console.log("\nobject with a property being another object:");

let person2 = {
    name: "Sarah",
    place: {
        country: "Nigeria",
        city: "Lagos"
    },
    friends : ["Annie", "Becky"]
};

let {name:foo2,
     place: {
         country : bar2,
         city : x}
    } = person2;

console.log(foo2);//"Sarah"
console.log(bar2);//"Nigeria"


console.log("\nwithout deep destructuring:")
let { name, place } = person2;

console.log(name);
console.log(place.country);
