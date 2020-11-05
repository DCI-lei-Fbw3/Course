//#### 1. Print Exponential Values

function exponentialValues(a, b) { 
    let result = 1
    if (typeof a === 'number' && typeof b === 'number'){
        for (let i = 0; i < b ; i++) {
          result = result * a;
          console.log(result)
            }
    } return result
}

(exponentialValues(2, 5))

//#### 2. Fruits

let x = "melon"; 

function printFavoriteFruit(x){
    x = "watermelon"; 
    console.log("my favorite fruit is " + x)
}

printFavoriteFruit(x)

// #### 3. Multiply a Number by Itself

function exponent(a, b) {
    return a ** b           // another way to use power of
    // return Math.pow(a, b) 
}
//console.log(result)
console.log (exponent(2, 6)) 