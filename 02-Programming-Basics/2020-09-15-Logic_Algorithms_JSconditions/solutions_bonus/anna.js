//1
​
// input: a, b
// 1. evaluate if a is bigger than b
// 2. if so, output a.
// 3. if not, output b.
​
//2
​
// input: a, b
// 1. evaluate if a and b are equal
// 2. if so, print true
// 3. if not, print false
​
//3
​
// input: a, b
// 1. evaluate if a is bigger than b
// 2. if so, print true.
// 3. if not, print false.
​
//PART 2
​
let markHeight = 1.75
let markWeight = 82
let johnHeight = 1.9
let johnWeight = 87
​
function calcBMI (weight, height) {
  return weight / (height * height)
}
​
let markBMI = calcBMI(markWeight, markHeight)
let johnBMI = calcBMI(johnWeight, johnHeight)
​
let isMarksBMIGreater = markBMI > johnBMI ? true : false
​
console.log(
  `Is Mark's BMI higher than John's? It turns out that's ${isMarksBMIGreater}.`
)
​
if (isMarksBMIGreater) {
  console.log(`Mark: ${markHeight}m, ${markWeight}kg`)
} else {
  console.log(`John: ${johnHeight}m, ${johnWeight}kg`)
}