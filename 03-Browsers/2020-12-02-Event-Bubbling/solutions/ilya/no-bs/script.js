const html = document.getElementsByTagName('html')[0];
const movies = document.getElementsByClassName('movie');

/* if we click somewhere on the html element, the show class gets removed from every element.movie */
html.addEventListener('click', () => {
    [...movies].forEach(movie => movie.classList.remove('show'));
});

[...movies].forEach(movie => movie.addEventListener('click', (e) => {

    /*  
    without the if condition, when clicking on the movie element the 2nd time (it's classList contains 'show')
    the 'show' class will never get removed     
    */
    if (!movie.classList.contains('show')) {
        [...movies].forEach(movie => movie.classList.remove('show'));
    }

    movie.classList.toggle('show');

    /* without this, because of bubbling, the event listener from html will always remove the show class */
    e.stopPropagation();

}))

