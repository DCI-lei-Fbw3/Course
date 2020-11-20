let bodyTag = document.querySelector("body");
bodyTag.style.fontFamily = "Verdana";
let headerCenter = document.querySelector("h1");

headerCenter.style.textAlign = "center";
let menuHeading = document.getElementsByClassName("category");

for (head of menuHeading) {
	head.style.color = "#00bbff";
	head.style.fontStyle = "italic";
}
const colorGenerator = () => {
	let menuList = document.querySelectorAll(".food-category");

	menuList.forEach((ele, i) => {
		let randomColor = Math.floor(Math.random() * 16777215).toString(16);
		ele.style.backgroundColor = `#${randomColor}`;
		ele.style.padding = "10px";
		ele.style.margin = "10px";
		ele.style.width = "25%";
		ele.style.listStyleType = "none";
	});
};
colorGenerator();

let main = document.querySelector(".main");

main.style.display = "flex";
main.style.alignItems = "center";
main.style.justifyContent = "center";
let foodCat = document.getElementsByClassName("food-category");
let warning = document.querySelector("#warning");
warning.style.fontSize = "1.5rem";
warning.style.textAlign = "center";
let even = document.querySelectorAll("li.allergy-info:nth-child(even");
for (item of even) {
	item.style.backgroundColor = "#2f3020";
}
let allergies = document.querySelector(".allergies");

allergies.style.listStyleType = "none";
allergies.style.width = "40%";
let allergyInfo = document.querySelectorAll(".allergy-info");
for (item of allergyInfo) {
	item.style.width = "100%";
}
let footer = document.querySelector(".footer");

footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "center";
let footers = document.querySelectorAll(".food-desc");
console.log(footers);
for (foot of footers) {
	foot.style.width = "100px";
	foot.style.border = "5px solid #850066";
	foot.style.borderRadius = "50%";
	foot.style.margin = "10px";
	foot.style.textAlign = "center";
}
