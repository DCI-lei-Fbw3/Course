// Your code goes here!


import * as percentThing from './percentage.js';
import { calculateAspectRatio } from './aspect-ratio.js';

//modulo
//  let input1 = document.querySelectorAll(".arithmetic");
//     for (let i = 0; i < input1.length; i++) {
//         input1[i].addEventListener("change", (e1) => {
//             //input1[i].value;  
//             let val1 = parseInt(input1[0].value); 
//             let val2 = parseInt(input1[1].value);
           
//             let mResult = document.querySelector("#modulo_result");
//             mResult.value = percentThing.modulo(val1, val2);
//             //console.log(mResult.value); // the result is a string to fix it convert the values into numbers
//         });
//     }

//let input1 = document.querySelectorAll(".arithmetic");
let value1 = document.getElementById("modulo_1");
let value2 = document.getElementById("modulo_2");
let mResult = document.getElementById("modulo_result");

    for (let i = 0; i < input1.length; i++) {
        input1[i].addEventListener("change", (e1) => {
            //input1[i].value;  
            // let val1 = parseInt(input1[0].value); 
            // let val2 = parseInt(input1[1].value);
           
            //let mResult = document.querySelector("#modulo_result");
            mResult.value = percentThing.modulo(value1.value, value2.value);
            //mResult.value = percentThing.modulo(val1, val2);
            //console.log(mResult.value); // the result is a string to fix it convert the values into numbers
        });
    }

//percentage
// let input2 = document.querySelectorAll(".percentage");
//     for (let i= 0; i<input2.length; i++) {
//         input2[i].addEventListener("change", (e1) => {
//             let val1 = parseInt(input2[0].value);
//             let val2 = parseInt(input2[1].value);
            
//             let pResult = document.querySelector("#percentage_result");
//             pResult.value = percentThing.percentage(val1, val2);
//         });
//     }

// //percentageOf
// let input3 = document.querySelectorAll(".percentageOf");
//     for (let i= 0; i<input2.length; i++) {
//         input3[i].addEventListener("change", (e1) => {
//             let val1 = parseInt(input3[0].value);
//             let val2 = parseInt(input3[1].value);
            
//             let poResult = document.querySelector("#percentageOf_result");
//             poResult.value = percentThing.percentageOf(val1, val2);
//         });
//     }

// //difference 
// let input4 = document.querySelectorAll(".difference");
//     for (let i= 0; i<input2.length; i++) {
//         input4[i].addEventListener("change", (e1) => {
//             let val1 = parseInt(input4[0].value);
//             let val2 = parseInt(input4[1].value);
            
//             let dResult = document.querySelector("#difference_result");
//             dResult.value = percentThing.difference(val1, val2);
//         });
//     }

// //ratio
// let ratio = document.querySelectorAll(".ratio");
// for (let i = 0; i<ratio.length; i++) {
//     ratio[i].addEventListener("change", (e1) => {
//         let val1 = parseInt(ratio[0].value);
//         let val2 = parseInt(ratio[1].value);
//         let val3 = parseInt(ratio[2].value);
        
//         let raResult = document.querySelector("#ratio_result-height");
//         raResult.value = calculateAspectRatio(val1, val2, val3);
//     });
// }