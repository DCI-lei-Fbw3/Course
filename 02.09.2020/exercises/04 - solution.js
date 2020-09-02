
// 1
isDog = true
console.log( isDog ? 'pat, pat' : 'find me a dog to pat!')

isDog = false
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



