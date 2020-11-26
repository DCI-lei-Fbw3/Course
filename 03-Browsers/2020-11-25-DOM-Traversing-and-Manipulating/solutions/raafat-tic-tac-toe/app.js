let cells = document.querySelectorAll(".cell");
let resetButton = document.querySelector(".reset");
let winner = document.querySelector(".winner");
let start = "X";
let counter = 0;
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
		console.log(temp);
		if (temp === "XXX") {
			winner = "X";
		} else if (temp === "OOO") {
			winner = "O";
		}
	});
	return winner;
};
