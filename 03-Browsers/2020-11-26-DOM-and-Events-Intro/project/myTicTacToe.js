// //create a class, which is a class obstructor
// class Game {
//     // we create a constructor class that takes two arguments: width & height, which will be used to determine the TD elements; 
//     constructor(rows, columns) {
//         this.rows = rows
//         this.columns = columns;
//     }
//     // Get the DIV element you require in which you can append the table you create here: getElementbyID('board')
//     // append 'board' with the table you create in the createTable METHOD
//     board() {
//         let table = document.createElement("table");

//         for(let i=1; i=<this.rows; i++) {
//             let tr = document.createElement("tr");
//             table.append(tr);
//             for (let j=1; j=<this.columns; j++) {
//                 let td = document.createElement("td");
//                 td.id = this.generateID(i, j);                
//                 tr.append(td);
//             }
//         }         
//         return table;    
//     }

//     generateID (x, y) {
//         x=this.rows;
//         y=this.columns;
//       return x + "_" + y; 
//     }

//     mark (x, y, str) {
//         let id = this.generateID(x, y);
//         let element = document.getElementById(id);        
//         element.textContent = str;
//     }
// } 

// let g = new Game(3, 3);

// let board = document.getElementById('board');
// board.textContent = " ";
// let boardTable = g.board();
// board.append(boardTable);

// console.log(g.mark(1, 1, "x"));

// steps: 

//1. Create a 3x3 table in html 
//2. style it with borders and padding in css 
//3. add a div container in html with an id="board"
//4. get the container in js using getElement by ID, and add the table to it using append()? 

class Game {
    // we create a constructor class that takes two arguments: rows & columns, which will be used to determine the dimensions of the tables; 
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
    }
    // the board() method will create the tables: 
    board() {
        //we create the tag "table" and store it in a variable TABLE: 
        let table = document.createElement("table");
        // we enter the outer loop using this.rows to determine the number of times it iterates: 
        for(let i=1; i<=this.rows; i++) {
            // we create the "tr" element and store it in a variable TR:
            let tr = document.createElement("tr");
            //we attach the TRs to the TABLE variable: 
            table.append(tr);
            // we enter the inner loop to iterate through the number of columns that should be created (this.columns): 
            for (let j=1; j<=this.columns; j++) {
                // we create the "td" element and store it in a variable TD:
                let td = document.createElement("td");
                // elementName.id sets an id for that element: 
                td.id = this.generateIDName(i, j);
                //we attach the TDs to the TR variable: 
                tr.append(td);            
            }
        } 
        
        return table
    }

    generateIDName(rowNum, cellNum) {
        // 112 => x = 11, y =  2
        // or  => x =  1, y = 12
        // 11_2 => x=11, y=2
        return rowNum  + "_" + cellNum;
    }

    mark(rowNum, cellNum, str) {
        let id = this.generateIDName(rowNum,cellNum); // get the string being used as the ID.
        let element = document.getElementById(id);
        element.textContent = str;
    }
} 

let g = new Game(3, 3);

let board = document.getElementById('board');
board.textContent = ""; // to get rid of the text which is contained in the div-container, refer to the index.html
let boardTable = g.board();
board.append(boardTable);

g.mark(1, 1, "x");
g.mark(2, 2, "o");




