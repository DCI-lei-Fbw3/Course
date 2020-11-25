class Game {
	constructor(height, width) {
		this.height = height;
		this.width  = width;
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
			p.className = "piece_" + type;
			p.textContent = type;
			row.appendChild(p);
		}

		return pieces;
	}

	mark(x, y, marker) {
		let id = this.generateID(x, y);
		let field = document.getElementById(id);
		field.innerText = marker;
	}
}

let game = new Game(3,3);

let board = document.getElementById("board");
board.innerHTML = '';
board.append(game.board());

let pieces = document.getElementById("pieces");
pieces.innerHTML = '';
pieces.appendChild(game.pieces());

game.mark(2, 2, "X");
game.mark(1, 1, "O");
game.mark(3, 3, "X");
game.mark(3, 1, "O");
game.mark(2, 1, "X");
game.mark(2, 3, "O");
game.mark(1, 2, "X");
game.mark(3, 2, "O");
game.mark(1, 3, "X");
