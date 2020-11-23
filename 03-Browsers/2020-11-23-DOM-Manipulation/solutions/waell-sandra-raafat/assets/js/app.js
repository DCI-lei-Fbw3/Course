import { books } from "./index.js";

const showBooks = () => {
	let bookList = document.querySelector(".book-list");

	books.forEach((val, i) => {
		let li = document.createElement("li");
		li.className = "d-flex col-s-12 col-md-6 col-lg-3 p-3";
		let groupDiv = document.createElement("div");
		groupDiv.className = "card";
		let bodyDiv = document.createElement("div");
		bodyDiv.className = "card-body";
		let footerDiv = document.createElement("div");
		footerDiv.className = "card-footer";
		let img = document.createElement("img");
		img.className = "card-img-top";
		let link = document.createElement("a");
		link.href = val.img;
		let title = document.createElement("h5");
		title.className = "card-title";
		let author = document.createElement("p");
		author.className = "card-text";
		let read = document.createElement("p");

		let readyOrNot;
		const styleRead = (() => {
			if (val.alreadyRead) {
				read.className = "badge-pill badge-success float-right";
				readyOrNot = "Read";
			} else {
				read.className = "badge-pill badge-dark float-right";
				readyOrNot = "To read";
			}
		})();
		title.appendChild(document.createTextNode(val.title));
		author.appendChild(
			document.createTextNode(val.author.split(" ").reverse().join(", "))
		);
		read.appendChild(document.createTextNode(readyOrNot));
		bodyDiv.appendChild(title);
		bodyDiv.appendChild(author);
		img.setAttribute("src", val.img);
		link.appendChild(img);
		groupDiv.appendChild(link);
		groupDiv.appendChild(bodyDiv);
		groupDiv.appendChild(footerDiv);
		footerDiv.appendChild(read);
		li.appendChild(groupDiv);
		bookList.appendChild(li);

		img.style.width = "100%";
		img.style.height = "300px";
		img.style.border = "3px black solid";
	});
};
showBooks();
