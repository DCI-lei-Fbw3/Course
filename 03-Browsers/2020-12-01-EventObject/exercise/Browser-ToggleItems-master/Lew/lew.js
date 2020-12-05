//*We can have this code here or have the 'onclick="list()"' setting in the button tag in the HTML
// let button = document.getElementById('button')
// button.addEventListener('onclick', list)

function list() {

    let theList = document.getElementById('myDiv');
    if (theList.style.display === 'none') {
        theList.style.display = 'block';
    } else {
        theList.style.display = 'none';
    }


    let butChange = document.querySelector('button');

    if (butChange.innerHTML === "Show Destinations") {
        butChange.innerHTML = "Hide Destinations";
    } else {
        butChange.innerHTML = "Show Destinations";
    }

}


//!Code Explained
/*
function list() {
    //*We are creating a variable and sorting the element with the ID to it
    let theList = document.getElementById('myDiv');
    //*Then we are saying that if the display is set to 'none' (Which will hide the code) execute the code inside of the cueley braces when clicked.
    if (theList.style.display === 'none') {
        //*Change the value of display to 'block' (Which will make the code reappear).
        theList.style.display = 'block';
    } else {
        //*And if clicked again set it back to display 'none'.
        theList.style.display = 'none';
    }


    //*Same descriptions as above.

    let butChange = document.getElementById('button');

    if (butChange.innerHTML === "Hide Destinations") {
        butChange.innerHTML = "Show Destinations";
    } else {
        butChange.innerHTML = "Hide Destinations";
    }

}
*/