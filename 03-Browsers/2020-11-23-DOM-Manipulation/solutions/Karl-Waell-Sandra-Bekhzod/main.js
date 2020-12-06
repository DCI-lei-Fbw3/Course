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

// an array of objects  --> each object will be called book


/* 
THIS IS THE ORIGINAL CODE FROM BOOTSTRAP:
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
*/

// inside this function we will select all necessary elements, and assign the values from the books array: 
function renderBook() {
  // we start by selecting the book-list class in html and assign it to a variable:
  let bookList = document.querySelector(`.book-list`);

  // this outer loop will create the 4 cards and the two child elements within: 
  for (i = 0; i < 4; ) {
    //this is the outer div: 
    let divBook = document.createElement("div");
    // we give it a class "card", which comes from bootstrap: 
    divBook.classList.add("card");
    divBook.style.display = "flex";
    divBook.style.alignItems = "center"
    divBook.style.width = "200px"
    // we append that outer div to the book-list element in html: 
    bookList.append(divBook);
    // this is the first child element of the div: 
    let img = document.createElement("img");
    // the set attribute can be used to add an image to an element: 
                  //1st argument indicates that it is a source attribute
                  // 2nd argument takes the value from the array
    img.setAttribute("src", books[i].img);
    img.style.width = "100px"
    img.style.height = "100px"
    //we create the inner div, and assign the classes from bootstrap to it: 
    let innerDiv = document.createElement("div");
    img.classList.add(`card-img-top`);
    innerDiv.classList.add("card-body");
    // we attach the created elements to the book-list(divBook): 
    divBook.append(img);
    divBook.append(innerDiv);
    
    // this is a nested loop to create the 3 elements (1 of each) inside the inner div: 
    for (j=0; j<1;) {
    // we create those 3 elements: 
    let h5 = document.createElement("h5");
    let p = document.createElement("p");
    let a = document.createElement("a");
    // we append them to the innerDiv:
    innerDiv.append(h5);
    innerDiv.append(p);
    innerDiv.append(a);
    // we add the corresponding bootstrap classes to each of them: 
    h5.classList.add("card-title");
    p.classList.add("card-text");
    a.classList.add("btn");
    // we don't know why, but even though we loop only once in this nested loop, we still require the increment, otherwise it's not working: 
    j++
    }

    i++;
  }

// the third for loop is to assign the values from the books array to the elements found inside the innerDiv: 
// we start by selecting the class from the previously created innerDivs, which gives us an HTML collection: 
let cardBody = document.getElementsByClassName('card-body')
// because it is an HTML collection we have to loop through it, to reach all innerDivs: 
for (i=0; i <cardBody.length; i++){
  // we select the classes of the card: 
  let cardTitle = document.getElementsByClassName('card-title')
  // and assign the value to them from the books array:
  cardTitle[i].textContent = books[i].title
  let cardText = document.getElementsByClassName('card-text')
  // here we take take the value of author from the books array (which is a string), then split that string, reverse it, and join it back together separated by a coma: 
  cardText[i].textContent = books[i].author.split(" ").reverse().join(", ");
  let btn = document.getElementsByClassName('btn')
  // this at first, is populated by a boolean value: 
  btn[i].textContent = books[i].alreadyRead
  // we need the if statement to create different styles depending on whether the book was read or not: 
  // (because it is "textContent" "true" has to be in "")
  if (btn[i].textContent == "true"){
    btn[i].style.backgroundColor = 'green'
    btn[i].textContent = "read"
  } 
  else {btn[i].style.backgroundColor = 'grey'
  btn[i].textContent = "To read"} 
}

}
renderBook();