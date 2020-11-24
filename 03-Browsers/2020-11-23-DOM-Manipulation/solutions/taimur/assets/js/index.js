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


//surname should appear first
reverseName = (name) => {
  // Split the sting obj to an array
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  let authorName = name.split(" ");
  // Reverse elements of array
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
  authorName.reverse();
  // Join the array to a new string
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  let reversedName = authorName.join(", ");
  return reversedName;
}

// Sort object based on surname, use String.prototype.localeCompare for managing case and special accents
books.sort((a, b) => {
  const surnameA = reverseName(a.author);
  const surnameB = reverseName(b.author);
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  return surnameA.localeCompare(surnameB);
});

const bookList = document.querySelector(".book-list");
books.forEach(book => {
  // Create list item to contain book info
  const bookListItem = document.createElement("li");
  bookListItem.classList.add("book", "card", "mb-3");

  // Create a section to contain the card body
  const bookCardSection = document.createElement("section");
  bookCardSection.classList.add("card-body");

  // Create a footer to contain card footer
  const bookCardFooter = document.createElement("footer");
  bookCardFooter.classList.add("card-footer", "text-right");

  // Create heading to contain book title
  const bookTitleHeading = document.createElement("h2");
  bookTitleHeading.classList.add("book-title", "card-title", "h6");
  bookTitleHeading.textContent = book.title;

  // Create paragraph to contain book author
  const bookAuthorParagraph = document.createElement("p");
  bookAuthorParagraph.classList.add(
    "book-author",
    "card-subtitle",
    "text-muted",
    "small"
  );
  bookAuthorParagraph.textContent = reverseName(book.author);

  // Create img to contain book cover
  const bookCoverImg = document.createElement("img");
  bookCoverImg.classList.add("book-cover", "card-img-top", "img-fluid");
  bookCoverImg.src = book.img;

  // Create paragraph to contain status
  const readStatusSpan = document.createElement("span");
  readStatusSpan.classList.add(
    "status",
    "badge-pill",
    "badge-secondary",
    "small"
  );
  readStatusSpan.textContent = "To read";

  // Change status paragraph if read
  if (book.alreadyRead) {
    readStatusSpan.classList.replace("badge-secondary", "badge-success");
    readStatusSpan.textContent = "Read";
  }

  // Compose elements
  bookCardSection.appendChild(bookTitleHeading);
  bookCardSection.appendChild(bookAuthorParagraph);
  bookCardFooter.appendChild(readStatusSpan);
  bookListItem.appendChild(bookCoverImg);
  bookListItem.appendChild(bookCardSection);
  bookListItem.appendChild(bookCardFooter);
  bookList.appendChild(bookListItem);
});