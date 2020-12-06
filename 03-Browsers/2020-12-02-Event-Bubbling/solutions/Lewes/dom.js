
//*We are saving an element by its ID into a variable.
let nav = document.getElementById("list");

//*We then add an event listener to the variable and we activate it when 'clicked' and when so we activate a callback.
nav.addEventListener("click", handler);

//*The function.
function handler(event) {
    //*We then save the children of the 'clicked' ID to a variable (it will give us an HTML collection)
    let movies = this.children;

    //*A for loop, to go over the HTML collection called and remove any added classes.
    for (let i = 0; i < movies.length; i++) {
        movies[i].classList.remove("selected");
    }

    //console.log(movies);

    //*If we clicked on an element with the class name of 'movie' it will add an additional class to it (Which will add its own styling when so)
    if (event.target.classList == "movie") {
        event.target.classList.add("selected");
    }
}