// in the callback function for the event we need to add:
// different background for the element
// change color of the title
// make the dropdown menu appear

let nav = document.getElementById("navigation");
nav.addEventListener("click", handler);

function handler(event) {
  let movies = this.children;
  for (let i = 0; i < movies.length; i++) {
    movies[i].classList.remove("selected");
  }

  if (event.target.tagName == "LI") {
    event.target.classList.add("selected");
  }
}
