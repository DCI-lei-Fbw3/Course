// Your code goes here!
import { modulo, percentage, percentageOf, difference } from './percentage.js';
import { fixRoundingErrors, calculateAspectRatio } from './aspect-ratio.js'; // Modulo section: 
// select the modulo_result input field: 

let moduloResult = document.getElementById('modulo_result'); // implement the modulo function using the values of the modulo input fields(first modulo and second modulo), and store the result as value in the modulo_result input field: 

function calcModulo(e) {
  moduloResult.value = modulo(firstModulo.value, secondModulo.value);
} // select the first modulo input field by its id: 


let firstModulo = document.getElementById('modulo_1'); // add an event listener "input" which stores the input value, and a callback func which calculates the result: 

firstModulo.addEventListener("input", calcModulo); //select the second modulo input field by its id: 

let secondModulo = document.getElementById('modulo_2'); // add an event listener "input" which stores the input value, and a callback func which calculates the result: 

secondModulo.addEventListener("input", calcModulo); //Percentage section: 

let percentageResult = document.getElementById('percentage_result');

function calcPercentage(e) {
  percentageResult.value = percentage(firstPercentage.value, secondPercentage.value);
}

let firstPercentage = document.getElementById('percentage_1');
firstPercentage.addEventListener("input", calcPercentage);
let secondPercentage = document.getElementById('percentage_2');
secondPercentage.addEventListener("input", calcPercentage); //PercentageOf section: 

let percentageOfResult = document.getElementById('percentageOf_result');

function calcPercentageOf(e) {
  percentageOfResult.value = percentage(firstPercentageOf.value, secondPercentageOf.value);
}

let firstPercentageOf = document.getElementById('percentageOf_1');
firstPercentageOf.addEventListener("input", calcPercentageOf);
let secondPercentageOf = document.getElementById('percentageOf_2');
secondPercentageOf.addEventListener("input", calcPercentageOf); //Difference section: 

let differenceResult = document.getElementById('difference_result');

function calcDifference(e) {
  differenceResult.value = percentage(firstDifference.value, secondDifference.value);
}

let firstDifference = document.getElementById('difference_1');
firstDifference.addEventListener("input", calcDifference);
let secondDifference = document.getElementById('difference_2');
secondDifference.addEventListener("input", calcDifference); // Calculate Aspect Ration Section: 
// let differenceResult = document.getElementById('difference_result')
// function calcDifference(e){
//     differenceResult.value = percentage(firstDifference.value, secondDifference.value)
// }
// let firstDifference = document.getElementById('difference_1');
// firstDifference.addEventListener("input", calcDifference)
// let secondDifference = document.getElementById('difference_2');
// secondDifference.addEventListener("input", calcDifference)
//calculateAspectRatio()
// Fix Rounding Errors 
//fixRoundingErrors()