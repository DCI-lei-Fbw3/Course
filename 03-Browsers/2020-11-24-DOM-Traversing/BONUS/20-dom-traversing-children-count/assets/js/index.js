//Get the children of the element with id "wrapper"
let wrapperKids = document.getElementById("wrapper").children;
console.log(wrapperKids);
console.log(wrapperKids.length);

//Iterate over them and print their children and how many are they
for (let i=0; i<wrapperKids.length; i++) {
    console.log(wrapperKids[i].children, wrapperKids[i].children.length)
}

//write a function to return an object the element with the most classes and the total number of the class
const highestClass = (something) => {
    let minLength = 0;
    let longestLength;
    for (let i=0; i<something.length; i++) {
        if (something[i].classList.length>minLength) {
            //console.log(something[i].classList.length);
            longestLength = something[i];
        }
        else {
            return { longestLength };
            //return this as an object
        }
    }
}

console.log(highestClass(wrapperKids));