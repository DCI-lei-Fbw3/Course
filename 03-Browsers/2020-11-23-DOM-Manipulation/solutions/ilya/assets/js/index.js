const books = [
  {
    title: "The Design of EveryDay Things",
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
  }
];

// using spread to have a pure function, keep in mind: shallow copy -> useful for 1D structures  
const booksSorted = function () {
  return [...books].sort((a, b) => {
    const aAuthorArr = a.author.split(' ');
    const bAuthorArr = b.author.split(' ');
    const aAuthorLastName = aAuthorArr[aAuthorArr.length - 1];
    const bAuthorLastName = bAuthorArr[bAuthorArr.length - 1];
    return aAuthorLastName > bAuthorLastName;
    //alternative to '>' : localeCompare()
  })
}();

// short one liner for this case: names consist of only two words
// [...books].sort((a, b) => a.author.split(' ')[1] > b.author.split(' ')[1]));

const bookList = document.getElementsByClassName('book-list')[0];

// populating the site
booksSorted.forEach(book => {

  // create li for book and add classes
  const li = document.createElement('li');
  li.className = 'book card mt-4';

  //necessary components
  const badge = book.alreadyRead ?
    `<span class="badge-pill badge-success status">Read</span>` :
    `<span class="badge-pill badge-secondary status">To Read</span>`;
  const author = book.author.split(' ').reverse().join(', ');
  // if multiple first names:
  /* 
  const authorArr = book.author.split(' ');
  const firstName = authorArr.slice(0, authorArr.length - 1);
  const lastName = book.author.split(' ').pop();
  const author = lastName + ', ' + firstName; 
  */

  // full structure of li
  li.innerHTML = `
                  <a href=${book.img}>
                    <img src=${book.img} class="card-img-top book-cover" alt="cover of ${book.title}">
                  </a>
                  <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-subtitle"><small class="text-muted">${author}</small></p>
                  </div>
                  <div class="card-footer text-right">
                    <small class="text-muted">${badge}</small>
                  </div>
                  `;


  // inserting the li/book into the ul/bookList
  bookList.appendChild(li);
}); 

// fix for mozilla img display, one could also change max-height to height in main.css:
[...document.getElementsByTagName('img')].forEach(img => img.style.height = '15rem');