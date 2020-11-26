/*
1. 2D Array
* Given the 2D Array below, **loop** through the arrays to print the values.

```javascript
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
*/

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

const loop = (x) => {

    var arrayJoin = x.concat(x);
    console.log(arrayJoin);


    // for (i = 0; i < x.length; i++) {
    //     let allArrays = x[i];
    //     for (let j = 0; j < allArrays.length; j++) {
    //         console.log(i, "->", allArrays[j]);
    //     }
    // }

}

console.log("Answer for number 1");
loop(board);


/*
2. Doggo
* 2.1 Create a doggo object. Add name and breed as properties of the object.
* 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
* 2.3 Access the second element of the doggo's favorite foods. 
* 2.4 Add a method that loops through and print all the doggo's favorite food.
*/

var doggo = {
    name: "Bek",
    breed: "Whippet",
    favFood: ["Pie", "Chips", "Cola"],

    displayFavFoods() {
        return doggo.favFood;
    }
}

console.log("Answer for number 2");
console.log(doggo.displayFavFoods());

/*
3.
* 3.1 Create an object called recipes.
* 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
* 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.
* 3.4 Change the ingredient `sugar` to `brown sugar`.
* 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.
*/

var recipes = {
    ingredient: {
        ingredOne: "Butter",
        ingredTwo: "sugar",
        ingredThree: "Flour",
    },

    displayRecipe() {
        return recipes.ingredient
    }
}

//recipes.ingredient.ingredFour = "Ginger";
//recipes.ingredient.ingredTwo = "Brown Sugar";

console.log("Answer for number 3");
//console.log(recipes);
console.log(recipes.displayRecipe());
