let myArray = ["was", "soll", "ich", "denn", "schreiben"];
thirdElement = myArray[2];
console.log(thirdElement);
fourthElement = myArray[3];
myArray[3] = "banana";
console.log(myArray);
 */
//Task2
//1
var euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
var secondItem = euroCities[1];
//2
euroCities[0] = "Berlin";
//3
console.log(euroCities.length);
//4
console.log(euroCities.pop());
//5
euroCities[5] = "Budapest";
console.log(euroCities);
//6
let removed = euroCities.splice(1, 2);
console.log(removed);
console.log(euroCities);
//7
let asianCities = ["tokyo", "singapore", "Bangkok", "Hongkong", "Yokohama"];
//8
let twoToFour = asianCities.splice(2, 3, 4);
//9
let cities = euroCities.concat(asianCities);
console.log(cities);
//10
let citiesReversed = cities.reverse();
console.log(citiesReversed);
//11
let cutOutCities = cities.splice(3, 1, "Toronto");
console.log(cities);
//12
let addWashington = cities.splice(2, 0, "Washington");
console.log(cities);
let removeEmpty = cities.splice(5, 1)
//13
console.log(cities[1] + ", " + cities[2] + ", " + cities[3] + ", " + cities[4] + ", " + cities[5] + ", " + cities[6]);