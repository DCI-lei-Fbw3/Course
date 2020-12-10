import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (1000 * 60));
});

promiseOfModal.then(function(val) {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
})

modal.addEventListener("click", (e) => {
    switch(e.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
})


let element = document.querySelector(".modal");

// async function wait(milliseconds) {
//    return window.setTimeout(() => element.style.display = "block")
// };

async function wait(milliseconds) {
    return window.setTimeout(modalWindow, milliseconds);
}

function modalWindow(){
    element.style.display = "block"; 
    console.log("inside callback");
}

console.log("Before wait")
wait(2000);

console.log("After wait")

// function without brackets is NAMING IT
// function with brackets is CALLING IT 

//2 
//* In the `main.scss` there is an animation on the "Continue" button on the page. 
//Create a promise which executes code upon the button's animation end. **You must use the `async await` syntax.** 