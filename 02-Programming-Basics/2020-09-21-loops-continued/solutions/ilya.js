// 00-output_an_array_in_reverse_order.js 
let names = ["Alice", "Bob", "Eve"];
for (i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

// 01-repeat-with-for.md
/* 
Programming Basics: For Loops

These exercises are designed for practising "for" loops. Print all your results to the console.

    Addition. Write a program to add up the numbers 1 to 20.

    There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.

    The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

    Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

Bonus

    Write programs that produce the following outputs:

        100 200 300 400 500 600 700 800 900 1000

        0 2 4 6 8 10

        3 6 9 12 15

        9 8 7 6 5 4 3 2 1 0

        1 1 1 2 2 2 3 3 3 4 4 4

        0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

    isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
 */

let result = null;
for (i = 1; i < 21; i++) {
    result += i;
}
console.log(result);

const numbersInWords = ['one', 'two', 'three', 'four', 'five'];
for (i = 0; i < 5; i++) {
    if (i === 0) {
        console.log(`There is ${numbersInWords[i]} bottle of beer on the wall.`);
        continue;
    }
    console.log(`There are ${numbersInWords[i]} bottles of beer on the wall.`);
}

for (i = 0; i < 21; i++) {
    if (i % 2 === 0) console.log(`${i} is even`);
    else console.log(`${i} is odd`);
}

for (i = 0; i < 11; i++) {
    for (j = 0; j < 11; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

for (i = 100; i < 1001; i += 100) {
    console.log(i);
}

for (i = 0; i < 11; i += 2) {
    console.log(i);
}

for (i = 9; i > -1; i--) {
    console.log(i);
}

console.log('-----------------------------------------------------------');

for (i = 0; i < 12; i++) {
    console.log('-');
    if (i < 3) {
        console.log(1);
        continue;
    }
    if (i < 6) {
        console.log(2);
        continue;
    }
    if (i < 9) {
        console.log(3);
        continue;
    }

    else console.log(4);
}

console.log('-----------------------------------------------------------');

for (i = 0; i < 4; i++) {
    for (j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log('--');
}

const isPalindrome = (word) => {
    let reversedWord = '';
    for (i = word.length - 1; i > -1; i--) {
        reversedWord += word[i];
    }
    console.log(`${word} is a palindrome: ${reversedWord === word}`);
}
isPalindrome('madam');

console.log('-----------------------------------------------------------');

// 02-chessboard.js
/*
1) write a program that outputs a chessboard (width * height = 8 * 8), like:
"# # # # "
" # # # #"
"# # # # "
" # # # #"
"# # # # "
" # # # #"
"# # # # "
" # # # #"

2) make the height and width configurable
*/

/* first
const chessBoard = (width, height) => {
    let row;
    for(i = 0; i < height; i++) {
        row = '';
        if(i % 2 === 0) {
            for(j = 0; j < width; j++) {
                j % 2 === 0 ? row += '   ' : row += ' # ';
            }
        } else {
            for(j = 0; j < width; j++) {
                j % 2 === 0 ? row += ' # ' : row += '   ';
            }
        }
       
        console.log(row);
     }
} */

// second
/* 
const chessBoard = (width, height) => {
    let board = '';
    for (i = 0; i < height; i++) {
        for (j = 0; j < width; j++) {
            if (i % 2 === 0 && j % 2 === 0) board += ' . ';
            if (i % 2 === 0 && j % 2 !== 0) board += ' # ';
            if (i % 2 !== 0 && j % 2 === 0) board += ' # ';
            if (i % 2 !== 0 && j % 2 !== 0) board += ' . ';
        }
        board += '\n';
    }
    console.log(board);
}
chessBoard(8, 8) 
*/;

// third - ternary
/* 
const chessBoardTernary = (width, height) => {
    let board;
    for(i = 0; i < height; i++) {
        board = '';
        for(j = 0; j < width; j++) {
        i % 2 === 0 ?
                j % 2 === 0 ? board += '   ' : board += ' # '
            :
                j % 2 === 0 ? board += ' # ' : board += '   '
        }
        console.log(board);
     }
}
chessBoardTernary(8,8); 
*/

// fourth - combining rows and columns
const chessBoard4 = (width, height) => {
    let board = '';
    for(i = 0; i < height; i++) {
        for(j = 0; j < width; j++) {
            (i + j) % 2 === 0 ? board+= '   ' : board+= ' # ' 
        }
       board += '\n'
        
     }
    console.log(board);
}
chessBoard4(8,8);

// 03-create-pairs.js

/*
Exercise: "Setup Pairs for Pair Programming"
Imagine a class of students.
In order to setup pairs of students for pair programming
an overview of possible pairs should be provided.
Store the pairs in a variable.
Finally output those pairs.
What variables are needed?
What are the data structures of those variables?
Bonus:
In some circumstances it might be necessary, to prohibit certain pairs, 
let's assume, no one of the first three students should ever be in the same pair.
How could this be solved?
*/

/*
custom math addition:
order: yes repetition: yes
--> n ** k
order: yes repetition: no
--> n! / (n-k)!
order: no repetition: no
--> n! / ( (n-k)! * k!) )

*/

let students = ['Max', 'Alex', 'Sarah', 'Berry', 'Lilly'];

// console.log(students.splice(Math.floor(Math.random() * students.length), 1));

console.log(students);

let possiblePairs = [];

for(let i = 0; i < students.length - 1; i++){
    for(j = i + 1; j < students.length; j++){
        possiblePairs.push([students[i],students[j]]);
    }
}

console.log(possiblePairs);


/*
Generate 10 random Numbers between [0, 1[  - that is 0 <= NUMBER < 1
define a const THRESHOLD and assign a value between the former interval
Loop over the generated numbers and log an alarm with the value and THRESHOLD, like:
"Attention: current value (VALUE) exceeds the threshold (THRESHOLD) by DIFFERENCE."
Bonus:
For each 0.1 of difference add an "*" at the start of the logged line, e. g. 
"*** Attention: current value (0.67859) exceeds the threshold (0.3) by 0.37859."
To determine the number of "*", the difference may be rounded down.
*/
const stringMultiplier = (someString, multiplier) => {
    let result = '';
    for (let i = 0; i < multiplier; i++){
        result += someString;
    }
    return result;
}

const randNumGen = (someQuant, someThreshold) => {

    for (let i = 0; i < someQuant; i++) {

        let randomNumber = Math.random();

        if(randomNumber >= someThreshold) {
            let stars = stringMultiplier('*',Math.floor((randomNumber - someThreshold) / 0.1));
            console.log(`${stars}Attention: current value (${randomNumber}) exceeds the threshold ${someThreshold} by ${randomNumber - someThreshold}.`);
        }else {
            console.log(`Current value (${randomNumber}) is below the treshold (${someThreshold}) by ${someThreshold - randomNumber}.`)
        }
        
    }
}

// randNumGen(5, 0.4);
