
// Problem 1
var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA'
  }
  console.log(product.name)
  console.log(product.price)
  console.log(product.amount)
  console.log(product.madeIn)


// Problem 2

var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA'
}
function set(){
    for (x in product){
        if (x == "name"){
            product.name= 'Bottle'
        }
        else if(x == "madeIn"){
            product.madeIn = 'China'
        }
        
    }
}

// Problem 3
var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA',
    //wrtie your function here 
    totalBill() {
        return (this.price*this.amount)
    }
}

//Problem 4 - Part 1

var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA', 
    totalBill() {
        return (this.price*this.amount)
    },
    setPrice(pri){
      this.price = pri*0.90
    }
}

//Problem 4 - Part 2

//Part 2: declare the function using "set" keyword and appropriate parameter/parameters, implement it and call it.
var product = {
    name: 'Cheese',
    price: 20,
    amount: 10,
    madeIn: 'USA', 
    totalBill() {
        return (this.price*this.amount)
    },
    //write the correct declaration and also write the implementation
    set setPrice(pri){
        this.price = pri*0.90
    }
}

//Zero is just a default value, change it to set temp equal to a number of your choice.
//the test case will run for the value of temp that you set
var temp = 30

function testFunc(){
    //call setPrice and set the new value of "price" equal to "temp" here   
    product.setPrice = temp  
}