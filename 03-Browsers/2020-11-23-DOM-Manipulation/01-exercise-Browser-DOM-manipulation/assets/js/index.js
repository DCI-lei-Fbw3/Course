const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  },
  {
	title: "You do not know Javascript",
	author: "Kyle Simpson",
	alreadyRead: false,
	img: "https://images-na.ssl-images-amazon.com/images/I/51llKt2oJEL._SX333_BO1,204,203,200_.jpg"
  },
  {
	title: "The Alienist",
	author: "Caleb Carr",
	alreadyRead: true,
	img: "https://images-na.ssl-images-amazon.com/images/I/51o-W5+a8FL._SX323_BO1,204,203,200_.jpg"
  }
];
  //let pageTitle = document.getElementsByClassName("text-center");
//   let pageTitle = document.querySelector(".text-center");
//   pageTitle.innerHTML = "Shih-chen book list";
//   function sortAuthor () {
//   for (i=0; i<book.length; i++) {

//   }
// }

//   let bookList = document.querySelector(".book-list");
//   books.forEach(book=>{

//   let bookListItem = document.createElement("li");
//   bookListItem.classList.add("book", "card", "mb-3"); 
  
//   //added image section
//   let bookCardImage = document.createElement("img");
//   bookCardImage.classList.add("card-img-top");
  
//   let bookCardSection = document.createElement("section");
//   bookCardSection.classList.add("card-body");

//   let bookCardFooter = document.createElement("footer");
//   bookCardFooter.classList.add("card-footer", "text-right");

//   let bookTitleHeading = document.createElement("h2");
//   bookTitleHeading.classList.add("book-title");
//   bookTitleHeading.textContent =book.title;
//   console.log("haha!");
  
//   let bookAuthorParagraph = document.createElement("p");
//   bookAuthorParagraph.classList.add(
//     "book-author",
//     "card-subtitle",
//     "text-muted",
//     "small",);
// });

const libraryBuild = () => {
function sort() {
  let sortAutor = [];
  for (let i = 0; i < books.length; i++) {
    sortAutor.push(books[i].author);
  }
  return sortAutor;
}
let sortarr = sort();
let sortReverse = [];
for (let i = 0; i < sortarr.length; i++) {
  let a = sortarr[i].split(" ").reverse().join(", ");
  sortReverse.push(a);
}

//reverse the author's name from firstName lastName to lastName firstName
for (let i = 0; i < books.length; i++) {
  books[i].author = sortReverse[i];
}
books.sort(function (a, b) {
  if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
  else return 1;
});

for (let i = 0; i < books.length; i++) {
  //get to the .book-list 	
  let bookListRow = document.querySelector(".book-list");
  //creat the li item and create class list for li
  let firstList = document.createElement("li");
  //use the bootstrap feature to have media query
  firstList.classList = "col-sm-12 col-md-4 col-lg-6 d-flex justify-content-center";
  
  //set the big card using Bootstrap
  let divCardOne = document.createElement("div");
  //use divCardOne.classList.add () method does not seem to work.
  divCardOne.classList = "card-one mb-4";
  divCardOne.setAttribute("style", "width: 15rem; height: 500px");
  
  // merge the the big card inside the <li> item into the previously created div
  let cardOneWrap = firstList.appendChild(divCardOne);

  // create image tag and its attribute of src
  let setImage = document.createElement("img");
  setImage.src = books[i].img;
  setImage.className ="card-img-top";
  setImage.setAttribute("style", "height:300px;  border: 2px solid black");
  // merge the  image inside the list item
  cardOneWrap.appendChild(setImage);
 
  //set the cardbody after the image is set
  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  //add this div to cardOneWrap, which is appended to li
  let cardBodyWrap = cardOneWrap.appendChild(cardBody);
  //create the book title and append it to cardBodyWrap
  let setCardTitle = document.createElement("h5");
  setCardTitle.className = "card-title";
  setCardTitle.textContent = books[i].title;
  cardBodyWrap.appendChild(setCardTitle);
  let setCardText = document.createElement("p");
  setCardText.className = "card-text";
  setCardText.textContent = books[i].author;
  cardBodyWrap.appendChild(setCardText);

  //set cardFooter by creating another div
  let cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  //the following two lines are not necessary
//   let sibleCardFooter = document.getElementsByClassName("card-footer");
//   console.log(sibleCardFooter);
  //create a button
  cardFooter.setAttribute("style", "height:60px; border: 3px");
  let button = document.createElement("a");
  if (books[i].alreadyRead === true) {
	//use bootstrap to create different colors  
    button.classList = "btn btn-success float-right";
    button.textContent = "Read";
  }
  if (books[i].alreadyRead === false) {
    button.classList = "btn btn-secondary float-right";
    button.textContent = "To read";
  }
  let cardFooterWrap = cardOneWrap.appendChild(cardFooter);
  cardFooterWrap.appendChild(button);
  //bookRowList = document.querySelector(".book-list"), append everything back to the li
  bookListRow.appendChild(firstList);  
}
};

libraryBuild();

//Rafaar Solution
// const showBooks = () => {
// 	let bookList = document.querySelector(".book-list");

// 	books.forEach((val, i) => {
// 		let li = document.createElement("li");
// 		li.className = "d-flex col-s-12 col-md-6 col-lg-3 p-3";
// 		let groupDiv = document.createElement("div");
// 		groupDiv.className = "card";
// 		let bodyDiv = document.createElement("div");
// 		bodyDiv.className = "card-body";
// 		let footerDiv = document.createElement("div");
// 		footerDiv.className = "card-footer";
// 		let img = document.createElement("img");
// 		img.className = "card-img-top";
// 		let link = document.createElement("a");
// 		link.href = val.img;
// 		let title = document.createElement("h5");
// 		title.className = "card-title";
// 		let author = document.createElement("p");
// 		author.className = "card-text";
// 		let read = document.createElement("p");

// 		let readyOrNot;
// 		const styleRead = (() => {
// 			if (val.alreadyRead) {
// 				read.className = "badge-pill badge-success float-right";
// 				readyOrNot = "Read";
// 			} else {
// 				read.className = "badge-pill badge-dark float-right";
// 				readyOrNot = "To read";
// 			}
// 		})();
// 		title.appendChild(document.createTextNode(val.title));
// 		author.appendChild(
// 			document.createTextNode(val.author.split(" ").reverse().join(", "))
// 		);
// 		read.appendChild(document.createTextNode(readyOrNot));
// 		bodyDiv.appendChild(title);
// 		bodyDiv.appendChild(author);
// 		img.setAttribute("src", val.img);
// 		link.appendChild(img);
// 		groupDiv.appendChild(link);
// 		groupDiv.appendChild(bodyDiv);
// 		groupDiv.appendChild(footerDiv);
// 		footerDiv.appendChild(read);
// 		li.appendChild(groupDiv);
// 		bookList.appendChild(li);

// 		img.style.width = "100%";
// 		img.style.height = "300px";
// 		img.style.border = "3px black solid";
// 	});
// };
// showBooks();



