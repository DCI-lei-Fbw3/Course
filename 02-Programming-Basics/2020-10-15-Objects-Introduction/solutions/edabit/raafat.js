// !Volume of a Box
// const volumeOfBox = (obj) => {
//  return Object.values(obj).reduce((a, b) => a * b);
// };
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));// // !Extract City Facts
// const cityFacts = (obj) =>
//  `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`;// console.log(
//  cityFacts({
//      name: "Tokyo",
//      population: "13,929,286",
//      continent: "Asia",
//  })
// );// 

// !Calculate the Profit
// const profit = (obj) =>
//  `this profit is: ${(obj.sellPrice - obj.costPrice) * obj.inventory}`;// console.log(
//  profit({
//      costPrice: 225.89,
//      sellPrice: 550.0,
//      inventory: 100,
//  })
// );// 

// !Does the Object Contain a Given Key?
// const hasKey = (obj, key) => Object.keys(obj).includes(key);// console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning"));// // !International Greetings// const GUEST_LIST = {
//  Randy: "Germany",
//  Karla: "France",
//  Wendy: "Japan",
//  Norman: "England",
//  Sam: "Argentina",
// };
// const greeting = (str) => {
//  if (Object.keys(GUEST_LIST).includes(str))
//      return `Hi! I'm ${str}, and I'm from ${GUEST_LIST[str]}`;
//  return `Hi! I'm a guest.`;
// };// console.log(greeting("Randy"));