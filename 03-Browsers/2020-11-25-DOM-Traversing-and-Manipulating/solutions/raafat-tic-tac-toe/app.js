let cells = document.querySelectorAll(".cell");
let resetButton = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let score = document.querySelector(".score");
let scoreX = document.querySelector(".Xscore");
let scoreO = document.querySelector(".Oscore");
let start = "X";
let counter = 0;
let scoreCounterX = 0;
let scoreCounterO = 0;
winner.innerHTML = `${start}'s turn`;

cells.forEach((cell) => {
	cell.addEventListener("click", () => {
		if (cell.innerHTML === "") {
			cell.innerHTML = start;
			start = start === "X" ? "O" : "X";
			counter++;
			winner.innerHTML = `${start}'s turn`;
		}
		if (checkWinner(cells)) {
			let result = checkWinner(cells);
			winner.innerHTML = `Player ${result} has won!`;
			cells.forEach((cell) => (cell.innerHTML = result));
			scoreFunction(result);
		} else if (counter === 9) {
			winner.innerHTML = `It's a tie, try again!`;
		}
	});
});

resetButton.addEventListener("click", () => {
	cells.forEach((cell) => {
		cell.innerHTML = "";
		start = "X";
		counter = 0;
	});
	winner.innerHTML = `${start}'s turn`;
});

let win = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const checkWinner = (cells) => {
	let winner = false;
	win.forEach((row) => {
		let temp = "";
		row.forEach((cell) => {
			temp += cells[cell].innerHTML;
		});

		if (temp === "XXX") {
			winner = "X";
		} else if (temp === "OOO") {
			winner = "O";
		}
	});
	return winner;
};

const scoreFunction = (fun) => {
	if (fun === "X") {
		scoreCounterX++;
		scoreX.textContent = scoreCounterX;
	} else if (fun === "O") {
		scoreCounterO++;
		scoreO.textContent = scoreCounterO;
	}
};

score.addEventListener("click", (e) => {
	scoreX.textContent = 0;
	scoreCounterX = 0;
	scoreO.textContent = 0;
	scoreCounterO = 0;
});
