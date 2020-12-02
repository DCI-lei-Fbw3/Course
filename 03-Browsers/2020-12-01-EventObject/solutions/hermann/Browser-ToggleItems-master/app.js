let li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("mouseover", overIt);
  li[i].addEventListener("mouseout", goOut);
  li[i].addEventListener("click", clickFunction);
}
let body = document.querySelector("body");
let tata = document.querySelector(".tata");
let toto = document.querySelector(".toto");
let h5P = document.querySelector(".h5p");
let h6Div = document.querySelector(".h6_div");

function overIt() {
  this.setAttribute("style", "background:#1da2d6");
}
function goOut() {
  this.setAttribute("style", "background:white");
}
function clickFunction(event) {
  h6Div.classList = "h6_div";
  h5P.textContent = `You selected  : ${event.target.textContent} `;
}

let a = document.querySelector("a");
a.addEventListener("click", buttonFunction);

function buttonFunction(event) {
  event.target.textContent = "Hide destination ";
  toto.classList = " toto";
  this.addEventListener("click", function (event) {
    event.target.href = "index.html";
  });
}
