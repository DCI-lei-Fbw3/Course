//Problem 1 

// we select h1 with a querySelector
const h1 = document.querySelector('h1');
// we use the closest method to search for the closest "header" from the h1 and store this in a variable.
const header = h1.closest('header');
header.style.borderBottom = "5px solid grey";


//Problem 2 

//We select the 'package-title' class with the 'getElementsByClassName':
const ListItems = document.getElementsByClassName('package-title');

//We then loop through this variable using a for loop: 
for (let i = 0; i < ListItems.length; i++) {
    //Here we select an element and then choose it's previous element and save it to a variable: 
    const previousSib = ListItems[i].previousElementSibling;
    previousSib.style.border = "2px solid black"
    }


// Problem 3    


//First we select all "label" tags, which creates an array-like object called HTML - collection: 
const labelStyle = document.querySelectorAll(`label`);
// to access the items in the collection, we create a for loop: 
for( let h = 0; h < labelStyle.length; h++) {
// we create an if statement and use the "contains" method to check if it contains a specific class: 
    if (labelStyle[h].classList.contains(`mild`)) {
        labelStyle[h].style.borderBottom = "2px solid yellow"
    } else if(labelStyle[h].classList.contains(`intense`)) {
        labelStyle[h].style.borderBottom = "2px solid orange"
    } else labelStyle[h].style.borderBottom = "2px solid red"
}

// Problem 4

// First we select the nav-list class: 
const navList = document.querySelector(".nav-list");

// Next we cloned the CHILDREN of the nav-list using cloneNode(true) method: 
var clone = navList.cloneNode(true);

// here create a variable in which we store the children of the clone (in this case the list elements), which is an HTML Collection: 
const kids = clone.children;

// we create a for loop to iterate through the kids variable in order to style each item of the collection: 
 for (let i=0; i<kids.length; i++){
     kids[i].style.padding = "20px"
 }

// here we select the class site-map to which we are adding the clone: 
document.querySelector(".site-map").appendChild(clone);


