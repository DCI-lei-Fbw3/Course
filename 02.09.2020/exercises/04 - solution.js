
// 1

dog = "Dackel"
animalAtHand = "Dackel"

isDog = dog == animalAtHand
console.log( isDog ? 'pat, pat' : 'find me a dog to pat!')

animalAtHand = "Cat"
isDog = dog == animalAtHand
console.log( isDog ? 'pat, pat' : 'find me a dog to pat!')

// 2

currentSpeed = 45
speedLimit   = 50

console.log(
    currentSpeed > speedLimit? 
        "you're going too fast!" 
        : "Your speed is fine."
)

// 3

age = 42

console.log(
    age < 16?
      "server butter beer"
      : "serve beer"
)

// 4 

isStudent = true

cost = isStudent? "5.00 Euro" : "12.00 Euro"
console.log("Ticket costs " + cost)

// 5

okMarie = "cake"
console.log(okMarie == "cake"? "Let them eat cake" : "Oh, bother")

okMarie = "potatoe"
console.log(okMarie == "cake"? "Let them eat cake" : "Oh, bother")

// okMarie = "potatoe"
okMarie = "cake"
console.log(okMarie? "Let them eat cake" : "Oh, bother")

username = "Jon"

username? "fireworks" : "no fireworks" // fireworks for everyone
username == "Jon" ? "fireworks" : "no fireworks"

// 6

number = 30
//          TEST             if true             : else/alternative
// % => modulo operator or remainder
console.log(number % 2 == 0? number + " is even" : number + " is odd")

number = 939
console.log(number % 2 == 0? number + " is even" : number + " is odd")

number = 40.9
console.log(number % 2 == 0? number + " is even" : number + " is odd")
