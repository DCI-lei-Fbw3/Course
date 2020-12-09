// Your code goes here!

import { calculateAspectRatio } from './aspect-ratio.js';  //*<--This important only need to be called once because it is a HoF(and containers the other function in thr file)
import * as math from './percentage.js';                   //*<--Because this file has many function that we want we call them all using the '*'        and                                                  assign a new name to them (like a variable) and we call the function within like so: 'name.function'

//console.log(math.modulo(2, 5));  //!<-- Test to make sure the imported functions are working 


//!Modulo

//?-Selecting the class(of the input boxes) name and saving it to a variable(which will save it like an array)
let modulo = document.querySelectorAll('.arithmetic.operand.form-control');
//?-Using the 'foreach' method to be able to target each element in the 'array'
modulo.forEach(function (e) {
    //?-On each element we add an event listener to it and say that when something changes for it to execute a function
    e.addEventListener('change', function () {
        //?-Saving and transforming values into numbers 
        let valueOne = parseInt(modulo[0].value);
        let valueTwo = parseInt(modulo[1].value);


        //?-Saving the ID of the output box to a variable
        let output = document.querySelector('#modulo_result');
        //?-Saving the value of output variable as the imported function plus the parameters passed for it
        output.value = math.modulo(valueOne, valueTwo);
        //?-Logging the output value to make sure all is working
        console.log(output.value);
    })
})


//!Percentage

let perc = document.querySelectorAll('.percentage.operand.form-control');
perc.forEach(function (e) {
    e.addEventListener('input', function () {
        let valueOne = parseInt(perc[0].value);
        let valueTwo = parseInt(perc[1].value);

        //console.log(valueOne);  //!<--Test to make sure things are working

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



//!ALL-IN-ONE

// let modulo = document.querySelectorAll('.arithmetic.operand.form-control');
// let perc = document.querySelectorAll('.percentage.operand.form-control');
// let percOf = document.querySelectorAll('.percentageOf.operand.form-control');
// let diff = document.querySelectorAll('.difference.operand.form-control');

/*
let one = document.querySelectorAll('.operand.form-control');

//console.log(one);  //!<--Test - Which returns an HTML collection 

one.forEach(function (e) {
    e.addEventListener('change', function () {
        let valueOne = parseInt(one[0].value);
        let valueTwo = parseInt(one[1].value);

        //This won't work!!

    })
})
*/

//!Saad-Solution

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