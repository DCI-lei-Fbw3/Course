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

// an array of objects  --> each object will be called book 

// #  
// console.log(books[0].title)

/* 
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> 
*/

// create 4 divs to which we will add the class card (bootstrap) 
// inside the div we will add: 
// the image to the img tag 
// author to the h5 element 
// the title to p tag 
// read to the a tag
// to assign the objects to the corresponding elements 

function renderBook(){
  let bookList = document.querySelector(`.book-list`);
  
    for (i=0; i<4;){
      let divBook = document.createElement('div'); 
      divBook.classList.add('card')
      bookList.append(divBook);
      let img = document.createElement("img");
      let innerDiv = document.createElement("div");
      img.classList.add(`card-img-top`)
      innerDiv.classList.add("card-body")
      divBook.append(img);
      divBook.append(innerDiv);
   

      //! THIS NESTED FOR LOOP IS NOT WORKING!!!!! 
        // for (j=0; j<4;) {                      
        // let h5 = document.createElement("h5");
        // let p = document.createElement("p");
        // let a = document.createElement("a");
        // innerDiv.append(h5);
        // innerDiv.append(p);
        // innerDiv.append(a);
        // h5.classList.add("card-title");
        // p.classList.add("card-text");
        // a.classList.add("btn btn-success");
        // j++;
        // }
        
      i++;
    }  
    
    /* let render = books.forEach(book => {
      // append each separate property inside the book, to the corresponding elements; 
      p.append(book.title) 
    }) */
  
}
renderBook();


// FOR NEXT WEEKEND 

// FIX NESTED FOR LOOP 
// ADD ALL THE PROPERTIES FROM THE ARRAY ITEMS 
// DO STYLING AT THE END TO MAKE IT APPEAR IN A ROW 
// REVERSE THE AUTHOR NAME 