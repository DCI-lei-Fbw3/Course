class Game {
	constructor(height, width) {
		this.height = height;
		this.width  = width;
		this.history = [];
	}

	generateID(x, y) {
		return x + "_" + y;
	}

	board() {
		let board = document.createElement("table");

		for (let h = 0; h<this.height; h++) {
			let row = document.createElement("tr");
			board.append(row);
			for (let w=0; w<this.width; w++) {
				let field = document.createElement("td");
				field.id = this.generateID(h+1, w+1);
				row.append(field);
			}
		}

		return board;
	}

	pieces() {
		let pieces = document.createElement("table");

		let row = document.createElement("tr");
		pieces.appendChild(row);

		let pieceTypes = ['X', 'O'];
		//pieceTypes = ['a', 'b', 'c'];
		for (let i in pieceTypes) {
			let type = pieceTypes[i];
			let p = document.createElement("td");
			p.id = type;
			p.className = "piece_" + type;
			row.appendChild(p);
		}

		return pieces;
	}

	mark(x, y, marker) {
		let id = this.generateID(x, y);
		let field = document.getElementById(id);

		field.innerText = marker;
	}

	copy(source, target) {
		target.classList.value = '';
		source.classList.forEach((cssClass) => {
			target.classList.add(cssClass);
		});
	}

	move(source, target) {
		target.classList.value = '';
		source.classList.forEach((cssClass) => {
			console.log(cssClass);
			source.classList.remove(cssClass);
			target.classList.add(cssClass);
		});
	}

	onclickHandler(eventParam) {
		let id = eventParam.target.id;
		console.log(id);
		// this.history.push(id);
		//console.log(this.history);
	}

	makeOnclickHandler() {
		return (eventParam) => {
			let id = eventParam.target.id;
			this.history.push(id);

			if (this.history.length % 2 == 0) {
				let source = document.getElementById(this.history[this.history.length-2]);
				let boardOrPieces = source.parentElement.parentElement.parentElement.id;
				let target = document.getElementById(this.history[this.history.length-1]);

				if (boardOrPieces == "pieces") {
					this.copy(source, target);
				} else if (boardOrPieces == "board") {
					this.move(source, target);
				}
			}
		}
	}

}

let game = new Game(3,3);

let board = document.getElementById("board");
board.innerHTML = '';
board.append(game.board());

let pieces = document.getElementById("pieces");
pieces.innerHTML = '';
pieces.appendChild(game.pieces());

let gameContainer = document.getElementById("game");
//gameContainer.addEventListener("click", game.makeOnclickHandler());
gameContainer.addEventListener("click", game.makeOnclickHandler());

let X = document.getElementById("X");
let O = document.getElementById("O");

//game.copy(X, document.getElementById("2_2"));
//game.copy(O, document.getElementById("1_1"));
//game.move(document.getElementById("1_1"), document.getElementById("1_3"));

// game.mark(2, 2, "X");
// game.mark(1, 1, "O");
// game.mark(3, 3, "X");
// game.mark(3, 1, "O");
// game.mark(2, 1, "X");
// game.mark(2, 3, "O");
// game.mark(1, 2, "X");
// game.mark(3, 2, "O");
// game.mark(1, 3, "X");
