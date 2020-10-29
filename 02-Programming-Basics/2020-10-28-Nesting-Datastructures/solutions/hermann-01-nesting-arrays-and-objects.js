// # Nests
 console.log("*********1. 2D Array*********************");
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
      [true, false]
 ];

 const arrPrint = (arr)=>{
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      console.log(arr[i][j]) ;
      
    }
  }
 }
 arrPrint(board)


console.log("*********2. Doggo*********************");

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.
let doggo = {
    name:"Rocky",
    breed:"Berger allemand",
    favoriteFoods:["Rice","Meat","Water","Tomato"],
}
const {favoriteFoods:[...food]} = doggo;
console.log(doggo.favoriteFoods[1]);
for(let i = 0; i < food.length; i++){
    console.log(food[i]);
}

console.log("*********3 exercise*********************");

// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 

let recipes = {
    otherIngredients : {
    butter: "five",
    sugar: "whrite",
    flour: "one",
    },
    print(){
        for(x in this.otherIngredients){
            console.log(this.otherIngredients[x])
        }
    /* return Object.values(this.otherIngredients) */;
    }
}
recipes.otherIngredients.ginger = "six";
recipes.otherIngredients.sugar = "brown";
console.log("reponse 3.5")
recipes.print();