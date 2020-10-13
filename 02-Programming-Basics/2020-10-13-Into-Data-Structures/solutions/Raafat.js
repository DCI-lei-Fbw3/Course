let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let justCity = euroCities[1];
console.log(justCity);

euroCities[0] = "Berlin";
euroCities.pop();
euroCities.push("Budapest");
euroCities.splice(1, 2);
console.log(euroCities);

let asianCities = ["Syria", "China", "Japan", "India", "Korea"];
let twoCities = asianCities.slice(1, 4);
console.log(twoCities);

let worldCities = euroCities.concat(asianCities);
worldCities.reverse();
worldCities.splice(2, 1, "Toronto");
worldCities.splice(1, 0, "Washington");
let stringWorld = worldCities.join(", ").toString();
console.log(stringWorld);

const reverseString = (str) => {
	return str.split("").reverse().join("");
};
console.log(reverseString("Hello World"));
