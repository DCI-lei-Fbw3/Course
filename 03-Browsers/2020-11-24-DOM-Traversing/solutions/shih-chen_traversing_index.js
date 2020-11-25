let headerBorder = document.querySelector("h1.heading").closest("header");
headerBorder.setAttribute("style", "border: solid green 5px");

let infoPackage = document.querySelector("section.info .info-package");
if (infoPackage) {
    let packTitle = document.querySelectorAll(".package-title")
    for (let i=0; i<packTitle.length; i++){
        let imgItem = packTitle[i].previousElementSibling;
        //imgItem.style.border = "solid green 2px" is another way to achieve this;
        imgItem.setAttribute("style", "border: solid green 2px");
    };
};

let labelMatch = document.getElementsByTagName("label");
for (itemInLabel of labelMatch ) {
  if (itemInLabel.className == "mild") {
      itemInLabel.setAttribute("style", "border: solid yellow 2px"); 
  } 
  else if (itemInLabel.className == "intense") {
      itemInLabel.setAttribute("style", "border: solid red 2px");
  }
  else {
      itemInLabel.setAttribute("style", "border: solid orange 2px");
}
}

let navList = document.querySelector(".nav-list");
let mapList = document.querySelector(".site-map");

mapList.innerHTML = navList.innerHTML;
