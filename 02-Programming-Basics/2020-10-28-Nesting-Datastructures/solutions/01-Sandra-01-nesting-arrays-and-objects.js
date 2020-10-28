// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.


let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

function loop_2d(arr) {
    for (let i=0; i < arr.length; i++){
        let innerArr = arr[i]; 
        for (let j = 0; j < innerArr.length; j++){
            console.log(i, "-->", innerArr[j])
        }
    }
}

loop_2d(board)



// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.

let doggo = { 
    name: "Max", 
    breed: "Sharplaninec", 
    favoriteFoods: ["broccoli", "cookies", "potato"],
    faveFoods(){
        console.log(Object.values(doggo.favoriteFoods))
    }
}

// * 2.3 Access the second element of the doggo's favorite foods. 

console.log(doggo.favoriteFoods[1])

// * 2.4 Add a method that loops through and print all the doggo's favorite food.

//see line 32
doggo.faveFoods() 


// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 

recipes = { 
    ingredients: { 
        butter: "100gr",
        sugar: "50gr",
        flour: "1kg",
        
    },
    values(){
            console.log(Object.values(recipes.ingredients))
        },
}

// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 

recipes.ingredients.ginger = "10gr"
console.log(recipes.ingredients)

// * 3.4 Change the ingredient `sugar` to `brown sugar`. 

recipes.ingredients.brownSugar = recipes.ingredients.sugar
delete recipes.ingredients.sugar 
console.log(recipes.ingredients)

// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 


//see line 60 
recipes.values()




