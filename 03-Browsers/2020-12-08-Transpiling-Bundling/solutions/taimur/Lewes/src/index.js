// Your code goes here!
//!Exercise it taken from the day before (2020-12-07-Modules/Lewes) for comments and understandability 

import { calculateAspectRatio } from './aspect-ratio.js';
import * as math from './percentage.js';


//!Modulo
let modulo = document.querySelectorAll('.arithmetic.operand.form-control');
modulo.forEach(function (e) {
    e.addEventListener('change', function () {
        let valueOne = parseInt(modulo[0].value);
        let valueTwo = parseInt(modulo[1].value);

        let output = document.querySelector('#modulo_result');
        output.value = math.modulo(valueOne, valueTwo);
        console.log(output.value);
    })
})


//!Percentage
let perc = document.querySelectorAll('.percentage.operand.form-control');
perc.forEach(function (e) {
    e.addEventListener('input', function () {
        let valueOne = parseInt(perc[0].value);
        let valueTwo = parseInt(perc[1].value);

        let output = document.getElementById('percentage_result');
        output.value = math.percentage(valueOne, valueTwo);

    })
})


//!PercentageOf
let percOf = document.querySelectorAll('.percentageOf.operand.form-control');
percOf.forEach(function (e) {
    e.addEventListener('change', function () {
        let valueOne = parseInt(percOf[0].value);
        let valueTwo = parseInt(percOf[1].value);

        let output = document.getElementById('percentageOf_result');
        output.value = math.percentageOf(valueOne, valueTwo);

    })
})

//!Difference
let diff = document.querySelectorAll('.difference.operand.form-control');
diff.forEach(function (e) {
    e.addEventListener('change', function () {
        let valueOne = parseInt(diff[0].value);
        let valueTwo = parseInt(diff[1].value);

        let output = document.getElementById('difference_result');
        output.value = math.difference(valueOne, valueTwo);

    })
})


//!Saad-Help
var value_1 = document.getElementById("ratio_1");
var value_2 = document.getElementById("ratio_2");
var value_3 = document.getElementById("ratio_result-width");
var value_4 = document.getElementById('ratio_result-height');

var a;
var b;
var c;
var value;

value_1.addEventListener("input", (event) => {
    a = event.target.value;
});

value_2.addEventListener("input", (event) => {
    b = event.target.value;
});

value_3.addEventListener("input", (event) => {
    c = event.target.value;
    value = calculateAspectRatio(a, b, c);
    value_4.value = value;
});


//!Tests for Transpiler:
console.log(math.percOf(1, 10));  //-->Expected- 10
console.log(math.percOf(5, 20));  //-->Expected- 25
console.log(math.modulo(11, 2));  //-->Expected- 1
