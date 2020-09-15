const rangeChecker = (minRange, maxRange, firstInt, secondInt, thirdInt) => {
    if(firstInt >= minRange && firstInt <= maxRange || 
        secondInt >= minRange && secondInt <= maxRange || 
        thirdInt >= minRange && thirdInt <= maxRange ) 
        console.log('true');
    else console.log('false');
} 
rangeChecker(50, 99, 55, 60, 70);


const max = (firstInt, secondInt, thirdInt) => {
    if(firstInt >= secondInt && firstInt >= thirdInt) console.log('max: ' + firstInt);
    else if (secondInt >= firstInt && secondInt >= thirdInt) console.log('max: ' + secondInt);
    else console.log('max: ' + thirdInt);
}
max(66,50,77)

const pyAdder = (someString) => {
    if(someString[0] + someString[1] === 'Py') console.log(someString);
    else console.log('Py' + someString);
}
pyAdder('Ptycharm');

const addAndCheckRange = (firstInt, secondInt) => {
    if(firstInt + secondInt >= 50 && firstInt + secondInt <= 80) console.log(65);
    else console.log(80);
}
addAndCheckRange(40,31);

const sumOrDifference8 = (firstInt, secondInt) => {
    if(firstInt + secondInt === 8 || Math.abs(firstInt - secondInt) === 8 ) console.log('sumOrDifference8: ' + true);
}
sumOrDifference8(7,15);

const numOrSum15 = (firstInt, secondInt) => {
    if(firstInt === 15 || secondInt === 15 || firstInt + secondInt === 15) console.log('numOrSum15: ' + true);
}
numOrSum15(1,1);

const multiple7or11 = (firstInt, secondInt) => {
    if(firstInt % 7 === 0 || firstInt  % 11 === 0 || secondInt % 7 === 0 || secondInt  % 11 === 0)console.log('multiple7or11: ' + true);
}
multiple7or11(5,11);

const sameTripleSum = (firstInt, secondInt) => {
    let sum = firstInt + secondInt;
    if(firstInt === secondInt) console.log('sameTripleSum: ' + sum * 3);
}
sameTripleSum(11,10);

const difference19 = (number) => {
    if(number > 19)console.log('difference19: ' + Math.abs(number - 19) * 3);
}
difference19(38);

const ageChecker = (firstName, age) => {
    if(age < 13) console.log(firstName + ' is a child.');
    else if(age >= 13 && age < 20) console.log(firstName + ' is a teenager.');
    else if(age >= 20 && age < 30) console.log(firstName + ' is a young adult.');
    else console.log(firstName + ' is an adult.');
}
ageChecker('George', 35);




