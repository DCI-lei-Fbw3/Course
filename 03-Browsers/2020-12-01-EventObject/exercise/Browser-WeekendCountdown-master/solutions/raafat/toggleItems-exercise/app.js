let items = document.querySelectorAll("a");
let alert = document.querySelector("#alert");
let button = document.querySelector("button");
let groupList = document.querySelector(".list-group");

for (const item of items) {
	item.addEventListener("click", (event) => {
		let selectItem = event.target.innerHTML;
		alert.classList.remove("d-none");
		alert.innerHTML = `<p>you have selected ${selectItem}</p>`;
	});
}
button.addEventListener("click", (event) =>
	groupList.classList.toggle("d-none")
);
