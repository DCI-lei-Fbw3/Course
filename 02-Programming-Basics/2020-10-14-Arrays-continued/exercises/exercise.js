/* **3. Amplify the Multiples of 4.**
Create a function that takes an integer and returns an array of integers ascending from 1 
to the given number, where:

* For each number in the array that can be evenly divided by 4, that number is amplified by 
10 (i.e. return 10 times the number).
* If the number cannot be divided evenly by 4, simply return the number.
* The given integer will always be equal to or greater than 1.
* Include the given number (the number in the parameters).

Examples:
* amplify(4) ➞ [1, 2, 3, 40]
* amplify(3) ➞ [1, 2, 3]
* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
*/

// function amplify(integer){
//     let newArray = [];
//     for(let i = 1; i <= integer; i++){
//         if (i % 4 === 0){
//             i * 10 
//         } if (i % 4 != 0){
            
//         }
        
//     newArray.push(i)    
// } 
// }
function amplify(integer){
    let newArray = [];
    for(let i = 1; i <= integer; i++) newArray.push(i)
    return newArray.map(element => element % 4 === 0 ? element * 10 : element)
}

console.log(amplify(25));

