// ## The Fortune Teller

function tellFortune (x, y, z, n) { 
    console.log("You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids.")
}

tellFortune("Web Developer", "Leipzig", "Jane", 0)
tellFortune ("Teacher", "Berlin", "John", 2)
tellFortune("Chef", "Halle", "Michael", 0)

//## The Puppy Age Calculator

 let result 

function calculateDogAge(NN) {
    result = NN*7
    console.log("Your doggie is " + result + " years old in dog years!")
}

calculateDogAge(3)
calculateDogAge(7)
calculateDogAge(11)


//## The Lifetime Supply Calculator

const maxAge = 100; 

function calculateSupply(age, amountPerDay) {
    result = ((maxAge - age)*365) * amountPerDay 
    console.log("You will need " + result + " to last you until the ripe old age of " + maxAge + ".")
}

calculateSupply(23, 2)
calculateSupply(46, 3)
calculateSupply(99, 2)


//## The Geometrizer

function calcCircumference(radius){
    return 2 * Math.PI * radius
}
console.log(calcCircumference(4))
console.log(calcCircumference(7))
console.log(calcCircumference(2.5))

function calcArea(r){
    return Math.round(Math.PI * Math.pow (r, 2))
}

console.log(calcArea(3))
console.log(calcArea(6))
console.log(calcArea(4.5))


//## The Temperature Converter

function celsiusToFahrenheit(C){
    return  (C *  9/5 ) + 32;
}

console.log("25°C is " + celsiusToFahrenheit(25) + "°F." )

function FahrenheitToCelsius(F){
    return (F - 32) *  5/9;
}

console.log("77°F is " + FahrenheitToCelsius(77) + "°C." )