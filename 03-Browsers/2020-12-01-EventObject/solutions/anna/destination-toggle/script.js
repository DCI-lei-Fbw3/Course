let destinationList = document.getElementById("destination-list");
let listItems = document.getElementsByClassName("list-group-item");

let toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", toggleDisplay);

let selectionBox = document.getElementById("selection-box");
selectionBox.style.display = "none";

function toggleDisplay() {
  let currentDisplay = destinationList.style.display;
  destinationList.style.display = currentDisplay === "none" ? "block" : "none";
}

for (let listItem of listItems) {
  listItem.addEventListener("click", () => {
    selectionBox.style.display = "block";
    let currentlySelected = document.getElementsByClassName("active");
    currentlySelected[0].classList.remove("active");
    listItem.classList.add("active");
    selectionBox.textContent = `You have selected ${listItem.textContent}`;
  });
}
