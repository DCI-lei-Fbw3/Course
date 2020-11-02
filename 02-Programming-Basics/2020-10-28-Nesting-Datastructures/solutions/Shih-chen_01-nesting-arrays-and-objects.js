// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
// let board = [
//   [1, 2, 3],
//   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
//   [true, false]
// ];
// ```

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false],
  ];

  const nestedArrayLoop = (anArr) =>{
  var newArray = [];
  for (let i = 0; i < anArr.length; i++) {
    for (let j = 0; j < anArr[i].length; j++) {
      newArray.push(anArr[i][j]);
    }
  } return newArray;
}
  console.log(nestedArrayLoop(board));

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

//code1
let doggo1 = {
    name: "Winnie",
    breed: "German Shepherd",
    favoriteFood: ["beef", "duck", "dragon"],
    foodList() {
      for (let item of this.favoriteFood) {
        console.log(item);
      }
    },
  };
  
  console.log(doggo1.favoriteFood[1]);
  doggo1.foodList();
  
  //code2
  let doggo2 = {
    name: "Woofoo",
    breed: "Belgium Sherperd",
    favoriteFood: ["chicken", "goose", "unihorn"],
  }
  let secondElement = doggo2.favoriteFood[1];
  console.log(secondElement);
  
  const doggoFood = (obj) => {
    for (let x in obj) {
      if (Array.isArray(obj[x])===true) {
        return obj[x];
      }
    }
  }
   console.log(doggoFood(doggo2));

// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 

let recipes = new Object();
recipes.ingredients = {
  butter: "salted butter",
  suger: "white suger",
  flour: "wheat flour",
};
console.log(recipes);
recipes.ingredients.spice = "ginger";
console.log(recipes);
recipes.ingredients.suger = "brown suger";
console.log(recipes);

recipes.loopValue = function() {
    let list = [];
    for (let item in this.ingredients) {
        list.push(this.ingredients[item]);
        }
    return list;
 };  
console.log(recipes);
console.log(recipes.loopValue());