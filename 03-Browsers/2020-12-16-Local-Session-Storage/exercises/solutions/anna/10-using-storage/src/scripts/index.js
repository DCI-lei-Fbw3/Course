// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "babel-polyfill";
import { View } from "./view";
import { Client } from "./apiCall";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/

let api = new Client();
let display = new View();
let inputField = document.getElementById("input");
let movieList = [];

if (localStorage.getItem("movieList") != null) {
  movieList = JSON.parse(localStorage.getItem("movieList"));
  movieList.forEach((movie) => display.displayMovieOnPage(movie));
}

inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let movieName = inputField.value;
    inputField.value = "";
    api.getMovieData(movieName).then((data) => {
      console.log(data.Title);
      if (containsMovie(data, movieList)) {
        alert("Sorry, that movie is already being displayed!");
        return;
      }
      movieList.push(data);
      console.log(movieList);
      display.displayMovieOnPage(data);
    });
  }
});

let saveButton = document.querySelector("button.btn-save");
saveButton.addEventListener("click", () => {
  localStorage.setItem("movieList", JSON.stringify(movieList));
});

let resetButton = document.querySelector("button.btn-reset");
resetButton.addEventListener("click", () => {
  display.removeDisplay();
  movieList = [];
  localStorage.removeItem("movieList");
});

function containsMovie(obj, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].Title === obj.Title) {
      return true;
    }
  }
  return false;
}
