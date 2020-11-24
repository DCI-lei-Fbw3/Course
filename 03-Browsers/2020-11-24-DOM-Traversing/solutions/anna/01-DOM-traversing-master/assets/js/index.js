let h1Heading = document.querySelector("h1.heading");
let header = h1Heading.closest("header");
header.style.border = "5px solid grey";

if (document.querySelector("section.info .info-package")) {
  let packageTitles = document.querySelectorAll(".package-title");
  for (packageTitle of packageTitles) {
    packageTitle.previousElementSibling.style.border = "2px solid blue";
  }
}

let labels = document.getElementsByTagName("label");
for (label of labels) {
  if (label.className === "mild") label.style.border = "2px solid yellow";
  else if (label.className === "intense")
    label.style.border = "2px solid orange";
  else label.style.border = "2px solid red";
}

let navList = document.querySelector(".nav-list");
let footerList = document.querySelector(".site-map");

footerList.innerHTML = navList.innerHTML;
