// The following line makes sure your styles are included in the project. Don't remove this.
/* 
import '../styles/main.scss';
import 'babel-polyfill'; 
*/
// Import any additional modules you want to include below \/

import Client from './apiCall.js';
import View from './view.js';

// \/ All of your javascript should go here \/
const view = new View();
const client = new Client();

const sectionMovies = document.getElementsByClassName('movies')[0];
sectionMovies.innerHTML = localStorage.getItem('movies');

const input = document.getElementById('input');
input.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {

        const allTitles = [...document.querySelectorAll('.movies .movie-display .movie-meta h2')];
        const newMovie = allTitles.every(title => title.textContent !== e.target.value);

        if (!newMovie) return alert("You've already selected this movie !");

        client.getMovieData(e.target.value)
            .then(data => view.displayMovieOnPage(data));      
    }
});

const save = document.getElementsByClassName('btn-save')[0];
save.addEventListener('click', () => {
    localStorage.setItem('movies', sectionMovies.innerHTML);
    alert('Movie-Collection saved !');
});

const reset = document.getElementsByClassName('btn-reset')[0];
reset.addEventListener('click', () => {
    localStorage.setItem('movies', '');
    alert('Movie-Collection reset!');
});
