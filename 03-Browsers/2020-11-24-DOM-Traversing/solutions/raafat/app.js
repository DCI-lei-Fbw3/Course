let header = document.querySelector(".heading");
header.parentElement.style.border = "5px solid red";

let packageTitle = document.querySelectorAll(".package-title");
packageTitle.forEach(
	(val) => (val.previousElementSibling.style.border = "5px solid purple")
);

let label = document.querySelectorAll("label");
label.forEach((val) => {
	if (val.classList.contains("mild")) {
		val.style.borderBottom = "2px solid yellow";
	}
	if (val.classList.contains("intense")) {
		val.style.borderBottom = "2px solid orange";
	} else {
		val.style.borderBottom = "2px solid red";
	}
});

let navBar = document.querySelector(".nav-list");
let mapSite = document.querySelector(".site-map");
mapSite.innerHTML = navBar.innerHTML;
