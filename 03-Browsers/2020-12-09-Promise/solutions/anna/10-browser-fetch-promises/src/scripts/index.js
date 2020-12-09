// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/

// \/ All of your javascript should go here \/
let modal = document.getElementById("myModal");
let closeButton = document.querySelector("span.close");
closeButton.addEventListener("click", hideModal);

function showModal() {
  modal.style.display = "block";
}
function hideModal() {
  modal.style.display = "none";
}

//simple timeout
setTimeout(showModal, 1000);

// Including promise/resolve style
// function wait(milliseconds) {
//   // after the time out the callback "resolve" will be called, - that callback yields a fullfilled promise.
//   return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
// }
// wait(1000).then(showModal);
