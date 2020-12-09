class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.history = [];
  }

  board() {
    let boardContainer = document.getElementById("board");
    boardContainer.innerHTML = "";
    let gameboard = document.createElement("table");

    for (let i = 0; i < this.height; i++) {
      let newRow = document.createElement("tr");
      for (let x = 0; x < this.width; x++) {
        let newCell = document.createElement("td");
        newCell.id = `${i}_${x}`;
        newRow.appendChild(newCell);
      }
      gameboard.appendChild(newRow);
    }
    boardContainer.appendChild(gameboard);
  }

  generateID(x, y) {
    return `${x}_${y}`;
  }

  mark(x, y, string) {
    let targetCellId = this.generateID(x, y);
    let targetCell = document.getElementById(targetCellId);
    targetCell.textContent = string;
  }

  copy(source, target) {
    let sourceClass = source.className;
    target.className = sourceClass;
  }

  move(source, target) {
    this.copy(source, target);
    source.className = "";
  }

  makeOnClickHandler() {
    let gameContainer = document.getElementById("game");
    gameContainer.addEventListener("click", (event) =>
      this.onClickHandler(event)
    );
  }

  onClickHandler(event) {
    this.history.push(event.target); //Add element to history

    if (this.history.length === 2) {
      // Execute move or copy function when two elements have been clicked

      let sourceEl = this.history[0];
      let targetEl = this.history[1];
      let sourceSection = sourceEl.closest("div").id;

      if (sourceSection === "pieces") {
        this.copy(sourceEl, targetEl);
      } else if (sourceSection === "board") {
        this.move(sourceEl, targetEl);
      }

      this.history = []; //Reset history
    }
  }
}

let TTT = new Game(3, 3);
TTT.board();
TTT.makeOnClickHandler();
