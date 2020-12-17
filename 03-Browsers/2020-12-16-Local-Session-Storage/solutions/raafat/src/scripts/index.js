import { View } from "./view.js";
import { Client } from "./apiCall.js";

let api = new Client();
let showMovies = new View();

let searchInput = $("#input");
let movieStorage = new Set();

window.onload = () => {
	console.log(JSON.parse(localStorage.getItem("moviesList")));
	for (let movie in JSON.parse(localStorage.getItem("moviesList"))) {
		showMovies.displayMovieOnPage(movie);
	}
};

searchInput.on("keypress", async (e) => {
	if (e.which == 13) {
		let movies = await api.getMovieData(e.target.value);
		if (movieStorage.has(JSON.stringify(movies))) {
			alert("The movie has been found");
		} else {
			movieStorage.add(JSON.stringify(movies));
			showMovies.displayMovieOnPage(movies);
		}
	}
});

$(".btn-save").on("click", () => {
	localStorage.setItem("moviesList", JSON.stringify(movieStorage));
});

$(".btn-reset").on("click", () => {
	localStorage.clear();
	movieStorage.clear();
	$(".movies").empty();
});
