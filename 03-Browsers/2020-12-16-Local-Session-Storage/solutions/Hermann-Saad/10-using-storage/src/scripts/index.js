// The following line makes sure your styles are included in the project. Don't remove this.
/* import '../styles/main.scss';
import 'babel-polyfill'; */
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
import { Client } from "./apiCall.js";
import { View } from "./view.js";
let save = document.querySelector(".btn-save");
let reset = document.querySelector(".btn-reset");
let movie_input = document.querySelector(".movie-input");
let arr = [];
let myInputValue = [];

for (let i = 0; i < localStorage.length; i++) {
  arr.push(localStorage.key(i).toLowerCase());
}
let viewObjectClass = new View();

function add(movie) {
  apiCallObjectClass.getMovieData(movie).then((data) => {
    viewObjectClass.displayMovieOnPage(data);
  });
}
let apiCallObjectClass = new Client();
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "") continue;
  else {
    add(arr[i]);
  }
}
save.addEventListener("click", function () {
  if (movie_input.value == "") {
    alert("Please enter a Movie's name");
  } else {
    myInputValue.push(movie_input.value.toUpperCase());
    localStorage.setItem(myInputValue[myInputValue.length - 1], "movieName");
    location.reload();
  }
});

reset.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
