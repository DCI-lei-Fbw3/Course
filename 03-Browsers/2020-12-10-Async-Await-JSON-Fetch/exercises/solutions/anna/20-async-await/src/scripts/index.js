import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");
// ORIGINAL CODE
// let promiseOfModal = new Promise(function (resolve) {
//     window.setTimeout(function () {
//         resolve(modal)
//     }, (1000 * 60));
// });

// promiseOfModal.then(function(val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

console.log("TEST");

async function displayModal() {
  let modalTimeout = new Promise((resolve) => {
    window.setTimeout(() => {
      resolve("Resolved!");
    }, 60 * 1000);
  });
  await modalTimeout;
  modal.style.display = "block";
}

displayModal();

modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

let button = document.querySelector("#continue.btn");

button.addEventListener("mouseover", () => {
  buttonChange();
  showAlert();
});

async function animationTimeout(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, milliseconds);
  });
}

async function buttonChange() {
  await animationTimeout(200);
  button.style.backgroundColor = "red";
}

async function showAlert() {
  await animationTimeout(400);
  alert("Continue to Subscribe");
}
