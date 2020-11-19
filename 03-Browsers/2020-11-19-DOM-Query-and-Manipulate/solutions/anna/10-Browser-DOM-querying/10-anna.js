let body = document.querySelector("body");
body.style.fontFamily = "Arial";

let h1 = document.querySelector("h1");
h1.style.textAlign = "center";

let menuHeadings = document.getElementsByClassName("category");
for (let menuHeading of menuHeadings) {
  menuHeading.style.color = "green";
  menuHeading.style.fontStyle = "italic";
}

function _colorGenerator_() {
  let transparency = Math.random();
  function randomRGB() {
    return Math.floor(Math.random() * 256 + 1);
  }
  let num1 = randomRGB();
  let num2 = randomRGB();
  let num3 = randomRGB();
  return `rgba(${num1}, ${num2}, ${num3}, ${transparency})`;
}

let foodCatLists = document.querySelectorAll("ul.food-category");
let wideScreen = window.matchMedia("(min-width: 700px)");

updateFoodCatLists();
wideScreen.addEventListener("change", updateFoodCatLists);

function updateFoodCatLists() {
  for (let foodCatList of foodCatLists) {
    foodCatList.style.backgroundColor = _colorGenerator_();
    foodCatList.style.margin = "20px";
    if (wideScreen.matches) {
      foodCatList.style.display = "inline-block";
    } else {
      foodCatList.style.display = "block";
    }
  }
}

let warning = document.getElementById("warning");
warning.style.fontSize = "20px";
warning.style.fontFamily = "Verdana";

let evenAllergyItems = document.querySelectorAll(
  ".allergy-info:nth-child(even)"
);

for (let allergyItem of evenAllergyItems) {
  allergyItem.style.backgroundColor = "red";
}

let allAllergyItems = document.querySelectorAll(".allergy-info");
allAllergyItems.forEach((dotPoint) => (dotPoint.style.listStyleType = "none"));

//styling for each individual change
let allergyWarning = document.getElementsByClassName("allergy-warning")[0];
allergyWarning.style.display = "flex";
allergyWarning.style.flexDirection = "column";
allergyWarning.style.alignItems = "center";
allergyWarning.style.listStyleType = "none";

//lumping styles together
let footer = document.querySelector(".footer");
footer.style = "display: flex; justify-content: space-evenly;";

let footerItems = document.querySelectorAll("section.food-desc");
//using forEach
footerItems.forEach((item) => {
  item.style.height = "100px";
  item.style.width = "100px";
  item.style.border = "3px solid green";
  item.style.borderRadius = "50%";
  item.style.display = "flex";
  item.style.justifyContent = "center";
  item.style.alignItems = "center";
});
