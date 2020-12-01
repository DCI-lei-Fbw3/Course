/* let body = document.querySelector("body");
let divButton = document.createElement("div");
divButton.classList = "my-2 h5_div text-primary";
divButton.setAttribute("style=", "border-radius: 5px");

let h5 = document.createElement("h5");
h5.classList = "py-3 pl-3";
h5.textContent = "You selected ";
divButton.append(h5);
body.append(divButton); */
let li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  let finalText = li[i].textContent;
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
