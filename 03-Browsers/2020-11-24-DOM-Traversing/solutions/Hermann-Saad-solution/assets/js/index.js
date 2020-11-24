const child = document.querySelector(".heading");
const parent = child.closest("header");
parent.setAttribute("style", "border: 5px solid black");
//console.log(parent);

let package_title = document.querySelectorAll(".package-title");
console.log("this is the package title", package_title);
console.log(package_title);
for (let i = 0; i < package_title.length; i++) {
  let sibling = package_title[i].previousElementSibling;
  console.log(sibling);
  sibling.setAttribute("style", "border: 5px solid black");
}

function label_check() {
  let label = document.querySelectorAll("label");
  console.log(label);
  for (let i = 0; i < label.length; i++) {
    if (label[i].classList == "mild") {
      label[i].setAttribute("style", "border-bottom: 2px solid orange");
    } else if (label[i].classList == "intense") {
      label[i].setAttribute("style", "border-bottom: 2px solid orange");
    } else {
      label[i].setAttribute("style", "border-bottom: 2px solid red");
    }
  }
}

label_check();

//let arrLink = ["About", "Contact", "Prices", "hermann", "saad"];

let parent_nav_list = document.querySelector(".nav-list");
var allChildren = parent_nav_list.children; // all li in an array from nav list
//let siteMap = document.querySelector(".site-map");
console.log(allChildren);
for (let i = 0; i < allChildren.length; i++) {
  let siteMap = document.querySelector(".site-map");
  let list = document.createElement("li");
  list.textContent = allChildren[i].textContent;
  siteMap.appendChild(list);
}

let b = document.querySelector(".saad");
console.log(b.hidden);
