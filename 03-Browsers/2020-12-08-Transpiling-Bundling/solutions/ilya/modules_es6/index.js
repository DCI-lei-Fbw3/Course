// Your code goes here!
import percentage from './percentage.js';
import aspectratio from './aspect-ratio.js';

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


modulo1.addEventListener('change', e => {
    moduloResult.value = percentage.modulo(modulo1.value, modulo2.value); 
})
modulo2.addEventListener('change', e => {
    moduloResult.value = percentage.modulo(modulo1.value, modulo2.value); 
})

percentage1.addEventListener('change', e => {
    percentageResult.value = percentage.percentage(percentage1.value, percentage2.value); 
})
percentage2.addEventListener('change', e => {
    percentageResult.value = percentage.percentage(percentage1.value, percentage2.value); 
})

percentageOf1.addEventListener('change', e => {
    percentageOfResult.value = percentage.percentageOf(percentageOf1.value, percentageOf2.value); 
})
percentageOf2.addEventListener('change', e => {
    percentageOfResult.value = percentage.percentageOf(percentageOf1.value, percentageOf2.value); 
})

difference1.addEventListener('change', e => {
    differenceResult.value = percentage.difference(difference1.value, difference2.value); 
})
difference2.addEventListener('change', e => {
    differenceResult.value = percentage.difference(difference1.value, difference2.value); 
})

difference1.addEventListener('change', e => {
    differenceResult.value = percentage.difference(difference1.value, difference2.value); 
})
difference2.addEventListener('change', e => {
    differenceResult.value = percentage.difference(difference1.value, difference2.value); 
})

ratio1.addEventListener('change', e => {
    ratioResultWidth.value = aspectratio.calculateAspectRatio(ratio1.value, ratio2.value, ratioResultHeight.value, 'h');
});
ratio2.addEventListener('change', e => {
    ratioResultHeight.value = aspectratio.calculateAspectRatio(ratio1.value, ratio2.value, ratioResultWidth.value, 'w');
})
ratioResultWidth.addEventListener('change', e => {
    ratioResultHeight.value = aspectratio.calculateAspectRatio(ratio1.value, ratio2.value, ratioResultWidth.value, 'w');
})
ratioResultHeight.addEventListener('change', e => {
    ratioResultWidth.value = aspectratio.calculateAspectRatio(ratio1.value, ratio2.value, ratioResultHeight.value, 'h');
})
