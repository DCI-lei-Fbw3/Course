let determiner = 4
let x
let updater
​
if (determiner < 0) {
  x = 'Less than 0'
} else {
  x = 'Greater or equal to 0'
}
​
if (determiner < 0) {
  updater = 'Less than 0'
} else {
  updater = 'Greater or equal to 0'
  let message = 'Positive Integer'
  console.log(message)
}
​
// Trying to print message here would return undefined/ "no such variable"
​
//We would use a ternary here if we only had a simple outcome, not multi-line code



