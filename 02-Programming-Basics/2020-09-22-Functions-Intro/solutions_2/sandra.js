// #### 1. Multiply - Function Declaration

function Multiply(a, b) {
    return a * b  
}
console.log(Multiply(2, 4))

// #### 2. Multiply - Function Declarations as Values

const Multiply2 = function(a, b) { 
    return a * b  
}
console.log(Multiply2(2, 8))

// #### 3. Multiply - Arrow Function

const Multiply3 = (a, b) => { 
    return a * b 
}
console.log(Multiply3(3,6))

// #### 4. Declarations

function remainder(a, b){
    return a % b 
}
console.log(remainder(5,10))

const remainder2 = function (a, b) {
    return a % b 
}
console.log(remainder2(10,10))

const remainder3 = (a, b) => {
    return a % b 
}
console.log(remainder3(10,3))
