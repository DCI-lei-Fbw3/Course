/* copy pasted Thomas's solution */
class Game {
    constructor(height, width) {
        this.height = height;
        this.width  = width;
        this.history = [];
        this.pieceTypes = ['X', 'O'];
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
    
        for (let i in this.pieceTypes) {
            let type = this.pieceTypes[i];
            let p = document.createElement("td");
            p.id = type;
            p.className = "piece_" + type;
            row.appendChild(p);
        }
    
        return pieces;
    }
    
    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {string} marker
     */
    mark(x, y, marker) {
        let id = this.generateID(x, y);
        let field = document.getElementById(id);
    
        field.innerText = marker;
    }
    
    /**
     *
     * @param {HTMLElement} source
     * @param {HTMLElement} target
     */
    copy(source, target) {
        target.classList.value = '';
        source.classList.forEach((cssClass) => {
            target.classList.add(cssClass);
        });
    }
    
    /**
     *
     * @param {HTMLElement} source
     * @param {HTMLElement} target
     */
    move(source, target) {
        target.classList.value = '';
        source.classList.forEach((cssClass) => {
            console.log(cssClass);
            source.classList.remove(cssClass);
            target.classList.add(cssClass);
        });
    }
    
    
    makeOnclickHandler() {
        return (eventParam) => {
            let id = eventParam.target.id;
            this.history.push(id);
    
            if (this.history.length % 2 == 0) {
                let source = document.getElementById(this.history[this.history.length-2]);
                let boardOrPieces = source.parentElement.parentElement.parentElement.classList; // one of: "board", "pieces"
                let target = document.getElementById(this.history[this.history.length-1]);
    
                if (boardOrPieces.contains("pieces")) {
                    this.copy(source, target);
                } else if (boardOrPieces.contains("board")) {
                    this.move(source, target);
                }
            }
        }
    }
    } // /Game
    
    let game = new Game(3, 3);
    //game.pieceTypes = ['a', 'b', 'c'];
    
    let board = document.getElementsByClassName("board")[0];
    board.innerHTML = '';
    board.append(game.board());
    
    let pieces = document.getElementsByClassName("pieces")[0];
    pieces.innerHTML = '';
    pieces.appendChild(game.pieces());
    
    let gameContainer = document.getElementById("game");
    gameContainer.addEventListener("click", game.makeOnclickHandler());
    
    //let X = document.getElementById("X");
    //let O = document.getElementById("O");
    
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
    