// DRY: Do not Repeat Yourself

// Math.floor(Math.random() * 3)

console.log('print a random number')

console.log(Math.random())

console.log('print 3 random numbers')

for (let i = 0; i < 3; i++) {
  console.log(Math.random())
}
// *(max-min+1)+min
console.log('print 3 random numbers between 0 and 5')

for (let i = 0; i < 3; i++) {
  console.log(Math.floor(Math.random() * 6))  //Math.floor rounds down. Math.random returns a number between 0 and 1, we times it by 6. 
}

//Math.floor    //4.32 = 4
                //4.98 = 4
                //4.99 = 4


console.log('print 3 random numbers between 1 and 6')

for (let i = 0; i < 3; i++) {
  console.log(Math.floor(Math.random() * 6) + 1)  //Math.floor rounds down. Math.random returns a number between 0 and 1, we times it by 6. 
}
