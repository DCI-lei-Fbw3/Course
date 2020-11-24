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

function splitAuthorName(arrOfBooks) {
  for (let book of arrOfBooks) {
    let authorNames = book.author.split(" ");
    book.authorFirstName = authorNames[0];
    book.authorLastName = authorNames[authorNames.length - 1];
  }
}

function sortBySurname(arrOfBooks) {
  return arrOfBooks.sort((a, b) => {
    if (a.authorLastName > b.authorLastName) return 1;
    else return -1;
  });
}

function populateBooks(arrOfBooks) {
  let bookList = document.querySelector(".book-list");

  for (let book of arrOfBooks) {
    let newCardContainer = document.createElement("div");
    newCardContainer.classList =
      "col-xs-12 col-sm-6 col-lg-3 p-1 d-flex justify-content-center";

    let newCard = document.createElement("div");
    newCard.classList = "card book";

    let imageLink = document.createElement("a");
    imageLink.href = book.img;

    let bookImage = document.createElement("img");
    bookImage.src = book.img;
    bookImage.classList = "card-img-top book-cover";
    bookImage.alt = `Cover of ${book.title} by ${book.author}.`;
    imageLink.appendChild(bookImage);
    newCard.appendChild(imageLink);

    let cardBody = document.createElement("div");
    cardBody.classList = "card-body";

    let bookTitle = document.createElement("h5");
    bookTitle.classList = "card-title";
    bookTitle.textContent = book.title;
    cardBody.appendChild(bookTitle);

    let bookAuthor = document.createElement("p");
    bookAuthor.classList = "card-text text-muted small";
    bookAuthor.textContent = `${book.authorLastName}, ${book.authorFirstName}`;
    cardBody.appendChild(bookAuthor);

    newCard.appendChild(cardBody);

    let cardFooter = document.createElement("div");
    cardFooter.classList = "card-footer";

    let bookBadge = document.createElement("span");
    let isRead = book.alreadyRead;
    if (isRead) {
      bookBadge.textContent = "Read";
      bookBadge.classList =
        "badge badge-pill badge-success font-weight-normal float-right font-italic";
    } else {
      bookBadge.textContent = "To read";
      bookBadge.classList =
        "badge badge-pill badge-secondary font-weight-normal float-right font-italic";
    }
    cardFooter.appendChild(bookBadge);

    newCard.appendChild(cardFooter);

    newCardContainer.appendChild(newCard);
    bookList.appendChild(newCardContainer);
  }
}

splitAuthorName(books);
let sortedBooks = sortBySurname(books);
populateBooks(sortedBooks);
