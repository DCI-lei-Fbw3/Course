function randomNo(min, max) {
    let result = Math.floor(Math.random() * (min * max) + 1);
    return "Your number was: " + result

    window.prompt('Please guess a number')
}
console.log(randomNo(1, 10));

