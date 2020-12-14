// The following line makes sure your styles are included in the project. Don't remove this.
//import "../styles/main.scss";

import { jsonFile } from "./data.js";
let recipes = JSON.parse(jsonFile);

let cakes = document.getElementById("cakes");
let biscuit = document.getElementById("biscuits");
let bread = document.getElementById("bread");

for (let item in recipes) {
  let div_big;
  for (let i = recipes[item].length - 1; i >= 0; i--) {
    div_big = document.createElement("div");
    div_big.setAttribute("class", "card mb-4");
    div_big.setAttribute("style", "width: 18rem; margin:0 10px");
    let img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.setAttribute("style", "height:30vh");
    img.setAttribute("src", recipes[item][i].image);
    div_big.appendChild(img);

    let div_1 = document.createElement("div");
    div_1.setAttribute("class", "card-body");
    div_big.appendChild(div_1);
    let h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    h5.innerHTML = recipes[item][i].title;
    div_1.appendChild(h5);

    let p_1 = document.createElement("p");
    p_1.setAttribute("class", "card-text");
    p_1.innerHTML = recipes[item][i].author;
    div_1.appendChild(p_1);

    let p_2 = document.createElement("p");
    p_2.setAttribute("style", "border-top: 3px solid black");
    p_2.innerHTML = recipes[item][i].ingredients.toString();
    div_1.appendChild(p_2);

    if (item == "cakes") {
      cakes.appendChild(div_big);
    } else if (item == "biscuits") {
      biscuit.appendChild(div_big);
    } else if (item == "bread") {
      bread.appendChild(div_big);
    }
  }
}
