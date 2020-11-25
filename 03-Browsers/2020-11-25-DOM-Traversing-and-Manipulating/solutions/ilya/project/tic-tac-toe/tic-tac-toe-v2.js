let board = document.getElementById("board");

board.innerHTML = '<table>'
    + '<tr>'
    + '	<td>11</td>'
    + '	<td>12</td>'
    + '	<td>13</td>'
    + '</tr>'
    + '<tr>'
    + '	<td>21</td>'
    + '	<td>22</td>'
    + '	<td>23</td>'
    + '</tr>'
    + '<tr>'
    + '	<td>31</td>'
    + '	<td>32</td>'
    + '	<td>33</td>'
    + '</tr>'
    + '</table>';

// change title
document.getElementsByTagName('title')[0].textContent = 'Tic-Tac-Toe';

// add reset button
const button = document.createElement('button');
button.setAttribute('id', 'reset');
button.setAttribute('type', 'button');
button.setAttribute('onclick', 'reset()');
button.textContent = 'RESET';
document.querySelector('body').appendChild(button);

// create array of all fields
const fieldArr = [...document.querySelectorAll('td')];

// add onclick attribute with according method to every td/field
fieldArr.forEach(field => field.setAttribute('onclick', 'fieldClick(this)'));

// clear all fields
fieldArr.forEach(td => td.textContent = '');

// initialize first player
let player = 'x';

// main onclick function for every field
function fieldClick(field) {
    field.textContent = player;
    checkWinCondition();
    player = player === 'x' ? 'o' : 'x';
    field.removeAttribute('onclick');
}

// checks state of board and acts accordingly
function checkWinCondition() {

    const win2dArr = [
        // rows
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // cols
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // diags
        [0, 4, 8],
        [2, 4, 6],
    ]

    // try catch to short circuit forEach
    try {
        win2dArr.forEach(win1dArr => {
            let s = '';
            win1dArr.forEach(index => {
                s += fieldArr[index].textContent;
            });
            if (s === 'xxx' || s === 'ooo') {
                alert(`Player ${s[0].toUpperCase()} wins !`);
                fieldArr.forEach(field => field.removeAttribute('onclick'));
                throw shortCircuting;
            };
        });
        // alerts tie if all fields are full and no winner
        if (fieldArr.every(field => field.textContent !== '')) {
            alert(`It's a tie !`);
            fieldArr.forEach(field => field.removeAttribute('onclick'));
        }
    } catch (shortCircuting) { };
}

// reset function for reset button
function reset() {
    fieldArr.forEach(field => {
        field.textContent = '';
        field.setAttribute('onclick', 'fieldClick(this)');
    });
}