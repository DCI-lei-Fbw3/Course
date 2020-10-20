// # Volume of a Box

// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// ## Examples

// ```
// volumeOfBox({ width: 2, length: 5, height: 1 })
// // ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 })
// // ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 })
// // ➞ 30
// ```
let box = {
    width:0,
    length:0,
    height:0
}

function volumeOfBox (obj) {
    return obj.width * obj.length * obj.height;
}

console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))


// # Extract City Facts

// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// -   `name`
// -   `population`
// -   `continent`

// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// ## Examples


let city = {
name: "Paris",
population: "2,140,526",
continent: "Europe"
}
// \\ ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
// name: "Tokyo",
// population: "13,929,286",
// continent: "Asia"
// })
// \\ ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
// ```


function cityFacts(object){
    return `${object.name} has a population of ${object.population} and is situated in ${object.continent}.`
}
console.log(cityFacts(city));

// # Calculate the Profit

// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are
// given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. 
//Return the total profit made, rounded to the nearest dollar.

// ## Examples


let profit = {
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200,
  totalProfit(){
    return Math.round((this.sellPrice - this.costPrice) * this.inventory);
}
}
// // ➞ 14796



console.log(profit.totalProfit())

// # Does the Object Contain a Given Key?

// Write a function that returns true if a hash contains the specified key, and false otherwise.

// ## Examples

// ```
//hasKey({ a: 44, b: 45, c: 46 }, "d")
// // ➞ false

// hasKey({ craves: true, midnight: true, snack: true }, "morning")
// // ➞ false

// hasKey({ pot: 1, tot: 2, not: 3 }, "not")
// // ➞ true
// ```

function hasKey(obj, key) {
    return Object.keys(obj).includes(key);  //Object.keys() returns an array from the keys of the object. .includes works with arrays. it checks if the key is included in the array we created out of the object.
}
console.log(hasKey({ a: 44, b: 45, c: 46 }, "c"))


// # International Greetings

// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

// ```
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}


// Write a function that takes in a name and returns a name tag, that should read:

// `"Hi! I'm [name], and I'm from [country]."`

// If the name is not in the object, return:

// `"Hi! I'm a guest."`

function nameTag(name){
    return Object.keys(GUEST_LIST).includes(name) ? `hi! i´m ${name} and I´m from ${GUEST_LIST[name]}.` : `"Hi! I'm a guest."`;
}
// ## Examples

// ```
// console.log(nameTag("peter"));
// // ➞ "Hi! I'm Randy, and I'm from Germany."

// greeting("Sam")
// // ➞ "Hi! I'm Sam, and I'm from Argentina."

// greeting("Monti")
// // ➞ "Hi! I'm a guest."
// ```


// # Planetary Weight Converter

// In this challenge, you have to convert a weight weighed on a planet of the 
// Solar System to the corresponding weight on another planet.

// To convert the weight, you have to divide it by the gravitational force of the planet 
// on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. 
// See the table below for a list of gravitational forces:

// `weight` on `planetA` / gravitational force of `planetA` \* gravitational force of `planetB`

// | Planet  | m/s²  |
// | ------- | ----- |
// | Mercury | 3.7   |
// | Venus   | 8.87  |
// | Earth   | 9.81  |
// | Mars    | 3.711 |
// | Jupiter | 24.79 |
// | Saturn  | 10.44 |
// | Uranus  | 8.69  |
// | Neptune | 11.15 |

// Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.

// ## Examples

// ```
// spaceWeights("Earth", 1, "Mars")
// // ➞ 0.38

// spaceWeights("Earth", 1, "Jupiter")
// // ➞ 2.53

// spaceWeights("Earth", 1, "Neptune")
// // ➞ 1.14
// ```
let planets = {
    Mercury: 3.7, 
    Venus: 8.87,  
    Earth: 9.81,  
    Mars: 3.711, 
    Jupiter: 24.79, 
    Saturn: 10.44, 
    Uranus: 8.69,  
    Neptune: 11.15 
}

function spaceWeights(earth, earthWeight = 1, planetForce) {
    return ((earthWeight/planets[earth])*planets[planetForce]).toFixed(2)
}

console.log(spaceWeights("Earth", 1, "Neptune"))
