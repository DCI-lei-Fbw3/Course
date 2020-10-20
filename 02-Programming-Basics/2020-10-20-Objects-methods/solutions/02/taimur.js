/  1

const board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}

//  2
// 2.1
const doggo = {
  name: "Toby",
  breed: "Yorkshire and Scottish terrier mix",
  //   2.2
  favoriteFoods: ["meats", "doggy biscuits", "bones"],
  //   2.4
  printFavFood() {
    this.favoriteFoods.forEach(foodItem => console.log(foodItem));
  }
};

// 2.3
console.log(doggo.favoriteFoods[1]);
// 2.4
doggo.printFavFood();

// 3.1
const recipes = {
  author: "Fran",
  // 3.2
  ingredients: {
    sugar: "sugar",
    butter: "butter",
    flour: "flour"
  },
  printIngredients() {
    return Object.values(this.ingredients);
  }
};
// 3.3
recipes.ingredients.ginger = "ginger";
console.log(recipes.ingredients);

// 3.4
recipes.ingredients.sugar = "brown sugar";
console.log(recipes.ingredients);

// 3.5
console.log(recipes.printIngredients());