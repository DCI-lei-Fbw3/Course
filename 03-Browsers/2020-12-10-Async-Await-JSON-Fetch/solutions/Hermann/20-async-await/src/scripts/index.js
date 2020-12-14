import "../styles/main.scss";
import "babel-polyfill";
const modal = document.getElementById("myModal");
function retournePromesse() {
  return new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(modal);
    }, 3000);
  });
}

async function operationAsync() {
  const attentAsync = await retournePromesse();
  attentAsync.style.display = "block";
}
operationAsync();
modal.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "close":
    case "modal":
      modal.style.display = "none";
      break;
  }
});

function alertPromise() {
  return new Promise((resolve) => {
    let button = document.querySelector("button");
    resolve(
      button.addEventListener("mouseout", function () {
        alert("Continue to subscribe");
      }),
      button.addEventListener("mouseover", function () {
        this.style.background = "blue";
        this.style.color = "white";
      })
    );
  });
}

async function asyncAlert() {
  let one = await alertPromise();
  console.log(one);
}

asyncAlert();
