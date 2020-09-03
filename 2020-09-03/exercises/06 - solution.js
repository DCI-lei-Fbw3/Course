// Logical/Boolean Operators

//0
catIsBetter = false
dogIsBetter = true

//1
//a
console.log(dogIsBetter && catIsBetter)

//b
console.log(dogIsBetter || catIsBetter)

//c 
console.log( ! (dogIsBetter && catIsBetter) )
// =>        ! (true        && false      )
// =>        ! (          false           )
// =>        true

//2
atoms = 1
sandGrains = 2
starsInSky = 3

//3
//a
console.log ( (atoms > starsInSky) && (atoms > sandGrains) 
)
//b
console.log(atoms != sandGrains)

//c
console.log( (starsInSky < sandGrains) || (sandGrains > atoms) )

//d
console.log( (atoms == starsInSky) || (atoms != sandGrains) )

//e
console.log( (atoms >= 10) && (sandGrains <= 10) )

//f
console.log( 
    ( (atoms * starsInSky) < 100 ) 
    ||  
    ( (atoms * sandGrains) > 100 )
)
