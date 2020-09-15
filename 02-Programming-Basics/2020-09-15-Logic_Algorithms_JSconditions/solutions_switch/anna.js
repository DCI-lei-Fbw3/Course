let fruit = prompt('Enter a fruit')
​
//Option 1: if/else
​
if (fruit === 'apples') {
  console.log('Apples are ok.')
} else if (fruit === 'bananas') {
  console.log('Bananas are good before and after a football match.')
} else if (fruit === 'oranges') {
  console.log('I can eat oranges all day!')
} else if (fruit === 'mangoes') {
  console.log('Did someone say mangoes? Where?')
} else {
  console.log("That isn't a fruit I have an opinion about.")
}
​
//Option 2: switch
​
switch (fruit) {
  case 'apples':
    console.log('Apples are ok.')
    break
  case 'bananas':
    console.log('Bananas are good before and after a football match.')
    break
  case 'oranges':
    console.log('I can eat oranges all day!')
    break
  case 'mangoes':
    console.log('Did someone say mangoes? Where?')
    break
  default:
    "That isn't a fruit I have an opinion about."
}








