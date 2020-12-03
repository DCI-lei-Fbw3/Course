let link = document.querySelectorAll("a");
let ul = document.querySelectorAll("ul");
let simo = document.querySelectorAll(".simo1");
let li = document.querySelectorAll("li");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", fait);
  function fait() {
    ul[i].classList = "navbar-nav mr-auto bg-info ul_all if_click";
    li[i].classList = "nav-item bg-dark";
    simo[i].classList = "bg-dark  simo1";
  }
}
