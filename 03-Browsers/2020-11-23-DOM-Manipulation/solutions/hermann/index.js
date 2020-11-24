const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

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

for (let i = 0; i < books.length; i++) {
  books[i].author = sortReverse[i];
}
books.sort(function (a, b) {
  if (a.author.toLowerCase() < b.author.toLowerCase()) return -1;
  if (a.author.toLowerCase() > b.author.toLowerCase()) return 1;
});

for (let i = 0; i < books.length; i++) {
  let rowBookList = document.querySelector(".book-list");
  // set the li item
  let firstList = document.createElement("li");
  firstList.classList =
    "col-sm-12 col-md-6 col-xl-3 d-flex justify-content-center";
  //set the big card using Bootstrap
  let divCardOne = document.createElement("div");
  divCardOne.classList = "card one mb-4";
  divCardOne.setAttribute("style", "width: 15rem; height: 400px");
  // merge the the big card inside the liste item
  let cardOneWrap = firstList.appendChild(divCardOne);
  // set the image
  let setImage = document.createElement("img");
  setImage.src = books[i].img;
  setImage.classList = "card-img-top";
  setImage.setAttribute("style", "height:220px;  border: 2px solid black");
  // merge the  image inside the liste item
  cardOneWrap.appendChild(setImage);
  let cardBody = document.createElement("div");
  cardBody.classList = "card-body";
  let cardBodyWrap = cardOneWrap.appendChild(cardBody);
  let setCardTitle = document.createElement("h5");
  setCardTitle.classList = "card-title";
  setCardTitle.textContent = books[i].title;
  cardBodyWrap.appendChild(setCardTitle);
  let setCardText = document.createElement("p");
  setCardText.classList = "card-text";
  setCardText.textContent = books[i].author;
  cardBodyWrap.appendChild(setCardText);
  //
  let cardFooter = document.createElement("div");
  cardFooter.classList = "card-footer";
  let sibleCardFooter = document.getElementsByClassName("card-footer");
  console.log(sibleCardFooter);
  let button = document.createElement("a");

  if (books[i].alreadyRead === true) {
    button.classList = "btn btn-success float-right";
    button.textContent = "Read";
  }
  if (books[i].alreadyRead === false) {
    button.classList = "btn btn-secondary float-right";
    button.textContent = "To read";
  }
  let cardFooterWrap = cardOneWrap.appendChild(cardFooter);
  cardFooterWrap.appendChild(button);
  rowBookList.appendChild(firstList);
}
