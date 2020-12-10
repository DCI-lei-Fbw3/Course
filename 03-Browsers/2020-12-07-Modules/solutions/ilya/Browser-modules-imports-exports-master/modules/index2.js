/*   Your code goes here! */
/* no jQuery */
/* imports */
import percentage from './percentage.js';
import aspectratio from './aspect-ratio.js';

/* necessary input fields */
const modulo1 = document.getElementById('modulo_1');
const modulo2 = document.getElementById('modulo_2');
const moduloResult = document.getElementById('modulo_result');

const percentage1 = document.getElementById('percentage_1');
const percentage2 = document.getElementById('percentage_2');
const percentageResult = document.getElementById('percentage_result');

const percentageOf1 = document.getElementById('percentageOf_1');
const percentageOf2 = document.getElementById('percentageOf_2');
const percentageOfResult = document.getElementById('percentageOf_result');

const difference1 = document.getElementById('difference_1');
const difference2 = document.getElementById('difference_2');
const differenceResult = document.getElementById('difference_result');

const ratio1 = document.getElementById('ratio_1');
const ratio2 = document.getElementById('ratio_2');
const ratioResultWidth = document.getElementById('ratio_result-width');
const ratioResultHeight = document.getElementById('ratio_result-height');

/* HTMLCollection of all input fields */
const allInputs = document.getElementsByTagName('input');

/* use spread operator to convert HTMLCollection to array --> array-method "forEach", traverse over each input field */
[...allInputs].forEach( input => {
    /* add an event listener to the particular input field */
    input.addEventListener('change', e => {
        /* decide, based on input field's ID, how to handle the change-event */
        switch(e.target.id){

            case 'modulo_1':
            case 'modulo_2': 
                moduloResult.value = percentage.modulo(modulo1.value, modulo2.value);
                break;

            case 'percentage_1':
            case 'percentage_2':
                percentageResult.value = percentage.percentage(percentage1.value, percentage2.value);
                break;

            case 'percentageOf_1':
            case 'percentageOf_2':
                percentageOfResult.value = percentage.percentageOf(percentageOf1.value, percentageOf2.value);
                break;

            case 'difference_1':
            case 'difference_2':
                differenceResult.value = percentage.difference(difference1.value, difference2.value); 
                break;

            case 'ratio_1':
            case 'ratio_result-height':
                ratioResultWidth.value = aspectratio.calculateAspectRatio(ratio1.value, ratio2.value, ratioResultHeight.value, 'h');
                break;

            case 'ratio_2':
            case 'ratio_result-width':
                ratioResultHeight.value = aspectratio.calculateAspectRatio(ratio1.value, ratio2.value, ratioResultWidth.value, 'w');
                break; 

            default:
                console.error(`Error ! ID of element: "${e.target.id}"`);
                break;

        }         
        
    });

});
