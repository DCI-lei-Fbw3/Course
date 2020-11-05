
console.log("*************exercice1******************");

/* 
# Volume of a Box

Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

## Examples

```
volumeOfBox({ width: 2, length: 5, height: 1 })
// ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 })
// ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 })
// ➞ 30
```*/
function volumeOfBox(objet){
    let result=1;
    let x;
    for (x in objet) {
        result = result * objet[x]  ;
    }
    return result;
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 }))
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }))
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }))

console.log("*************exercice2******************");

/* 
# Extract City Facts

Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

-   `name`
-   `population`
-   `continent`

The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

## Examples

```
cityFacts({
name: "Paris",
population: "2,140,526",
continent: "Europe"
})
\\ ➞ "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
name: "Tokyo",
population: "13,929,286",
continent: "Asia"
})
\\ ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
```
*/

function cityFacts(objet){
return  objet.name+ ' has a population of '+ objet.population+' and is situated in '+ objet.continent;
}
console.log(cityFacts({ name: "Paris",population: "2,140,526",continent: "Europe"}));


console.log("*************exercice3******************");
/* 
# Calculate the Profit

You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

## Examples

```
profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
})
// ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
})
// ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
})
// ➞ 44030
```

## Notes

Assume all inventory has been sold.

`profit = totalSales - totalCost`

*/

function profit(object){
  let objectArray = Object.values(object);
  return (objectArray[1]-objectArray[0])*objectArray[2];
}
console.log(profit({costPrice: 2.77, sellPrice: 7.95 ,inventory: 8500}));



console.log("*************exercice 4**************")
/* 
# Does the Object Contain a Given Key?

Write a function that returns true if a hash contains the specified key, and false otherwise.

## Examples

```
hasKey({ a: 44, b: 45, c: 46 }, "d")
// ➞ false

hasKey({ craves: true, midnight: true, snack: true }, "morning")
// ➞ false

hasKey({ pot: 1, tot: 2, not: 3 }, "not")
// ➞ true
``` */
/* var objet = {width:2,length:5, height:1};

var txt = 1;
var person = {width:2,length:5, height:1}; 
var x;
for (x in person) {
  txt *= person[x] ;
}
console.log(txt); */
//let obj={ a: 44, b: 45, c: 46 }
function hasKey(objet, str){
    for(x in objet){
        if(x === str) return true;
    }
    return false;
}

console.log(hasKey({ a: 44, b: 45, c: 46 }, "d"));
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not"));



console.log("*************exercice 5**************");

/* 
# Planetary Weight Converter

In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.

To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:

`weight` on `planetA` / gravitational force of `planetA` \* gravitational force of `planetB`

| Planet  | m/s²  |
| ------- | ----- |
| Mercury | 3.7   |
| Venus   | 8.87  |
| Earth   | 9.81  |
| Mars    | 3.711 |
| Jupiter | 24.79 |
| Saturn  | 10.44 |
| Uranus  | 8.69  |
| Neptune | 11.15 |

Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.

## Examples

```
spaceWeights("Earth", 1, "Mars")
// ➞ 0.38

spaceWeights("Earth", 1, "Jupiter")
// ➞ 2.53

spaceWeights("Earth", 1, "Neptune")
// ➞ 1.14
```
*/

/* function spaceWeights() */





console.log("*************exercice 6******************");

/*# International Greetings

Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.

```
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
```

Write a function that takes in a name and returns a name tag, that should read:

`"Hi! I'm [name], and I'm from [country]."`

If the name is not in the object, return:

`"Hi! I'm a guest."`

## Examples

```
greeting("Randy")
// ➞ "Hi! I'm Randy, and I'm from Germany."

greeting("Sam")
// ➞ "Hi! I'm Sam, and I'm from Argentina."

greeting("Monti")
// ➞ "Hi! I'm a guest."
```
*/
 const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
let propArray = Object.keys(GUEST_LIST);
 let valuesArray = Object.values(GUEST_LIST);
 function greeting(objetName){
  
  for(let i = 0; i < propArray.length; i++){

     if(propArray[i] == objetName) return "Hi! I'm " + propArray[i] + " , and I'm from " + valuesArray[i];
}
return  "Hi! I'm a guest.";
}
console.log(greeting("Sam"));



  