//Get the children of the element with id "wrapper"
let wrapperKids = document.getElementById("wrapper").children;
console.log(wrapperKids);
console.log(wrapperKids.length);

//Iterate over them and print their children and how many are they
for (let i=0; i<wrapperKids.length; i++) {
    console.log(wrapperKids[i].children, wrapperKids[i].children.length);
}

//Next, we need to find which from the children of the element with id wrapper has the highest number of classes.
//For example, if one element has 2 classes and another has 3 classes - the one with 3 classes has the highest number of classes.
//Let's write a function that returns an object that contains the element with the most classes and the total number of classes.
//in case the wrapper is empty, the return object.longestLength attribute would be null.  
const highestClass = (something) => {
    let longestLength;
    
    let minLength = 0;
    for (let i=0; i<something.length; i++) {
        if (something[i].classList.length>=minLength) {
            longestLength = something[i];
        }
        else {
            longestLength = null;
        }        
    }

    return { longestLength };   
};

console.log(highestClass(wrapperKids));