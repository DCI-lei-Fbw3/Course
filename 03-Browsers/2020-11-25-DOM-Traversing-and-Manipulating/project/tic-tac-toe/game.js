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
				field.id = this.generateID(h, w);
				//field.textContent = `${h}${w}`;
				row.append(field);
			}
		}

		return board;
	}
}

let g = new Game(3,3);

let board = document.getElementById("board");
board.innerHTML = '';
board.append(g.board());
