let  randomToken = Math.floor(Math.random() * Math.floor(10000))

let balance = 1100; 
let amount = 150; 

function addMoney(){
    return balance += amount
}

function withdrawMoney(){
    return balance -= amount
}

module.exports = {
    randomToken, 
    balance, 
    amount, 
    addMoney, 
    withdrawMoney
}
