// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import { recipesJSON } from "./data";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

function populateRecipes(JSONString) {
  let recipes = JSON.parse(JSONString);
  for (let type in recipes) {
    let section = document.getElementById(type);
    for (let recipe of recipes[type]) {
      const newEl = document.createElement("div");
      function createIngredientList() {
        let finalString = "";
        for (let ingredient of recipe.ingredients) {
          finalString += ingredient + ", ";
        }
        return finalString.slice(0, -2);
      }
      let ingredientList = createIngredientList();
      newEl.innerHTML = `
        <div class="card m-2" style="width: 18rem; min-height: 400px">
            <img class="card-img-top" src="${recipe.image}" style="width: 18rem; height: 13rem">
            <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${recipe.author}</h6>
                <p class="card-text">Ingredients: ${ingredientList} </p>
            </div>
        </div>`;
      section.append(newEl);
    }
  }
}

populateRecipes(recipesJSON);
