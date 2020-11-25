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

// add reset button
const button = document.createElement('button');
button.setAttribute('id', 'reset');
button.setAttribute('type', 'button');
button.setAttribute('onclick', 'reset()');
button.textContent = 'RESET';
document.querySelector('body').appendChild(button);

// add onclick attribute with according method to every td/field
document.querySelectorAll('td').forEach(td => td.setAttribute('onclick', 'tdClick(this)'));

// clear all fields
document.querySelectorAll('td').forEach(td => td.textContent = '');

// initialize first player
let player = 'x';

// main onclick function for every field
function tdClick(td) {
    td.textContent = player;
    checkWinCondition();
    swapPlayer();
    td.removeAttribute('onclick');
}

// helper functions for onclick function

function checkWinCondition() {

    // helper function for a winning case
    function win(winner) {
        alert(`Player ${winner.toUpperCase()} wins !`);
        document.querySelectorAll('td').forEach(td => td.removeAttribute('onclick'));
    }

    // track whether win was executed
    let winExecuted = false;

    // checking rows
    document.querySelectorAll('tr').forEach(row => {
        if (row.textContent.replace(/\s/g, '') === 'xxx' ||
            row.textContent.replace(/\s/g, '') === 'ooo'){
                winExecuted = true;
                win(row.textContent.replace(/\s/g, '')[0]);
            }
    });

    // checking columns
    for (let i = 0; i < 3; i++) {
        const rows = document.querySelectorAll('tr');
        const s = rows[0].children[i].textContent + rows[1].children[i].textContent + rows[2].children[i].textContent;
        if (s === 'xxx' || s === 'ooo'){
            win(s[0]);
            winExecuted = true;
        } 
    }

    // checking diagonals
    const rows = document.querySelectorAll('tr');
    const d1 = rows[0].children[0].textContent + rows[1].children[1].textContent + rows[2].children[2].textContent;
    const d2 = rows[0].children[2].textContent + rows[1].children[1].textContent + rows[2].children[0].textContent;
    if (d1 === 'xxx' || d1 === 'ooo') {
        win(d1[0]);
        winExecuted = true;
    } 
    if (d2 === 'xxx' || d2 === 'ooo') {
        win(d2[0]);
        winExecuted = true;
    }

    // printing tie if all fields are full and no winner
    if([...document.querySelectorAll('td')].every(td => td.textContent !== '') && !winExecuted){
        alert(`It's a tie !`);
        document.querySelectorAll('td').forEach(td => td.removeAttribute('onclick'));
    }

}

function swapPlayer() {
    player = player === 'x' ? 'o' : 'x';
}


// reset function for reset button
function reset() {
    document.querySelectorAll('td').forEach(td => {
        td.textContent = '';
        td.setAttribute('onclick', 'tdClick(this)');
    });
}


