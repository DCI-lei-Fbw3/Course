let listItems = document.querySelectorAll(".list-group-item");

for (const item of listItems) {
	item.addEventListener("mouseenter", (event) => {
		let child = event.target.querySelector(".drop-menu");
		child.classList.add("menu-toggle");
	});
	item.addEventListener("mouseleave", (event) => {
		let child = event.target.querySelector(".drop-menu");
		child.classList.remove("menu-toggle");
	});
}
