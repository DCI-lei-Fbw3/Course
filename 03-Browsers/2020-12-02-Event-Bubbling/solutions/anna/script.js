let navHeaders = document.querySelectorAll("#navbar div");

for (let navHeader of navHeaders) {
  navHeader.addEventListener("click", dropdown);
}

function dropdown(event) {
  removeAllSelected();
  this.classList.add("selected");
  let name = event.target.textContent.split("'")[0].toLowerCase();
  let dropdownID = `${name}-items`;
  let dropdown = document.getElementById(dropdownID);
  dropdown.classList.add("selected");
}

function removeAllSelected() {
  let selectedElements = document.querySelectorAll(".selected");
  for (let element of selectedElements) {
    element.classList.remove("selected");
  }
}
