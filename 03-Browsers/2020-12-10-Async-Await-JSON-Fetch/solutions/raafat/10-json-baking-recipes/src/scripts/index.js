// The following line makes sure your styles are included in the project. Don't remove this.
//import '../styles/main.scss';
// Import any additional modules you want to include below \/
import recipes from "./data.js";

// \/ All of your javascript should go here \/

const renderRecipes = () => {
	Object.values(recipes).forEach((value) =>
		value.forEach((i) => {
			let newCard = $(`
			<div class="card m-3" style="width: 15rem;">
			<img class="card-img-top" src="${
				i.image
			}" alt="Card image cap" style="height: 12rem;">
			<div class="card-header">
			  <h3 class="card-title">${i.title}</h3>
			  <p class="card-text">${i.author}</p>
			  </div><div class="card-body">
			  <p class="card-text">${i.ingredients.join(", ")}</p>
			</div>
		  </div>`);
			$(`#${i.type}`).append(newCard);
		})
	);
};
renderRecipes();
